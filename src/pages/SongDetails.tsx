// import hook React
import { useEffect, useState } from 'react'

// import hook router
import { useParams } from 'react-router-dom'

// import type TypeScript
import type { Song } from '../types/song'

const SongDetails = () => {

  // recupero id dalla URL
  const { id } = useParams()

  // state singola canzone
  const [song, setSong] = useState<Song | null>(null)

  // state loading
  const [isLoading, setIsLoading] = useState(true)

  // state errore
  const [isError, setIsError] = useState(false)

  // fetch dettaglio brano
  useEffect(() => {

    fetch(`https://striveschool-api.herokuapp.com/api/deezer/track/${id}`)

      .then((response) => {

        if (!response.ok) {
          throw new Error('Errore nel recupero brano')
        }

        return response.json()
      })

      .then((data) => {

        setSong(data)

        setIsLoading(false)
      })

      .catch((error) => {

        console.log(error)

        setIsError(true)

        setIsLoading(false)
      })

  }, [id])

  return (
  <main className="main-content px-4 px-md-5 py-5">
    {isLoading && <p>Caricamento...</p>}

    {isError && (
      <p className="text-danger">Errore nel caricamento del brano</p>
    )}

    {song && (
      <div className="row justify-content-center align-items-center g-5">
        <div className="col-12 col-md-5 col-lg-4">
          {song.album && (
            <img
              src={song.album.cover_medium}
              alt={song.title}
              className="img-fluid rounded-4 shadow w-100"
            />
          )}
        </div>

        <div className="col-12 col-md-7 col-lg-6">
          <p className="text-secondary mb-2">Brano</p>

          <h1 className="fw-bold display-5">{song.title}</h1>

          <h4 className="text-secondary mt-3">
            {song.artist?.name}
          </h4>

          {song.album && (
            <p className="mt-4 text-secondary">
              Album: {song.album.title}
            </p>
          )}
        </div>
      </div>
    )}
  </main>
)
}
  
export default SongDetails