import { Button } from '@material-ui/core';
import React, { Component } from 'react';
import Child from './Child';
import styles from './Student.module.css'


const student = [
    { id: 101, name: 'Ramesh', score: 78, color: 'blue', house: 'Aravali' },
    { id: 102, name: 'Suresh', score: 88, color: 'green', house: 'Nilgiri' },
    { id: 103, name: 'Virat', score: 55, color: 'green', house: 'Udaygiri' },
    { id: 104, name: 'Goutam', score: 89, color: 'blue', house: 'Udaygiri' },
    { id: 105, name: 'Rajat', score: 48, color: 'red', house: 'Nilgiri' },
    { id: 106, name: 'Seema', score: 92, color: 'yellow', house: 'Aravali' },
    { id: 107, name: 'Sunita', score: 66, color: 'black', house: 'Shivalik' },
    { id: 108, name: 'Anita', score: 75, color: 'purple', house: 'Shivalik' },
    { id: 109, name: 'Veenita', score: 78, color: 'grey', house: 'Aravali' },
    { id: 110, name: 'Ankita', score: 50, color: 'red', house: 'Shivalik' }
];

class Parent extends Component {
    constructor(props) {
        super(props);
        this.state={
            id:0,
            color:"black",
            nextDisabled:false
        }
    }

    nextStudent = () => {
        if(this.state.id >= 0 && this.state.id <9){
            this.setState({
                id : this.state.id + 1
            });
        }else{
            this.setState({
                nextDisabled : true
            });
            alert('No more students available');
        }
    }  
    
    updateBackgroundColor = (color) => {
        this.setState({
            color:color
        })
    }

    render() {
        return (
            <div className={styles.parentContainer} style={{backgroundColor:this.state.color}}>
                <h3>{student[this.state.id].name}</h3>
                <Child student={student[this.state.id]} backgroundColor={this.updateBackgroundColor}/>
                <Button onClick={this.nextStudent} variant="contained" color="primary" disabled={this.state.nextDisabled}>Next</Button>
            </div>
        );
    }
}

export default Parent;