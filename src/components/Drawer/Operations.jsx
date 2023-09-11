import * as React from 'react';
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Collapse from '@mui/material/Collapse';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';
import StarBorder from '@mui/icons-material/StarBorder';
import { NavLink as RouterNavLink } from 'react-router-dom';



export default function Operations({
  nestedList: { primaryTitle, nestedItems, nestedLinks },
}) {
  const [open, setOpen] = React.useState(false);

  const handleClick = () => {
    setOpen(!open);
  };

  return (
    <>
      <ListItemButton onClick={handleClick}>
        <ListItemIcon>
          <InboxIcon />
        </ListItemIcon>
        <ListItemText primary={primaryTitle} />
        {open ? <ExpandLess /> : <ExpandMore />}
      </ListItemButton>
      <Collapse in={open} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
          {nestedItems.map((text, index) => {
            return (
              <ListItemButton sx={{ pl: 4 }} key={text}  component={RouterNavLink}
                        to={nestedLinks[index]}>
                <ListItemIcon>
                  <StarBorder />
                </ListItemIcon>
                  <ListItemText primary={text} />

              </ListItemButton>
            );
          })}
        </List>
      </Collapse>
    </>
  );
}
