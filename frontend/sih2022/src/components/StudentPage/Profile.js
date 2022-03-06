import { border, display } from '@mui/system'
import React from 'react'
import { Bar , Pie } from 'react-chartjs-2'
import LineChart from '../../charts/LineChart'
import Chart from 'chart.js/auto';
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
   <div>

    <div>
        <h1>S Graph</h1>
   <div className='succeschart_student'>
<LineChart

labels={["UT1" , "UT2" , "Half yearly" , "UT3" , "UT4" , "Annual" ]} datasets={[
       {
             label: "Maths",
             data: [9 , 8 , 8 , 9 , 7 , 9],
             backgroundColor: 'Green',
             borderColor: '#05deb3'
           },
           {
            label: "English",
            data: [7 , 10 , 8.2 , 6 , 9 , 8.6],
            backgroundColor: 'red',
            borderColor: '#05deb3'
          },
          {
            label: "Hindi",
            data: [8 , 10 , 7.5 , 8.4 , 8.1],
            backgroundColor: 'blue',
            borderColor: '#05deb3'
          },
          {
            label: "Science",
            data: [8 , 10 , 8.8 , 6 , 9],
            backgroundColor: 'yellow',
            borderColor: '#05deb3'
          },
          {
            label: "Social Science",
            data: [5 , 6 , 6.8 , 5.5 , 8 , 7.6],
            backgroundColor: 'voilet',
            borderColor: '#05deb3'
          },
          {
            label: "Sanskrit",
            data: [9 , 10 , 9 , 9.5 , 9.6 , 8.9],
            backgroundColor: 'pink',
            borderColor: '#05deb3'
          },
    
]} />
           </div>
           <div className='succeschart_student'>
               
           <Pie  data={{
       labels: [ "a1" , "a2" , "a3"],
       datasets: [{
           data: [10 , 50 , 5],
           backgroundColor: [
               "yellow" ,
               "green",
               "Red",
           ]
       }]
   }}  />
               </div>
           </div>
   </div>
   <div>

   </div>
   </>
  )
}
