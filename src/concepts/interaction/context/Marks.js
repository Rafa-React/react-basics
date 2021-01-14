import React, { Component } from 'react';
import {studentContext} from '../Student';
import styles from '../Student.module.css';


class Marks extends Component {
     static context = studentContext;

    render() {
        let marks = this.context.marks;
        return (
            <div className={styles.marksContainer}>
                <h3>Marks Component</h3>
                {marks ? marks.map((lang) => <li>{lang.name} : {lang.score}</li>) : null}
            </div>
        );
    }
}
export default Marks;