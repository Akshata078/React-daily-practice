import React from 'react';

function List() {
    let obj = [
        {
            name: "Mango",
            type: "fruit"
        },
        {
            name: "Potato",
            type: "vegetable"
        }
    ];

    return (
        <>
            {
                obj.map((item) => {
                    return (
                        (item.type === "fruit") ? <h1>{item.name}</h1> : <h1>Not a fruit</h1>
                    )
                })
            }
        </>
    )
}

export default List;
