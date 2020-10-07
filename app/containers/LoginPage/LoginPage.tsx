import React, { useState } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';

interface LoginPageProps {
    LoginPage:any
}
export const LoginPage: React.FC<LoginPageProps>=props =>{}
 
function loginPage(props) {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleChangeEmail = (event)=>{
        setEmail(event.target.value);
    }
    const handleChangePassword = (event)=>{
        setPassword(event.target.value);
    }
    const handleSubmit = (event)=>{
        event.preventDefault();
       
    }
    if(props.email)
        return <Redirect to='/cart'/>
    return (<div className="container-fluid">
        <div className="row">
            <div className="col-md-6 offset-md-3">
                <h1>Email: {props.email}</h1>
                <h2>{props.startLogin && 'Loggin....'}</h2>
                <h2>{props.loginFail && 'Login is failed'}</h2>
                <form onSubmit={handleSubmit} style={{ width: '100%', backgroundColor: 'bisque', padding: 10 , margin: 20}}>
                    <div className="form-group">
                        <label htmlFor="exampleInputEmail1">Email address</label>
                        <input disabled={props.startLogin} onChange={handleChangeEmail} type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" />
                        <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
                    </div>
                    <div className="form-group">
                        <label htmlFor="exampleInputPassword1">Password</label>
                        <input disabled={props.startLogin} onChange={handleChangePassword} type="password" className="form-control" id="exampleInputPassword1" placeholder="Password" />
                    </div>
                    <div className="form-check">
                        <input  type="checkbox" className="form-check-input" id="exampleCheck1" />
                        <label className="form-check-label" htmlFor="exampleCheck1">Check me out</label>
                    </div>
                    <button disabled={props.startLogin} type="submit" className="btn btn-primary">Submit</button>
                </form>
            </div>
        </div>
    </div>)
}

// const mapStateToProps = state =>({
//     email: state.email,
//     startLogin: state.startLogin,
//     loginFail: state.loginFail
// })

// const mapDispatchToProps = dispatch =>({
//     dispatch
// })

export default LoginPage;