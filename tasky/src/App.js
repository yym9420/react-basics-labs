import './App.css';
import Task from './components/Task';

function App() {
  return (
    <div className="container">
      <h1>Tasky</h1>
      <Task title="Dishes" description="Empty dishwisher" deadline="Today" />
      <Task title="Laundry" description="Fold laundry and put away" deadline="Tomorrow" />
      <Task title="Tidy" deadline="Today" />
    </div>
  );
}

export default App;
