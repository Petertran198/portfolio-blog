import './App.css';
import SignUp from './components/auth/SignUp';
import SignIn from './components/auth/SignIn';
import CenterContainer from './components/helper/CenterContainer';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './components/blog/Home';
import PublicRoute from './route/PublicRoute';
import PrivateRoute from './route/PrivateRoute';

function App() {
    return (
        <>
            <Router>
                <Switch>
                    <PublicRoute exact path='/' component={Home}></PublicRoute>
                    <PublicRoute
                        path='/signup'
                        restricted={true}
                        needContainer={true}
                        component={SignUp}
                    ></PublicRoute>
                    <PublicRoute
                        path='/signin'
                        restricted={true}
                        needContainer={true}
                        component={SignIn}
                    ></PublicRoute>
                </Switch>
            </Router>
        </>
    );
}

export default App;
