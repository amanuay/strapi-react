import './banner.css'

type PROPS = {
  banner_heading: string,
  banner_description: string,
  banner_image: string
}

export default function Banner(props: PROPS) {
  return (
    <div className='banner'>
      <div className='text'>
        <h1>{props.banner_heading}</h1>
        <p>{props.banner_description}</p>
      </div>
      <div className='image-container'>
        <img src={props.banner_image} />
      </div>
    </div>
  )
}
