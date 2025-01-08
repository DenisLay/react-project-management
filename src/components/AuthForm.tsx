import React, { useState } from 'react';
import { Button, TextInput, Heading } from 'evergreen-ui';
import '../styles/form.scss';
import AuthFormControls from './AuthFormControls.tsx';

interface AuthFormProps {
    theme?: string;
    onSubmit: (params: { email: string, password: string }) => void;
    onForgotPassword: (e) => void;
    onRegister: () => void;
}

const AuthForm: React.FC<AuthFormProps> = ({theme, onSubmit, onForgotPassword, onRegister}) => {
    const [inputEmail, setInputEmail] = useState<string>('');
    const [inputPassword, setInputPassword] = useState<string>('');
    const appliedTheme = theme || 'default-form';
        
    return (
        <form 
            className={appliedTheme}
            onSubmit={(e) => { e.preventDefault(); onSubmit({ email: inputEmail, password: inputPassword }) }}
        >
            <div className={`${appliedTheme}__header`}>
                <Heading size={700}>Sign In</Heading>
            </div>
            <div className={`${appliedTheme}__body`}>
                <TextInput 
                    value={inputEmail}
                    onChange={e => setInputEmail(e.target.value)}
                    placeholder={'Email'}
                    required
                />
                <TextInput 
                    value={inputPassword} 
                    onChange={e => setInputPassword(e.target.value)} 
                    placeholder={'Password'} 
                    required
                    type={'password'}
                />
            </div>
            <div className={`${appliedTheme}__footer`}>
                <AuthFormControls type={'signIn'} actions={{ onForgotPassword: onForgotPassword, onRegister: onRegister }} />
            </div>
        </form>
    )
}

export default AuthForm;