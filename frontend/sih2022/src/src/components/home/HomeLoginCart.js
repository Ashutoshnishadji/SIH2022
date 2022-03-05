import React from 'react'
import './HomeLoginCart.css'
import GroupsIcon from '@mui/icons-material/Groups';



export default function HomeLoginCart({icon, text}) {
  return (
    <div className='homeLoginCart'>
         {icon}
        <p>{text}</p>
    </div>
  )
}
