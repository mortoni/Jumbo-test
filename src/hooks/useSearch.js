import { useState, useEffect } from 'react'
import axios from 'axios'

const API_KEY = '6ed12e064b90ae1290fa326ce9e790ff'
const API_URL = 'https://api.themoviedb.org/3/search/movie'

export default () => {
  const [movies, setMovies] = useState([])
  const [isLoading, setLoading] = useState(false)
  const [hasError, setError] = useState(false)
  const [searchTerm, setSearchTerm] = useState('')

  useEffect(() => {
    if (searchTerm.length > 0) {
      setLoading(true)
      axios
        .get(`${API_URL}?api_key=${API_KEY}&language=en-US&query=${searchTerm}`)
        .then((data) => {
          setLoading(false)
          if (data.data.results) {
            setMovies(data.data.results)
          }
        })
        .then(() => {
          setLoading(false)
          setError(true)
        })
    } else {
      setMovies([])
    }
  }, [searchTerm])

  return [{ movies, isLoading, hasError }, setSearchTerm]
}
