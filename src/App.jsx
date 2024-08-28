import "./App.css";
import { store } from "./app/store";
import { Provider } from "react-redux";
import Todo from "./component/Todo";

function App() {
  return (
    <Provider store={store}>
      <div className="min-h-screen bg-gray-100 flex items-center justify-center">
        <div className="bg-white p-6 rounded-lg shadow-lg max-w-3xl w-full">
          <h1 className="text-4xl font-bold text-gray-800 mb-8 text-center">
            My Todo App
          </h1>
          <Todo />
        </div>
      </div>
    </Provider>
  );
}

export default App;
