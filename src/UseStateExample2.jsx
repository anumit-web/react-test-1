import { useState } from 'react'
import './App.css'

function UseStateExample2() {
    const [liked, setLiked] = useState(true);

    function handleChangeLiked(e) {
        setLiked(e.target.checked);
      }
    
    return (
      <>
        <h3>Boolean example</h3>
        <h4>** DEBUG code **</h4>
        <h4>** function UseStateExample2 **</h4>

        <label>
            Are you an Independent voter?
            &nbsp; &nbsp;
            <input type="checkbox" checked={liked} onChange={handleChangeLiked} />            
        </label>
  
        <p>Hello Visitor, {liked? 'You are independent voter' : 'You are not independent voter'}. </p>
  
      </>
    );
  }
  
  export default UseStateExample2