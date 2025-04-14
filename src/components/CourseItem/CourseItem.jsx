import React from 'react';
import styles from './course.module.css'
 
const CourseItem = (props) => {
    return (
        <div className={styles.card}>
            <h4>Title: {props.title}</h4>
            <h4>Duration:  {props.duration}</h4>
            <h4>More: {props.more}</h4>
            <h5></h5>
            <h6></h6>
        </div>
    );
};

export default CourseItem;