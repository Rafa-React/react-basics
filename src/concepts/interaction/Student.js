import styles from './Student.module.css';
import React, { Component } from 'react';
import StudentInfo from './context/StudentInfo';
import Marks from './context/Marks';


export var studentContext = React.createContext("Mrityunjay");

class Student extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name:'Mrityunjay',
            languages: ['react', 'javascript', 'java'],
            age:28,
            marks:[{name:'react',score:87},{name:'javascript', score:91},{name:'java',score:75},{name:'css',score:68}],
            sports:'tennis',
            experience:'4 yrs'
        }
    }
    
    render() {
        return (
            <div className={styles.studentContainer}>
                <h2>Student Component</h2> 
                <p> {this.state.name}</p>
                <studentContext.Provider value={this.state}>
                    <StudentInfo />
                    <Marks />
                </studentContext.Provider>
            </div>
        );
    }
}

export default Student;