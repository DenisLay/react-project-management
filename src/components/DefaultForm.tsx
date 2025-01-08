import React, { useState } from 'react';
import { Button, TextInput, Heading } from 'evergreen-ui';
import '../styles/form.scss';
import AuthFormControls from './AuthFormControls.tsx';

interface DefaultFormProps {
    theme?: string;
    onSubmit: () => void;
    header: React.ReactNode;
    body: React.ReactNode;
    footer: React.ReactNode;
}

const DefaultForm: React.FC<DefaultFormProps> = ({ theme, onSubmit, header, body, footer }) => {
    const appliedTheme = theme || 'default-form';
        
    return (
        <form 
            className={appliedTheme}
            onSubmit={(e) => { e.preventDefault(); onSubmit(); }}
        >
            <div className={`${appliedTheme}__header`}>
                { header }
            </div>
            <div className={`${appliedTheme}__body`}>
                { body }
            </div>
            <div className={`${appliedTheme}__footer`}>
                { footer }
            </div>
        </form>
    )
}

export default DefaultForm;