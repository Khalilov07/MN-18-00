import React from 'react';
import styles from './course.module.css'

import { Button } from '@mui/material';

const CourseItem = ({ title, duration, more, deleteCourse, id }) => {



    return (
        <div className={styles.card}>
            <h4>Title: {title}</h4>
            <h4>Duration:  {duration}</h4>
            <h4>More: {more}</h4>
            <Button style={{ width: '50%' }} onClick={() => deleteCourse(id)} variant="contained" color="error">
                DELETE
            </Button>
        </div>
    );
};

export default CourseItem;