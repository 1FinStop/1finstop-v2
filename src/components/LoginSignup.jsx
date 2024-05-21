import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { login, signup } from '../redux/actions/authActions';

const LoginSignup = () => {
    const [isLogin, setIsLogin] = useState(true);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const dispatch = useDispatch();

    const handleSubmit = (e) => {
        e.preventDefault();
        if(isLogin){
            dispatch(login(email, password));
        } else {
            dispatch(signup(email, password));
        }
    };

  return (
    <div>
        <h2>{isLogin ? 'Login' : 'Sign up' }</h2>
        <form onSubmit={handleSubmit}>
            <input
                type="email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
            />
             <input
                type="password"
                placeholder="Password"
                value={email}
                onChange={(e) => setPassword(e.target.value)}
            />
            <button type="submit">
                {isLogin? 'Login' : 'Sign up'}
            </button>
        </form>
        <button onClick={() => setIsLogin(!isLogin)}>
            {isLogin ? 'Switch to Sign up': 'Switch to Login'}
        </button>
    </div>
  )
}

export default LoginSignup