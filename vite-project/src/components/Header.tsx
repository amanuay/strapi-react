import { gql, useQuery } from '@apollo/client'
import './header.css'
import Loading from './Loading'
import Button from './Button'

const GET_HEADER = gql`
query Query {
  header {
    logo {
      url
    }
    navigation {
      order
      title
      link
    }
    button {
      label
      link
      order
      type
      icon {
        url
      }
    }
  }
}
`

export default function Header() {
  const { loading, error, data } = useQuery(GET_HEADER)
  if (loading) return <Loading />
  if (error) return <p>Error : {error.message}</p>
  const mediaURL = `${import.meta.env.VITE_MEDIA_URL}${data.header.logo.url}`

  return (
    <header>
      <img src={mediaURL} />
      <nav>
        {data.header.navigation.map((item: any) => <span>{item.title}</span>)}
      </nav>
      <div className='buttons'>
        {data.header.button.map((item: any) => {
          if (item.icon) {
            return <Button
              label={item.label}
              type={item.type}
              icon={item.icon.url}
            />
          } else {
            return <Button
              label={item.label}
              type={item.type}
            />
          }
        }
        )
        }
      </div>
    </header>
  )
}