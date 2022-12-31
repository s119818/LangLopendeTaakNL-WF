import React, { useState } from 'react';
import './App.css';
import { Outlet, createBrowserRouter, RouterProvider, Route, NavLink } from "react-router-dom";
import Home from './Components/Home/Home';
import Header from './Components/Header/Header';
import { Portfolio } from './Components/Portfolio/Portfolio';
import {Contact }from './Components/Contact/Contact';
import FilterList from './Components/labo4-filtering/src/App'
import { SlotMachine } from './Components/labo4-slots/src/App';
import CounterList from './Components/labo4-counterlist/src/App'
import Interval from './Components/labo5-interval/src/App';
import { Footer } from './Components/Footer/Footer';
import { CounterlistPage } from './Pages/CounterlistPage';
import { IntervalPage } from './Pages/IntervalPage';
import { SlotsPage } from './Pages/SlotsPage';
import { FilteringPage } from './Pages/FilteringPage';
import { Shoppinglist } from './Components/Labos/Shoppinglist/Shoppinglist';
import { QuizApp } from './Components/Labos/Quizapp/Quizapp';
import { TodoPage } from './Pages/TodoPage';



const Root = () => {
  const [counter,SetCounter] = useState<number>(0)
    
    const SetColor = () => 
    {
        if (counter == 2) {
            SetCounter(0)
        }
        else
        {
        SetCounter((prevcounter: number) => prevcounter + 1)
        }
    }

    return (
        <div className="container" style={{marginTop: 0}}>

            <Header counter={counter} SetColor={SetColor}></Header>

            <div className="content">
                <Outlet/>
            </div>

            <Footer counter={counter}></Footer>
        </div>
    );
}






function App() {
  const router = createBrowserRouter([
    {
        path: "/",
        element: <Root/>,
        children: [
            {
                path: "",
                element: <Home/>
            },
            {
                path: "portfolio",
                element: <Portfolio/>
            },
            {
                path: "contact",
                element: <Contact/>
              },

              {
                path: "/portfolio/filter",
                element: <FilteringPage/>
              },
              {
                path: "/portfolio/slots",
                element: <SlotsPage/>
              },
              {
                path:"/portfolio/counterlist",
                element: <CounterlistPage />
              },
              {
                path: "/portfolio/Interval",
                element: <IntervalPage/>
              },
              {
                path: "/portfolio/shoppinglist",
                element: <Shoppinglist/>
              },
              {
                path: "/portfolio/quizapp",
                element: <QuizApp/>
              }
              ,
              {
                path: "/portfolio/todo",
                element: <TodoPage/>
              }
            ]
        }
    ]);
  return (
    <><div>
      <RouterProvider router={router} />
    </div>
    </>

  );
}

export default App;
