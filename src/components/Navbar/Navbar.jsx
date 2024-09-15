import { HiMenuAlt4, HiX } from "react-icons/hi";
import { motion } from "framer-motion";
import { useState } from "react";

const Navbar = () => {
  const [toggle, setToggle] = useState(false);
  const navItems = ['home', 'about', 'work', 'skills', 'contact'];

  return (
    <header className="fixed top-0 left-0 z-50 right-0 w-full" style={{ background: "rgba(255,255,255,0.25)", backdropFilter: "blur(4px)", border: "1px solid rgba(255,255,255,0.18)" }}>
      <nav className="container mx-auto py-8  ">
        <div className="md:flex hidden px-4  right-0 w-full justify-between items-center">
          <div className="flex items-center justify-center">
            <h1 className="font-bold font-serif text-3xl">JMD</h1>
          </div>
          <ul className="flex flex-1 flex-row items-center justify-center space-x-4">
            {navItems.map((item) => (
              <li className="uppercase group text-grayColor font-medium font-serif text-xl cursor-pointer" key={`link-${item}`}>
                <div className="size-2 rounded-full bg-transparent mx-auto mb-1 group-hover:bg-secondaryColor" />
                <a className="transition-all duration-200 ease-in-out hover:text-secondaryColor" href={`#${item}`}>
                  {item}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div className="flex md:hidden justify-between items-center">
          <div className="flex items-center justify-center">
            <h1 className="font-bold font-serif text-3xl">JMD</h1>
          </div>
          <div>
            <HiMenuAlt4 onClick={() => setToggle(true)} className="size-7 p-1 rounded-full flex items-center justify-end bg-secondaryColor text-white cursor-pointer" />
            {toggle && (
              <motion.div
                className="fixed top-0 right-0 p-4 w-4/5 bg-whiteColor h-screen bg-menu-bg bg-cover bg-repeat z-30 shadow-lg"
                style={{ boxShadow: "0 0 20px rgba(168, 168, 168, 0.15)", border: "1px solid rgba(255,255,255,0.18)" }}
                whileInView={{ x: [300, 0] }}
                transition={{ duration: 0.4, ease: 'easeInOut' }}
              >
                <HiX onClick={() => setToggle(false)} className="size-7 p-1 rounded-full bg-secondaryColor text-white cursor-pointer mb-8" />
                <ul className="flex flex-col items-start justify-start space-y-4">
                  {navItems.map((item) => (
                    <li className="uppercase text-grayColor font-medium font-serif text-xl cursor-pointer" key={`mobile-link-${item}`}>
                      <a className="transition-all duration-200 ease-in-out hover:text-secondaryColor" href={`#${item}`} onClick={() => setToggle(false)}>
                        {item}
                      </a>
                    </li>
                  ))}
                </ul>
              </motion.div>
            )}
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
