
function Statcards({icon,title,value}:{icon:string,title:string,value:string|number}){
    return(
        <div className="bg-white rounded-lg shadow p-6">
            <div className="text-6xl mb-4">{icon}</div>
            <h1 className="text-gray-500 text-sm ">{title}</h1>
            <p className="text-4xl font-bold ">{value}</p>
        </div>
    )

}
export default Statcards;