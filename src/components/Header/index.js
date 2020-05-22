import React from 'react'
import { Box } from '@material-ui/core'
import Background from '../../assets/background.png'
import Logo from '../../assets/logo.png'
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles((theme) => ({
  header: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundImage: `url(${Background})`,
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
    height: 195,
  },
}))
function Header() {
  const classes = useStyles()

  return (
    <Box className={classes.header}>
      <img src={Logo} alt="Logo" width={66} height={59} />
    </Box>
  )
}

export default Header
