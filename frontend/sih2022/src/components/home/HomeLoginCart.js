import React from 'react'
import './HomeLoginCart.css'
// import GroupsIcon from '@mui/icons-material/Groups';



export default function HomeLoginCart({openModal,icon, text}) {
  return (
    <div onClick={()=>{openModal()}} className='homeLoginCart'>
         {icon}
        <p>{text}</p>
    </div>
  )
}
