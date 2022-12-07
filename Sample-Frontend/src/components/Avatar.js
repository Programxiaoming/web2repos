import React from "react";
import { Button } from 'react-bootstrap'
import { useNavigate } from "react-router-dom";

function Avatar() {
  const navigate = useNavigate();
  const handleSubmit = (event) => {
    try {
      navigate("/UserPage", { replace: true });
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div style={{ flexDirection: "row", direction: "rtl" }}>
      <Button style={{backgroundColor:"white",backgroundSize:"cover"}}onClick={handleSubmit}> 
        <img src="person.png" alt="ming" size="35" height="35" width="35" />
      </Button>
    </div>
  );

/**
<svg aria-hidden="true" focusable="false" data-prefix="fab"
data-icon="user" class="svg-inline--fa fa-user" role="img" 
xmlns="http://www.w3.org/2000/svg" viewBox="0 0 496 512">
</svg>

  return (<div>
    <span className="e-avatar e-avatar-xlarge e-avatar-circle green">RC</span>
    <span className="e-avatar e-avatar-xlarge e-avatar-circle violet">QC</span>
    <span className="e-avatar e-avatar-xlarge e-avatar-circle rose">ZB</span>
    <span className="e-avatar e-avatar-xlarge e-avatar-circle blue">XM</span>

</div>);

 */
}

export default Avatar;