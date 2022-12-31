import { Footer } from "../Footer/Footer";
import Header from "../Header/Header";
import './Home.css'
import {AiFillStar} from 'react-icons/ai'

const Home = () => {
  

    return (
        <>
           

        <section className="homeSection">

        <h3>About me</h3>

        <article className="aboutMe"> 

        <p >The creator of this web application is me, Nassim Lazam. I am a young guy of 21 years old. I study programming at AP Hogeschool. I chose this course because my interest in programming is quite high. For the Web framework course I was given the task of making a portfolio. For me, this is the first time I have to create a website with React. Other than that I have no experience with it. This job therefore also gives me the opportunity to demonstrate and optimize my skills and knowledge. Besides my interest in ICT, I also like football, cooking and fitness. This is more relaxation for me.</p>
        <img   className="imgMe" src="/pictures/AfbeeldingNassimLazam.jpg" alt="nassim img" /> 

        </article>

        <article>

        <h3>Skills</h3>
        <table>
  <tr>
    <th>Programmeertaal</th>
    <th></th>
    
  </tr>
  <tr>
    <td>C#</td>
    <td><AiFillStar></AiFillStar><AiFillStar></AiFillStar><AiFillStar></AiFillStar><AiFillStar></AiFillStar><AiFillStar></AiFillStar></td>
    
  </tr>
  <tr>
    <td>TypeScript</td>
    <td><AiFillStar></AiFillStar><AiFillStar></AiFillStar><AiFillStar></AiFillStar><AiFillStar></AiFillStar></td>
    
  </tr>

  <tr>
    <td>JavaScript</td>
    <td><AiFillStar></AiFillStar><AiFillStar></AiFillStar><AiFillStar></AiFillStar> </td>
    
  </tr>
  <tr>
    <td>React JS</td>
    <td><AiFillStar></AiFillStar><AiFillStar></AiFillStar><AiFillStar></AiFillStar></td>
    
  </tr>

  <tr>
    <td>MySql</td>
    <td><AiFillStar></AiFillStar><AiFillStar></AiFillStar><AiFillStar></AiFillStar><AiFillStar></AiFillStar></td>
    
  </tr>

  <tr>
    <td>CSS</td>
    <td><AiFillStar></AiFillStar><AiFillStar></AiFillStar><AiFillStar></AiFillStar><AiFillStar></AiFillStar></td>
    
  </tr>

  <tr>
    <td>Html</td>
    <td><AiFillStar></AiFillStar><AiFillStar></AiFillStar><AiFillStar></AiFillStar><AiFillStar></AiFillStar></td>
    
  </tr>
</table>
        </article>
        
        
          </section>   
     


        </> 
    );
  }
  

  export default Home;