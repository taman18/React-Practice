import React from 'react';

const HigherOrderComponent = <P extends object>(Component: React.ComponentType<P>) => {
    return (props: P) => (
        <>
            <h1>Hello</h1>
            <Component {...props} />
        </>
    );
};

export default HigherOrderComponent;
