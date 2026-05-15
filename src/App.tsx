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

  // brano selezionato
  const [selectedSong, setSelectedSong] =
    useState<Song | null>(null)

  // stato play globale
  const [isPlaying, setIsPlaying] =
    useState(false)

  // ricerca globale
  const [search, setSearch] =
    useState('queen')

  return (
    <div className="app">

      {/* topbar */}
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
              setIsPlaying={setIsPlaying}
              search={search}
              setSearch={setSearch}
            />
          }
        />

        {/* dettaglio */}
        <Route
          path="/song/:id"
          element={<SongDetails />}
        />

      </Routes>

      {/* modal */}
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