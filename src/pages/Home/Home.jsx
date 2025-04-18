import React, { useState, useEffect } from 'react';

import styles from './home.module.css'
import CourseItem from '../../components/CourseItem/CourseItem';

const Home = () => {

    const materials = [
        {
            id: 1,
            title: "HTML",
            duration: 2,
            more: " HTML - it's scelet web-site"
        },
        {
            id: 2,
            title: "CSS",
            duration: 2,
            more: "CSS"
        },
        {
            id: 3,
            title: "JS",
            duration: 2,
            more: " JS"
        },
        {
            id: 4,
            title: "REACT",
            duration: 2,
            more: " React"
        },
    ]

    return (
        <div className='home'>

            <h1>
                Learned material:
            </h1>

            <div className={styles.cards}>

                {/* Вывести в  консоль все данные их массива при помощи метода перебора массивов */}

                {materials.map(item => {
                    return <CourseItem title={item.title} duration={item.duration} more={item.more} key={item.id} />
                })}

                {/* <CourseItem title={materials[0].title} duration={materials[0].duration} more={materials[0].more} />  */}
                      
            </div>

        </div>
    );
};

export default Home;