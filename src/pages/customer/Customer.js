import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

function Customer() {
  let [user, setUser] = useState({
    name: "",
    userType: "",
  });
  const navigate = useNavigate();

  useEffect(() => {
    let token = localStorage.getItem("CrmToken");
    if (token) {
      let name = localStorage.getItem("CrmUserName");
      let type = localStorage.getItem("CrmUserType");

      if (name && type && type == "CUSTOMER") {
        setUser({
          name: name,
          userType: type,
        });
      } else {
        navigate("/");
      }
    } else {
      navigate("/");
    }
  }, []);

  return (
    <h1>
      Welcome {user?.name} as a {user.userType}{" "}
    </h1>
  );
}

export default Customer;
