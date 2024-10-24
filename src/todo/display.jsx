import { Icons } from "./reacticons"
export const Display=({data,setdata})=>{
    return(
        <>
        {
            data.map((item , index)=>{
                return(
                    <div className="display" key={index}>
                        <h1 dangerouslySetInnerHTML={{__html: item}}></h1>
                        <div className="icons">
                        <Icons
                        setdata={setdata}
                        item={item}
                        data={data}
                        index={index}
                        />
                        </div>
                    </div>
                )
            })
        }

        </>
    )
}