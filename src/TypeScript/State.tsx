import React, { useState } from 'react';
import { Button, TextField } from "@material-ui/core";
import List from "./List";
import Form from './Form';

export interface IState {
    people:{
        name:String,
        age:number,
        url:String,
        note?:String,
    }[]
}

function State() {

    const [people, setPeople] = useState<IState["people"]>([
        {
            name:"Fahad Mahmood",
            url:"fahadmahmood.com",
            age:21,
            note:"I am a good boy"
        }
    ]);

    return (
        <div>
            <h1>Form</h1>
             <List people={people}/>
             <Form people={people} setPeople={setPeople}/>
        </div>
    )
}

export default State
