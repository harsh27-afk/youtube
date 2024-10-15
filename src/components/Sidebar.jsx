import { useSelector } from "react-redux"
import { Link } from "react-router-dom";


const Sidebar = () => {
 
  // imp wasted my 30min on this, it was implicit return 
  const isThreeLineOpen=useSelector((store)=>store.app.threeLine); // subscribe to the only part of the store which u will use 

  if(isThreeLineOpen==false) return null;


  return <>
    
     <div className="p-5 shadow-lg ">
      
      
      <ul className="hover:cursor-pointer " >
        <Link to="/"><li className="hover:bg-slate-200 p-1">Home</li></Link>
        <li className="hover:bg-slate-200 p-1">Shorts</li>
        <li className="hover:bg-slate-200 p-1">Video</li>
        <li className="hover:bg-slate-200 p-1">Live</li>
      </ul>

      <h1 className="font-bold mt-[15px] p-1 ">Subscriptions</h1>

      <ul className="hover:cursor-pointer  ">
        <li className="hover:bg-slate-200 p-1">Sport</li>
        <li className="hover:bg-slate-200 p-1">Gaming</li>
        <li className="hover:bg-slate-200 p-1">Music</li>
        <li className="hover:bg-slate-200 p-1 ">Movies</li>
      </ul>

      <h1></h1>

      <h1></h1>
    </div>
    
    
    </>

}

export default Sidebar;