import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { toggle } from "../utils/appSlice";
import { YT_SEARCH_API } from "../utils/constants";


const Header=()=>{

  const[searchQuery,setSearchQuery]=useState("");
  
  const [searchList,setSearchList]=useState([])

  const [showBox,setShowBox]=useState(false);
  
  const dispatch=useDispatch();

 

  const getSuggestion=async()=>{
    console.log("API CALL - "+searchQuery);
    
    const data=await fetch(YT_SEARCH_API+searchQuery);
    const json=await data.json();
    console.log(json);
    setSearchList(json.items);
  }

  useEffect(()=>{
     
    const timer=setTimeout(()=>(getSuggestion()),600);

    return ()=>(clearTimeout(timer));  // clean up func , to clean the setTimeout if the next key is pressed before 200ms

  },[searchQuery])

  
  

  const toggleHandler=()=>{
    dispatch(toggle());  
  }
    

    return <>
    <div className="parent flex justify-between  items-center h-[86px] shadow-lg">

        <div id="left-part" className="flex items-center">
        <i className="ri-menu-fill text-[30px] ml-[10px] hover:cursor-pointer" onClick={toggleHandler}></i>
        <img src="https://imgs.search.brave.com/gMuQvnJ0Dvv_J8-xZz-ac46oj73W4FoYk-4hw_adtg0/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly90My5m/dGNkbi5uZXQvanBn/LzAzLzAwLzM4Lzkw/LzM2MF9GXzMwMDM4/OTAyNV9iNWhnSHBq/RHByVHlTbDhsb1Rx/SlJNaXB5U2Ixck8w/SS5qcGc"  className="h-[55px] ml-[10px]" alt="logo" />

        </div>

        <div className="middle-part">
             <input value={searchQuery} onChange={(e)=> setSearchQuery(e.target.value)} 
                                        onFocus={()=>setShowBox(true)}
                                        onBlur={()=>setShowBox(false)} type="text" className="border border-black rounded-l-full w-[450px] mt p-1 pl-[20px]" />
             <button className="bg-slate-200 text-black px-[10px] py-[5px] rounded-r-full" >Search</button>
        </div>
      

        <div className="right-part mr-[20px]" >
        <i className="ri-user-fill text-[30px] "></i>
        </div>


    </div>
    
    {showBox && <div className="fixed bg-white py-2 px-5 w-[32rem] z-30 left-[540px]   shadow-lg rounded-lg border border-black">
          <ul>
            
            {searchList.map((entity,index)=>{
              return<>
                 <li key={index} className="py-2 shadow-sm hover:bg-gray-200">{entity.snippet.title}</li>
              </>
            })}
          </ul>
        </div>
    }
    </>
}

export default Header;