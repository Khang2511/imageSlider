import React from 'react'
import useFirestore from '../hooks/useFireStore'
import '../css/show/style.css'
import {motion} from 'framer-motion'

function ImageShow({selectedImg, setSelectedImg, selectedIndex, setSelectedIndex}) {
    const {docs} = useFirestore('images')
    const length = docs.length;
    console.log(selectedIndex)

    function handleNext(){
        setSelectedIndex(selectedIndex === length-1? 0 :selectedIndex + 1 )
        setSelectedImg(docs[selectedIndex].url)
    }

    function handlePrev(){
        setSelectedIndex(selectedIndex === 0 ? length-1 : selectedIndex - 1 )
        setSelectedImg(docs[selectedIndex].url)
    }
    return (
    <div className='imgshow'   >
        <div onClick={e => setSelectedImg(null)} className='imgshow__off'>

            {docs && 
            docs.map((doc,index) => (
                <motion.div
                className='imgshow__wrap' 
                key={doc.id}>
                    {doc.url === selectedImg &&
                    <motion.img src={selectedImg} 
                    initial={{ opacity:0}}
                    animate={{opacity:1 }}

                    alt='upload pic'></motion.img> }
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
