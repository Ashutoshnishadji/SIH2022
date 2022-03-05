import React from "react";
import './student.css'
export default function Studentinfo(props) {
    var number = 0;
  return (
    <>
      <tr>
          <td>
             {props.number}
          </td>
        <td id="profileimage">
          <img  src={props.profileimg} alt="" />
        </td>
        <td>
         <span>{props.name}</span>
        </td>
        <td>
          <span>{props.Rollno}</span>
        </td>
      <td>
          <button> SHOW </button>
      </td>
      
       
      </tr>
    </>
  );
}
