import React from 'react'
import { useState } from 'react';
import ImageProgressBar from './ImageProgressBar';
import '../css/upload/style.css'

function ImageUploader() {
    const [file, setFile] = useState(null);
    const [error, setError] = useState(null);

    const types = ['image/png', 'image/jpeg' ]

    function handleChange (e){
        e.preventDefault();
        let selected = e.target.files[0];

        if (selected && types.includes(selected.type)) {
            setFile(selected);
            setError('')
        }
        else{
            setFile(null);
            setError('Xin hãy chọn đúng định dạng ảnh (png hoặc jpg)')
        }
    }

    return (
        <div className='imgupload'>
            <form className='imgupload__form'>
                <label>
                    <input type="file" onChange={handleChange} />
                    <span>+</span>
                </label>
                <div >
                    {error && <div className='error'>{error}</div>}
                    {file && <div>{file.name}</div>}
                    {file && 
                    <ImageProgressBar file={file} setFile={setFile}/>}
                </div>
            </form>
        </div>
    )
}

export default ImageUploader