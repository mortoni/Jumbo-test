import React from 'react'
import { Box, IconButton } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
import ArrowBackIcon from '@material-ui/icons/ArrowBack'
import { navigate } from '@reach/router'
import { ROUTES } from '../../routes'

const useStyles = makeStyles((theme) => ({
  header: {
    display: 'flex',
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    backgroundImage: ({ image }) => `url(http://image.tmdb.org/t/p/original//${image})`,
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
    backgroundSize: 'cover',
    height: 400,
    [theme.breakpoints.down('md')]: {
      height: 200,
    },
  },
  icon: {
    color: '#FFFFFF',
  },
}))
function Banner({ image }) {
  const classes = useStyles({ image })

  return (
    <Box className={classes.header}>
      <Box>
        <IconButton aria-label="go back" onClick={() => navigate(ROUTES.HOME)}>
          <ArrowBackIcon className={classes.icon} />
        </IconButton>
      </Box>
    </Box>
  )
}

export default Banner
