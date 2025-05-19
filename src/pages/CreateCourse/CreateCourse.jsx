import React from 'react';
import TextField from '@mui/material/TextField';
import { Button } from '@mui/material';
import Snackbar, { SnackbarCloseReason } from '@mui/material/Snackbar';

import axios from 'axios';

import styles from './createcourse.module.css'
import { useEffect, useState } from 'react';

const CreateCourse = () => {

    // axios

    // 1. считать данные с полей для ввода (input) и сохраняем их, 

    const [title, setTitle] = useState("")
    const [duration, setDuration] = useState("")
    const [more, setMore] = useState("")
    const [open, setOpen] = useState(false);
    const [img, setImg] = useState("");

    const handleClick = () => {
        setOpen(true);
      };

      
  const handleClose = () => {
   
    setOpen(false);
  };
    


    const handleCreate = (e) => {
        e.preventDefault() // event.preventDefault() - stop reload website 

        const newData = {
            title,
            duration,
            more,
            img
        }

        axios.post("http://localhost:8080/course", newData)
            .then(res => {
                setTitle("")
                setDuration("")
                setMore("")
                setImg("")
                handleClick()
            }).catch(err => console.log(err)) 

    }

    const action = (
      <React.Fragment>
        <Button color="secondary" size="small" onClick={handleClose}>
          UNDO
        </Button>
       x
      </React.Fragment>
    );
  


    return (
        <>
              <div className={styles.formWrapper}>
            <form className={styles.form} style={{ margin: "50px 0 0 0" }} >
                <h1>Create Course</h1>
                <TextField onChange={(e) => setTitle(e.target.value)} value={title} style={{ width: '100%' }} id="standard-basic" label="Title" variant="standard" />
                <TextField onChange={(e) => setDuration(e.target.value)} value={duration} style={{ width: '100%' }} id="standard-basic" label="Duration" variant="standard" />
                <TextField onChange={(e) => setMore(e.target.value)} value={more} style={{ width: '100%' }} id="standard-basic" label="More" variant="standard" />
                <TextField onChange={(e) => setImg(e.target.value)} value={img} style={{ width: '100%' }} id="standard-basic" label="Img" variant="standard" />
                <Button style={{ width: '100%' }} variant="contained" color="success" onClick={handleCreate}>
                    Create
                </Button>
            </form>
        </div>
        
    <Snackbar
        open={open}
        autoHideDuration={10000}
        onClose={handleClose}
        message="Курс создан успешно"
        action={action}
      />
        </>
    );
};

export default CreateCourse;



    // http запросы
    // GET - получить
    // POST - отправить 
    // DELETE - удалить 
    // PUT - отредактировать полноценно
    // PATCH - отредактировать частично