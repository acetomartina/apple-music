// Le due card grandi

//importo immagini 
import chillImg from '../assets/images/1a.png'
import musicaUnoImg from '../assets/images/1b.png'
import clubImg from '../assets/images/1c.png'
import { Link } from 'react-router-dom'

// array card hero
const heroCards = [
  {
    id: 1,
    subtitle: 'Nuova stazione radio',
    title: 'Rilassati, al resto pensiamo noi. Ascolta Apple Music Chill',
    image: chillImg,
    alt: 'Apple Music Chill',
    to:'/song1/',
  },

  {
    id: 2,
    subtitle: 'Nuova stazione radio',
    title: 'Ecco la nuova casa della musica latina',
    image: musicaUnoImg,
    alt: 'Musica Uno',
    to:'/song2/',

  },

  {
    id: 3,
    subtitle: 'Nuova stazione radio',
    title: 'La colonna sonora perfetta per ogni momento',
    image: clubImg,
    alt: 'Club Music',
    to:'/song3/',

  },
]

const HeroSection = () => {
  return (
    <section id="novita" className="mt-4">

      {/* titolo */}
      <h1 className="fw-bold display-5 mb-4">
        Novità
      </h1>

      {/* linea */}
      <hr className="border-secondary" />

      {/* row card */}
      <div className="row g-4 flex-nowrap flex-md-wrap overflow-auto overflow-md-visibile pb-2">

        {/* ciclo map */}
        {heroCards.map((card) => (

          <div
            key={card.id}
            className="col-10 col-md-6 col-xl-4 d-flex flex-column"
          >

            {/* parte testuale */}
            <div className="flex-grow-1">

              <p className="text-secondary text-uppercase fw-bold small mb-1">
                {card.subtitle}
              </p>

              <h5 className="fw-normal">
                {card.title}
              </h5>

            </div>

            {/* immagine */}
        <Link to={card.to}>
            <img
              src={card.image}
              alt={card.alt}
              className="img-fluid rounded-4 mt-3"
            />
        </Link>

          </div>
        ))}
      </div>
    </section>
  )
}

export default HeroSection