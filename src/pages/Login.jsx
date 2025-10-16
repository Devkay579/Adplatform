import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { useNavigate } from "react-router-dom"

export default function Login() {
  const navigate = useNavigate()

  return (
    <div className="h-screen flex items-center justify-center bg-gray-100 dark:bg-gray-900">
      <div className="p-6 bg-white dark:bg-gray-800 rounded-lg shadow-md w-96">
        <h1 className="text-2xl font-bold mb-4 text-center">Login</h1>
        <Input placeholder="Email" className="mb-3" />
        <Input placeholder="Password" type="password" className="mb-4" />
        <Button className="w-full" onClick={() => navigate("/dashboard")}>
          Login
        </Button>
      </div>
    </div>
  )
}
