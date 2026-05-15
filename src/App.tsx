import { Routes, Route } from 'react-router-dom'
import { useState } from 'react'
import './App.css'

import TopBar from './components/TopBar'
import MainContent from './components/MainContent'
import SongDetails from './pages/SongDetails'
import Player from './components/Player'
import LoginModal from './components/LoginModal'
import Sidebar from './components/SideBar'

import type { Song } from './types/song'

function App() {

  // state brano selezionato
  const [selectedSong, setSelectedSong] =
    useState<Song | null>(null)

  // state play globale
  const [isPlaying, setIsPlaying] = useState(false)

  // state ricerca
  const [search, setSearch] = useState('queen')

  return (
    <div className="app">

      {/* topbar desktop/mobile */}
      <TopBar
        selectedSong={selectedSong}
        isPlaying={isPlaying}
        setIsPlaying={setIsPlaying}
      />

      {/* sidebar */}
      <Sidebar setSearch={setSearch} />

      {/* routes */}
      <Routes>

        {/* homepage */}
        <Route
          path="/"
          element={
            <MainContent
              setSelectedSong={setSelectedSong}
              search={search}
              setSearch={setSearch}
            />
          }
        />

        {/* dettagli brano */}
        <Route
          path="/song/:id"
          element={<SongDetails />}
        />

      </Routes>

      {/* modal login */}
      <LoginModal />

      {/* player */}
      <Player
        selectedSong={selectedSong}
        isPlaying={isPlaying}
        setIsPlaying={setIsPlaying}
      />

    </div>
  )
}

export default App