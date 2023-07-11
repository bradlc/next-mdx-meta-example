import Link from 'next/link'

export default async function ArticleTemplate({ children }) {
  // If we had access to the current pathname here we could import
  // the relevant MDX file. Just going to hard-code one/page.mdx for now.
  let meta = (await import('./one/page.mdx')).meta

  return (
    <article className="m-10 space-y-8">
      <Link href="/blog" className="underline">
        Back
      </Link>
      <dl className="space-y-4">
        <div>
          <dt>Title</dt>
          <dd className="ml-4">{meta.title}</dd>
        </div>
        <div>
          <dt>Author</dt>
          <dd className="ml-4">{meta.author}</dd>
        </div>
      </dl>
      <hr />
      <div>{children}</div>
    </article>
  )
}
