import { HiMenuAlt4, HiX } from "react-icons/hi";
import { FaLinkedin, FaTwitterSquare, FaFacebookSquare, FaInstagramSquare, FaGithubSquare } from "react-icons/fa";
import { motion } from "framer-motion";
import { useState } from "react";

const Navbar = () => {
  const [toggle, setToggle] = useState(false)
  return (
    <div id='navbar' style={{ background: "rgba(255,255,255,0.45)", backdropFilter: "blur(8)" }} className='sm:px-10 sm:py-8 fixed top-0 z-[8]  w-full'>
      <nav className='container mx-auto flex flex-row justify-between  sm:items-center items-start'>
        <div>
          <h1 className='font-bold text-2xl  hover:text-secondaryColor hover:duration-300 cursor-pointer p-4 md:p-0'>JMD</h1>
        </div>
        <ul className='sm:flex hidden '>
          {["home", "about", "work", "skills", "contact"].map((link) => (
            <li key={`link-${link}`}>
              <div />
              <a className='ms-2 text-gray-600 uppercase font-semibold hover:text-secondaryColor hover:duration-300' href={`#${link}`}>{link}</a>
            </li>))}
        </ul>
        <div className='sm:flex hidden '>

          <FaLinkedin size={30} className='ms-2 text-gray-900    hover:text-secondaryColor hover:duration-300 cursor-pointer' />
          <FaTwitterSquare size={30} className='ms-2 text-gray-900   hover:text-secondaryColor hover:duration-300 cursor-pointer' />
          <FaFacebookSquare size={30} className='ms-2 text-gray-900   hover:text-secondaryColor hover:duration-300 cursor-pointer' />
          <FaInstagramSquare size={30} className='ms-2 text-gray-900   hover:text-secondaryColor hover:duration-300 cursor-pointer' />
          <FaGithubSquare size={30} className='ms-2 text-gray-900   hover:text-secondaryColor hover:duration-300 cursor-pointer' /> 


        </div>
        {(toggle === false && <div className='block sm:hidden p-4 md:p-0' onClick={() => setToggle(!toggle)}>
          <HiMenuAlt4 size={30} className='bg-secondaryColor ms-2 text-white text-left rounded-full    hover:text-secondaryColor hover:duration-300 cursor-pointer' onClick={() => setToggle(false)} />

        </div>)}
        {toggle && <motion.div
          initial={{ x: 300 }}
          animate={{ x: 0 }}
          transition={{ ease: "easeOut", duration: 1 }}
          div className='h-screen w-2/3 bg-white flex sm:hidden flex-col shadow-xl p-4'>
          <div className='ms-auto'>
            <HiX size={30} className='ms-2 text-gray-900 text-left    hover:text-secondaryColor hover:duration-300 cursor-pointer' onClick={() => setToggle(false)} />
          </div>
          <ul>
            {["home", "about", "work", "skills", "contact"].map((link) => (
              <li key={`link-${link}`}>

                <a onClick={() => setToggle(false)} className='ms-2 my-2 text-gray-600 uppercase font-semibold hover:text-secondaryColor hover:duration-300 text-xl' href={`#${link}`}>{link}</a>
              </li>))}
          </ul>
          <div className='flex flex-row mt-4 '>

            <FaLinkedin size={30} className='ms-2 text-gray-900    hover:text-secondaryColor hover:duration-300 cursor-pointer' />
            <FaTwitterSquare size={30} className='ms-2 text-gray-900   hover:text-secondaryColor hover:duration-300 cursor-pointer' />
            <FaFacebookSquare size={30} className='ms-2 text-gray-900   hover:text-secondaryColor hover:duration-300 cursor-pointer' />
            <FaInstagramSquare size={30} className='ms-2 text-gray-900   hover:text-secondaryColor hover:duration-300 cursor-pointer' />
            <FaGithubSquare size={30} className='ms-2 text-gray-900   hover:text-secondaryColor hover:duration-300 cursor-pointer' />


          </div>

        </motion.div>}
      </nav>
    </div>
  )
}

export default Navbar;