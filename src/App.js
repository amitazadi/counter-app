import { useSelector, useDispatch } from 'react-redux';
import { incrementTask, decrementTask, resetTask } from './redux/action';

function App() {
  const count = useSelector((state) => state.count);
  const dispatch = useDispatch();

  console.log(count);

  return (
    <div className="App">
      <h1>{count}</h1>

      <div className="buttons">
        <button
          className="button-28"
          onClick={() => {
            dispatch(incrementTask(100));
          }}
        >
          Increment
        </button>

        <button
          className="button-28"
          onClick={() => {
            dispatch(decrementTask(10));
          }}
        >
          Decrement
        </button>

        <button
          className="button-28"
          onClick={() => {
            dispatch(resetTask());
          }}
        >
          Reset
        </button>
      </div>
    </div>
  );
}

export default App;
