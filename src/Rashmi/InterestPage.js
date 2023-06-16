import React from 'react'
import Interests from './Interests'
import Add from './Add'
import './InterestPage.css'
import data from './Template.json'

export default function InterestPage() {
  return (
    <div className="first">
        <div className="interest_header">
        <h1>Choose your interests</h1>
        <div className="main">
           {
            data.map(( element,index) =>{
                return(
                    <Interests key={index} img={element.image} title={element.title}/>
                )
            })
           }            
        </div>
        <Add />
    </div>
      
    </div>
  )
}