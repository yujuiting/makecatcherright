import { SectionTitle } from '@/app/components/Section'
import type { MDXComponents } from 'mdx/types'

export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    ...components,
    h2: SectionTitle,
  }
}
