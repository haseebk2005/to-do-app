export const Form = ({ inpval, data, setdata, setinpval }) => {

    // Update the input value and create an object with id and content
    const handleInputChange = (value) => {
      setinpval({ id: Date.now(), content: value, checked: false });
    };
  
    // Handle form submission
    const handleSubmit = (event) => {
      event.preventDefault();
      const { content } = inpval;
  
      // If the content is empty, don't proceed
      if (!content) return;
  
      // Check if a task with the same content already exists
      const taskExists = data.some((task) => task.content === content);
      if (taskExists) {
        alert("Task already added");
        return;
      }
  
      // Add the new task to the list
      setdata((prevData) => [...prevData, inpval]);
  
      // Clear the input field after submission
      setinpval({ id: "", content: "", checked: false });
    };
  
    return (
      <>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            autoComplete="off"
            value={inpval.content} // Bind to inpval.content
            onChange={(e) => handleInputChange(e.target.value)}
          />
          <button type="submit">Add Task</button>
        </form>
      </>
    );
  };
  