// importo Link router
import { Link } from 'react-router-dom'

// ARRAY LINK ESPLORA

const exploreItems = [

  {
    title: 'Esplora per genere',
    to: '/genre',
  },

  {
    title: 'Decenni',
    to: '/decades',
  },

  {
    title: "Attività e stati d'animo",
    to: '/moods',
  },

  {
    title: 'Worldwide',
    to: '/worldwide',
  },

  {
    title: 'Classifiche',
    to: '/charts',
  },

  {
    title: 'Audio spaziale',
    to: '/spatial-audio',
  },

  {
    title: 'Video musicali',
    to: '/videos',
  },

  {
    title: 'Nuovi artisti',
    to: '/new-artists',
  },

  {
    title: 'Hit del passato',
    to: '/hits',
  },
]

const ExploreSection = () => {
  return (

    <section id="esplora" className="mt-5">

      {/* titolo sezione */}
      <h2 className="fw-bold mb-4">
        Altro da esplorare
      </h2>

      {/* griglia */}
      <div className="row g-3">

        {/* ciclo map */}
        {exploreItems.map((item) => (

          <div
            key={item.title}
            className="col-12 col-md-6 col-lg-4"
          >

            {/* link cliccabile */}
            <Link
              to={item.to}
              className="bg-dark rounded-4 p-3 d-flex justify-content-between align-items-center text-decoration-none"
            >

              {/* testo */}
              <span className="text-danger">
                {item.title}
              </span>

              {/* freccia */}
              <span className="text-danger">
                &gt;
              </span>

            </Link>

          </div>
        ))}
      </div>
    </section>
  )
}

export default ExploreSection