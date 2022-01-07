import React from 'react'
import {useState} from 'react'
import useFirestore from '../hooks/useFireStore'
import '../css/grid/style.css'
import { projectFirestore } from '../firebase/config';
import {motion} from 'framer-motion'
function ImageGrid({setSelectedImg}) {
    const {docs} = useFirestore('images')
    const [choose,setChoose] = useState(false)

    function handleChoose(){
        setChoose(!choose);
        console.log(choose)
    }

    function handleDel(index){
        projectFirestore.collection("images").doc(index).delete();
    }

    return (
        <div className='grid'>
            <i className="fas fa-trash-alt btn__trash" onClick={handleChoose} ></i>
            <div className='imggrid'>
                {docs && 
                docs.map((doc,index) => (
                    <motion.div className='imggrid__wrap' key={doc.id} 
                    layout
                    whileHover={{ scale: 1.1 }}
                    >
                    <img 
                    src={doc.url} 
                    alt='uploadimg' 
                    onClick={() => setSelectedImg(index)}></img>
                    {choose && <i className="fa fa-times-circle-o" 
                    aria-hidden="true"
                    onClick={()=> handleDel(doc.id)}></i>}
                    </motion.div>
                ))}
            </div>
        </div>
    )
}

export default ImageGrid
