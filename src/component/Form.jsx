import { useState } from "react";
import { useDispatch } from "react-redux";
import { addTodo } from "../features/todo/todoSlice";

const Form = () => {
  let dispatch = useDispatch();

  // Single state object to handle multiple inputs
  const [formData, setFormData] = useState({
    task: "",
    date: "",
    priority: "",
  });

  // Handle change for all input fields dynamically
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData, // Spread the previous state
      [name]: value, // Dynamically update the specific input field
    });
  };

  // Handle form submission
  const handleSumbit = (e) => {
    e.preventDefault();
    if (formData.task && formData.date) {
      dispatch(addTodo(formData)); // Pass the entire form data
      setFormData({
        task: "",
        date: "",
        priority: "",
      }); // Clear form after submission
    }
  };

  return (
    <form
      onSubmit={handleSumbit}
      className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4"
    >
      <div className="mb-4">
        <input
          type="text"
          name="task"
          value={formData.task}
          placeholder="Enter your task"
          onChange={handleChange}
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          required
        />
      </div>

      <div className="mb-4">
        <input
          type="date"
          name="date"
          value={formData.date}
          onChange={handleChange}
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          required
        />
      </div>

      <div className="mb-4">
        <select
          name="priority"
          value={formData.priority}
          onChange={handleChange}
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        >
          <option value="">Select Priority</option>
          <option value="low">Low</option>
          <option value="medium">Medium</option>
          <option value="high">High</option>
        </select>
      </div>

      <div className="flex items-center justify-between">
        <button
          type="submit"
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
        >
          Submit
        </button>
      </div>
    </form>
  );
};

export default Form;
