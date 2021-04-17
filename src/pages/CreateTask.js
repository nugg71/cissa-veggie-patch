import React, { useState } from 'react';
import Container from '@material-ui/core/Container';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import RemoveIcon from '@material-ui/icons/Remove';
import AddIcon from '@material-ui/icons/Add';
import Icon from '@material-ui/core/Icon';
import { v4 as uuidv4 } from 'uuid';
import {
  authFunctions
} from '../firebase';
import Tasks from './Tasks'

import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    '& .MuiTextField-root': {
      margin: theme.spacing(1),
    },
  },
  button: {
    margin: theme.spacing(1),
  }
}))

const gridStyle = {
    width: "100%",
    margin: "0px"
}

const rightPaperStyle = {
  width: "50vw",
  backgroundColor: "green",
};

const leftPaperStyle = {
  padding: "20px",
  height: "50vh",
  width: "280px",
  margin: "20px auto",
};

const h3Style = {
    color: "#FFFFFF",
    padding: "20px"
}

const buttonStyle = {
    margin: "10px 0"
}

const CreateTask = () => {
    const [mainTask, setMainTask] = useState({main: ''})
    const classes = useStyles()
    const [inputFields, setInputFields] = useState([
        { id: uuidv4(), firstName: '', lastName: '' },
    ]);

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("InputFields", inputFields);
    };

    const handleChangeInput = (id, event) => {
        const newInputFields = inputFields.map(i => {
        if(id === i.id) {
            i[event.target.name] = event.target.value
        }
        return i;
        })
        
        setInputFields(newInputFields);
    }

    const handleAddFields = () => {
        setInputFields([...inputFields, { id: uuidv4(),  task: '', timer: '' }])
    }

    const handleRemoveFields = id => {
        const values  = [...inputFields];
        values.splice(values.findIndex(value => value.id === id), 1);
        setInputFields(values);
    }
    
    // const addSubTask = (event) => {
    //     event.preventDefault();
    //     setSubTasks([...tasks, input]);
    //     setInput(''); // clear up input after click add task
    // }

    return (
    <Container>
      <h1>Add Main Task and SubTasks</h1>
      <form className={classes.root} onSubmit={handleSubmit}>
        {/* <TextField
            name="main"
            label="Add main task"
            variant="filled"
            value={state.mainTask}
            onChange={event => handleChangeInput(, event)}
        /> */}
        { inputFields.map(inputField => (
          <div key={inputField.id}>
            <TextField
              name="task"
              label="Add task"
              variant="filled"
              value={inputField.task}
              onChange={event => handleChangeInput(inputField.id, event)}
            />
            <TextField
              name="time"
              label="Time to complete"
              variant="filled"
              value={inputField.timer}
              onChange={event => handleChangeInput(inputField.id, event)}
            />
            <IconButton disabled={inputFields.length === 1} onClick={() => handleRemoveFields(inputField.id)}>
              <RemoveIcon />
            </IconButton>
            <IconButton
              onClick={handleAddFields}
            >
              <AddIcon />
            </IconButton>
          </div>
        )) }
        <Button
          className={classes.button}
          variant="contained" 
          color="primary" 
          type="submit" 
          endIcon={<Icon></Icon>}
          onClick={handleSubmit}
        >ADD</Button>
      </form>
      
    </Container>
  );
}


export default CreateTask;