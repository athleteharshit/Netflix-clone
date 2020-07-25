import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from 'react-router-dom';

const Routing = () => {
    return (
        <>
        {/* <h1>hello Routing</h1> */}
        <Router>
            <div>
                <nav>
                    <ul>
                        <li>
                            <Link to="/home">Hfome</Link>
                        </li>
                    </ul>
                </nav>
            </div>
            <Switch>
                <Route path="/home">
                
                    <Home></Home>
                </Route>
            </Switch>
        </Router>
        </>
    );
}

const Home = () => {
    return <h1>hello, i am home</h1>
}
export default Routing;