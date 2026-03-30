import * as React from 'react'
import { Bot, Send, X } from 'lucide-react'

import { cn } from '@/lib/utils'
import { Button } from '@/components/ui/button'
import { generateGeminiResponse, type GeminiMessage } from '@/lib/gemini'

type ChatWidgetProps = {
  className?: string
}

type ChatItem = {
  id: string
  role: 'user' | 'model'
  text: string
}

export function ChatWidget({ className }: ChatWidgetProps) {
  const [open, setOpen] = React.useState(false)
  const [input, setInput] = React.useState('')
  const [items, setItems] = React.useState<ChatItem[]>([])
  const [pending, setPending] = React.useState(false)
  const [error, setError] = React.useState<string | null>(null)

  const messagesForGemini = React.useMemo<GeminiMessage[]>(() => {
    return items.map((i) => ({ role: i.role, text: i.text }))
  }, [items])

  async function onSend(e?: React.FormEvent) {
    e?.preventDefault()

    const text = input.trim()
    if (!text || pending) return

    setError(null)
    setInput('')

    const userItem: ChatItem = {
      id: crypto.randomUUID(),
      role: 'user',
      text,
    }

    setItems((prev) => [...prev, userItem])
    setPending(true)

    try {
      const res = await generateGeminiResponse([...messagesForGemini, { role: 'user', text }])

      const modelItem: ChatItem = {
        id: crypto.randomUUID(),
        role: 'model',
        text: res.text,
      }

      setItems((prev) => [...prev, modelItem])
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Failed to send message')
    } finally {
      setPending(false)
    }
  }

  return (
    <div className={cn('fixed bottom-5 right-5 z-50', className)}>
      {open ? (
        <div className="w-[min(420px,calc(100vw-2.5rem))] rounded-2xl border border-white/10 bg-cosmic-void/95 shadow-[0_0_30px_rgba(34,211,238,0.15)] backdrop-blur">
          <div className="flex items-center justify-between gap-3 border-b border-white/10 px-4 py-3">
            <div className="flex items-center gap-2">
              <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-cyan-400/15 text-cyan-200">
                <Bot className="h-5 w-5" />
              </div>
              <div className="min-w-0">
                <div className="truncate text-sm font-semibold">AI Chat</div>
                <div className="truncate text-xs text-white/60">Powered by Prince's LLM</div>
              </div>
            </div>
            <Button
              type="button"
              variant="ghost"
              size="icon"
              onClick={() => setOpen(false)}
              aria-label="Close chat"
            >
              <X />
            </Button>
          </div>

          <div className="max-h-[55vh] space-y-3 overflow-auto px-4 py-4">
            {items.length === 0 ? (
              <div className="rounded-xl border border-white/10 bg-white/5 p-3 text-sm text-white/70">
                Ask me anything about this portfolio.
              </div>
            ) : null}

            {items.map((m) => (
              <div
                key={m.id}
                className={cn(
                  'w-full whitespace-pre-wrap rounded-2xl px-3 py-2 text-sm leading-relaxed',
                  m.role === 'user'
                    ? 'ml-auto max-w-[85%] bg-cyan-400 text-cosmic-void'
                    : 'mr-auto max-w-[90%] border border-white/10 bg-white/5 text-white',
                )}
              >
                {m.text}
              </div>
            ))}

            {pending ? (
              <div className="mr-auto max-w-[90%] rounded-2xl border border-white/10 bg-white/5 px-3 py-2 text-sm text-white/70">
                Thinking...
              </div>
            ) : null}

            {error ? (
              <div className="rounded-xl border border-red-500/30 bg-red-500/10 p-3 text-xs text-red-100">
                {error}
              </div>
            ) : null}
          </div>

          <form onSubmit={onSend} className="flex items-end gap-2 border-t border-white/10 p-3">
            <textarea
              value={input}
              onChange={(e) => setInput(e.target.value)}
              rows={1}
              placeholder="Type a message..."
              className="max-h-28 min-h-10 flex-1 resize-none rounded-xl border border-white/10 bg-white/5 px-3 py-2 text-sm text-white placeholder:text-white/40 focus:outline-none focus:ring-2 focus:ring-cyan-400/40"
              onKeyDown={(e) => {
                if (e.key === 'Enter' && !e.shiftKey) {
                  e.preventDefault()
                  void onSend()
                }
              }}
              disabled={pending}
            />
            <Button type="submit" size="icon" disabled={pending || !input.trim()} aria-label="Send">
              <Send />
            </Button>
          </form>
        </div>
      ) : (
        <Button
          type="button"
          onClick={() => setOpen(true)}
          className="h-12 w-12 rounded-full"
          size="icon"
          aria-label="Open chat"
        >
          <Bot />
        </Button>
      )}
    </div>
  )
}
