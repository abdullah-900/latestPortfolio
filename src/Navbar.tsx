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
    <div className="flex items-center justify-between lg:px-20 md:px-5 py-6">
  <header>
    <img src="LogoNav.svg" alt="" />
  </header>
  <nav>
   <ul className="flex gap-8  text-HeadingH5 font-semibold">
     <li><a href="#about">About Me</a></li>
     <li><a href="#skills">Skills</a></li>
     <li><a href="#projects">Projects</a></li>
     <li ><a href="#contact">Contact Me</a></li>
   </ul>
 </nav> 
 <button className="bg-black flex gap-2 rounded text-ButtonText text-white px-5 py-4">
    Resume
<img src="download.svg" alt="" />
   </button>
  </div>
  )
}  

}
export default Navbar