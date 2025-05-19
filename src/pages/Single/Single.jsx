import axios from "axios";
import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { Button } from '@mui/material';
import { TextField } from "@mui/material";

import styles from './single.module.css'

const Single = () => {

    const [course, setCourse] = useState({})

    const [title, setTitle] = useState("")
    const [duration, setDuration] = useState("")
    const [More, setMore] = useState("")
    const [img, setImg] = useState("")

    const [editMode, setEditMode] = useState(false)

    const navigate = useNavigate()

    const param = useParams()

    console.log(param.id);

    useEffect(() => {
        axios.get(`http://localhost:8080/course/${param.id}`)
            .then(res => setCourse(res.data))
    }, [])

    const deleteCourse = () => {
        axios.delete(`http://localhost:8080/course/${param.id}`)
            .then(res => {
                navigate('/')
            })
    }

    console.log(course);



    return (
        <>
            {editMode === true ?
                <div style={{ width: "90%", margin: "0 auto", display: 'flex', flexDirection: "column", alignItems:"center", marginTop: '20px' 
                 }}>
                    <div style={{ width: "50%", margin: "0 auto",  display: 'flex', flexDirection: "column", alignItems:"center", gap: '40px' }}>
                        <TextField onChange={(e) => setTitle(course.title)} value={course.title} style={{ width: '100%' }} id="standard-basic" label="Title" variant="standard" />
                        <TextField onChange={(e) => setImg(e.target.value)} value={course.duration} style={{ width: '100%' }} id="standard-basic" label="Duration" variant="standard" />
                        <TextField onChange={(e) => setImg(e.target.value)} value={course.more} style={{ width: '100%' }} id="standard-basic" label="More" variant="standard" />
                        <TextField onChange={(e) => setImg(e.target.value)} value={course.img} style={{ width: '100%' }} id="standard-basic" label="Img" variant="standard" />
                    </div>
                    <hr />
                    <Button onClick={() => setEditMode(false)} style={{ width: '40%' }} variant="contained" color="success">
                        save
                    </Button>
                </div>
                :
                <div className={styles.wrapper}>
                    <img className={styles.img} src={`${course.img}`} alt="" />
                    <hr />
                    <div className={styles.info}>
                        <div className={styles.infoCourse}>
                            <h2 className={styles.title}>{course.title}</h2>
                            <h3 className={styles.duration}>{course.duration}</h3>
                            <p className={styles.more}>{course.more}</p>
                        </div>
                        <div className={styles.btns}>
                            <Button onClick={deleteCourse} style={{ width: '100%' }} variant="contained" color="error">
                                DELETE
                            </Button>
                            <Button onClick={() => setEditMode(true)} style={{ width: '100%' }} variant="contained" color="success">
                                EDIT
                            </Button>
                        </div>
                    </div>
                </div>
            }



        </>
    );
};

export default Single;