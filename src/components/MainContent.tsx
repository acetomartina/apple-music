// sezioni centrali

// import componenti
import HeroSection from './HeroSection'
import MusicRow from './MusicRow'
import NewReleases from './NewReleases'
import ExploreSection from './ExploreSection'
import Footer from './Footer'

// import type
import type { Song } from '../types/song'

type MainContentProps = {

  // brano selezionato
  setSelectedSong: React.Dispatch<
    React.SetStateAction<Song | null>
  >

  // play globale
  setIsPlaying: React.Dispatch<
    React.SetStateAction<boolean>
  >

  // ricerca
  search: string

  // aggiorna ricerca
  setSearch: React.Dispatch<
    React.SetStateAction<string>
  >
}

const MainContent = ({
  setSelectedSong,
  setIsPlaying,
  search,
  setSearch,
}: MainContentProps) => {

  return (

    <main className="main-content px-4 px-md-5 py-4">

      <HeroSection />

      <MusicRow />

      <NewReleases
        setSelectedSong={setSelectedSong}
        setIsPlaying={setIsPlaying}
        search={search}
        setSearch={setSearch}
      />

      <ExploreSection />

      <Footer />

    </main>
  )
}

export default MainContent