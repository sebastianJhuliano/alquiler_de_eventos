import type { ReactNode } from 'react'

interface MainLayoutProps {
  children: ReactNode
}

export default function MainLayout({ children }: MainLayoutProps) {
  return (
    <div className="flex min-h-screen bg-gray-50">
      <aside className="w-60 shrink-0 bg-gray-900 p-4 text-white">
        <h2 className="mb-6 text-lg font-bold">Alquiler Eventos</h2>
        <nav className="space-y-2 text-sm">
          <a href="#" className="block rounded bg-gray-800 px-3 py-2">Dashboard</a>
          <a href="#" className="block rounded px-3 py-2 hover:bg-gray-800">Órdenes</a>
          <a href="#" className="block rounded px-3 py-2 hover:bg-gray-800">Equipos</a>
          <a href="#" className="block rounded px-3 py-2 hover:bg-gray-800">Reportes</a>
        </nav>
      </aside>
      <div className="flex-1">
        <header className="flex h-16 items-center justify-between border-b bg-white px-6">
          <span className="text-sm text-gray-500">Topbar placeholder</span>
          <span className="rounded-full bg-gray-800 px-3 py-1 text-xs font-medium text-white">
            Admin
          </span>
        </header>
        <main className="p-6">{children}</main>
      </div>
    </div>
  )
}