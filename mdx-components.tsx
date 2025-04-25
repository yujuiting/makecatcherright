import { SectionTitle } from '@/app/components/Section'
import type { MDXComponents } from 'mdx/types'
import { twMerge } from 'tailwind-merge'

export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    ...components,
    wrapper: ({ children, className, ...props }) => (
      <div className={twMerge('container mx-auto p-4', className)} {...props}>
        {children}
      </div>
    ),
    h1: ({ children, className, ...props }) => (
      <h1 className={twMerge('text-4xl font-bold', className)} {...props}>
        {children}
      </h1>
    ),
    h2: SectionTitle,
    ol: ({ children, className, ...props }) => (
      <ol className={twMerge('pl-8 list-[auto]', className)} {...props}>
        {children}
      </ol>
    ),
    p: ({ children, className, ...props }) => (
      <p className={twMerge('my-4', className)} {...props}>
        {children}
      </p>
    ),
  }
}
