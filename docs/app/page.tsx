import Link from 'next/link'
import SearchButton from '@/components/search/SearchButton';
import { getExamples } from "@/utils/getExamples";

export default async function Home() {
  const { server, client } = await getExamples();

  return (
    <div className="flex flex-col gap-4">
      <h1 className="text-4xl font-bold tracking-tight">Moon Design System</h1>

      <SearchButton />

      {/* TODO remove  */}
      <div>
        <h2 className="text-2xl font-bold tracking-tight">Server components</h2>
        <ul role="list" className="">
          {Object.entries(server).map(([key, _value]) => (
            <li key={key} className="py-4">
              <Link href={`server/${key}`}>{key}</Link>
            </li>
          ))}
        </ul>
      </div>

      <div>
        <h2 className="text-2xl font-bold tracking-tight">Client components</h2>
        <ul role="list" className="">
          {Object.entries(client).map(([key, _value]) => (
            <li key={key} className="py-4">
              <Link href={`client/${key}`}>{key}</Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}
