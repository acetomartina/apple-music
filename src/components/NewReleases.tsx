// importo hook React
import { useEffect, useState } from 'react'

// importo router
import { Link } from 'react-router-dom'

// importo componente card
import MusicCard from './MusicCard'

// importo type TypeScript
import type { Song } from '../types/song'

// TYPE PROPS

type NewReleasesProps = {

  // canzone selezionata
  setSelectedSong: React.Dispatch<
    React.SetStateAction<Song | null>
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
  search,
  setSearch,
}: NewReleasesProps) => {

  // state canzoni
  const [songs, setSongs] = useState<Song[]>([])

  // state loading
  const [isLoading, setIsLoading] = useState(true)

  // state errore
  const [isError, setIsError] = useState(false)

  // fallback ricerca
  const safeSearch = search || 'queen'

  // fetch API
  useEffect(() => {

    //se search non esiste

    if (!search) return

    // reset loading
    setIsLoading(true)

    // reset errore
    setIsError(false)

    // chiamata API Deezer
    fetch(
      `https://striveschool-api.herokuapp.com/api/deezer/search?q=${encodeURIComponent(
        safeSearch
      )}`
    )

      // controllo response
      .then((response) => {

        if (!response.ok) {
          throw new Error('Errore nella chiamata')
        }

        return response.json()
      })

      // dati ricevuti
      .then((data) => {

        // salvo prime 10 canzoni
        setSongs(data.data.slice(0, 10))

        // stop loading
        setIsLoading(false)
      })

      // gestione errore
      .catch((error) => {

        console.log(error)

        setIsError(true)

        setIsLoading(false)
      })

  }, [safeSearch])

  return (

    <section id="search" className="mt-5">

      {/* titolo sezione */}
      <h2 className="fw-bold mb-4">
        Nuove uscite
      </h2>

      {/* input ricerca */}
      <input
        type="text"
        className="form-control bg-dark text-light border-secondary mb-4"
        placeholder="Cerca artista..."
        value={search}

        // aggiorno ricerca
        onChange={(e) => setSearch(e.target.value)}
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
          Qualcosa è andato storto nel caricamento delle canzoni.
        </p>
      )}

      {/* griglia */}
      <div className="row g-3">

        {/* ciclo map */}
        {songs.map((song) => (

          <div
            key={song.id}
            className="col-6 col-md-4 col-lg-3 col-xl-2"
          >

            {/* card solo se album esiste */}
            {song.album && (

              <MusicCard
                image={song.album.cover_medium}
                title={song.title}
                subtitle={song.artist.name}
        

                // selezione brano
                onClick={() => setSelectedSong(song)}
              />

            )}

            {/* bottone dettagli */}
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