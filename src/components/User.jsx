import React from 'react';
import { useParams, useLocation, useHistory } from 'react-router-dom';

// const User = ({ match }) => {
//     return(
//         <>
//         <h1>hello I am {match.params.fname} page</h1>
//         </>
//     );
// }
const User = () => {
    const { fname, lname } = useParams();
    const location = useLocation();
    const history = useHistory();
    console.log(location);
    console.log(history.goBack);
    return(
        <>
        <h1>hello I am {fname} {lname} page</h1>
        <h1>location is {location.pathname}</h1>
        <button onClick={() => history.push('/')}>Homepage</button>
        {location.pathname === `/user/harshit/gutpa` ? 
        <button onClick={() => history.goBack()}>back</button> : null}
        </>
    );
}

export default User;