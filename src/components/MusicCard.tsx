import { Link } from 'react-router-dom'

// TIPI DELLE PROPS
type MusicCardProps = {
  // immagine card
  image: string

  // titolo principale
  title: string

  // sottotitolo opzionale
  subtitle?: string

  // link esterno opzionale
  link?: string

  // link interno opzionale
  to?: string

  //funzione click opzionale
  onClick?: () => void

}

// COMPONENTE CARD MUSICALE
const MusicCard = ({
  image,
  title,
  subtitle,
  link,
  to,
  onClick,
}: MusicCardProps) => {
  // contenuto riutilizzabile della card
  const cardContent = (
    <>
      {/* immagine */}
      <img
        src={image}
        alt={title}
        className="img-fluid rounded-3 mb-2 w-100"
        style={{aspectRatio: '1 / 1', objectFit: 'cover'}}
      />

      {/* titolo */}
      <h6 className="mb-1 fw-normal text-truncate">
        {title}
      </h6>

      {/* sottotitolo opzionale */}
      {subtitle && (
        <p className="text-secondary small mb-0 text-truncate">
          {subtitle}
        </p>
      )}
    </>
  )

  // se esiste "to", la card naviga dentro la nostra app
  if (to) {
    return (
      <Link
        to={to}
        onClick={onClick}
        className="text-light text-decoration-none d-block"
      >
        {cardContent}
      </Link>
    )
  }

  // se esiste "link", la card apre un sito esterno
  if (link) {
    return (
      <a
        href={link}
        target="_blank"
        rel="noreferrer"
        className="text-light text-decoration-none d-block"
        onClick={onClick}
      >
        {cardContent}
      </a>
    )
  }

  // altrimenti card normale non cliccabile
  return (
    <div onClick={onClick} role="button">
        {cardContent}
    </div>
  )
  
}

export default MusicCard