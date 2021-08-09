import './App.css';
import SignUp from './components/auth/SignUp';
import SignIn from './components/auth/SignIn';
import CenterContainer from './components/helper/CenterContainer';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
function App() {
    return (
        <>
            <Router>
                <Switch>
                    <Route path='/signup'>
                        <CenterContainer>
                            <SignUp />
                        </CenterContainer>
                    </Route>
                    <Route path='/signin'>
                        <CenterContainer>
                            <SignIn />
                        </CenterContainer>
                    </Route>
                </Switch>
            </Router>
        </>
    );
}

export default App;
