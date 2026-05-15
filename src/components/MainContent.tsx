// sezioni centrali

// importo i componenti

import HeroSection from './HeroSection'
import MusicRow from './MusicRow'
import NewReleases from './NewReleases'
import ExploreSection from './ExploreSection'
import Footer from './Footer'

import type { Song } from '../types/song'

type MainContentProps = {
  setSelectedSong: React.Dispatch<React.SetStateAction<Song | null>>
  search:string
  setSearch:React.Dispatch<React.SetStateAction<string>>
}

const MainContent = ({ setSelectedSong, search, setSearch }: MainContentProps) => {
  return (
    <main className="main-content px-4 px-md-5 py-4">
      <HeroSection />

      <MusicRow />

      <NewReleases setSelectedSong={setSelectedSong} 
      search={search}
      setSearch={setSearch}/>

      <ExploreSection />
      <Footer />
    </main>
  )
}

export default MainContent