import React from "react"
import {useTypewriter,Cursor} from 'react-simple-typewriter'

export default function Typewriter(){
    const [text] = useTypewriter({
        words: [' Educator','Mentor', 'Author','Motivational Speaker','God of Inorganic Chemistry'],
        loop:true,
        typeSpeed: 90,
        deleteSpeed:50,
       })

    return(
        <>
        
        <h1 style={{margin:'50px'}}>I m a 
        <span style={{fontWeight:'bold' ,color:'green'}}>{text}</span>
        <span><Cursor/></span>
        </h1>
        
        
        </>
    )
}