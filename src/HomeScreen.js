import React, { Component } from 'react';
import Grid from '@material-ui/core/Grid';
import styles from './HomeScreen.module.css';
import TopicsList from './TopicsList'
import Parent from './concepts/interaction/Parent';
import Student from './concepts/interaction/Student';

class HomeScreen extends Component {
    render() {
        return (
            <div className={styles.container}>
                <Student />
                <TopicsList />
            </div>
        );
    }
}

export default HomeScreen;