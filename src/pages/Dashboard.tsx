import React, { useState } from 'react'
import { Card } from '../components/ui/card'
import { Button } from '../components/ui/button'
import { Table } from '../components/ui/table'
import { Dialog } from '../components/ui/dialog'
import { Toaster } from '../components/ui/sonner'

const sampleData = [
  { id: 1, title: 'Summer Sale Banner', status: 'Active', clicks: 1234 },
  { id: 2, title: 'Newsletter Header', status: 'Paused', clicks: 234 },
  { id: 3, title: 'Sidebar Promo', status: 'Active', clicks: 987 },
]

export default function Dashboard(){
  const [open, setOpen] = useState(false)
  const [toastOpen, setToastOpen] = useState(false)

  return (
    <div className="grid grid-cols-12 gap-6 mt-6">
      <aside className="col-span-3">
        <Card>
          <h3 className="text-lg font-semibold">Menu</h3>
          <nav className="mt-4 flex flex-col gap-2">
            <Button variant="ghost">Overview</Button>
            <Button variant="ghost">Campaigns</Button>
            <Button variant="ghost">Newsletters</Button>
            <Button variant="ghost">Settings</Button>
          </nav>
        </Card>
      </aside>

      <section className="col-span-9 space-y-6">
        <div className="grid grid-cols-3 gap-4">
          <Card><h4 className="text-sm text-slate-500">Total Campaigns</h4><div className="text-2xl font-bold">12</div></Card>
          <Card><h4 className="text-sm text-slate-500">Total Clicks</h4><div className="text-2xl font-bold">2,345</div></Card>
          <Card><h4 className="text-sm text-slate-500">Subscribers</h4><div className="text-2xl font-bold">1,230</div></Card>
        </div>

        <Card>
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-lg font-semibold">Campaigns</h3>
            <div className="flex items-center gap-2">
              <Button onClick={() => { setOpen(true) }}>New Campaign</Button>
              <Button variant="outline" onClick={() => setToastOpen(true)}>Notify</Button>
            </div>
          </div>

          <Table data={sampleData} />
        </Card>
      </section>

      <Dialog open={open} onClose={() => setOpen(false)} title="Create Campaign">
        <form className="space-y-3">
          <label className="block">
            <div className="text-sm mb-1">Title</div>
            <input className="w-full border px-3 py-2 rounded" />
          </label>
          <div className="flex justify-end">
            <Button type="submit">Create</Button>
          </div>
        </form>
      </Dialog>

      <Toaster open={toastOpen} message="Saved" onClose={() => setToastOpen(false)} />
    </div>
  )
}
