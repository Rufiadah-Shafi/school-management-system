 import Sidebar from './components/SideBar'

function Home() {
  return (
    <div className="flex">
      {/* Sidebar */}
      <Sidebar />

      {/* Main Content */}
      <main className="flex-1 bg-gray-100 p-8">
        <h1 className="text-4xl font-bold mb-8">Dashboard</h1>
        
        {/* Grid of 4 cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          
          <div className="bg-white rounded-lg shadow p-6">
            <div className="text-6xl mb-4">👨‍🎓</div>
            <p className="text-gray-500 text-sm">Total Students</p>
            <p className="text-4xl font-bold">1,234</p>
          </div>

          <div className="bg-white rounded-lg shadow p-6">
            <div className="text-6xl mb-4">👨‍🏫</div>
            <p className="text-gray-500 text-sm">Total Teachers</p>
            <p className="text-4xl font-bold">56</p>
          </div>

          <div className="bg-white rounded-lg shadow p-6">
            <div className="text-6xl mb-4">📚</div>
            <p className="text-gray-500 text-sm">Total Classes</p>
            <p className="text-4xl font-bold">24</p>
          </div>

          <div className="bg-white rounded-lg shadow p-6">
            <div className="text-6xl mb-4">✅</div>
            <p className="text-gray-500 text-sm">Present Today</p>
            <p className="text-4xl font-bold">1,180</p>
          </div>

        </div>
      </main>
    </div>
  )
}
export default Home;