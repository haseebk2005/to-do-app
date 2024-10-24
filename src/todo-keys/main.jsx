import { useState } from "react";
import { Display } from "./display";
import { Form } from "./form";
import { Time } from "./time";
import { Clear } from "./clear";

export const Todo = () => {
  const [inpval, setinpval] = useState({ id: "", content: "", checked: false });
  const [data, setdata] = useState([]);

  return (
    <>
      <h1><marquee behavior="hover" direction="left">To Do App</marquee></h1>
      <Time />
      <Form
        inpval={inpval}   // Pass the entire object, not just content
        setinpval={setinpval}
        data={data}
        setdata={setdata}
      />
      <Display
        setdata={setdata}
        data={data}
      />
      <Clear
        setdata={setdata}
      />
    </>
  );
};
