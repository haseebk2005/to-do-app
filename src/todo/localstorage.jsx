export const getlocalstore = () =>{
        const savedData = JSON.parse(localStorage.getItem('task'));
        return savedData ? savedData : [];   
}
export const setlocalstore = (updatedData) =>{
    return localStorage.setItem('task', JSON.stringify(updatedData));
}