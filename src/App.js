import { useState , useRef} from "react";
import { Button, TextField } from "@material-ui/core";
import VideoCall from "./components/VideoCall";
import "./App.css";
import { channelName } from "./settings";


function App() {
  const [inCall, setInCall] = useState(false);
  const textRef = useRef("");
  const handleSubmit = () =>
  {
    Window.channelName = textRef.current.value;
    console.log(channelName);
    setInCall(true);
  };

  return (
    <div className="App">
      {inCall ? (
        <VideoCall setInCall= {setInCall}  />
      ) : (
        <div className="container">
          <div className = "inside-Container">
            <h1> Booily Video Calling </h1>
            <div className = "deep-inside-Container"> 
            <TextField
              id="text"
              variant="filled" 
              label="Channel Name"
              margin="normal" 
              color = "secondary"  
              inputRef = {textRef}
            />
            <Button variant="contained" color="secondary" onClick={handleSubmit} >Join Call </Button>
          </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
