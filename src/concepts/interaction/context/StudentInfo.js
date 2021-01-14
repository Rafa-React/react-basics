import React, { Component } from 'react';
import {studentContext} from '../Student';
import styles from '../Student.module.css';

class StudentInfo extends Component {
     static context  = studentContext;
    render() {
        let student = this.context;
        return (
            <div className={styles.studentInfo}>
                <h3>Student Info Component</h3>
                <p>Name: {student.name}</p>
                <p>Age: {student.age}</p>
                <p>Exp: {student.experience}</p>
                <p>Sports: {student.sports}</p>
                    {student.languages ? student.languages.map((lang) => <li>{lang}</li>) : null}
            </div>
        );
    }
}

export default StudentInfo;