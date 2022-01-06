import React from 'react'
import useStorage  from '../hooks/useStorage'
import {useEffect} from 'react'
import '../css/progress/style.css'

function ImageProgressBar({file,setFile}) {
    const {url, progress} = useStorage(file);
    console.log(progress,url);

    useEffect(() => {
        if(url){
            setFile(null)
        }
    }, [url, setFile])
    
    return (
        <div className='progressbar'>Loading...
        <div></div><div></div><div></div><div></div>
        </div>
    )
}

export default ImageProgressBar
