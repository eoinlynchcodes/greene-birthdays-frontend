import React, { useState, useEffect } from 'react';
import { DataHolder } from './DataHolder';
import axios from 'axios';

export const PeopleList = () => {

const [ data, setData ] = useState([]);

const localURL = 'http://localhost:3000';


useEffect(() => {
    axios.get(`${localURL}/familyList`)
    .then(response => {
        console.log(response.data);
        setData(response.data);
    })
    .catch(error => {
        alert(error);
    })
}, [])

    return (
        <div>
            {
                data.map((item, key) => {
                    return <DataHolder item={item} key={key} />
                })
            }
        </div>
    )
}