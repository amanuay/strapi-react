import './button.css'

type PROPS = {
  label: string,
  type: 'primary' | 'secondary' | 'outline',
  icon?: string
}

export default function Button(props: PROPS) {

  return (
    <button className={props.type}>
      {props.label}
      <div className='button-icon-container'>
        {props.icon && <img src={`${import.meta.env.VITE_MEDIA_URL}${props.icon}`} />}
      </div>
    </button>
  )
}