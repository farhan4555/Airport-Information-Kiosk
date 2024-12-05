import {
  Link
} from "react-router-dom";

function Assistance() {
  return (
    <Link to={"/assistance"}>
      <button type="button" className="btn btn-dark text-nowrap">
       <img src= "./src/components/images/assistance.png" alt="Assistance" />
        Leecox
      </button>
    </Link>
  );
};

export default Assistance;