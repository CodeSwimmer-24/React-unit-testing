import './App.css';
import Todo from './components/Todo';

function App() {
  const todos= [{
    id:1, title:"wash Dishes", compleated:false,
  },
  {
    id:2, title:"Study Maths", compleated:false,
  },
  {
    id:3, title:"Drink Water", compleated:true,
  }]
  return (
    <div className="App">
      {
        todos.map(todo => {
          return(
            <Todo todo={todo}/>
          )
        })
      }
    </div>
  );
}

export default App;
