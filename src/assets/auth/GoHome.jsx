import { useNavigate } from "react-router-dom";
import '../css/header.css'
function GoHome() {
  const navigate = useNavigate();

  function handleClick() {
    navigate("/home");
  }

  return (
    <button type="button" className="btn" onClick={handleClick}>
      Submit
    </button>
  );
}

export default GoHome;