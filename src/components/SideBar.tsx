import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'

import {
  BsHouseFill,
  BsBroadcast,
  BsGridFill,
} from 'react-icons/bs'

import { IoSearch } from 'react-icons/io5'

import appleLogo from '../assets/logos/apple.svg'

type SidebarProps = {
  setSearch: React.Dispatch<React.SetStateAction<string>>
}

const Sidebar = ({ setSearch }: SidebarProps) => {
  const [isSearchOpen, setIsSearchOpen] = useState(false)
  const navigate = useNavigate()

  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
    })
  }

  const handleSearch = (value: string) => {
    setSearch(value)
    navigate('/')

    setTimeout(() => {
      scrollToSection('search')
    }, 100)
  }

  return (
    <>
      <aside
        className="bg-dark d-none d-md-flex flex-column p-3 position-fixed top-0 start-0 vh-100"
        style={{ width: '240px', zIndex: 20 }}
      >
        <Link to="/" className="d-flex align-items-center gap-1 mb-4">
          <img
            className="logo-white"
            src={appleLogo}
            alt="Apple logo"
            height={22}
          />
        </Link>

        <input
          type="text"
          placeholder="Cerca"
          className="form-control bg-black border-secondary text-light mb-4"
          onChange={(e) => handleSearch(e.target.value)}
        />

        <nav className="d-flex flex-column gap-3">
          <Link
            to="/"
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="text-decoration-none text-light d-flex align-items-center gap-2"
          >
            <BsHouseFill className="text-danger" />
            <span>Home</span>
          </Link>

          <button
            className="btn btn-link text-light text-decoration-none p-0 d-flex align-items-center gap-2"
            onClick={() => scrollToSection('novita')}
          >
            <BsGridFill className="text-danger" />
            <span>Novità</span>
          </button>

          <button
            className="btn btn-link text-light text-decoration-none p-0 d-flex align-items-center gap-2"
            onClick={() => scrollToSection('radio')}
          >
            <BsBroadcast className="text-danger" />
            <span>Radio</span>
          </button>
        </nav>
      </aside>

      {isSearchOpen && (
        <div
          className="d-md-none position-fixed start-0 w-100 bg-dark p-3 border-top border-secondary"
          style={{ bottom: '56px', zIndex: 40 }}
        >
          <input
            type="text"
            placeholder="Cerca in Apple Music"
            className="form-control bg-black border-secondary text-light"
            autoFocus
            onChange={(e) => handleSearch(e.target.value)}
          />
        </div>
      )}

      <nav
        className="bg-black d-md-none d-flex justify-content-around py-2 border-top border-secondary position-fixed bottom-0 start-0 w-100"
        style={{ zIndex: 30 }}
      >
        <Link
          to="/"
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="d-flex flex-column align-items-center text-danger small text-decoration-none"
        >
          <BsHouseFill className="fs-5 mb-1" />
          <span>Home</span>
        </Link>

        <button
          className="btn btn-link d-flex flex-column align-items-center text-secondary small text-decoration-none p-0"
          onClick={() => scrollToSection('radio')}
        >
          <BsBroadcast className="fs-5 mb-1" />
          <span>Radio</span>
        </button>

        <button
          className="btn btn-link d-flex flex-column align-items-center text-secondary small text-decoration-none p-0"
          onClick={() => setIsSearchOpen(!isSearchOpen)}
        >
          <IoSearch className="fs-5 mb-1" />
          <span>Cerca</span>
        </button>
      </nav>
    </>
  )
}

export default Sidebar