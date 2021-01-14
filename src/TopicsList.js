import React from 'react';
import styles from './TopicsList.module.css';

function TopicsList(props) {
    return (
        <div className={styles.rightPane}>
            <ol type="1">
                <li>Interaction between React Components
                    <ul>
                        <li>Parent to Child</li>
                        <li>Child to Parent</li>
                    </ul>
                </li>
                <li>Communication using context.
                    <ul>
                        <li></li>
                    </ul>
                </li>
            </ol>

        </div>
    );
}

export default TopicsList;