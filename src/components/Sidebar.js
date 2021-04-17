import React from 'react'
import clsx from 'clsx'
import { makeStyles, useTheme } from '@material-ui/core/styles'

import {
  SwipeableDrawer,
  List,
  Divider,
  IconButton,
  ListItem,
  ListItemText,
  ListItemAvatar
} from '@material-ui/core'

import ChevronLeftIcon from '@material-ui/icons/ChevronLeft'
import ChevronRightIcon from '@material-ui/icons/ChevronRight'

import Image from 'material-ui-image'

const drawerWidth = 300

const useStyles = makeStyles((theme) => ({
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
    whiteSpace: 'nowrap'
  },
  drawerOpen: {
    width: drawerWidth,
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen
    })
  },
  drawerClose: {
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen
    }),
    overflowX: 'hidden',
    width: theme.spacing(12) + 1
  },
  toolbar: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end'
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3)
  }
}))

const icons = [
  {
    label: 'Create New Task',
    icon: 'https://cdn.discordapp.com/attachments/832189594137133056/832757532409856000/image0.png'
  },
  {
    label: 'My Calendar',
    icon: 'https://cdn.discordapp.com/attachments/832189594137133056/832757532908584990/image1.png'
  },
  {
    label: 'My Garden',
    icon: 'https://cdn.discordapp.com/attachments/832189594137133056/832930417123393536/image2.png'
  },
  {
    label: 'My Closet',
    icon: 'https://cdn.discordapp.com/attachments/832189594137133056/832841586286002186/image0.png'
  },
  {
    label: 'Store',
    icon:
      'https://media.discordapp.net/attachments/832189594137133056/832757533571416104/image3.png'
  },
  {
    label: 'Settings',
    icon: 'https://cdn.discordapp.com/attachments/832189594137133056/832757533843259392/image4.png'
  }
]

const Sidebar = () => {
  const classes = useStyles()
  const theme = useTheme()
  const [open, setOpen] = React.useState(false)
  const handleDrawerOpen = () => {
    setOpen(true)
  }
  const handleDrawerClose = () => {
    setOpen(false)
  }

  return (
    <SwipeableDrawer
      variant='permanent'
      className={clsx(classes.drawer, {
        [classes.drawerOpen]: open,
        [classes.drawerClose]: !open
      })}
      classes={{
        paper: clsx({
          [classes.drawerOpen]: open,
          [classes.drawerClose]: !open
        })
      }}
    >
      <div className={classes.toolbar}>
        <IconButton onClick={open ? handleDrawerClose : handleDrawerOpen}>
          {theme.direction === 'rtl' ? (
            open ? (
              <ChevronRightIcon />
            ) : (
              <ChevronLeftIcon />
            )
          ) : open ? (
            <ChevronLeftIcon />
          ) : (
            <ChevronRightIcon />
          )}
        </IconButton>
      </div>
      <Divider />

      <List>
        {icons.map((item, index) => (
          <ListItem button style={{ padding: 0 }} key={index}>
            <ListItemAvatar>
              <Image color='none' src={item.icon} />
            </ListItemAvatar>
            <ListItemText
              primary={item.label}
              style={{
                paddingLeft: '20px'
              }}
            />
          </ListItem>
        ))}
      </List>
      <Divider />
    </SwipeableDrawer>
  )
}

export default Sidebar
