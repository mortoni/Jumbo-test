import { useState, useEffect } from 'react'
import axios from 'axios'

const API_KEY = '6ed12e064b90ae1290fa326ce9e790ff'

export default () => {
  const [popular, setPopular] = useState([])
  const [isLoading, setLoading] = useState(false)
  const [hasError, setError] = useState(false)
  const [url, setUrl] = useState('')

  useEffect(() => {
    axios
      .get(`${url}?api_key=${API_KEY}&language=en-US`)
      .then((data) => {
        setLoading(false)
        if (data.data.results) {
          setPopular(data.data.results)
        }
      })
      .catch(() => {
        setLoading(false)
        setError(true)
      })
  }, [url])

  return [{ popular, isLoading, hasError }, setUrl]
}
