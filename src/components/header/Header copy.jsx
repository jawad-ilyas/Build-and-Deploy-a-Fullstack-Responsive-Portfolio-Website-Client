import { motion } from "framer-motion"
import { images } from "../../constants/"
import "./Header.css"
const Header = () => {
  const scaleVariants = {
    whileInView: {
      scale: [0, 1],
      opacity: [0, 1],
      transition: {
        duration: 1,
        ease: 'easeInOut'
      }
    }
  }
  return (
    <div id="home" className="app__header app__flex   flex flex-col lg:flex-row bg-home-bg bg-repeat bg-cover bg-center lg:w-full lg:h-full pt-30 pr-4 pl-8 lg:pt-32 lg:pr-8 lg:pl-0 lg:pb-0">
      {/* left */}
      <motion.div
        whileInView={{ x: [-100, 0], opacity: [0, 1] }}
        transition={{ duration: 3 }}
        className="app__header-info flex flex-col items-center justify-center py-20 lg:flex-col lg:items-end  lg:justify-center w-full lg:me-5 lg:w-1/3 "
      >
        <div className="app__header-badge      flex flex-col lg:items-end lg:justify-end">
          <div style={{ boxShadow: "0 0 20px rgba(0,0,0,0.1)" }} className="badge-cmp  app_flex   px-8 py-4 border-whiteColor rounded-2xl flex-row  flex  lg:items-center lg:justify-center">
            <span className="text-2xl font-medium">👋</span>
            <div style={{ marginLeft: 20 }}>
              <p className="p-text">Hello, I am </p>
              <h1 className="head-text font-semibold text-2xl">Jawad Mughal</h1>
            </div>
          </div>
          <div style={{ boxShadow: "0 0 20px rgba(0,0,0,0.1)" }} className=" mt-12 tag-cmp app__flex  px-8 py-4  border-whiteColor flex rounded-2xl flex-col items-center lg:items-end lg:w-auto ">
            <p className="p-text  uppercase text-right">Web Developer</p>
            <p className="p-text  uppercase text-right">FreeLancer</p>
          </div>
        </div>

      </motion.div>
      {/* center */}
      <motion.div
        whileInView={{ opacity: [0, 1] }}
        transition={{ duration: 3, delayChildren: 0.5 }}
        className="app__header-img  h-full flex flex-end w-full justify-end  relative lg:w-1/3" 
      >

        <img className="w-full object-contain z-10" src={images.profile} alt="profile_bg" />
        <motion.img
          whileInView={{ scale: [0, 1] }}
          transition={{ duration: 1, ease: 'easeInOut' }}
          src={images.circle}
          alt="profile_cirlce"
          className="overlay_circle absolute inset-0 z-0 w-full h-full"
        />
      </motion.div>
      {/* right */}
      <motion.div
        variants={scaleVariants}
        whileInView={scaleVariants.whileInView}
        className="app_header-circles flex flex-row justify-center mt-5 lg:flex-col lg:items-start  lg:justify-center w-full lg:me-5 lg:w-1/3 " 
      >
        {[images.flutter, images.redux, images.sass].map((circle, index) => (
          <div className="circle-cmp app__flex rounded-full flex items-center justify-center size-12 lg:size-24 bg-white p-1" style={{ boxShadow: "0 0 29px rgba(0, 0, 0, 0.1)" }} key={`circle-${index}`}>
            <img className="lg:size-10/12 size:6/12  " src={circle} alt="circle" />
          </div>
        ))}

      </motion.div>

    </div>
  )
}

export default Header