import './App.css';
import { Navbar } from 'react-bootstrap';
import SignUp from './components/auth/SignUp';
import CenterContainer from './components/helper/CenterContainer';
function App() {
    return (
        <CenterContainer>
            <SignUp />
        </CenterContainer>
    );
}

export default App;
