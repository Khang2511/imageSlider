import React from 'react'
import {useState} from 'react'
import useFirestore from '../hooks/useFireStore'
import '../css/grid/style.css'
import { projectFirestore } from '../firebase/config';
import {motion} from 'framer-motion'
import ReactPaginate from 'react-paginate';
function ImageGrid({setSelectedImg}) {
    const {docs} = useFirestore('images')
    const [choose,setChoose] = useState(false)
    const [pageNumber, setPageNumber] = useState(0)

    const imagesPerPage = 9;
    const pageVisited = pageNumber * imagesPerPage;

    const pageCount = Math.ceil(docs.length/imagesPerPage);

    function changePage({selected}){
        setPageNumber(selected)
    };

    function handleChoose(){
        setChoose(!choose);
        console.log(choose)
    }

    function handleDel(index){
        projectFirestore.collection("images").doc(index).delete();
    }
<i class="fa-light fa-trash-can-check"></i>
    return (
        <div className='grid'>
            <i className={choose? 
            "fas fa-trash-alt btn__trash btn__trash--off" 
                        :
            "fas fa-trash-alt btn__trash btn__trash--on"
        } onClick={handleChoose}></i>

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
            <div className='imggrid'>
                {docs && 
                docs
                .slice(pageVisited,pageVisited + imagesPerPage)
                .map((doc,index) => (
                    <motion.div className='imggrid__wrap' key={doc.id} 
                    layout
                    // whileHover={{ scale: 1.1 }}
                    whileHover={
                        choose?
                        { scale: 1.2, rotate: 10 }
                    :
                        { scale: 1.1 }
                }

                    >
                    <img 
                    src={doc.url} 
                    alt='uploadimg' 
                    onClick={choose? 
                        ()=> handleDel(doc.id)
                        :
                        () => setSelectedImg(index)
                        }>

                    </img>
                    {choose && 
                    <i 
                        className="fa fa-times-circle-o" 
                        aria-hidden="true"
                        onClick={()=> handleDel(doc.id)}>
                    </i>}
                    </motion.div>
                ))}
            </div>
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
        </div>
    )
}

export default ImageGrid
