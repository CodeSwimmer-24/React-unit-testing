import React from 'react'

function Todo({todo}) {
    const {id, title, compleated} = todo;
    const h1 = <h1>{title}</h1>;
    const text = compleated ? <strike>{h1}</strike> : h1 ;
    return (
        <div data-testid={`todo-${id}`}>
            <h1>{text}</h1>
        </div>
    )
}

export default Todo
