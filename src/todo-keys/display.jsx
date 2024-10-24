import { Icons } from "./reacticons";

export const Display = ({ data, setdata }) => {
  return (
    <>
      {data.map((item, index) => {
        return (
          <div className="display" key={item.id || index}>
            <h1>{item.content}</h1>
            <div className="icons">
              <Icons
                setdata={setdata}
                item={item}
                data={data}
                index={index}
              />
            </div>
          </div>
        );
      })}
    </>
  );
};
