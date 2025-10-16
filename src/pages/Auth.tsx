import React from 'react'
import { Card } from '../components/ui/card'
import { Input } from '../components/ui/input'
import { Button } from '../components/ui/button'

export default function Auth(){
  return (
    <div className="max-w-md mx-auto mt-12">
      <Card>
        <h2 className="text-2xl font-semibold mb-4">Login</h2>
        <form className="space-y-3 px-3">
          <label className="block">
            <div className="text-sm mb-1">Email</div>
            <Input type="email" placeholder="you@example.com" />
          </label>
          <label className="block">
            <div className="text-sm mb-1">Password</div>
            <Input type="password" placeholder="••••••" />
          </label>
          <div className="flex justify-end">
            <Button type="submit">Sign in</Button>
          </div>
        </form>
      </Card>
    </div>
  )
}
