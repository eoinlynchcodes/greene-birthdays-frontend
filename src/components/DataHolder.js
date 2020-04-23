import React from 'react';

export const DataHolder = (props) => {

    return (
        <div>
     <h3>{props.item.name}</h3>
     <h3>{props.item.dateOfBirth}</h3>
     <br/>
        </div>
    )
}