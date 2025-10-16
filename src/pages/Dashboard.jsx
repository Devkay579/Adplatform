import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

export default function Dashboard() {
  return (
    <div className="min-h-screen bg-white  p-6">
      <header className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold">Dashboard</h1>
        <Button variant="outline">Logout</Button>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Card>
          <CardHeader>
            <CardTitle>Stat 1</CardTitle>
          </CardHeader>
          <CardContent>Details about stat 1...</CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Stat 2</CardTitle>
          </CardHeader>
          <CardContent>Details about stat 2...</CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Stat 3</CardTitle>
          </CardHeader>
          <CardContent>Details about stat 3...</CardContent>
        </Card>
      </div>
    </div>
  )
}
