const Footer = () => {
  return (

    // footer pagina
    <footer className="mt-5 pt-4 pb-1 text-secondary small">

      {/* lingue */}
      <div className="d-flex gap-3 mb-4">

        <span className="text-light">
          Italia
        </span>

        <span>
          English (UK)
        </span>

      </div>

      {/* copyright */}
      <p className="mb-3">
        Copyright © 2024 Apple Inc. Tutti i diritti riservati.
      </p>

      {/* link footer */}
      <div className="d-flex flex-wrap gap-3">

        <span>
          Condizioni dei servizi internet
        </span>

        <span>
          Apple Music e privacy
        </span>

        <span>
          Avviso sui cookie
        </span>

        <span>
          Supporto
        </span>

        <span>
          Feedback
        </span>

      </div>

    </footer>
  )
}

export default Footer