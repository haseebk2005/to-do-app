export const Clear=({setdata})=>{
    const clear=()=>{
        setdata([])
        localStorage.clear();

    }
    return(
        <>
        <button 
        className="clear"
        onClick={clear}
        >Clear</button>
        </>
    )
}