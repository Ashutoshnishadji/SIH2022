import { display } from '@mui/system'
import React from 'react'

export default function Profile() {
    var indo =  {
        ID: " 2210026132",
        NAME: " AADITYA KUMAR",
        FNAME: " RAMESH KUMAR DEWANGAN",
        MNAME: " MALTI",
        DOB: " 02-06-2007",
        Cat: "OBC",
      }
  return (
   <>
   <div>
   <h1 id='heading'>Govt. H. S. S. Kanki</h1>
   <div id='info_academic'>
<div>
    Dicecode: 181132
</div>
<div>
    Academi Number: 2215020201
</div>
   </div>
   </div>
 
   <div id='infosection'>
       <div id='info2'>      <img className='p_mage' src="https://vidia.cgbse.nic.in/thumb/9/18/photo/P2210026132.jpg" alt="" />
      
      <div id="ac_info">
      <div>
              Name: <span>{indo.NAME}</span>
           </div>
          <div>
              Class: 9th
          </div>
      <div>
               Admission No: 3345
           </div>
           <div>
               Admission date: 26-05-2016
           </div>
      </div>
       </div>
   <div id="info">
           
           <div>
               Roll No: <span>{indo.ID}</span>
           </div>
           <div>
               Father's Name: <span>{indo.FNAME}</span>
           </div>
           <div>
             Mother's Name: <span>{indo.MNAME}</span>
           </div>
           <div>
               Date Of Birth: <span>{indo.DOB}</span>
           </div>
           <div>
               Category: <span>{indo.Cat}</span>
           </div>
          
         
           <div>
               Address: Kharora
           </div>
           <div>
               Contact: 9753318620
           </div>
           </div>
   </div>
   </>
  )
}
