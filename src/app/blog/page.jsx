import glob from 'fast-glob'
import Link from 'next/link'

export default async function BlogIndex() {
  let filenames = await glob('**/*.mdx', { cwd: './src/app/blog/(articles)' })
  let promises = filenames.map(async (filename) => ({
    slug: filename.replace(/\/page\.mdx$/, ''),
    ...(await import(`./(articles)/${filename}`)).meta,
  }))
  let articles = await Promise.all(promises)

  return (
    <div className="m-10 space-y-8">
      <h1>Articles</h1>
      <ul role="list" className="list-disc list-inside">
        {articles.map((article) => (
          <li key={article.slug}>
            <Link href={'/blog/' + article.slug} className="underline">
              {article.title}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  )
}
