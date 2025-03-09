import './tag.css'

type PROPS = {
  label: string
}

export default function (props: PROPS) {
  return (
    <span className='tag'>{props.label}</span>
  )
}