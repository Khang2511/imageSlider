import React from 'react'
import useStorage  from '../hooks/useStorage'
import {useEffect} from 'react'
import '../css/progress/style.css'

function ImageProgressBar({file,setFile}) {
    const {url, progress} = useStorage(file);


    useEffect(() => {
        if(url){
            setFile(null)
        }
    }, [url, setFile])
    
    return (
        <div className='progressbar'>
            <p>Loading...</p>
        <div></div><div></div><div></div><div></div>
        </div>
    )
}

export default ImageProgressBar
