import React, { useState, useEffect, useRef } from 'react'
import { Box, Container, TextField, Grid, Typography } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
import SearchIcon from '@material-ui/icons/Search'
import _ from 'lodash'
import useSearch from '../../hooks/useSearch'
import usePopular from '../../hooks/usePopular'
import MovieTile from '../../components/MovieTile'
import Header from '../../components/Header'

const useStyles = makeStyles((theme) => ({
  input: {
    transform: 'translate(0, -50%)',
    minWidth: 342,
  },
}))
function HomePage() {
  const classes = useStyles()
  const [searchTerm, setSearchTerm] = useState('')
  const [{ movies }, fetchMovies] = useSearch()
  const [{ popular }, fetchPopular] = usePopular()
  const delayedQuery = useRef(_.debounce((q) => fetchMovies(q), 300)).current

  useEffect(() => {
    fetchPopular('https://api.themoviedb.org/3/movie/popular')
  }, [fetchPopular])

  function handleSearch(e) {
    setSearchTerm(e.target.value)
    delayedQuery(e.target.value)
  }

  return (
    <>
      <Header />
      <Container component="main" maxWidth="md">
        <Grid container>
          <Grid item container xs={12} justify="center">
            <TextField
              className={classes.input}
              placeholder="Search"
              id="filled-start-adornment"
              variant="filled"
              InputProps={{
                endAdornment: <SearchIcon color="primary" />,
              }}
              onChange={handleSearch}
            />
          </Grid>
          <Grid item xs={12}>
            <Box display={popular.length > 0 && searchTerm.length === 0 ? 'block' : 'none'}>
              <Box mb={2}>
                <Typography variant="h6">Popular Movies</Typography>
              </Box>

              <Grid container spacing={2}>
                {popular.map((movie) => (
                  <Grid key={movie.id} item xs={6} sm={4} md={3}>
                    <MovieTile {...movie} />
                  </Grid>
                ))}
              </Grid>
            </Box>

            <Box display={searchTerm.length > 0 ? 'block' : 'none'}>
              <Box mb={2} display="flex">
                <Typography variant="h6">Showing Results for </Typography>
                <Typography variant="h6" color="primary">
                  "{searchTerm}"
                </Typography>
              </Box>

              <Grid container spacing={2}>
                {movies.length > 0 &&
                  movies.map((movie) => (
                    <Grid key={movie.id} item xs={6}>
                      <MovieTile {...movie} />
                    </Grid>
                  ))}
              </Grid>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </>
  )
}

export default HomePage
