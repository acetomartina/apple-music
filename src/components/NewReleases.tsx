// import hook React
import { useEffect, useState } from 'react'

// import router
import { Link } from 'react-router-dom'

// import componente
import MusicCard from './MusicCard'

// import type
import type { Song } from '../types/song'

type NewReleasesProps = {

  // brano selezionato
  setSelectedSong: React.Dispatch<
    React.SetStateAction<Song | null>
  >

  // play globale
  setIsPlaying: React.Dispatch<
    React.SetStateAction<boolean>
  >

  // ricerca globale
  search: string

  // aggiorna ricerca
  setSearch: React.Dispatch<
    React.SetStateAction<string>
  >
}

const NewReleases = ({
  setSelectedSong,
  setIsPlaying,
  search,
  setSearch,
}: NewReleasesProps) => {

  // state canzoni
  const [songs, setSongs] = useState<Song[]>([])

  // loading
  const [isLoading, setIsLoading] =
    useState(true)

  // errore
  const [isError, setIsError] =
    useState(false)

  // fetch API
  useEffect(() => {

    // se search vuota
    if (!search) return

    setIsLoading(true)
    setIsError(false)

    fetch(
      `https://striveschool-api.herokuapp.com/api/deezer/search?q=${encodeURIComponent(
        search
      )}`
    )

      .then((response) => {

        if (!response.ok) {
          throw new Error('Errore API')
        }

        return response.json()
      })

      .then((data) => {

        setSongs(data.data.slice(0, 10))

        setIsLoading(false)
      })

      .catch((error) => {

        console.log(error)

        setIsError(true)

        setIsLoading(false)
      })

  }, [search])

  return (

    <section id="search" className="mt-5">

      {/* titolo */}
      <h2 className="fw-bold mb-4">
        Nuove uscite
      </h2>

      {/* input ricerca */}
      <input
        type="text"
        className="form-control bg-dark text-light border-secondary mb-4"
        placeholder="Cerca artista..."
        value={search}
        onChange={(e) =>
          setSearch(e.target.value)
        }
      />

      {/* loading */}
      {isLoading && (
        <p className="text-secondary">
          Caricamento...
        </p>
      )}

      {/* errore */}
      {isError && (
        <p className="text-danger">
          Errore caricamento canzoni
        </p>
      )}

      {/* griglia */}
      <div className="row g-3">

        {songs.map((song) => (

          <div
            key={song.id}
            className="col-6 col-md-4 col-lg-3 col-xl-2"
          >

            {/* card */}
            <MusicCard
              image={song.album.cover_medium}
              title={song.title}
              subtitle={song.artist.name}

              // click card
              onClick={() => {

                // salvo brano
                setSelectedSong(song)

                // autoplay
                setIsPlaying(true)
              }}
            />

            {/* dettagli */}
            <Link
              to={`/song/${song.id}`}
              className="btn btn-outline-light btn-sm mt-2 w-100"
            >

              Dettagli

            </Link>

          </div>
        ))}
      </div>
    </section>
  )
}

export default NewReleases