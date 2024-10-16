import Button from "./Button"


const ButtonList = () => {
  
  const list=["All","Gaming", "Songs","Live", "Football","Cooking", "Tech", "DSA", "Hollywood","Kubernetes","Git & github","Semi-Conductor","Meta","Startup","Mexico" ]

  return (
    <div className="flex ml-[7px] border border-bt-black ">
     {
        list.map((item,index)=>{
           return <Button  key={index} name={item} />
        })

     }

     
    </div>
  )
}

export default ButtonList;