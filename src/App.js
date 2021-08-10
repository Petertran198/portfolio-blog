import './App.css';
import SignUp from './components/auth/SignUp';
import SignIn from './components/auth/SignIn';
import CenterContainer from './components/helper/CenterContainer';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './components/blog/Home';
import PublicRoute from './route/PublicRoute';
import PrivateRoute from './route/PrivateRoute';
import Header from './components/blog/Header';
import NavMenu from './components/menu/NavMenu';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
    return (
        <>
            <Router>
                <ToastContainer />
                <PublicRoute exact path='/' component={Home}></PublicRoute>
                <NavMenu />
                <Switch>
                    <PublicRoute
                        path='/signup'
                        restricted={false}
                        needContainer={true}
                        component={SignUp}
                    ></PublicRoute>
                    <PublicRoute
                        path='/signin'
                        restricted={false}
                        needContainer={true}
                        component={SignIn}
                    ></PublicRoute>
                </Switch>
            </Router>
        </>
    );
}

export default App;
