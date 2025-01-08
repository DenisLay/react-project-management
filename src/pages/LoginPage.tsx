import React from 'react';
import AuthenticationContainer from '../components/AuthenticationContainer.tsx';

const LoginPage: React.FC = () => {

    const onForgotPassword = (e) => {
        e.preventDefault();
        console.log('new password');
    }

    return (
        <div className={`app-page login-page`}>
            <AuthenticationContainer onForgotPassword={onForgotPassword} theme={'default-form'} />
        </div>
    )
}

export default LoginPage;