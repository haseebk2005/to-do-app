import { useState } from "react";
import { Display } from "./display";
import { Form } from "./form";
import { Time } from "./time";
import { Clear } from "./clear";
import { getlocalstore } from "./localstorage";

export const Todo = () => {
    const [inpval, setinpval] = useState("");

    // Initialize data from localStorage or return an empty array if no data exists
    const [data, setdata] = useState(()=>getlocalstore());

    return (
        <>
            <h1><marquee behavior="scroll" direction="left">To Do App</marquee></h1>
            <Time />
            <Form
                inpval={inpval}
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
