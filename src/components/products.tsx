import axios from 'axios';
import React, { useState } from 'react'

type Props = {}

export default function Products({}: Props) {
    const [images, setimages] = useState<String[]>([])
  return (
    <div>
        <input type="file" onChange={async(e)=>{
            const fd=new FormData();
            fd.append("file",e.target.files![0])
            const data = await axios.post(`http://localhost:8085/api/save`, fd)
            setimages([...images,data.data[0]])
        }} />
        <div>
            {
                images.map(img=>(
                    <div key={String(img)}>
                        <img src={String(img)} alt="" />
                    </div>
                ))
            }
        </div>
        <div>
            Heman 
        </div>
    </div>
  )
}