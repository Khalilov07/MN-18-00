import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import styles from './single.module.css'

const Single = () => {

    const [course, setCourse] = useState({})

    const param = useParams()

    console.log(param.id);

    useEffect(() => {
        axios.get(`http://localhost:8080/course/${param.id}`)
            .then(res => setCourse(res.data))
    }, [])

    console.log(course);



    return (
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
                    <button>
                        DELETE
                    </button>
                    <button>
                        EDIT
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Single;