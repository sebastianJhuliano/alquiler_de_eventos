import { useState } from 'react'
import Button from '../components/Button'
import Input from '../components/Input'

export default function Login() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-100">
      <form className="w-full max-w-sm space-y-4 rounded-xl bg-white p-8 shadow-lg">
        <h1 className="text-2xl font-bold text-gray-800">Iniciar sesión</h1>
        <p className="text-sm text-gray-500">Sistema de Alquiler de Equipos de Eventos</p>
        <Input
          label="Email"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <Input
          label="Contraseña"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <Button type="submit" className="w-full text-white">
          Ingresar
        </Button>
      </form>
    </div>
  )
}