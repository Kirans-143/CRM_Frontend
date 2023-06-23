// import React, { useEffect, useState } from "react";
// import MaterialTable from "@material-table/core";
// import { useNavigate } from "react-router-dom";

// function Admin() {
//   const [user, setUser] = useState({
//     name: "",
//     userType: "",
//   });
//   const navigate = useNavigate();

//   useEffect(() => {
//     const token = localStorage.getItem("CrmToken");
//     if (token) {
//       const name = localStorage.getItem("CrmUserName");
//       const type = localStorage.getItem("CrmUserType");

//       if (name && type && type == "ADMIN") {
//         setUser({
//           name: name,
//           userType: type,
//         });
//       } else {
//         navigate("/");
//       }
//     } else {
//       navigate("/");
//     }
//   }, []);
//   return (
//     <h1>
//       {" "}
//       Welcome {user?.name} as a {user.userType}
//     </h1>
//   );
// }

import MaterialTable from "@material-table/core";
import { useEffect, useState } from "react";

function Admin() {
  const [user, setUser] = useState([]);
  const columns = [
    {
      title: "ID",
      field: "_id",
    },
    {
      title: "User_ID",
      field: "userId",
    },
    {
      title: "EMAIL",
      field: "email",
    },
    {
      title: "UserType",
      field: "userTypes",
    },
    {
      title: "TOKEN",
      field: "accessToken",
    },
    {
      title: "USERSTATUS",
      field: "userStatus",
    },
  ];

  useEffect(() => {}, []);
  return (
    <div className="bg-light vh-100">
      <div className="container pt-5">
        <h3 className="text-center text-success">
          Welcome, {localStorage.getItem("name")}
        </h3>
      </div>
      <p className="text-center text-muted">Take a look at all tickets below</p>
      <MaterialTable
        title="Ticket raised by you"
        columns={columns}
        data={user}
      />
    </div>
  );
}

//export default Customer;
