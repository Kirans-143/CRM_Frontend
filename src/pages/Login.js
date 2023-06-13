import { useState } from "react";

function Login() {
  const [userId, setUserId] = useState("");
  const [password, setPassword] = useState("");
  const [showSignUp, setShowSignUp] = useState(false);

  const loginFn = (e) => {
    e.preventDefault();
    const data = {
      userId: userId,
      password: password,
    };
    console.log("Data is  " + JSON.stringify(data));
  };

  return (
    <div>
      <div className="bg-info d-flex justify-content-center align-items-center vh-100">
        <div className="card card-signin m-5 p-5 shadow-lg rounded-4">
          <div className="row m-2">
            <div>
              <h4 className="text-center">
                {showSignUp ? "Sign Up" : "Login"}
              </h4>
              <form onSubmit={loginFn}>
                <div className="input-group m-1">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="User Id"
                    id="userId"
                    value={userId}
                    onChange={(e) => setUserId(e.target.value)}
                    required
                    autoFocus
                  />
                </div>
                <div>
                  <input
                    type="password"
                    className="form-control"
                    placeholder="Password"
                    id="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                  />
                </div>
                <div className="input-group my-2">
                  <input
                    type="submit"
                    className="form-control btn btn-primary"
                    value={"Login"}
                  />
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
