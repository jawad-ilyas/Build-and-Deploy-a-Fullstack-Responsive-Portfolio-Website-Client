import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import AppWrap from "../../wrapper/AppWrap"
import axios from "axios"
import { ApiUrl } from "../../constant"
import Container from "../Container"
import { Tooltip } from 'react-tooltip'


const Skills = () => {
  const [skills, setSkills] = useState([])
  const [experiences, setExperiences] = useState([])

  const fetchSkill = async () => {

    await axios.get(`${ApiUrl}/skill/fetchSkill`)
      .then((response) => {
        console.log("Work js :: fetchSkill :: response", response)
        setSkills(response?.data?.data)
      })
  }

  const fetchExperience = async () => {

    await axios.get(`${ApiUrl}/experience/fetchExperiences`)
      .then((response) => {
        console.log("Work js :: fetchExperience :: response", response)
        setExperiences(response?.data?.data)
      })
  }


  useEffect(() => {

    fetchSkill();
    fetchExperience();

  }, [])
  return (
    <Container>
      <h1 className="head-text">Skills & Experience</h1>
      <div className="app__skills-container flex flex-row  mt-12">
        <motion.div className="app__skills_list   w-3/5  grid lg:grid-cols-4 grid-cols-2  ">
          {skills.map((skill, index) => (
            <motion.div
              whileInView={{ opacity: [0, 1] }}
              transition={{ duration: 0.5 }}
              className="app__skills-item transition-all duration-300 ease-in-out app__flex "
              key={skill.skillName + index}>
              <div className="size-44 p-4">
                <div className="app__flex   transition-all duration-300 ease-in-out hover:bg-secondaryColor hover:shadow-lg cursor-pointer bg-primaryColor p-5 rounded-full" style={{ backgroundColor: skill?.skillBgColor }}>
                  <img className=" size-[100px] mx-auto object-cover" src={skill?.skillImg} alt={skill?.skillName} />
                </div>
                <p className="p-text text-center capitalize mt-1 font-semibold  transition-all duration-300 ease-in-out hover:text-secondaryColor cursor-pointer">{skill.skillName}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
        <motion.div className="app__skills-exp  flex flex-center justify-center content-center flex-col   w-2/5">
          {experiences?.map((workExp, index) => (
            <div key={index} className=" my-4 flex flex-row   px-4 py-2 rounded-md">
              <h1 className="me-8 text-secondaryColor">{workExp?.year}</h1>

              {
                workExp?.worksExperience.map((exp) => {
                  return <>
                    <motion.div
                      whileInView={{ opacity: [0, 1] }}
                      transition={{ duration: 0.5 }}
                      data-tooltip-id={exp.workExperienceName}
                      data-tooltip-content={exp.workExperienceDescription}
                      data-tooltip-place="top"

                      className="app__skills-exp-work flex flex-col justify-normal items-start transition-all duration-300 cursor-pointer ease-in-out app__flex"

                      key={index}>
                      <h4 className="bold-text font-medium">{exp.workExperienceName}</h4>
                      <p className="p-text font-light  text-grayColor mt-1">{exp.workExperienceCompany}</p>

                    </motion.div>
                    <Tooltip id={exp.workExperienceName} effect="solid" arrowColor="#fff" className="skills-toopltip max-w-48 bg-primaryColor text-grayColor" >
                    </Tooltip>
                  </>

                })
              }
            </div>


          ))}
        </motion.div>
      </div>
    </Container>
  )
}

export default AppWrap(Skills, "skills", "bg-white")