import { useEffect, useRef } from 'react'

import {
  BsFillPlayFill,
  BsPauseFill,
  BsSkipForwardFill,
} from 'react-icons/bs'

import playerImg from '../assets/images/2a.png'

import type { Song } from '../types/song'

type PlayerProps = {

  selectedSong: Song | null

  isPlaying: boolean

  setIsPlaying: React.Dispatch<
    React.SetStateAction<boolean>
  >
}

const Player = ({
  selectedSong,
  isPlaying,
  setIsPlaying,
}: PlayerProps) => {

  // reference audio
  const audioRef = useRef<HTMLAudioElement | null>(null)

  // play globale
  useEffect(() => {

    if (!audioRef.current) return

    if (isPlaying && selectedSong?.preview) {

      audioRef.current.play()

    } else {

      audioRef.current.pause()
    }

  }, [isPlaying, selectedSong])

  return (

    <div
      className="fixed-bottom d-md-none"
      style={{
        zIndex: 50,
        bottom: '56px',
      }}
    >

      {/* audio */}
      <audio
        ref={audioRef}
        src={selectedSong?.preview}
        onEnded={() => setIsPlaying(false)}
      />

      {/* player */}
      <div className="bg-dark border-top border-secondary px-3 py-2">

        <div className="d-flex align-items-center justify-content-between">

          {/* sinistra */}
          <div className="d-flex align-items-center gap-3">

            <img
              src={
                selectedSong?.album?.cover_medium ||
                playerImg
              }
              alt={selectedSong?.title || 'player'}
              width={50}
              className="rounded-3"
            />

            <div>

              <p className="mb-0 small text-light">
                {selectedSong?.artist?.name ||
                  'Apple Music'}
              </p>

              <p className="mb-0 small text-secondary">
                {selectedSong?.title ||
                  'Seleziona un brano'}
              </p>

            </div>
          </div>

          {/* controlli */}
          <div className="d-flex align-items-center gap-2">

            <button
              className="btn btn-link text-light p-0"
              onClick={() =>
                setIsPlaying(!isPlaying)
              }
              disabled={!selectedSong?.preview}
            >

              {isPlaying ? (

                <BsPauseFill className="fs-3" />

              ) : (

                <BsFillPlayFill className="fs-3" />

              )}

            </button>

            <BsSkipForwardFill className="fs-4 text-light" />

          </div>
        </div>
      </div>
    </div>
  )
}

export default Player