import React from 'react'
import FilterAndSort from '../components/FilterAndSort';
import Products from '../components/Products';
import Cart from '../components/Cart';
// import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import Button from '@mui/material/Button';
// import List from '@mui/material/List';
// import Divider from '@mui/material/Divider';
// import ListItem from '@mui/material/ListItem';
// import ListItemButton from '@mui/material/ListItemButton';
// import ListItemIcon from '@mui/material/ListItemIcon';
// import ListItemText from '@mui/material/ListItemText';
// import InboxIcon from '@mui/icons-material/MoveToInbox';
// import MailIcon from '@mui/icons-material/Mail';
import { MenuItem } from '@mui/material';




const Home = () => {
  // const [state, setState] = useState({
  //   top: false,
  //   left: false,
  //   bottom: false,
  //   right: false,
  // })
  // const  TemporaryDrawer=() =>{
  //   };


  // // const toggleDrawer =
  // // (anchor,open) =>
  // // (event: React.KeyboardEvent | React.MouseEvent) => {
  // //   if (event.type === 'keydown' && ((event as React.KeyboardEvent).key === 'Tab' ||(event as React.KeyboardEvent).key === 'Shift')) {
  // //     return;
  // //   }

  // //   setState({ ...state, [anchor]: open });
  // // };

  // const list = (anchor) => (
  //   <Box
  //     sx={{ width: anchor === 'top' || anchor === 'bottom' ? 'auto' : 250 }}
  //     role="presentation"
  //     // onClick={toggleDrawer(anchor, false)}
  //     // onKeyDown={toggleDrawer(anchor, false)}
  //   >
  //     <List>
  //       {['Inbox', 'Starred', 'Send email', 'Drafts'].map((text, index) => (
  //         <ListItem key={text} disablePadding>
  //           <ListItemButton>
  //             <ListItemIcon>
  //               {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
  //             </ListItemIcon>
  //             <ListItemText primary={text} />
  //           </ListItemButton>
  //         </ListItem>
  //       ))}
  //     </List>
  //     <Divider />
  //     <List>
  //       {['All mail', 'Trash', 'Spam'].map((text, index) => (
  //         <ListItem key={text} disablePadding>
  //           <ListItemButton>
  //             <ListItemIcon>
  //               {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
  //             </ListItemIcon>
  //             <ListItemText primary={text} />
  //           </ListItemButton>
  //         </ListItem>
  //       ))}
  //     </List>
  //   </Box>
  // );

  const [open, setOpen] = React.useState(false);
  
  function handleOpen() {
      setOpen(!open);
  }

  function handleClose() {
      setOpen(false);
  }


  return (
    <div>
        <FilterAndSort/>
        <Cart/>
        <>
            <Button onClick={handleOpen} 
                variant="outlined" color="success">
                Toggle Drawer
            </Button>
            <Drawer anchor={"right"} open={open} 
                onClose={handleClose}>
                <MenuItem>Geek</MenuItem>
                <MenuItem>Geeks</MenuItem>
                <MenuItem>GeeksForGeeks</MenuItem>
            </Drawer>
        </>


        {/* {(['left', 'right', 'top', 'bottom']).map((anchor) => (
  <React.Fragment key={anchor}>
    <Button onClick={toggleDrawer(anchor, true)}>{anchor}</Button>
    <Drawer
      anchor={anchor}
      open={state[anchor]}
      onClose={toggleDrawer(anchor, false)}
    >
      {list(anchor)}
    </Drawer>
  </React.Fragment>
))} */}
        <Products/> 

    </div>
  )
}

export default Home;