import React, { useEffect } from 'react'
import { Box, Container, Grid, CardMedia, Typography } from '@material-ui/core'
import { format, isValid } from 'date-fns'
import { makeStyles } from '@material-ui/core/styles'
import useMovieDetails from '../../hooks/useMovieDetails'
import Banner from '../../components/Banner'

function timeConvert(num) {
  var hours = Math.floor(num / 60)
  var minutes = num % 60
  return `${hours}h ${minutes} min`
}

const useStyles = makeStyles((theme) => ({
  cardMedia: {
    borderRadius: 10,
    width: 280,
    height: 426,
    [theme.breakpoints.down('md')]: {
      width: 140,
      height: 213,
    },
  },
  container: {
    position: 'absolute',
    left: 0,
    display: 'flex',
    width: '100%',
    transform: 'translate(0, -35%)',
  },
}))
function DetailsPage({ movieId }) {
  const classes = useStyles()
  const [{ movie, isLoading }, fetchMovie] = useMovieDetails()

  useEffect(() => {
    fetchMovie(movieId)
  }, [fetchMovie, movieId])

  if (movie === null || isLoading) {
    return <Box>Loading...</Box>
  }

  return (
    <>
      <Banner image={movie.backdrop_path} />
      <Container component="main" maxWidth="md">
        <Box position="relative">
          <Grid container>
            <Grid item xs={12}>
              <Box className={classes.container}>
                <Box>
                  <CardMedia
                    classes={{ root: classes.cardMedia }}
                    component="img"
                    alt={movie.title}
                    title={movie.title}
                    src={`http://image.tmdb.org/t/p/w780//${movie.poster_path}`}
                  />
                </Box>
                <Box display="flex" flexGrow={1} justifyContent="flex-end" margin={2} flexDirection="column">
                  <Typography variant="h5">{movie.title} </Typography>

                  <Box mt={1}>
                    <Typography variant="subtitle2">
                      {isValid(new Date(movie.release_date)) && format(new Date(movie.release_date), 'MMMM yyyy')} •{' '}
                      {movie.vote_average * 10}% User Score
                    </Typography>
                    <Typography variant="subtitle2">{timeConvert(movie.runtime)}</Typography>
                  </Box>
                </Box>
              </Box>
            </Grid>

            <Grid item xs={12}>
              <Box mt={{ xs: 18.5, lg: 37 }}>
                <Typography variant="h6">Overview</Typography>

                <Box mt={2}>
                  <Typography component="p" variant="body1">
                    {movie.overview}
                  </Typography>
                </Box>
              </Box>
            </Grid>
          </Grid>
        </Box>
      </Container>
    </>
  )
}

export default DetailsPage
