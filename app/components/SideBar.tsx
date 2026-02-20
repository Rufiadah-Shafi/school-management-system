import Link from "next/link";

function Sidebar() {
  return (
    <aside className="w-64 bg-white shadow-lg h-screen">
      {/* Logo/Title */}
      <div className="p-6">
        <h1 className="text-2xl font-bold text-blue-600">SchoolMS</h1>
      </div>

      {/* Navigation Links */}
      <nav className="mt-6">
        <Link 
          href="/dashboard" 
          className="block px-6 py-3 text-gray-700 hover:bg-blue-50 hover:text-blue-600"
        >
          📊 Dashboard
        </Link>
        <Link 
          href="/students" 
          className="block px-6 py-3 text-gray-700 hover:bg-blue-50 hover:text-blue-600"
        >
          👨‍🎓 Students
        </Link>
        <Link 
          href="/teachers" 
          className="block px-6 py-3 text-gray-700 hover:bg-blue-50 hover:text-blue-600"
        >
          👨‍🏫 Teachers
        </Link>
        <Link 
          href="/classes" 
          className="block px-6 py-3 text-gray-700 hover:bg-blue-50 hover:text-blue-600"
        >
          📚 Classes
        </Link>
        <Link 
          href="/attendance" 
          className="block px-6 py-3 text-gray-700 hover:bg-blue-50 hover:text-blue-600"
        >
          ✅ Attendance
        </Link>
      </nav>
    </aside>
  )
}
export default Sidebar;