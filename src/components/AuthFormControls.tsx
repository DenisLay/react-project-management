import React, { useState } from 'react';
import { Button } from 'evergreen-ui';

interface AuthFormControlsProps {
    type: 'signIn' | 'signUp' | 'custom';
    actions: { onForgotPassword: (e) => void, onRegister: () => void };
}

interface SignInFormControlsProps {
    actions: { onForgotPassword: (e) => void, onRegister: () => void };
}

const SignInFormControls: React.FC<SignInFormControlsProps> = ({ actions }) => {
    return (
        <>
            <Button 
                appearance="minimal"
                onClick={actions.onForgotPassword}
            >
                Forgot Password
            </Button>
            <Button type="submit">Sign In</Button>
            <Button 
                appearance="minimal"
            >
                Register
            </Button>
        </>
    )
}

const AuthFormControls: React.FC<AuthFormControlsProps> = ({ type, actions }) => {
    return (
        <>
            <SignInFormControls actions={actions} />
        </>
    )
}

export default AuthFormControls;