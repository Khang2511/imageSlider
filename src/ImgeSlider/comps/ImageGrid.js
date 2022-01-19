import React from 'react'
import {useState} from 'react'
import useFirestore from '../hooks/useFireStore'
import '../css/grid/style.css'
import { projectFirestore } from '../firebase/config';
import {motion} from 'framer-motion'
import Pagination from "react-pagination-library";
import "react-pagination-library/build/css/index.css";


function ImageGrid({setSelectedImg ,setSelectedIndex}) {
    const {docs} = useFirestore('images')
    const [choose,setChoose] = useState(false)
    const [pageNumber, setPageNumber] = useState(0)
    const [loaded,setLoaded] = useState(false)
  
    const imagesPerPage = 9;
    const pageVisited = pageNumber * imagesPerPage;
    const pageCount = Math.ceil(docs.length/imagesPerPage);
    
    function handleLoaded () {
      setLoaded(false)
    }
    function changePage(selected){
        setPageNumber(selected-1)
        setLoaded(true)
    };

    function handleChoose(){
        setChoose(!choose);
    }

    function handleDel(index){
        if (window.confirm("Delete this image ?")) {
            projectFirestore.collection("images").doc(index).delete();
          } 
    }

    function handleShow(url,id,index){
        if(choose === true)
            handleDel(id)
        else
            {
                setSelectedIndex(index + imagesPerPage*pageNumber)
                setSelectedImg(url)
            }
    }

    return (
        <div className='grid'>
            {choose?
            
            <div>
                <i className={
                "fa fa-trash-o btn__trash btn__trash--off"
            } onClick={handleChoose}></i>
                <i className={
                    "fas fa-check-square btn__trash btn__trash--off" 
                } onClick={handleChoose}></i>
            </div>
            :
            <i className={
                "fa fa-trash-o btn__trash btn__trash--on"
            } onClick={handleChoose}></i>
        }
            
        <Pagination
          currentPage={pageNumber+1}
          totalPages={pageCount}
          changeCurrentPage={changePage}
          theme="default"
        />

            <div className='imggrid'>
                {docs && 
                docs
                .slice(pageVisited,pageVisited + imagesPerPage)
                .map((doc,index) => (
                    <motion.div 
                    className={choose? 'imggrid__wrap imggrid__wrap--choose':'imggrid__wrap'} 
                    key={doc.id} 
                    layout
                    initial={{opacity: 0}}
                    animate={{opacity: 1}}
                    >
                    <motion.img 
                    initial={{opacity: 0}}
                    animate={{opacity: 1}}
                    transition={{opacity: { duration: 4 }}}
                    src={loaded?  'https://cdn.dribbble.com/users/200146/screenshots/4923970/loading__.gif':doc.url } 
                    alt={doc.name} 
                    onLoad={handleLoaded} 
                    whileHover={
                        choose?
                        { 

                        }
                    :
                        { scale: 1.1 }
                    }

                    onClick={()=> handleShow(doc.url,doc.id,index)
                        }>
                    
                    </motion.img>
                    {choose && 
                    <i 
                        className="fa fa-times-circle-o" 
                        aria-hidden="true"
                        onClick={()=> handleDel(doc.id)}>
                    </i>}
                    </motion.div>
                ))}
            </div>
            
            <Pagination
          currentPage={pageNumber+1}
          totalPages={pageCount}
          changeCurrentPage={changePage}
          theme="default"
        />
        </div>
    )
}

export default ImageGrid
