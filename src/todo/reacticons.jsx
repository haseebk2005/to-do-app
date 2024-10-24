import { MdOutlineDelete } from "react-icons/md";
import { BsCheckCircleFill } from "react-icons/bs";
import { setlocalstore } from "./localstorage";

export const Icons = ({ item, data, setdata }) => {
    
    // Delete function
    const del = () => {
        // Filter out the item to delete
        let deldata = data.filter((citem) => citem !== item);
        // Update the state with the filtered array
        setdata(deldata);
        // Update localStorage with the new data
        setlocalstore(deldata);
    };

    // Update function (marking as complete)
    const update = () => {
        // Mark the item by wrapping it in <mark> tags
        let updatedata = data.map((citem) => {
            return citem === item ? `<mark>${citem}</mark>` : citem;
        });
        // Update the state with the new marked array
        setdata(updatedata);
        // Update localStorage with the updated data
        setlocalstore(updatedata);
    };

    return (
        <>
            <MdOutlineDelete 
                onClick={del}
            />
            <BsCheckCircleFill
                onClick={update}
            />
        </>
    );
};
