import React from 'react'
import useFirestore from '../hooks/useFireStore'
import '../css/show/style.css'
import {motion} from 'framer-motion'
import { useState } from 'react'

const variants = {
    enter: (direction) => {
      return {
        x: direction > 0 ? 1000 : -1000,
        opacity: 0
      };
    },
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1
    },
    exit: (direction) => {
      return {
        zIndex: 0,
        x: direction < 0 ? 1000 : -1000,
        opacity: 0
      };
    }
  };

function ImageShow({selectedImg, setSelectedImg, selectedIndex, setSelectedIndex}) {
    const {docs} = useFirestore('images')
    const length = docs.length;
    const [loaded,setLoaded] = useState(false)
  
  const showImage = () => {
    setLoaded(false)
    
  }


    function handleNext(){
        setSelectedIndex(selectedIndex === length-1? 0 :selectedIndex + 1 )
        setLoaded(true)
    }

    function handlePrev(){
        setSelectedIndex(selectedIndex === 0 ? length-1 : selectedIndex - 1 )
        setLoaded(true)
    }

    console.log(loaded)
    return (
    <div className='imgshow'   >
        <div onClick={e => setSelectedImg(null)} className='imgshow__off'>

            {docs && 
            docs.map((doc,index) => (
                <motion.div
                className='imgshow__wrap' 
                key={doc.id}>
                    {index === selectedIndex &&
                    <div>
                        <motion.img 
                        onLoad={showImage} 
    
                        src={loaded?  'https://cdn.dribbble.com/users/200146/screenshots/4923970/loading__.gif':doc.url } 
                        variants={variants}
                        initial="enter"
                        animate="center"
                        exit="exit"
                        transition={{
                        x: { type: "spring", stiffness: 200, damping: 70 },
                        opacity: { duration: 1 }
                    }}
                        alt='upload pic'/> 

                        {console.log(loaded)}                       
                    </div>
                    }
                  
                </motion.div>
            ))}

        </div>
        <div 
            className='imgshow__prev'
            onClick={handlePrev}
        >
            <i 
                className="fa fa-arrow-circle-o-left 
                imgshow__btn prev__btn--left" 
                aria-hidden="true"
                >
            </i>
        </div>
        <div 
            className='imgshow__next'
            onClick={handleNext}
        >
        <i 
            className="fa fa-arrow-circle-o-right 
            imgshow__btn next__btn--right" 
            aria-hidden="true"
            >
        </i>
        </div>
        
        
    </div>
    )
}

export default ImageShow
