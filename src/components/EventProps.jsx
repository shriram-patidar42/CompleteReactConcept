export const EventProps=()=>{
    function welcome(user){
        console.log(`hy ${user} welcome`)
    }

    function handleHover(){
        console.log("mouse enter here guessing by ram patidar :");
    }
    return (
        <>
        <WelcomeUser onClick={()=>welcome('shriram')} onMouseEnter={handleHover}/>
        </>
    )
}

function greeting(){
    alert("Hy patidar welcome  to click 3");
}
const WelcomeUser=(props)=>{
    return (
        <>
        <button onClick={props.onClick}>Click 1</button>
        <br/>
         <br/>
          <br/>
           <br/>
            <br/>
             <br/>
        <button onMouseEnter={props.onMouseEnter}>Click 2</button>
        <br/>
         <br/>
          <br/>
           <br/>
            <br/>
        <button onClick={greeting}>Click 3</button>
        </>
    )

}