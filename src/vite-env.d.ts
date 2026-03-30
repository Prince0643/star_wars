/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_GEMINI_API_KEY: string
  readonly VITE_GEMINI_MODEL?: string
  readonly VITE_GEMINI_API_VERSION?: 'v1beta' | 'v1'
  readonly VITE_GEMINI_SYSTEM_PROMPT?: string
}

interface ImportMeta {
  readonly env: ImportMetaEnv
}
