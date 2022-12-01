import { useNavigate } from "react-router-dom";
import Button from 'react-bootstrap/Button';
//import Button from "@mui/material/Button";

function LoginButton() {
    const navigate = useNavigate();
    const handleSubmit = (event) => {
        try {
            navigate("/LoginPage", { replace: true });
            } catch (error) {
            console.log(error);
        }
    };
    return (
        <div style={{ flexDirection: "row", direction: "rtl" }}>
            <Button variant="contained" onClick={handleSubmit}>Login here</Button>
        </div>
    );
}
export default LoginButton;
