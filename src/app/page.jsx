import Link from 'next/link'

export default function Home() {
  return (
    <ul role="list" className="m-10">
      <li>
        <Link href="/blog" className="underline">
          Blog
        </Link>
      </li>
    </ul>
  )
}
