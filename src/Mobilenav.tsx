import { useState } from "react"
const Mobilenav = () => {
const [showNav,setShowNav]=useState(false)
return (
    <>
<div className="flex justify-between items-center p-4">
  <header>
    <h1>Logo</h1>
  </header>
  <img onClick={()=>setShowNav(!showNav)} src="material-symbols_menu.svg" alt="" />
  </div>
 { showNav &&  <nav className="flex flex-col justify-center items-center gap-4 w-full">
   <ul className="flex flex-col gap-4 text-Heading H5 font-semibold">
     <li>About Me</li>
     <li>Skills</li>
     <li>Project</li>
     <li >Contact Me</li>
   </ul>
   <button className="bg-black flex gap-2 rounded text-white px-5 py-4">
    Resume
<img src="download.svg" alt="" />
   </button>
 </nav> }
 </>
  )
}

export default Mobilenav


