import { CSidebar, CSidebarNav, CNavItem, CNavTitle } from "@coreui/react";
import { useNavigate } from "react-router-dom";

function Sidebar() {
  const navigate = useNavigate();
  const logoutFn = () => {
    localStorage.clear();
    navigate("/");
  };
  return (
    <CSidebar unfoldable className="vh-100 bg-black">
      <CSidebarNav>
        <CNavItem className="bg-dark d-flex">
          <i className="bi bi-bar-chart-fill text-white mx-3 my-2"></i>
          <h5 className="text-white mx-3 my-2">Grahak Seva</h5>
        </CNavItem>
        <CNavTitle className="text-light">A CRM APP</CNavTitle>
        <div onClick={logoutFn}>
          <CNavItem className="bg-dark d-flex">
            <i className="bi bi-box-arrow-left text-white mx-3 my-2"></i>
            <div className="text-white mx-3 my-2">Logout</div>
          </CNavItem>
        </div>
      </CSidebarNav>
    </CSidebar>
  );
}

export default Sidebar;
