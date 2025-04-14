import React, { useState, useEffect } from 'react';

import styles from './home.module.css'
import CourseItem from '../../components/CourseItem/CourseItem';

const Home = () => {

    // clearInterval(timer)

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
            more: ""
        },
        {
            id: 3,
            title: "JS",
            duration: 2,
            more: " HTML - it's scelet web-site"
        }
    ]

    return (
        <div className='home'>
            
            <h1>
                Learned material:
            </h1>

            <div className={styles.cards}>
                <CourseItem title={materials[0].title} duration={materials[0].duration} more={materials[0].more} />
            </div>

        </div>
    );
};

export default Home;