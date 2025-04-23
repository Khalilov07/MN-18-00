import React from 'react';
import styles from './createcourse.module.css'
import TextField from '@mui/material/TextField';
import { Button } from '@mui/material';

const CreateCourse = () => {
    return (
        <div className={styles.formWrapper}>
            <form className={styles.form} style={{ margin: "50px 0 0 0" }} action="">
                <h1>Create Course</h1>
                <TextField style={{ width: '100%' }} id="standard-basic" label="Title" variant="standard" />
                <TextField style={{ width: '100%' }} id="standard-basic" label="Duration" variant="standard" />
                <TextField style={{ width: '100%' }} id="standard-basic" label="More" variant="standard" />
                <Button style={{width: '100%'}} variant="contained" color="success">
                    Create
                </Button>
            </form>
        </div>
    );
};

export default CreateCourse;