import './overlay.css'

type PROPS = {
  show: boolean
  onClick: () => void
}

export default function Overlay(props: PROPS) {
  const clname = props.show ? 'overlay active' : 'overlay';

  return (
    <div className={clname}>
      <div>
        <div className='popup'>
          <p onClick={props.onClick}>Close</p>
          <div className='content'></div>
        </div>
      </div>
    </div>
  )
}