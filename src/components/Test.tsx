import React from 'react';

interface IProps {
    name: string,
    id: number
}

const Test = ({name, id}: IProps) => {
    return (
        <div className="Test">
            {
                id ? <div>{name}</div> : <div>fuck</div>
            }
        </div>
    );
}

export default Test;
