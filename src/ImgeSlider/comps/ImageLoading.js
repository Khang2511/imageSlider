import React from 'react'
import {motion} from 'framer-motion'
import '../css/loading/style.css'

const icon = {
    hidden: {
      opacity: 0,
      pathLength: 0,
      fill: "#FF5F6D",
      
    },
    visible: {
      opacity: 1,
      pathLength: 1,
      fill: "rgb(245, 103, 9)",
    }
  };
  
const ImageLoading= () => (
    <motion.div 
    className="container"
    initial={{display: 'flex', opacity:1}}
    animate={{display: 'none',opacity:0}}
    transition={{display:{delay : 4},
                opacity:{duration:6}}}>
      <motion.svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="00 -75 100 100"
        className="item"
        
      >
        <motion.path
          d="M0 -150V0l50 50 50-50v-150L75 75l-25 25-25-25z"
          variants={icon}
          initial="hidden"
          animate="visible"
          transition={{
            default: { duration: 3, ease: "easeInOut" },
            fill: { duration: 3, ease: [1, 0, 0.8, 1] },
            display:{ delay: 10}
          }}
        />
      </motion.svg>
    </motion.div>
  );

export default ImageLoading
