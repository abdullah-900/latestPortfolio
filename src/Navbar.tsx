import { useMediaQuery } from 'react-responsive'
import Mobilenav from './Mobilenav'
const Navbar = () => {
  const isMobile = useMediaQuery({ query: '(max-width: 550px)' })
if (isMobile) {
  return (
    <Mobilenav />
  )
} else {
  return (
    <div className="flex items-center justify-between px-20 py-6">
  <header>
    <h1>Logo</h1>
  </header>
  <nav>
   <ul className="flex gap-8 text-Heading H5 font-semibold">
     <li>About Me</li>
     <li>Skills</li>
     <li>Project</li>
     <li >Contact Me</li>
   </ul>
 </nav> 
 <button className="bg-black flex gap-2 rounded text-white px-5 py-4">
    Resume
<img src="download.svg" alt="" />
   </button>
  </div>
  )
}  

}
export default Navbar