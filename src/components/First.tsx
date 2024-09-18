import React from 'react';

// Define props type for First component
interface FirstProps {
    name: string;
}

const First: React.FC<FirstProps> = ({ name }) => {
    return (
        <>
            First Component - Name: {name}
        </>
    );
};

export default First;
