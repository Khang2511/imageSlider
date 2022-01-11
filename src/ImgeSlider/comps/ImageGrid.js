import React from 'react'
import {useState} from 'react'
import useFirestore from '../hooks/useFireStore'
import '../css/grid/style.css'
import { projectFirestore } from '../firebase/config';
import {motion} from 'framer-motion'

import "react-pagination-library/build/css/index.css";
import ImagePagination from './ImagePagination';

function ImageGrid({setSelectedImg}) {
    const {docs} = useFirestore('images')
    const [choose,setChoose] = useState(false)
    const [pageNumber, setPageNumber] = useState(0)
    

    const imagesPerPage = 9;
    const pageVisited = pageNumber * imagesPerPage;

    const pageCount = Math.ceil(docs.length/imagesPerPage);

    function changePage(selected){
        setPageNumber(selected-1)
        console.log(selected)
    };

    function handleChoose(){
        setChoose(!choose);
    }

    function handleDel(index){
        if (window.confirm("Delete this image ?")) {
            projectFirestore.collection("images").doc(index).delete();
          } 
        
    }

    return (
        <div className='grid'>
            <i className={choose? 
            "fa fa-trash-o btn__trash btn__trash--off" 
                        :
            "fa fa-trash-o btn__trash btn__trash--on"
        } onClick={handleChoose}></i>

        
        <ImagePagination
          currentPage={pageNumber+1}
          totalPages={pageCount}
          changeCurrentPage={changePage}
          theme="default"
        />

{/* 
            <ReactPaginate 
                previousLabel={"Previous"}
                nextLabel={"Next"}
                pageCount={pageCount}
                onPageChange={changePage}
                containerClassName={"paginationBtn"}
                prevLinkClassName={"prevBtn"}
                nextLinkClassName={"nextBtn"}
                disableClassName ={"paginationDisable"}
                activeClassName = {"paginationActive"}
            />
             */}
            <div className='imggrid'>
                {docs && 
                docs
                .slice(pageVisited,pageVisited + imagesPerPage)
                .map((doc,index) => (
                    <motion.div className={choose? 'imggrid__wrap imggrid__wrap--choose':'imggrid__wrap'} key={doc.id} 
                    layout
                    >
                    <motion.img 
                    src={doc.url} 
                    alt={doc.name} 
                    whileHover={
                        choose?
                        { 

                        }
                    :
                        { scale: 1.1 }
                    }

                    initial ={{opacity:0}}
                    animate={{opacity:1}}
                    onClick={choose? 
                        ()=> handleDel(doc.id)
                        :
                        () => setSelectedImg(index)
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
            <ImagePagination
          currentPage={pageNumber+1}
          totalPages={pageCount}
          changeCurrentPage={changePage}
          theme="bottom-border"
        />
        </div>
    )
}

export default ImageGrid
