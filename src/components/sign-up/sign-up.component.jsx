import React from 'react';

import './sign-up.styles.scss';

import CustomButton from '../custom-button/custom-button.component';
import FormInput from '../form-input/form-input.component';

import {auth, createUserProfileDocument} from '../firebase/firebase.utils';


class SignUp extends React.Component{
    constructor(props){
        super(props);

        this.state={
            displayName:'',
            email:'',
            password:'',
            confirmPassword:''
        };
    }

    handleSubmit= async event=>{
        event.preventDefault();
        const {displayName,email,password,confirmPassword} = this.state;

        if(password!== confirmPassword){
            alert("Passwords donot match");
            return;
        }

        try{
            const {user} =  await auth.createUserWithEmailAndPassword(email,password);

            createUserProfileDocument(user,{displayName})
            this.state={
                displayName:'',
                email:'',
                password:'',
                confirmPassword:''
            };
        }
        catch(error){
            console.error("Error Creating a new Sign up", error.message);
        }

    }
    handleChange=event=>{
        const {target:{name, value}} = event;

        this.setState({[name]:value});
    }

    render(){
        const {displayName,email,password,confirmPassword} = this.state;
        return(
            <div className="sign-up">
                <h2 className="title"> I don't have an account</h2>
                <span>Sign up with your email and password</span>
                <form className="sign-up-form" onSubmit={this.handleSubmit}>
                    <FormInput
                        handleChange={this.handleChange}
                        name='displayName'
                        label="Display Name"
                        type="text"
                        value={displayName}
                        required
                    />
                      <FormInput
                        handleChange={this.handleChange}
                        label="Email"
                        type="email"
                        name="email"
                        value={email}
                        required
                    />
                      <FormInput
                        handleChange={this.handleChange}
                        label="Password"
                        type="password"
                        name="password"
                        value={password}
                        required
                    />
                      <FormInput
                        handleChange={this.handleChange}
                        label="Confirm Password"
                        type="password"
                        name="confirmPassword"
                        value={confirmPassword}
                        required
                    />
                    <CustomButton type="submit">Sign Up</CustomButton>
                </form>
            </div>
        )
    }
}

export default SignUp;