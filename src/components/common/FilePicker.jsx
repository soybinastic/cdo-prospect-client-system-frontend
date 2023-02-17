import React, { useRef, useState } from 'react'

export const FilePicker = ({ 
    icon, 
    getData, 
    indicateName = "Choose file", 
    fileOpts }) => {

    const fileRef = useRef()
    const [files, setFiles] = useState([])

  return (
    <div>
        <div className='flex justify-start items-center cursor-pointer' onClick={() => {
            fileRef.current.click()
            }}>
            { icon }
            <input hidden type={'file'} {...fileOpts} ref={fileRef} onChange={(e) => {
                getData(e.currentTarget.files)
                setFiles([...e.currentTarget.files])
            }}/>
            <p className='text-xs text-black'>{ indicateName }</p>
        </div>
        <div className="flex">
            {files.map((file, i) => (
                <img key={i} className='rounded w-[20px] h-[20px] mr-2' src={URL.createObjectURL(file)} alt="" />
            ))}
        </div>
    </div>
  )
}
