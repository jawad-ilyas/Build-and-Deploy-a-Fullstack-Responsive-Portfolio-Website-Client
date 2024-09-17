import { motion } from "framer-motion"
import AppWrapper from "../../wrapper/AppWrap"
import { images } from "../../constants"
import Container from "../Container"
const About = () => {

  const abouts = [
    { title: "web development ", description: "I am a good web developer ", imgUrl: images.about01 },
    { title: "web Design ", description: "I am a good web developer ", imgUrl: images.about02 },
    { title: "Ui/Ux ", description: "I am a good web developer ", imgUrl: images.about03 },
    { title: "Web Animation ", description: "I am a good web developer ", imgUrl: images.about04 },
    { title: "Web Animation ", description: "I am a good web developer ", imgUrl: images.about04 },
    { title: "Web Animation ", description: "I am a good web developer ", imgUrl: images.about04 },
    { title: "Web Animation ", description: "I am a good web developer ", imgUrl: images.about04 },
    { title: "Web Animation ", description: "I am a good web developer ", imgUrl: images.about04 },
  ]
  return (
    <div className="bg-whiteColor">
      <Container >
        <h2 className="head-text text-center text-2xl lg:text-4xl font-semibold pt-8">
          I know That
          <span className="text-secondaryColor"> Good Design </span>
          <br />
          means
          <span className="text-secondaryColor"> Good Bussiness </span>
        </h2>


        <div className="app__profiles  grid gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-4 justify-center items-start flex-wrap mt-8">
          {abouts.map((about, index) => (
            <motion.div
              whileInView={{ opacity: 1 }}
              whileHover={{ scale: 1.1 }}
              transition={{ duration: 0.5, type: 'tween' }}
              className="app_profiles-item w-full  flex justify-start items-start flex-col  cursor-pointer"
              key={about.title + index}
            >
              <img className="w-full object-cover h-42 rounded-md" src={about.imgUrl} alt={about.title} />
              <h2 className="bold-text capitalize font-semibold text-2xl" style={{ marginTop: 20 }}>{about.title}</h2>
              <p className="p-text font-light text-base" style={{ marginTop: 4 }}>{about.description}</p>
            </motion.div>
          ))}
        </div>

      </Container >
    </div >
  )
}

export default AppWrapper(About , "about")