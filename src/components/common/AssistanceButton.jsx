import {
  Link
} from "react-router-dom";

function Assistance() {
  return (
    <Link style={{ color: "black" }} to={"/assistance"}>
      <button type="button" className="btn btn-dark text-nowrap">
       <img src= "./src/components/images/assistance.png" alt="Assistance" className= "logo-img"/>
      </button>
    </Link>
  );
};

export default Assistance;