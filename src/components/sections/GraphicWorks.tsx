import { useCallback, useEffect, useMemo, useState } from 'react'
import { createPortal } from 'react-dom'
import { ChevronLeft, ChevronRight, X } from 'lucide-react'

import type { GraphicWork } from '@/data/graphicWorks'

type Props = {
  works: GraphicWork[]
}

const aspectClasses = [
  'aspect-[4/5]',
  'aspect-[16/11]',
  'aspect-[1/1]',
  'aspect-[3/4]',
  'aspect-[5/4]',
  'aspect-[4/3]',
]

export function GraphicWorks({ works }: Props) {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null)

  const selectedWork = selectedIndex === null ? null : works[selectedIndex]
  const hasMultipleWorks = works.length > 1

  const previewLabel = useMemo(() => {
    if (selectedIndex === null) return ''
    return `${selectedIndex + 1} / ${works.length}`
  }, [selectedIndex, works.length])

  const closePreview = useCallback(() => setSelectedIndex(null), [])
  const showPrevious = useCallback(() => {
    setSelectedIndex((current) => {
      if (current === null) return current
      return current === 0 ? works.length - 1 : current - 1
    })
  }, [works.length])
  const showNext = useCallback(() => {
    setSelectedIndex((current) => {
      if (current === null) return current
      return current === works.length - 1 ? 0 : current + 1
    })
  }, [works.length])

  useEffect(() => {
    if (selectedIndex === null) return

    const previousOverflow = document.body.style.overflow
    document.body.style.overflow = 'hidden'

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') closePreview()
      if (event.key === 'ArrowLeft') showPrevious()
      if (event.key === 'ArrowRight') showNext()
    }

    window.addEventListener('keydown', onKeyDown)

    return () => {
      document.body.style.overflow = previousOverflow
      window.removeEventListener('keydown', onKeyDown)
    }
  }, [closePreview, selectedIndex, showNext, showPrevious])

  return (
    <section id="graphics" className="relative overflow-hidden bg-zinc-950 py-24 text-white" data-reveal>
      <div className="absolute inset-0 bg-[linear-gradient(135deg,rgba(8,47,73,0.52),rgba(9,9,11,0.84)_38%,rgba(15,23,42,0.92))]" />
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-cyan-300/80 to-transparent shadow-[0_0_18px_rgba(103,232,249,0.65)]" />
      <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-cyan-300/60 to-transparent" />

      <div className="relative mx-auto max-w-7xl px-4 md:px-8">
        <div className="grid gap-8 lg:grid-cols-[0.82fr_1.18fr] lg:items-end">
          <div>
            <p className="text-sm font-medium uppercase tracking-[0.28em] text-cyan-200/70">
              Visual Design
            </p>
            <h2 className="mt-3 text-3xl font-semibold text-white md:text-5xl">Graphic Works</h2>
          </div>
          <p className="max-w-2xl text-sm leading-6 text-white/62 md:text-base">
            Selected brand, campaign, and social visuals shaped for sharp first impressions across digital touchpoints.
          </p>
        </div>

        <div className="mt-12 columns-1 gap-5 sm:columns-2 lg:columns-3">
          {works.map((work, index) => (
            <figure
              key={work.id}
              className="group mb-5 break-inside-avoid overflow-hidden rounded-2xl border border-white/10 bg-black/30 shadow-[0_20px_60px_rgba(0,0,0,0.28)] transition duration-300 hover:border-cyan-300/45 hover:shadow-[0_24px_70px_rgba(8,145,178,0.18)]"
            >
              <button
                type="button"
                aria-label={`Preview ${work.title}`}
                onClick={() => setSelectedIndex(index)}
                className={`${aspectClasses[index % aspectClasses.length]} block w-full cursor-zoom-in overflow-hidden bg-white/5 text-left outline-none ring-0 transition focus-visible:ring-2 focus-visible:ring-cyan-300 focus-visible:ring-offset-2 focus-visible:ring-offset-zinc-950`}
              >
                <img
                  src={work.imageSrc}
                  alt={work.title}
                  loading="lazy"
                  className="h-full w-full object-cover transition duration-500 group-hover:scale-[1.035]"
                />
              </button>
              <figcaption className="flex items-center justify-between gap-4 border-t border-white/10 px-4 py-3">
                <span className="text-sm text-white/80">{work.title}</span>
                <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-cyan-300 shadow-[0_0_12px_rgba(103,232,249,0.85)]" />
              </figcaption>
            </figure>
          ))}
        </div>
      </div>

      {selectedWork
        ? createPortal(
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/[0.92] px-4 py-6 backdrop-blur-sm sm:px-6"
          role="dialog"
          aria-modal="true"
          aria-label={`Previewing ${selectedWork.title}`}
          onClick={closePreview}
        >
          <div className="absolute left-4 top-4 text-sm text-white/65 sm:left-6 sm:top-6">
            {previewLabel}
          </div>

          <button
            type="button"
            aria-label="Close preview"
            onClick={closePreview}
            className="absolute right-4 top-4 inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/15 bg-white/10 text-white transition hover:border-cyan-300/55 hover:bg-cyan-300/15 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-300 sm:right-6 sm:top-6"
          >
            <X className="h-5 w-5" aria-hidden="true" />
          </button>

          {hasMultipleWorks ? (
            <button
              type="button"
              aria-label="Preview previous graphic work"
              onClick={(event) => {
                event.stopPropagation()
                showPrevious()
              }}
              className="absolute left-4 top-1/2 hidden h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full border border-white/15 bg-white/10 text-white transition hover:border-cyan-300/55 hover:bg-cyan-300/15 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-300 md:inline-flex"
            >
              <ChevronLeft className="h-6 w-6" aria-hidden="true" />
            </button>
          ) : null}

          <div
            className="flex max-h-[88vh] w-full max-w-[min(92vw,1200px)] flex-col items-center gap-4"
            onClick={(event) => event.stopPropagation()}
          >
            <img
              src={selectedWork.imageSrc}
              alt={selectedWork.title}
              className="max-h-[82vh] w-auto max-w-full rounded-xl object-contain shadow-[0_28px_90px_rgba(0,0,0,0.55)]"
            />
            <div className="flex w-full max-w-3xl items-center justify-between gap-4 text-sm text-white/72">
              {hasMultipleWorks ? (
                <button
                  type="button"
                  onClick={showPrevious}
                  className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-4 py-2 transition hover:border-cyan-300/55 hover:bg-cyan-300/15 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-300 md:hidden"
                >
                  <ChevronLeft className="h-4 w-4" aria-hidden="true" />
                  Prev
                </button>
              ) : (
                <span />
              )}
              <span className="min-w-0 truncate text-center text-white/82">{selectedWork.title}</span>
              {hasMultipleWorks ? (
                <button
                  type="button"
                  onClick={showNext}
                  className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-4 py-2 transition hover:border-cyan-300/55 hover:bg-cyan-300/15 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-300 md:hidden"
                >
                  Next
                  <ChevronRight className="h-4 w-4" aria-hidden="true" />
                </button>
              ) : (
                <span />
              )}
            </div>
          </div>

          {hasMultipleWorks ? (
            <button
              type="button"
              aria-label="Preview next graphic work"
              onClick={(event) => {
                event.stopPropagation()
                showNext()
              }}
              className="absolute right-4 top-1/2 hidden h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full border border-white/15 bg-white/10 text-white transition hover:border-cyan-300/55 hover:bg-cyan-300/15 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-300 md:inline-flex"
            >
              <ChevronRight className="h-6 w-6" aria-hidden="true" />
            </button>
          ) : null}
        </div>,
        document.body,
      )
        : null}
    </section>
  )
}
