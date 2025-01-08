import React from 'react';
import '../../styles/container.scss';

const Container: React.FC<React.PropsWithChildren> = ({children}) => {
    return (
        <div className="container container-center">
            {children}
        </div>
    )
}

export default Container;