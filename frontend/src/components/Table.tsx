import type { ReactNode } from 'react'

interface TableProps {
  headers: string[]
  children: ReactNode
}

export default function Table({ headers, children }: TableProps) {
  return (
    <div className="overflow-x-auto rounded-lg border border-gray-200 bg-white">
      <table className="w-full text-sm">
        <thead>
          <tr className="bg-gray-100 text-left text-gray-600">
            {headers.map((header) => (
              <th key={header} className="border-b px-4 py-2 font-medium">
                {header}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>{children}</tbody>
      </table>
    </div>
  )
}