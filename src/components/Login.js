import React, {useState} from "react";

function Login() {
    const [username, setUsername] = useState(null);
    const [password, setPassword] = useState(null);
    
    const login = () => {

    }
    return <div className="signUp">
        <label>Login</label>
          <input placeholder="Username" onChange={(event) => {
            setUsername(event.target.value);
        }} />

        <input placeholder="Password" onChange={(event) => {
            setPassword(event.target.value);
        }} />
        <button onClick={login}>Login</button>
    </div>
}


export default Login;