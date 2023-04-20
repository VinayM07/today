import React,{useState,useEffect} from 'react'

function Navbar() {
    const [handle,sethandle]=useState(false)
    useEffect(()=>{
        console.log("entered")
        window.addEventListener("scroll",()=>{
            if(window.scrollY>100){
                console.log("yess")
                sethandle(true)
            }
            else {
                sethandle(false)
            }
              return ()=>{
            window.removeEventListener("scroll")
        };
        });
      
    },[])
  return (
    <div className={`logo ${handle && "nav_black"}`}  >
        
        <img className="nav_logo" src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/7a/Logonetflix.png/1200px-Logonetflix.png"  ></img>
        <img className="nav_avatar" src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png"></img>
    </div>
  
  )
}

export default Navbar