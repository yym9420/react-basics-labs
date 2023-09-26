import './App.css';
import react, {useState} from 'react';
import Lesson from './components/lesson';

function App() {

  const [ lessonsState, setLessonsState ] = useState({
    lessons: [
      { id: 1, title: "Web App Development", year: 3, lecturer: "Rosanne Birney" },
      { id: 2, title: "Digital Graphic Design", year: 3, lecturer: "Sinead O' Riordan" },
      { id: 3, title: "NoSQL Databases", year: 3, lecturer: "T.J. McDonald" },
      { id: 4, title: "Multimedia Networks", year: 3, lecturer: "Lucy White" }
    ]
  });

  return (
    <div className="container">
      <h1>Hi, I'm a React App</h1>
        {lessonsState.lessons.map((lesson, index) => {
            return <Lesson 
              title={lesson.title}
              year={lesson.year}
              lecturer={lesson.lecturer}
              key={lesson.id}
            >
            Read more about this lesson...
            </Lesson>
          })}
    </div>
  );
}

export default App;
