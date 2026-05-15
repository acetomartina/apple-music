import { useState } from 'react'

import { Link } from 'react-router-dom'

import {
  BsFillPlayFill,
  BsPauseFill,
  BsSkipBackwardFill,
  BsSkipForwardFill,
  BsVolumeUpFill,
} from 'react-icons/bs'

import { HiMenuAlt2 } from 'react-icons/hi'

import appleLogo from '../assets/logos/apple.svg'
import musicLogo from '../assets/logos/music.svg'

import type { Song } from '../types/song'

type TopBarProps = {

  selectedSong: Song | null

  isPlaying: boolean

  setIsPlaying: React.Dispatch<
    React.SetStateAction<boolean>
  >
}

const TopBar = ({
  selectedSong,
  isPlaying,
  setIsPlaying,
}: TopBarProps) => {

  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <>
      {/* MOBILE */}
      <header className="bg-dark sticky-top d-md-none">

        <div className="d-flex align-items-center justify-content-between px-4 py-3">

          {/* hamburger */}
          <button
            className="btn btn-link text-danger p-0"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >

            <HiMenuAlt2 className="fs-3" />

          </button>

          {/* logo */}
          <Link
            to="/"
            className="d-flex align-items-center gap-1"
          >

            <img
              className="logo-white"
              src={musicLogo}
              alt="Music logo"
              height={18}
            />

          </Link>

          {/* accedi */}
          <button
            className="btn btn-link text-danger fw-semibold text-decoration-none p-0"
            data-bs-toggle="modal"
            data-bs-target="#loginModal"
          >

            Accedi

          </button>

        </div>

        {/* menu mobile */}
        {isMenuOpen && (

          <nav className="border-top border-secondary px-4 py-3 bg-black">

            <Link
              to="/"
              onClick={() => {
                window.scrollTo({
                  top: 0,
                  behavior: 'smooth',
                })

                setIsMenuOpen(false)
              }}
              className="d-block text-light text-decoration-none mb-3"
            >

              Home

            </Link>

            <button
              className="btn btn-link text-light text-decoration-none p-0 mb-3 d-block"
              onClick={() => {

                document
                  .getElementById('novita')
                  ?.scrollIntoView({
                    behavior: 'smooth',
                  })

                setIsMenuOpen(false)
              }}
            >

              Novità

            </button>

            <button
              className="btn btn-link text-light text-decoration-none p-0 d-block"
              onClick={() => {

                document
                  .getElementById('radio')
                  ?.scrollIntoView({
                    behavior: 'smooth',
                  })

                setIsMenuOpen(false)
              }}
            >

              Radio

            </button>

          </nav>
        )}

      </header>

      {/* DESKTOP */}
      <header
        className="bg-dark d-none d-md-flex align-items-center justify-content-between px-4 py-2 position-sticky top-0"
        style={{
          zIndex: 50,
          marginLeft: '240px',
        }}
      >

        {/* controlli */}
        <div className="d-flex align-items-center gap-3 text-secondary">

          <BsSkipBackwardFill />

          {/* play/pause */}
          <button
            className="btn btn-link text-secondary p-0"
            onClick={() => setIsPlaying(!isPlaying)}
            disabled={!selectedSong?.preview}
          >

            {isPlaying ? (

              <BsPauseFill className="fs-5" />

            ) : (

              <BsFillPlayFill className="fs-5" />

            )}

          </button>

          <BsSkipForwardFill />

        </div>

        {/* logo */}
        <Link
          to="/"
          className="bg-secondary bg-opacity-25 rounded d-flex align-items-center justify-content-center text-decoration-none"
          style={{
            width: '350px',
            height: '32px',
          }}
        >

          <img
            className="logo-white"
            src={appleLogo}
            alt="Apple logo"
            height={18}
          />

        </Link>

        {/* volume */}
        <div className="d-flex align-items-center gap-4">

          <div className="d-flex align-items-center gap-2 text-secondary">

            <BsVolumeUpFill />

            <input
              type="range"
              min="0"
              max="100"
            />

          </div>

          <button
            className="btn btn-danger btn-sm fw-semibold"
            data-bs-toggle="modal"
            data-bs-target="#loginModal"
          >

            Accedi

          </button>

        </div>

      </header>
    </>
  )
}

export default TopBar