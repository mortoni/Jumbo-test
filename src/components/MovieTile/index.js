import React from 'react'
import { Box, Typography, Card, CardMedia } from '@material-ui/core'
import { format, isValid } from 'date-fns'
import { makeStyles } from '@material-ui/core/styles'
import { navigate } from '@reach/router'

function getBadgeColor(rate) {
  if (rate <= 3.3) {
    return '#D1225B'
  } else if (rate > 3.3 && rate <= 6.6) {
    return '#4902A3'
  }
  return '#01D277'
}

const useStyles = makeStyles((theme) => ({
  card: {
    position: 'relative',
    cursor: 'pointer',
  },
  badge: {
    position: 'absolute',
    top: 0,
    width: 40,
    height: 20,
    backgroundColor: ({ badgeColor }) => badgeColor,
    borderRadius: 8,
    marginLeft: theme.spacing(1),
    marginTop: theme.spacing(0.5),
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
}))
const MovieTile = ({ poster_path: imgUrl, title, release_date: date, vote_average: rate, id }) => {
  const badgeColor = getBadgeColor(rate)
  const classes = useStyles({ badgeColor })

  return (
    <>
      <Card onClick={() => navigate(`/movie/${id}`)} className={classes.card}>
        <CardMedia component="img" alt={title} title={title} src={`http://image.tmdb.org/t/p/w780//${imgUrl}`} />
        <Box className={classes.badge}>
          <Typography variant="caption">{rate * 10}%</Typography>
        </Box>
      </Card>
      <Box>
        <Typography variant="body1">{title}</Typography>
        <Typography variant="body2">{isValid(new Date(date)) && format(new Date(date), 'MMMM yyyy')}</Typography>
      </Box>
    </>
  )
}

export default MovieTile
