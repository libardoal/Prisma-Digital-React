import * as React from 'react';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../fire';
import "../assents/css/styles/login/login.css";
import LogoPrisma1 from "../assents/imgs/logo-prisma.png";

const Register = ({setAuthState, setUser}) => {
    const [email, setEmail] = React.useState('');
    const [password, setPassword] = React.useState('');

    function switchLogin() {
        setAuthState('login');
    }

    const handleRegister = () => {
        if(email !== null && password !== null) {
            createUserWithEmailAndPassword(auth, email, password)
            .then(() => {
                setUser(email);
                setAuthState('home')
            })
            .catch((err) => {
                alert(err);
            })
        }
    }

    return (
        <div className='login'>
            <div className="logo_backgrnd1">
        <img src={LogoPrisma1} alt="Logo_Prisma1" className="logo_prisma1" />
      </div>
      <hr className="barra1"></hr>
            <h2>Register Page</h2>
            <div className="login__container">
            <div label="Email address">
            <input className="email_input"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                type="email"
                placeholder='Email'
            />
            </div>
            <div label="Password">
            <input className="password_input"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                type="password"
                placeholder='Password'
            />
            </div>

            <button onClick={handleRegister} className="login_input">SignUp</button>
            <h3>Already have an Account <span onClick={switchLogin}>Login</span> </h3>
            </div>
        </div>
    )
}

export default Register;