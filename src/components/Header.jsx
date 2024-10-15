import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { toggle } from "../utils/appSlice";
import { YT_SEARCH_API } from "../utils/constants";


const Header=()=>{

  const[searchQuery,setSearchQuery]=useState("");
  const dispatch=useDispatch();

  const getSuggestion=async()=>{
    const data=await fetch(YT_SEARCH_API);
    const json=await data.json();
    console.log(json);
    
  }

  useEffect(()=>{
    getSuggestion();
  },[searchQuery])

  console.log(searchQuery);
  

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
             <input value={searchQuery} onChange={(e)=> setSearchQuery(e.target.value)}  type="text" className="border border-black rounded-l-full w-[450px] mt p-1 pl-[20px]" />
             <button className="bg-slate-200 text-black px-[10px] py-[5px] rounded-r-full" >Search</button>
        </div>

        <div className="right-part mr-[20px]" >
        <i className="ri-user-fill text-[30px] "></i>
        </div>


    </div>
    
    </>
}

export default Header;