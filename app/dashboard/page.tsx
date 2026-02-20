import Sidebar from "../components/SideBar"
import Statcards from "../components/Statcards"

function Dashboard(){
return(
    <div className="flex">
      {/* Sidebar */}
      <Sidebar />

      {/* Main Content */}
      <main className="flex-1 bg-gray-100 p-8">
        <h1 className="text-4xl font-bold mb-8">Dashboard</h1>
        
        {/* Grid of 5 cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4">
          <Statcards icon="👨‍🎓" title='Total Students' value="1,234"/>
          <Statcards icon="👨‍🏫" title='Total Teachers' value="56"/>
          <Statcards icon="📚" title='Total Classes' value="24"/>
          <Statcards icon="✅" title='Present Today' value="1,180"/>
          <Statcards icon="❌" title='Absent Today' value="1,10"/>

        </div>
      </main>
    </div>
)
}
export default Dashboard