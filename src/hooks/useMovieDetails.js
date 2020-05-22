import { useState, useEffect } from 'react'
import axios from 'axios'

const API_KEY = '6ed12e064b90ae1290fa326ce9e790ff'
const API_URL = 'https://api.themoviedb.org/3/movie'

export default () => {
  const [movie, setMovie] = useState(null)
  const [isLoading, setLoading] = useState(false)
  const [hasError, setError] = useState(false)
  const [movieId, setMovieId] = useState(null)

  useEffect(() => {
    axios
      .get(`${API_URL}/${movieId}?api_key=${API_KEY}&language=en-US`)
      .then((data) => {
        setLoading(false)
        if (data.data) {
          setMovie(data.data)
        }
      })
      .catch(() => {
        setLoading(false)
        setError(true)
      })
  }, [movieId])

  return [{ movie, isLoading, hasError }, setMovieId]
}
