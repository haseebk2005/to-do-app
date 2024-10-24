export const Clear = ({ setdata }) => {

    const clear = () => {
      if (window.confirm("Are you sure you want to clear all tasks?")) {
        setdata([]);
      }
    };
  
    return (
      <>
        <button 
          className="clear"
          onClick={clear}
        >
          Clear
        </button>
      </>
    );
  };
  