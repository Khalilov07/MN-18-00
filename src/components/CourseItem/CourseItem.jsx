import React from 'react';
import styles from './course.module.css'
 
const CourseItem = ( { title, duration, more } ) => {
   
    

    return (
        <div className={styles.card}>
            <h4>Title: {title}</h4>
            <h4>Duration:  {duration}</h4>
            <h4>More: {more}</h4>
        </div>
    );
};

export default CourseItem;