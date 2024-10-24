import { setlocalstore } from "./localstorage";

export const Form = ({ inpval, data, setdata, setinpval }) => {

    // Function to update input value
    const show = (value) => {
        setinpval(value);
    };

    // Function to handle form submission
    const form = (event) => {
        event.preventDefault();

        // Don't add empty values
        if (!inpval) return;

        // Check if the value is already in the data array
        if (data.includes(inpval)) {
            setinpval("already added");
            return;
        }

        // Prevent adding "already added" as a valid input
        if (inpval === "already added") {
            setinpval("");
            return;
        }

        // Add the new input value to the data array
        setdata((pre) => {
            const updatedData = [...pre, inpval];
            // Save the updated data array to localStorage
            setlocalstore(updatedData)
            return updatedData;
        });

        // Clear the input field after adding
        setinpval("");
    };

    return (
        <>
            <form onSubmit={form}>
                <input 
                    type="text" 
                    autoComplete="off"
                    value={inpval}
                    onChange={(e) => show(e.target.value)}
                />
                <button type="submit">Add Task</button>
            </form>
        </>
    );
};
