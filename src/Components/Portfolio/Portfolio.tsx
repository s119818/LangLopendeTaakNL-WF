import React from 'react';
import { NavLink } from "react-router-dom";
import { Footer } from '../Footer/Footer';
import Header from '../Header/Header';
import FilterList from '../labo4-filtering/src/App'
import './Portfolio.css'



export const Portfolio = ()=>{
    

    return(
        <>
        
        <h1>Portfolio</h1>
        <p className='p-portfolio'>Here are a few projects I made this semester. These projects are made in React.js.</p>

        <main>
            <article className='articlePortfolio'>
                
                <h3>Filtering</h3>
                <p>A simple filter application where you can filter on name, age and year.</p><br />
                
                <NavLink to={'filter'}><button className='btn-portfolio'>Go to project</button></NavLink>
                
            </article>

            <article className='articlePortfolio'>
                
                <h3>Slots</h3>
                <p>A simple slot game with three slots that keeps track of your balance.</p><br />

                <NavLink to={'slots'}><button className='btn-portfolio'>Go to project</button></NavLink>

            </article>

            <article className='articlePortfolio'>
                
                <h3>Counterlist</h3>
                <p>A simple app that adds up each counter and you can add counters.</p><br />
                
                <NavLink to={'counterlist'}><button className='btn-portfolio'>Go to project</button></NavLink>

            </article>

            <article className='articlePortfolio'>
                
                <h3>Interval</h3>
                <p>A simple app with a timer, current time and two random numbers</p><br />

                <NavLink to={'Interval'}><button className='btn-portfolio'>Go to project</button></NavLink>

            </article>

            <article className='articlePortfolio'>
                <h2>Shoppinglist</h2>
                <p>This is a shoppinglist where you can and remove items from a list.</p><br />

                <NavLink to={'shoppinglist'}><button className='btn-portfolio'>Go to project</button></NavLink>

            </article>

            <article className='articlePortfolio'>
                <h2>QuizApp</h2>
                <p>A simple Quiz app with as many questions as you want</p><br /><br />

                <NavLink to={'quizapp'}><button className='btn-portfolio'>Go to project</button></NavLink>

            </article>

            <article className='articlePortfolio'>
                <h2>To do app</h2>
                <p>A simle to do app where you can write tasks and mark as done</p><br />

                <NavLink to={'todo'}><button className='btn-portfolio'>Go to project</button></NavLink>

            </article>

            <article className='articlePortfolio'>
                <h2>Multiselect</h2>
                <p>A simple app that shows the selected colors.</p><br /><br />

                <NavLink to={'counterlist'}><button className='btn-portfolio'>Go to project</button></NavLink>

            </article>

        </main>

        
        </>
        
    )
}

export default Portfolio;