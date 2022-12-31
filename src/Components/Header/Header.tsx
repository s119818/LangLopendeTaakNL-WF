import React, { useState }  from "react";
import { NavLink } from "react-router-dom";
import './Header.css'


export const Header = ({counter,SetColor}:{counter:number,SetColor:()=>void}) =>{

  let HeaderColors = ['lightgrey', '#515561']

    return(
        <header style={{backgroundColor: HeaderColors[counter]}}>
            <div className="navigation">
            
              <NavLink  to="/" ><button className='navigationbtn'>Home</button></NavLink>
              <NavLink  to="/portfolio"><button className='navigationbtn'>Portfolio</button></NavLink>
              <NavLink  to="/contact"><button className='navigationbtn'>Contact</button></NavLink>
              
                <button className="btn-change-color" onClick={()=>SetColor()}>
                Change Color
              </button>
              
              
              
          </div>

          <h1>Portfolio Nassim Lazam</h1>
        </header>
        
    )

}

export default Header;