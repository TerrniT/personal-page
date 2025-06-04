import type { MarkdownHeading } from 'astro'
import { cn } from '@lib/utils'

import { throttle } from 'lodash-es'
import { useEffect, useState } from 'react'

export default function TableOfContent({
  toc,
  className,
  ...props
}: {
  toc: MarkdownHeading[]
  className?: string
}) {
  const { currentSectionSlug } = useTocScroll(toc)

  return (
    <ul {...props} className={cn('space-y-2.5 font-sans text-sm', className)}>
      {toc.map((section, i) => (
        <li key={i} className="flex">
          <a
            className={cn(
              'link text-muted-foreground hover:text-main-foreground',
              currentSectionSlug === section.slug && 'font-medium text-main-foreground',
            )}
            href={`#${section.slug}`}
          >
            {section.text}
          </a>
        </li>
      ))}
    </ul>
  )
}

function useTocScroll(tableOfContents: MarkdownHeading[]) {
  const [currentSectionSlug, setCurrentSectionSlug] = useState<string>()

  useEffect(() => {
    if (tableOfContents.length === 0)
      return

    let headings: { id: string, top: number }[]
    let pageTop = 0

    const onResize = () => {
      headings = Array.from(
        document.querySelectorAll<HTMLElement>('.mdx h2'),
      ).map(element => ({
        id: element.id,
        top: element.offsetTop,
      }))

      pageTop = Number.parseFloat(
        window
          .getComputedStyle(document.documentElement)
          .getPropertyValue('--page-top')
          .match(/[\d.]+/)?.[0] ?? '0',
      )
    }

    const onScroll = throttle(() => {
      if (!headings)
        return

      let current: typeof currentSectionSlug
      const top = window.scrollY + pageTop
      const HEADING_OFFSET = 10

      headings.forEach((heading) => {
        if (top >= heading.top - HEADING_OFFSET) {
          current = heading.id
        }
      })

      setCurrentSectionSlug(current)
    }, 10)

    onResize()
    onScroll()
    window.addEventListener('scroll', onScroll, { capture: true })
    window.addEventListener('resize', onResize, { capture: true })

    return () => {
      window.removeEventListener('scroll', onScroll, { capture: true })
      window.removeEventListener('resize', onResize, { capture: true })
    }
  }, [tableOfContents])

  return { currentSectionSlug }
}
