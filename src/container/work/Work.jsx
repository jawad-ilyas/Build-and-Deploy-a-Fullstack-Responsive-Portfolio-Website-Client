import { useState, useEffect } from "react"
import { AiFillEye, AiFillGithub } from "react-icons/ai"
import { motion } from "framer-motion"
import AppWrap from "../../wrapper/AppWrap"
import axios from "axios"
import { ApiUrl } from "../../constant"
import Container from "../Container"
// import {urlFor , client} from "../../client"
const Work = () => {
  const [activeFilter, setActiveFilter] = useState('Web App');
  const [animateCard, setAnimateCard] = useState({ y: 0, opacity: 1 });
  const [works, setWorks] = useState([])
  const [filterWork, setFilterWork] = useState([])



  const Filter = [
    {
      "key": "UI / UX",
      "value": "uiux"
    },
    {
      "key": "Web App",
      "value": "webapp"
    },
    {
      "key": "Word Press",
      "value": "wordpress"
    },
    {
      "key": "React Js",
      "value": "react js"
    },
    {
      "key": "All",
      "value": "all"
    }
  ]



  const handleWorkFilter = (item) => {
    setActiveFilter(item);
    setAnimateCard([{ y: 100, opacity: 0 }]);

    setTimeout(() => {
      setAnimateCard([{ y: 0, opacity: 1 }]);

      if (item === "all") {
        setFilterWork(works);
      } else {
        setFilterWork(
          works.filter(work => {
            console.log("Current work object: ", work);
            console.log("Tags: ", work?.tags);
            console.log("Filtering by item: ", item);

            // Trim the tags after splitting to remove any extra spaces
            const matchesFilter = work?.tags?.some(tag =>
              tag.split(",").map(t => t.trim()).includes(item)
            );

            console.log("Does it match the filter? ", matchesFilter);
            return matchesFilter;
          })
        );
      }
    }, 500);
  };


  const fetchWork = async () => {

    await axios.get(`${ApiUrl}/work/fetchWork`)
      .then((response) => {
        console.log("Work js :: fetchWork :: response", response)
        setWorks(response?.data?.data)
        setFilterWork(response?.data?.data)
      })
  }

  useEffect(() => {

    fetchWork();

  }, [])

  return (
    <Container>
      <h2 className="head-text text-center text-2xl lg:text-4xl font-semibold pt-8">
        My Creative
        <span className="text-secondaryColor"> Portfolio Section</span>
      </h2>
      <div className="app_work_filter flex flex-row items-center flex-wrap justify-center mt-16 mb-8 space-x-4">
        {
          Filter
            .map((item, index) => (
              <div key={index} onClick={() => handleWorkFilter(item.value)}
                className={`app__work-filter-item py-2 px-4 rounded-lg bg-whiteColor text-black app__flex font-semibold cursor-pointer transition-all  duration-300 ease-in-out  hover:bg-secondaryColor hover:text-whiteColor  p-text ${activeFilter === item.value ? ('item-active bg-secondaryColor text-whiteColor') : ''}         `}>
                {item.key}

              </div>
            ))
        }
      </div>

      <motion.div
        animate={animateCard}
        transition={{ duration: 0.5, delayChildren: 0.5 }}
        className="app__work-portfolio grid lg:grid-cols-3 grid-col-1 gap-4"
      >
        {
          filterWork.map((work, index) => (
            <div key={work + index} className="app__work-item hover:shadow-2xl p-4 rounded-lg bg-white text-black   app__fles">
              <div className="app__work-img relative app__flex">
                <div className="relative">
                  <img className="w-full   lg:h-[200px] md:h-[350px] rounded-lg" src={work?.workImgUrl} alt={work?.workName} />
                  <motion.div
                    whileHover={{ opacity: [0, 1] }}
                    transition={{ duration: 0.25, ease: "easeInOut", staggerChildren: 0.5 }}
                    className="app__work-hover  opacity-0  absolute group hover:opacity-100  rounded-lg inset-0 w-full h-full hover:bg-black/20  app__flex"
                  >
                    <a href={work?.workProjectLink} className="opacity-0 absolute group-hover:opacity-100 top-[50%] left-[42%]   rounded-full" target="_blank" rel="noreferrrer">
                      <motion.div
                        whileInView={{ scale: [0, 1] }}
                        whileHover={{ scale: [1, 0.9] }}
                        transition={{ duration: 0.25 }}
                        className="app__flex"
                      >
                        <AiFillEye size={30} />

                      </motion.div>
                    </a>
                    <a href={work?.workCodeLink} target="_blank" rel="noreferrrer" className="opacity-0 group-hover:opacity-100 absolute top-[50%] left-[50%]">
                      <motion.div
                        whileInView={{ scale: [0, 1] }}
                        whileHover={{ scale: [1, 0.9] }}
                        transition={{ duration: 0.25 }}
                        className="app__flex"
                      >

                        <AiFillGithub size={30} />
                      </motion.div>
                    </a>
                  </motion.div>
                </div>
                <div className="app__work-content app__flex flex flex-col items-center">
                  <h4 className="bold-text font-semibold text-xl lg:mt-2 capitalize">{work?.workName}</h4>
                  <p className="p-text text-center ">{work?.workDescription}</p>
                  <div className="app__work-tag app__flex  mt-3" >
                    <div className="flex flex-row  items-center justify-center flex-wrap ">
                      {/* {tagsArray = work?.tags[0]?.split(",") || []} */}
                      {work?.tags[0]?.split(",").slice(0, 2).map((item, index) => (
                        <p key={`${item}-${index}`} className="py-2  px-4 rounded-lg bg-primaryColor  text-black app__flex font-semibold cursor-pointer transition-all  duration-300 ease-in-out capitalize  hover:bg-secondaryColor hover:text-whiteColor  p-text mx-1 my-1">
                          {item.trim()} 
                        </p>
                      ))}

                    </div>
                  </div>
                </div>




              </div>
            </div>
          ))
        }
      </motion.div>
    </Container>
  )
}

export default AppWrap(Work, "work")