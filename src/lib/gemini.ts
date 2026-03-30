type GeminiRole = 'user' | 'model'

type GeminiMessage = {
  role: GeminiRole
  text: string
}

type GeminiGenerateResult = {
  text: string
}

function normalizeModelName(model: string) {
  return model.startsWith('models/') ? model.slice('models/'.length) : model
}

function getGeminiConfig() {
  const apiKey = import.meta.env.VITE_GEMINI_API_KEY
  const model = normalizeModelName(
    import.meta.env.VITE_GEMINI_MODEL || 'gemini-2.5-flash',
  )
  const apiVersion = import.meta.env.VITE_GEMINI_API_VERSION || 'v1beta'
  const systemPrompt = import.meta.env.VITE_GEMINI_SYSTEM_PROMPT

  if (!apiKey) {
    throw new Error('Missing VITE_GEMINI_API_KEY')
  }

  return { apiKey, model, apiVersion, systemPrompt }
}

async function postGenerateContent(args: {
  apiKey: string
  model: string
  apiVersion: 'v1' | 'v1beta'
  messages: GeminiMessage[]
  systemInstruction?: string
}) {
  const { apiKey, model, apiVersion, messages, systemInstruction } = args

  const url = new URL(
    `https://generativelanguage.googleapis.com/${apiVersion}/models/${encodeURIComponent(model)}:generateContent`,
  )
  url.searchParams.set('key', apiKey)

  const requestBody: Record<string, unknown> = {
    contents: messages.map((m) => ({
      role: m.role,
      parts: [{ text: m.text }],
    })),
    generationConfig: {
      temperature: 0.7,
    },
  }

  if (systemInstruction) {
    requestBody.systemInstruction = {
      role: 'user',
      parts: [{ text: systemInstruction }],
    }
  }

  const res = await fetch(url.toString(), {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(requestBody),
  })

  return res
}

export async function generateGeminiResponse(messages: GeminiMessage[]): Promise<GeminiGenerateResult> {
  const { apiKey, model, apiVersion, systemPrompt } = getGeminiConfig()
  const alternateVersion: 'v1' | 'v1beta' = apiVersion === 'v1' ? 'v1beta' : 'v1'

  let res = await postGenerateContent({ apiKey, model, apiVersion, messages, systemInstruction: systemPrompt })

  if (res.status === 404) {
    const text = await res.text().catch(() => '')
    if (
      text.includes('not found for API version') ||
      text.includes('not supported for generateContent')
    ) {
      res = await postGenerateContent({ apiKey, model, apiVersion: alternateVersion, messages, systemInstruction: systemPrompt })
    } else {
      throw new Error(
        `Gemini request failed: ${res.status} ${res.statusText}${text ? ` - ${text}` : ''}`,
      )
    }
  }

  if (!res.ok) {
    const text = await res.text().catch(() => '')
    throw new Error(
      `Gemini request failed: ${res.status} ${res.statusText}${text ? ` - ${text}` : ''}`,
    )
  }

  const data = (await res.json()) as {
    candidates?: Array<{
      content?: {
        parts?: Array<{ text?: string }>
      }
    }>
  }

  const text = data.candidates?.[0]?.content?.parts?.[0]?.text

  if (!text) {
    throw new Error('Gemini returned an empty response')
  }

  return { text }
}

export type { GeminiMessage, GeminiRole }
