import React, {useState} from 'react';
import styles from './Student.module.css';
import {CirclePicker  } from 'react-color';
import Paper from '@material-ui/core/Paper';

function Child(props) {

    const student = props.student;
    const [bgColor, setBGColor] = useState('#000');

    const handleChangeComplete = (color, event) => {
        setBGColor(color.hex);
        props.backgroundColor(color.hex);
    }
    return (
        <div className={styles.childContainer}>
            <p>Student Info:- </p>
            <p> id : {student.id}</p>
            <p> name: {student.name}</p>
            <p> score: {student.score}</p>
            <p> color: {student.color}</p>
            <p> house: {student.house}</p>
            <CirclePicker  onSwatchHover={ handleChangeComplete } />
                <Paper elevation={3} variant="outlined">
                    <p className={styles.msg}>Below color picker is in Child component, 
                once user hovers over any color then it is been set to a function props 
                which is been called back from the parent component thus updating,
                background color of Parent Component</p> 
                </Paper>
        </div>
    );
}

export default Child;