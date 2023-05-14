
import './App.css';
import Main from './components/Main/Main';


// Добавлять новые задачи в список
// Отмечать выполненные задачи (при этом они сразу исключаются из списка активных задач и переводятся в завершенный)
// Удалять элементы в корзину
// Удалять окончательно задачи в корзине, а также при необходимости восстанавливать их
// Переключаться между делами (активными завершенными и удаленными)

export default function App() {



  return (
    <div className="App">
      <header>
        <h1 className='inter700'>Simple To Do List</h1>
        <p className='inter500-16'>Today is awesome day. The weather is awesome, you are awesome too!</p>
      </header>

      <Main />

      <footer className='footer inter500-14'>Made with ❤️ at nFactorial in 2023.</footer>
    </div>
  );
}

