import TextField from '@mui/material/TextField';
import { Button } from '@mui/material';

import axios from 'axios';

import styles from './createcourse.module.css'
import { useEffect, useState } from 'react';

const CreateCourse = () => {

    // axios

    // 1. считать данные с полей для ввода (input) и сохраняем их, 

    const [title, setTitle] = useState("")
    const [duration, setDuration] = useState("")
    const [more, setMore] = useState("")


    const handleCreate = () => {

        const newData = {
            title: title,
            duration: duration,
            more: more
        }

        axios.post("http://localhost:8080/course", newData)

    }



    // http запросы
    // GET - получить
    // POST - отправить 
    // DELETE - удалить 
    // PUT - отредактировать полноценно
    // PATCH - отредактировать частично


    return (
        <div className={styles.formWrapper}>
            <form className={styles.form} style={{ margin: "50px 0 0 0" }} action="" onSubmit={() => handleCreate()}>
                <h1>Create Course</h1>
                <TextField onChange={(e) => setTitle(e.target.value)} value={title} style={{ width: '100%' }} id="standard-basic" label="Title" variant="standard" />
                <TextField onChange={(e) => setDuration(e.target.value)} value={duration} style={{ width: '100%' }} id="standard-basic" label="Duration" variant="standard" />
                <TextField onChange={(e) => setMore(e.target.value)} value={more} style={{ width: '100%' }} id="standard-basic" label="More" variant="standard" />
                <Button style={{ width: '100%' }} variant="contained" color="success" >
                    Create
                </Button>
            </form>
        </div>
    );
};

export default CreateCourse;