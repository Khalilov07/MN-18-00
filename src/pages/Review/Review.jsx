import React, { useState } from 'react';

const Review = () => {

    const [count, setCount] = useState(0) // ( Здесь я даю значение моей переменной )

    const array = [
        {
            id: 1,
            name: "asd"
        },
        {
            id: 2,
            name: "fgh"
        },
        {
            id: 3,
            name: "zxc"
        },
        {
            id: 4,
            name: "yui"
        },
    ]
    //                                    false
    const newArray = array.filter(item => item.id != 3)

    console.log(newArray);
    

    // const numbers = [1, 2, 3, 4, 5, 6, 7, 9]

    // //                                        false
    // const newNumbers = numbers.filter(item => item != 6) // он берет каждый элемент массива и выполняет для него функция

    // console.log(newNumbers);
    // //                                       false
    // const newArray = array.filter(item => item.id !== 3)

    // ! = оператор не

    console.log(newArray);
    


    return (
        <div className='review'>
            {/* <h1>{ count }</h1>
            <button style={{  fontSize: '30px', background: "green"}} onClick={() => setCount(count + 1)} >+</button>
            <button style={{ fontSize: '30px', background: "red"}} onClick={() => setCount(count - 1)} >-</button> */}
        </div>
    );
};

export default Review;