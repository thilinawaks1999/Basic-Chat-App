import React from "react";
import PowerSettingsNewIcon from "@mui/icons-material/PowerSettingsNew";
import { IconButton } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { logout } from "../../pages/home/homeSlice";

function Header() {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleLogout = () => {
    dispatch(logout());
    navigate("/");
  };

  return (
    <div
      style={{
        position: "fixed",
        right: "0",
        left: "0",
        backgroundColor: "#0081c9",
        zIndex: "3",
        height: "70px",
      }}
    >
      <IconButton
        sryle={{ float: "right" }}
        title="Logout"
        onClick={() => handleLogout()}
      >
        <PowerSettingsNewIcon fontSize="large" sx={{ p: 1 }} />
      </IconButton>
    </div>
  );
}

export default Header;
