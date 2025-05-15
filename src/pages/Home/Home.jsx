import React, { useState, useEffect } from 'react';
import axios from "axios"

import styles from './home.module.css'
import CourseItem from '../../components/CourseItem/CourseItem';

const Home = () => {

    const [courses, setCourses] = useState([])

    const API = "http://localhost:8080/course"

    useEffect(() => {

        fetch(API)
            .then(res => res.json()) // json => object - js не умеет работать с json форматом, по этому мы
            // используем метод res.json() для перевода данных с json на object
            .then(data => setCourses(data)) // then - функция которая нужна для обработки успешного ответа от сервера 
            .catch(err => {
                console.log(err);
            }) // catch - функция которая нужна для обработки отрицательных ответов от сервера

    }, [])

    const deleteCourse = (id) => {
        axios.delete(`http://localhost:8080/course/${id}`)
            .then(res => {
                console.log(res.data.id) // удаленный id или курс
                //                                  false
                setCourses(courses.filter(course => course.id != res.data.id))
            }
                // если id курса не равен удаленному id то тогда он добавляется в courses иначе
                // если он равен удаленному id он добавляться не будет
            )
    }




    return (
        <div className='home'>

            <h1>
                Learned material:
            </h1>

            <div className={styles.cards}>

                {/* Вывести в  консоль все данные их массива при помощи метода перебора массивов */}

                {courses.map(item => {
                    return <CourseItem title={item.title} duration={item.duration} more={item.more} key={item.id} deleteCourse={deleteCourse} id={item.id} />
                })}

                {/* <CourseItem title={materials[0].title} duration={materials[0].duration} more={materials[0].more} />  */}

            </div>

        </div>
    );
};

export default Home;