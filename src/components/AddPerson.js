import React, { useState } from 'react';
import axios from 'axios';

export const AddPerson = () =>{

    const [ formData, setFormData ] = useState({
        name: '',
        dateOfBirth: ''
    })

    const handleChange = event => {
        setFormData({
            ...formData,
            [event.target.name]: event.target.value
        });
    };

    const handleSubmit = (event) => {
        debugger
        event.preventDefault();
        axios.post('http://localhost:5000/addperson', formData)
        .then(response => {
            setFormData(response.data);
        })
        .catch(error => {
            console.log(error);
        })
    }

    return (
        <form onSubmit={(event) => handleSubmit(event)}><h3>Add People Here:</h3>
            <label>Name:</label>
            <input 
            type="text"
            name="name"
            placeholder="Name:"
            onChange={event => handleChange(event)}
            />
            <br/>
            <label>Date of Birth:</label>
            <input
            type="date"
            name="dateOfBirth"
            placeholder="Date of Birth:"
            onChange={event => handleChange(event)}
            />
            <br/>
            <button>Add to List</button>
        </form>
    )
}