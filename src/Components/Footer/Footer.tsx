import React, { useState }  from "react";
import './Footer.css'
import Header from "../Header/Header";


export const Footer = ({counter}:{counter:number}) =>{
    let HeaderColors = ['lightgrey', '#515561'];
    
    return(
      <div  className="footercontainer" style={{backgroundColor: HeaderColors[counter]}}>
        
        <p  >©Nassim Lazam | Student Grad PRO AP-Hogeschool | 2022-2023</p>
        
      </div>
        
        
    )

}