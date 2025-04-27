import { SectionTitle } from '@/app/components/Section'
import type { MDXComponents } from 'mdx/types'
import { twMerge } from 'tailwind-merge'

export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    ...components,
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
    ul: ({ children, className, ...props }) => (
      <ul className={twMerge('pl-8 list-disc', className)} {...props}>
        {children}
      </ul>
    ),
    p: ({ children, className, ...props }) => (
      <p className={twMerge('my-4', className)} {...props}>
        {children}
      </p>
    ),
    table: ({ children, className, ...props }) => (
      <table
        className={twMerge(
          '[&_thead]:font-bold [&_tr]:odd:bg-neutral-100 [&_tr]:even:bg-neutral-200',
          className
        )}
        {...props}
      >
        {children}
      </table>
    ),
    tr: ({ children, className, ...props }) => (
      <tr className={twMerge('[&_td]:p-2 [&_th]:p-2', className)} {...props}>
        {children}
      </tr>
    ),
  }
}
