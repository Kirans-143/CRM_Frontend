import { useNavigate } from "react-router-dom";
import errImage from "../assets/errors.jpg";

function Error() {
  const navigate = useNavigate();
  const goBack = () => {
    navigate(-1);
  };
  return (
    <div className="bg-light vh-100 d-flex justify-content-center align-items-center text-center">
      <div>
        <h1>Unauthorizes access</h1>
        <img src={errImage} alt="Error" />
        <p className="lead fw-bolder m-1">
          You do not have access to the request page.{""}
        </p>
        <button className="btn btn-danger text-white m-1 p-2" onClick={goBack}>
          GO Back{""}
        </button>
      </div>
    </div>
  );
}

export default Error;
