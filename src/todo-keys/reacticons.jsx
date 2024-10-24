import { MdOutlineDelete } from "react-icons/md";
import { BsCheckCircleFill } from "react-icons/bs";

export const Icons = ({ item, data, setdata }) => {
  
  // Function to delete the item
  const del = () => {
    let deldata = data.filter((citem) => citem.id !== item.id); // Compare by id
    setdata(deldata);
  };

  // Function to update the item (mark as completed)
  const update = () => {
    let updatedata = data.map((citem) => {
      if (citem.id === item.id) {
        // Toggle "marked" state on the item
        return { ...citem, marked: !citem.marked };
      }
      return citem;
    });
    setdata(updatedata);
  };

  return (
    <>
      <MdOutlineDelete 
        onClick={del}
        style={{ cursor: "pointer", color: "red" }} // Red color for delete icon
      />
      <BsCheckCircleFill 
        onClick={update}
        style={{ 
          cursor: "pointer", 
          color: item.marked ? "green" : "grey" // Change color if marked
        }} 
      />
    </>
  );
};
