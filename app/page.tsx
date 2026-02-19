 function Home() {
  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <h1 className="text-4xl font-bold mb-8">School Management System</h1>
      
      {/* This is a simple card */}
      <div className="bg-white rounded-lg shadow p-6 max-w-sm">
        <div className="text-6xl mb-4">👨‍🎓</div>
        <p className="text-gray-500 text-sm">Total Students</p>
        <p className="text-4xl font-bold">1,234</p>
      </div>
    </div>
  )
}
export default Home;