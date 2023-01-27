// import { dblClick } from '@testing-library/user-event/dist/click';
import React, { useEffect, useState } from 'react'
import './C1.css'
import C2 from './C2'
export default function C1() {
    const [data, setData] = useState([]);
    
    const getData=()=>{
        fetch('http://localhost:3000/user'
        ,{
          headers : { 
            'Content-Type': 'application/json',
            'Accept': 'application/json'
           }
        }
        )
          .then(function(response){
            //console.log(response)
            return response.json();
          })
          .then(function(myJson) {
            console.log(myJson);
            setData(myJson)
            
          });
      }

      

    useEffect(
        ()=>{
            getData()
        },[]
    )

        
        // const sorting=(sortby)=>{
        //   console.log(sortby)
          
        //     if(sortby=="sortByName"){
        //       setData(data.sort((a, b) => a.Name.localeCompare(b.Name)));
        //       console.log(data);
        //     }
        // }

        const sorting = (sortby) => {
          let data1 = [...data];
  
          if (sortby === "sortByName") {
              data1.sort((a, b) => { return a.Name.localeCompare(b.Name) })
              // console.log(data);
              setData(data1);
          }
          else if (sortby === "sortByAge") {
              data1.sort((a, b) => { return new Date(a.Dob).getFullYear() - new Date(b.Dob).getFullYear(); })
              // console.log(data);
              setData(data1);
          }
      }
        
 return (
    <div>
        <table>
        <th>Name</th>
        <th>Date of birth</th>
        {
          data.map(item=>
            <tr>
              <td>{item.Name}</td> 
              <td>{item.Dob}</td>               
            </tr>
          )
        }
       </table>

    <C2 sorting={sorting}/>
        
    </div>
  )
}
