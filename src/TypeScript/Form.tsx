import { Button, TextField } from '@material-ui/core'
import React, { useState } from 'react';
import {IState as Props} from "./State";

interface IProps {
    people: Props['people']
    setPeople: React.Dispatch<React.SetStateAction<Props["people"]>>
}


const Form: React.FC<IProps> = ({people, setPeople}) => {
    const [input, setInput] = useState({
        name:"",
        age:"",
        note:"",
        url:"",
    })

    let name,value;
    const handleChange =(e :React.ChangeEvent<HTMLInputElement>): void => {
        name = e.target.name;
        value = e.target.value;
        setInput({...input,[name]:value});
    }

    const handleSubmit = (): void => {
      if(
          !input.name || !input.age || !input.url
      ){
          return
      }
      setPeople([
          ...people,
          {
              name:input.name,
              age:parseInt(input.age),
              url:input.url,
              note:input.note
          }
      ])
      setInput({
        name:"",
        age:"",
        note:"",
        url:"",
      });
    }
    return (
        <div> 
            <div>
            <TextField type="text" label="Name" margin="normal" variant="outlined"
             value={input.name}
             onChange={handleChange}
             name="name"
             />
            <TextField type="text" label="Age" margin="normal" variant="outlined" 
            onChange={handleChange}
            name="age"
            value={input.age}/>
            <TextField type="text" label="Note" margin="normal" variant="outlined" 
            onChange={handleChange}
            name="note"
            value={input.note}/>
            <TextField type="text" label="Image URL" margin="normal" variant="outlined" 
            onChange={handleChange}
            name="url"
            value={input.url}/>
            </div>
            <div>
                <Button variant="contained"
                onClick={handleSubmit}
                >Add noteS</Button>
            </div>
        </div>
    )
}

export default Form
