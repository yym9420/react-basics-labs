import React from 'react';

const lesson = (props) => {
    
    return (
        <div className="card">
            <p>This is a lesson! It is called {props.title} and it is in {props.year} of the course. The lecturer is <span className="lecturer">{props.lecturer}</span></p>
            <p className="children">{props.children}</p>
        </div>

    )
}

export default lesson;