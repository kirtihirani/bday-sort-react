import React from 'react'
import './C2.css'
import { useState } from 'react'
export default function C2({sorting}) {

  const [selected, setSelected] = useState('')
const submit=(e)=>{
    e.preventDefault();
    console.log(selected);
    sorting(selected)
}

  return (
    
        <div className='form'>
        <form onSubmit={submit}>
        <input type="radio" onChange={(e)=> setSelected(e.target.value)} value="sortByName" name="sort"  / >
        <label className='labels'>Sort By Name</label>
        <input type="radio" onChange={(e)=> setSelected(e.target.value)} value="sortByAge" name="sort"  />
        <label className='labels' >Sort By Age</label>
        <button>Click To Sort</button>
    </form>
    
        
        </div>
    
    
  )
}


