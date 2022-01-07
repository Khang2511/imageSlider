import React from 'react'
import useFirestore from '../hooks/useFireStore'
import '../css/show/style.css'


function ImageShow({selectedImg, setSelectedImg}) {
    const {docs} = useFirestore('images')
    const length = docs.length;

    function handleNext(){
        setSelectedImg(selectedImg === length-1? 0 :selectedImg + 1 )
    }

    function handlePrev(){
        setSelectedImg(selectedImg === 0 ? length-1 : selectedImg - 1 )
    }
    return (
    <div className='imgshow'   >
        <i className="fa fa-times imgshow__btn imgshow__btn--esc" aria-hidden="true" 
            onClick={e => setSelectedImg(null)}
        ></i>
        {docs && 
        docs.map((doc,index) => (
            <div className='imgshow__wrap' key={doc.id}>
                 {index === selectedImg && <img src={doc.url} alt='upload pic'></img> }
            </div>
        ))}
        <i 
            className="fa fa-arrow-circle-o-left 
            imgshow__btn imgshow__btn--left" 
            aria-hidden="true"
            onClick={handlePrev}
            >
            </i>
            <i 
            className="fa fa-arrow-circle-o-right 
            imgshow__btn imgshow__btn--right" 
            aria-hidden="true"
            onClick={handleNext}
            >
            </i>
        
    </div>
    )
}

export default ImageShow
