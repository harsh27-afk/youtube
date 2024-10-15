

const VideoCard = ({info}) => {
    if (!info || Object.keys(info).length === 0) return null; // until the info object of items is not filled return null
  
    const{snippet,statistics}=info;


  return <>
    <div className="m-[15px] border border-gray-500 rounded-lg hover:cursor-pointer w-[300px] " >
        <img className="rounded-lg transition-transform duration-300 ease-in-out transform hover:scale-90" src={snippet.thumbnails.medium.url} alt="video" />
        <h2 className="font-bold text-[15px] m-[4px]" >{snippet.title}</h2>
        <h3 className="m-[6px]">{snippet.channelTitle}</h3>
        <h3 className="m-[6px]">{`views: ${statistics.viewCount/1000}k`}</h3>
    </div>
    </>
}

export default VideoCard;