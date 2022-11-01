import React ,{useState}from "react";

const Status= () => {
  
  const [toggle,setToggle] = useState(false);

  const toggler = () => {
    toggle ? setToggle(false):setToggle(true);
  }

  return(
  <>

  <label className="switch">
    <input type="checkbox" id="status" onClick={toggler}/>
    <span class="slider round"><p style={{paddingLeft: "50px",width:"150px"}}>{toggle ? <span>Sign In</span> : <span>Sign Out</span>}</p></span>
  </label>

  </>
  )
}

export default Status