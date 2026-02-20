import Link from "next/link";

function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center">
      <div className="bg-white rounded-lg shadow-2xl p-12 text-center max-w-md">
        <div className="text-6xl mb-6">🏫</div>
        <h1 className="text-3xl font-bold mb-4">School Management System</h1>
        <p className="text-gray-600 mb-8">
          A complete solution for managing students, teachers, classes, and attendance.
        </p>
        
        <Link 
          href="/dashboard"
          className="bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 inline-block"
        >
          Go to Dashboard →
        </Link>
        
        <p className="text-sm text-gray-500 mt-6">
          Demo Mode - No login required
        </p>
      </div>
    </div>
  )
}
export default Home;