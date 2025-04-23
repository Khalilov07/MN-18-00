import React, { useState, useEffect } from 'react';

import styles from './home.module.css'
import CourseItem from '../../components/CourseItem/CourseItem';

const Home = () => {

    const [courses, setCourses] = useState([])

    const API = "http://localhost:8080/course"

    useEffect(() => {

        fetch(API)
            .then(res => res.json()) // json => object - js не умеет работать с json форматом
            .then(data => setCourses(data))


    }, [])

    console.log(courses);
    



    return (
        <div className='home'>

            <h1>
                Learned material:
            </h1>

            <div className={styles.cards}>

                {/* Вывести в  консоль все данные их массива при помощи метода перебора массивов */}

                {courses.map(item => {
                    return <CourseItem title={item.title} duration={item.duration} more={item.more} key={item.id} />
                })}

                {/* <CourseItem title={materials[0].title} duration={materials[0].duration} more={materials[0].more} />  */}

            </div>

        </div>
    );
};

export default Home;