import { motion } from "framer-motion"



const MotionWrap = (Component, classNames) => function Hoc() {
    return (
        <motion.div
            whileInView={{ y: [100, 50, 0] }}
            transition={{ duration: .5 }}
            className={`${classNames} app__flex`}
        >
            <Component />
        </motion.div>
    )
}

export default MotionWrap