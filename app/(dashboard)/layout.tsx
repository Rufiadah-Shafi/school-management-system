import Sidebar from "../components/SideBar"

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="flex">
      <Sidebar />
      <main className="flex-1 bg-gray-100 p-8">
        {children}
      </main>
    </div>
  )
}