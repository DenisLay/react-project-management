import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button, Pane, TextInput, toaster, Spinner, Overlay } from 'evergreen-ui';
import { login, register } from '../services/authService.ts';
import DefaultForm from './DefaultForm.tsx';
import { ResponseStatus } from './../services/requestService.ts';
import './../styles/components/AuthenticationContainer.scss';

interface AuthenticationContainerProps {
    onForgotPassword: (e) => void;
    theme?: string;
}

enum FormTypes {
    SignIn,
    SignUp
}

const AuthenticationContainer: React.FC<AuthenticationContainerProps> = ({theme, onForgotPassword}) => {
    const [formType, setFormType] = useState<FormTypes>(FormTypes.SignIn);
    const [email, setEmail] = useState<string>('');
    const [password, setPassword] = useState<string>('');
    const [isInvalid, setIsInvalid] = useState<boolean>(false);
    const [loadingVisibility, setLoadingVisibility] = useState<boolean>(false);
    const navigate = useNavigate();

    const onRegisterSubmit = (e) => {
        e.preventDefault();
        resetCredentials();
        setFormType(FormTypes.SignUp);
    }

    const onLoginSubmit = (e) => {
        e.preventDefault();
        resetCredentials();
        setFormType(FormTypes.SignIn);
    }

    const resetCredentials = () => {
        setEmail('');
        setPassword('');
    }

    const loginAction = async () => {
        setLoadingVisibility(true);
        const data = await login({ email: email, password: password });
        setLoadingVisibility(false);

        if (data.status == ResponseStatus.ERROR) {
            if (data.result.status == 401) {
                toaster.danger(`Wrong credentials.`);
            } else {
                toaster.danger(`${data.result.message}`);
            }

            setIsInvalid(true);
            setTimeout(() => {
                setIsInvalid(false);
            }, 1500);
            
        } else {
            toaster.success('Successfull login!');
            localStorage.setItem('token', data.result.data.token);
            navigate('private/dashboard');
        }
    }

    const signInFormControls = {
        onForgotPassword: (e) => {
            e.preventDefault();
            console.log('forgot password');
        },
        onSubmit: async (e) => {
            e.preventDefault();
            loginAction();
        },
        onRegister: onRegisterSubmit
    }

    const signUpFormControls = {
        onForgotPassword: () => {
            console.log('forgot password');
        },
        onSubmit: async (e) => {
            e.preventDefault();
            setLoadingVisibility(true);
            const data = await register({ email: email, password: password });
            setLoadingVisibility(false);
            
            if (data.status == ResponseStatus.ERROR) {
                toaster.danger(`${data.result.response.data.message}`);

                setIsInvalid(true);
                setTimeout(() => {
                    setIsInvalid(false);
                }, 1500);
                
            } else {
                loginAction();
            }
        },
        onLogin: onLoginSubmit
    }

    return (
        <div className="auth-container">
            <Pane 
                className="auth-container__pane"
                elevation={3}
                width={400}
                height={320}
                display="flex"
                justifyContent="center"
                alignItems="center"
            >
                <div 
                    className="auth-container__form"
                    style={{width: '100%', height: '100%'}}
                >
                    {
                        formType === FormTypes.SignIn?
                            <DefaultForm 
                                onSubmit={
                                    () => console.log('submit')
                                } 
                                header={
                                    <>
                                        <h2>Sign In</h2>
                                        <p>Enter your credentials</p>
                                    </>
                                }
                                body={
                                    <>
                                        <TextInput 
                                            value={email}
                                            onChange={e => setEmail(e.target.value)}
                                            placeholder={'Email'}
                                            required
                                            id='email'
                                            isInvalid={isInvalid}
                                        />
                                        <TextInput 
                                            value={password} 
                                            onChange={e => setPassword(e.target.value)} 
                                            placeholder={'Password'} 
                                            required
                                            type={'password'}
                                            isInvalid={isInvalid}
                                        />
                                    </>
                                }
                                footer={
                                    <>
                                        <Button 
                                            appearance="minimal"
                                            onClick={signInFormControls.onForgotPassword}
                                        >
                                            Forgot Password
                                        </Button>
                                        <Button 
                                            type="submit"
                                            onClick={async (e) => signInFormControls.onSubmit(e)}
                                        >
                                            Sign In
                                        </Button>
                                        <Button 
                                            appearance="minimal"
                                            onClick={signInFormControls.onRegister}
                                        >
                                            Register
                                        </Button>
                                    </>
                                }
                            />
                        :
                            <DefaultForm 
                                onSubmit={() => console.log('submit')}
                                header={
                                    <>
                                        <h2>Sign Up</h2>
                                        <p>Create Account</p>
                                    </>
                                }
                                body={
                                    <>
                                        <TextInput 
                                            value={email}
                                            onChange={e => setEmail(e.target.value)}
                                            placeholder={'Email'}
                                            required
                                            id='email'
                                        />
                                        <TextInput 
                                            value={password} 
                                            onChange={e => setPassword(e.target.value)} 
                                            placeholder={'Password'} 
                                            required
                                            type={'password'}
                                        />
                                    </>
                                }
                                footer={
                                    <>
                                        <Button 
                                            appearance="minimal"
                                            onClick={signUpFormControls.onForgotPassword}
                                        >
                                            Forgot Password
                                        </Button>
                                        <Button 
                                            type="submit"
                                            onClick={signUpFormControls.onSubmit}
                                        >
                                            Sign Up
                                        </Button>
                                        <Button 
                                            appearance="minimal"
                                            onClick={signUpFormControls.onLogin}
                                        >
                                            Login
                                        </Button>
                                    </>
                                }
                            />
                    }
                </div>
                <Overlay isShown={loadingVisibility} children={<div></div>} />
                <Spinner className='auth-container__spinner' display={loadingVisibility ? 'block' : 'none'} size={64} delay={300} />
            </Pane>
        </div>
    )   
}

export default AuthenticationContainer;