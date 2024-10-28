import * as React from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import Button from "@mui/material/Button";
import Divider from "@mui/material/Divider";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import PersonIcon from "@mui/icons-material/Person";
import SettingsIcon from "@mui/icons-material/Settings";
import LogoutIcon from "@mui/icons-material/Logout";
import IconButton from "@mui/material/IconButton";

type Anchor = "right";

const DrawerRight = () => {
  const [state, setState] = React.useState({
    top: false,
    left: false,
    bottom: false,
    right: false,
  });

  const toggleDrawer =
    (anchor: Anchor, open: boolean) =>
    (event: React.KeyboardEvent | React.MouseEvent) => {
      if (
        event.type === "keydown" &&
        ((event as React.KeyboardEvent).key === "Tab" ||
          (event as React.KeyboardEvent).key === "Shift")
      ) {
        return;
      }

      setState({ ...state, [anchor]: open });
    };

  const list = (anchor: Anchor) => (
    <Box
      sx={{ width: 250 }}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <ListItemButton onClick={() => alert("profile clicked")}>
        <ListItemIcon>
          <PersonIcon sx={{color: "black"}} />
        </ListItemIcon>
        <ListItemText primary={"Profile"} />
      </ListItemButton>

      <ListItemButton onClick={() => alert("settings clicked")}>
        <ListItemIcon>
          <SettingsIcon sx={{color: "black"}} />
        </ListItemIcon>
        <ListItemText primary={"Settings"} />
      </ListItemButton>
      <Divider />
      <ListItemButton onClick={() => alert("sign out clicked")}>
        <ListItemIcon >
          <LogoutIcon sx={{color: "black"}} />
        </ListItemIcon>
        <ListItemText primary={"Sign Out"} />
      </ListItemButton>
    </Box>
  );

  return (
    <div>
      <IconButton color={"secondary"} onClick={toggleDrawer("right", true)}>
        <PersonIcon fontSize="large" />
      </IconButton>
      <Drawer
        anchor={"right"}
        open={state["right"]}
        onClose={toggleDrawer("right", false)}
      >
        {list("right")}
      </Drawer>
    </div>
  );
};

export default DrawerRight;
