import {Netflix} from "./components/Netflix";
import "./index.css"; 
import "./components/Netflix.css"
import { EventHandling } from "./components/EventHandling";
import { EventProps } from "./components/EventProps";
const App = () => {
  console.log("ram");
  return (
    
    <section className="container">
      {/* <h1 className="card-heading">List of Best Netflix Series :</h1>
     <Netflix/> */}

     {/* <EventHandling/> */}

     <EventProps/>
     </section>
  );
};

export default App;



