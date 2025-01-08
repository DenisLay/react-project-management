import React, { useState } from 'react';
import { Button } from 'evergreen-ui';

interface SignInFormControlsProps {
    actions: { onForgotPassword: () => void, onSubmit: () => void, onRegister: () => void }
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
            <Button 
                type="submit"
                onClick={actions.onSubmit}
            >
                Sign In
            </Button>
            <Button 
                appearance="minimal"
                onClick={actions.onRegister}
            >
                Register
            </Button>
        </>
    )
}

export default SignInFormControls;