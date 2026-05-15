// nuovi episodi radio e nuove uscite

// importo le immagini
import img1 from '../assets/images/2a.png'
import img2 from '../assets/images/2b.png'
import img3 from '../assets/images/2c.png'
import img4 from '../assets/images/2d.png'
import img5 from '../assets/images/2e.png'
import img6 from '../assets/images/2f.png'

// importo componente card
import MusicCard from './MusicCard'

// array card musicali
const musicCards = [
  {
    id: 1,
    image: img1,
    title: 'Pròlogo con Abuelo',
    subtitle: 'Musica',
    to:`/song/4`,
  },

  {
    id: 2,
    image: img2,
    title: 'The Wanderer',
    subtitle: 'Stephan Moccio',
    to:`/song/5`,
  },

  {
    id: 3,
    image: img3,
    title: 'Michael Bublé & Carly Pearce',
    subtitle: 'Intervista',
    to:`/song/6`,
  },

  {
    id: 4,
    image: img4,
    title: 'Stephan Moccio',
    subtitle: 'Zane Lowe',
    to:`/song/7`,
  },

  {
    id: 5,
    image: img5,
    title: 'Julia Michaels',
    subtitle: 'Chart Spotlight',
    to:`/song/8`,
  },

  {
    id: 6,
    image: img6,
    title: 'Karri & Travis Mills',
    subtitle: 'Podcast',
    to:`/song/9`,
  },
]

const MusicRow = () => {
  return (
    <section id="radio" className="mt-5">

      {/* titolo sezione */}
      <h2 className="fw-bold mb-4">
        Nuovi episodi radio
      </h2>

      {/* row card */}
      <div className="row g-3 flex-nowrap overflow-auto pb-2">

        {/* ciclo map */}
        {musicCards.map((card) => (

          <div
            key={card.id}
            className="col-5 col-md-4 col-lg-3 col-xl-2"
          >

            <MusicCard
              image={card.image}
              title={card.title}
              subtitle={card.subtitle}
              to={card.to}
            />

          </div>
        ))}
      </div>
    </section>
  )
}

export default MusicRow