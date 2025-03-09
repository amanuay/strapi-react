import './thumbnail.css'

type PROPS = {
  cover: string,
  title: string,
  subtitle: string
  onClick: () => void
}

export default function Thumbnail(props: PROPS) {
  return (
    <div className='thumbnail' onClick={props.onClick}>
      <div className='thumbnail-image-container'>
        <img src={`${import.meta.env.VITE_MEDIA_URL}${props.cover}`} />
      </div>
      <div className='thumbnail-text'>
        <h1>{props.title}</h1>
        <p>{props.subtitle}</p>
      </div>
    </div>
  )
}

