import { Link } from 'react-router-dom'

import styles from './course.module.css'

import { Button } from '@mui/material';

const CourseItem = ({ title, duration, more, deleteCourse, id }) => {



    return (
        <div className={styles.card}>
            <h4>Title: {title}</h4>
            <h4>Duration:  {duration}</h4>
            <h4>More: {more}</h4>
            <Link to={`/course/${id}`}>
                <Button style={{ width: '50%' }} variant="contained" color="success">
                    MORE INFO
                </Button>
            </Link>
        </div>
    );
};

export default CourseItem;