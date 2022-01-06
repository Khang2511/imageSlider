import React from 'react'
import useFirestore from '../hooks/useFireStore'
import '../css/grid/style.css'
import { projectFirestore } from '../firebase/config';
function ImageGrid({setSelectedImg}) {
const {docs} = useFirestore('images')
    function handleDel(index){
        projectFirestore.collection("images").doc(index).delete();
    }

    return (
        <div className='imggrid'>
            {docs && 
            docs.map((doc,index) => (
                <div className='imggrid__wrap' key={doc.id} 
                >
                   <img 
                   src={doc.url} 
                   alt='uploadimg' 
                   onClick={() => setSelectedImg(index)}></img>
                   <i className="fa fa-times-circle-o" 
                   aria-hidden="true"
                   onClick={()=> handleDel(doc.id)}></i>
                </div>
            ))}
        </div>
    )
}

export default ImageGrid
