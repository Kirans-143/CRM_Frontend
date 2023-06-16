import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

function Admin() {
  const [user, setUser] = useState({
    name: "",
    userType: "",
  });
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem("CrmToken");
    if (token) {
      const name = localStorage.getItem("CrmUserName");
      const type = localStorage.getItem("CrmUserType");

      if (name && type && type == "ADMIN") {
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
      {" "}
      Welcome {user?.name} as a {user.userType}
    </h1>
  );
}

export default Admin;
