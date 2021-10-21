import React from 'react';

interface IProps {
    people:{
        name:String,
        age:number,
        url:String,
        note?:String,
    }[]
}


const List: React.FC<IProps> =({ people }) => {

    const renderList = (): JSX.Element[] => {
        return people.map(person => {
            return(
                <ul>
                        <div>
                            {person.name}
                            {person.age}
                            {person.url}
                            {person.note}
                        </div>
             </ul>
            )
        })
    }
    return (
        <ul>
        {renderList()}
        </ul>
    )
    }
    

export default List
