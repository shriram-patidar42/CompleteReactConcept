export const EventHandling=()=>{
    const handleButtonClick =(name) => {
        console.log(`hey ${name} welcome`);
        
    }
    return(
        <>
        <button onClick={handleButtonClick}>Click Me</button>
        <button onClick={() => handleButtonClick("shriram")}>Click Me again</button>
        </>
    )
}