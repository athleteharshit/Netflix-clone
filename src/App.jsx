import React, { createContext } from "react";
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
// import CuseEffect from "./components/CuseEffect";
import './index.css';
// import Stylesheet from './components/Stylesheet';
// import From from './components/Form';
// import Routing from './components/Routing';
// import LifeCycleA from './components/LifeCycleA';
// import Increment from './components/Increment';
// import Layout from './components/material/Layout';
// import Header from './components/Header';
// import CHeader from './components/CHeader';
// import State from './components/State';
// import EventHandling from './components/EventHandling';
// import EventBinding from './components/EventBinding';
// import ToDoList from './components/project/ToDoList';
// import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
// import Bootstrap from '. /Bootstrap';
// import Context from "./components/Context";
// import UseContext from "./components/UseContext";
// import UseEffect from './components/UseEffect';
// import Pokemon from './components/Pokemon';
import About from './components/About';
import Contact from './components/Contact';
import Service from './components/Service';
import Error from './components/Error';
import { Route, Switch, Redirect } from 'react-router-dom';
import Menu from "./components/Menu";
import User from "./components/User";
import Search from "./components/Search";

// const firstName = createContext();
// const lastName = createContext();

const App = () => {
  const Name = () => <h1>hello i am Name page</h1>
  return (
    <>
      {/* <firstName.Provider value={"Pubg"}>
        <lastName.Provider value={"gamer"}>
        <UseContext />
        </lastName.Provider>
      </firstName.Provider> */}
      <Menu />
      <Switch>
        <Route exact  path='/' component={About}/>
        <Route exact path='/contact' component={Contact} />
        <Route exact path='/service' render={() => <Service name="service"/>}/>
        <Route path='/contact/name' component={Name} />
        <Route path='/user/:fname/:lname' component={User}/>
        <Route exact path='/search' component={Search}/>
        {/* <Route  component={Error}/> */}
        <Redirect to="/"/>
      </Switch>
    </>
  );
};

export default App;
// export { firstName, lastName };
