import React from 'react'

export default function Add(props)
{
    const Red =()=>{
        alert(" Item is added")
    }
    return <div >
        <button onClick={Red}> {props.text} </button>
    </div>
}
