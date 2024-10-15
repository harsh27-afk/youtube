import { useEffect, useState } from "react"
import { YT_API_URL } from "../utils/constants"
import VideoCard from "./VideoCard";
import { Link } from "react-router-dom";



const VideoContainer = () => {

  const [videos,setVideos]=useState([])


 useEffect(()=>{
     getData();
 },[]);

 const getData=async ()=>{
  const data=await fetch(YT_API_URL);
  const json=await data.json();
  console.log(json);
  setVideos(json.items)
 }


  return (
    <div className="flex flex-wrap">
    {
      videos.map((item,index)=>{
         return <Link to={"/watch?v="+item.id}><VideoCard key={index} info={item}/></Link>
      })
    }


      
    </div>
  )
}

export default VideoContainer;