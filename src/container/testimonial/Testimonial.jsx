import AppWrap from "../../wrapper/AppWrap"
import MotionWrap from "../../wrapper/MotionWrap"
import { HiChevronLeft, HiChevronRight } from "react-icons/hi"
import { ApiUrl } from "../../constant"
import axios from "axios"
import Container from "../Container"
import { motion } from "framer-motion"
import { useState, useEffect } from "react"

const Testimonial = () => {
  const [testimonials, setTestimonials] = useState([])
  const [brands, setBrands] = useState([])
  const [currentIndex, setCurrentIndex] = useState(0)
  const fetchTestimonials = async () => {

    await axios.get(`${ApiUrl}/testimonial/fetchTestimonial`)
      .then((response) => {
        console.log("Testimonial js :: fetchSkill :: response", response)
        setTestimonials(response?.data?.data)
      })
  }
  const fetchBrands = async () => {

    await axios.get(`${ApiUrl}/brand/fetchBrand`)
      .then((response) => {
        console.log("Testimonial js :: fetchBrands :: response", response)
        setBrands(response?.data?.data)
      })
  }


  const handleClick = (index) => {
    setCurrentIndex(index)
  }

  useEffect(() => {
    fetchTestimonials();
    fetchBrands();
  }, [])
  const test = testimonials[currentIndex];
  return (

    <Container >
      <>
        {testimonials?.length && (
          <div>
            <div className="app__testimonial-item app__flex relative bg-whiteColor shadow-2xl mx-auto  flex flex-row items-center justify-start rounded-2xl max-w-4xl p-10">
              <div className="w-2/5">
                <img className=" object-cover h-42 rounded-full w-[200px] h-[200px] ms-16 " src={test?.testimonialImg} alt={test?.name} />
              </div>
              <div className="app__testimonial-content w-3/5 me-16">
                <p className="p-text">{test?.feedback}</p>
                <div>
                  <p className="p-bold font-semibold text-xl">{test?.name}</p>
                  <p className="p-text font-light font-base ">{test?.company}</p>
                </div>
              </div>

              <div className="app__testimonial-btns app__flex absolute">
                <div className="app__flex bg-grayColor  rounded-full cursor-pointer text-white p-1  transition-all duration-300 delay-100  hover:shadow-2xl hover:text-grayColor hover:bg-primaryColor " onClick={() => handleClick(currentIndex === 0 ? testimonials.length - 1 : currentIndex - 1)}>
                  <HiChevronLeft size={30} />
                </div>
              </div>
              <div className="app__testimonial-btns app__flex absolute right-5">
                <div className="app__flex bg-grayColor  rounded-full cursor-pointer transition-all duration-300 delay-100  hover:shadow-2xl hover:text-grayColor hover:bg-primaryColor text-white p-1" onClick={() => handleClick(currentIndex === testimonials.length - 1 ? 0 : currentIndex + 1)}>
                  <HiChevronRight size={30} />
                </div>
              </div>
            </div>
          </div>
        )}
        <div className="app__testmonials-brands app_flex max-w-screen-lg mt-8 mx-auto flex flex-row flex-wrap items-center justify-center">
          {brands.map((brand) => (
            <motion.div
              whileInView={{ opacity: [0, 1] }}
              transition={{ duration: 0.5, type: "twe" }}
              key={brand?._id}
              className="w-[150px]"
            >
              <img className="w-full h-auto object-cover grayscale transition-all duration-300 delay-300 cursor-pointer  hover:grayscale-0   h-42 rounded-md" src={brand?.brandImgUrl} alt={brand?.brandName} />

            </motion.div>
          ))}
        </div>
      </>



    </Container >

  )
}

export default AppWrap(MotionWrap(Testimonial), "testimonial", "bg-primaryColor")