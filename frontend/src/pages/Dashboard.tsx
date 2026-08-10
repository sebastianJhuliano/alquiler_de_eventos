import MainLayout from '../layouts/MainLayout'

export default function Dashboard() {
  return (
    <MainLayout>
      <h1 className="text-2xl font-bold text-blue-600">Dashboard</h1>
      <p className="mt-2 text-gray-600">
        Texto de prueba con estilos de Tailwind aplicados: tipografía, colores y espaciado.
      </p>
    </MainLayout>
  )
}