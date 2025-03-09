import { gql, useQuery } from '@apollo/client'
import Banner from './Banner'
import './page.css'
import Loading from './Loading'
import Tag from './Tag'
import Thumbnail from './Thumbnail'
import Overlay from './Overlay'
import { useState } from 'react'

const GET_PAGES = gql`
query Query {
  pages {
    banner {
      banner_description
      banner_heading
      banner_image {
        url
      }
    }
    slug
    title
    event_types {
      name
      slug
    }
    events {
      date
      event_type {
        name
        slug
      }
      gallery {
        url
      }
      name
      cover_image {
        url
      }
    }
  }
}
`

export default function Page() {
  const [visibility, setVisibility] = useState(false)
  const { loading, error, data } = useQuery(GET_PAGES)
  if (loading) return <Loading />
  if (error) return <p>Error : {error.message}</p>

  const eventData = data.pages.find((item: any) => item.slug === 'events')
  // console.log(eventData.events)
  const clickThumbnail = () => {
    setVisibility(true)
  }
  const closeOverlay = () => {
    setVisibility(false)
  }
  return (
    <div>
      <Overlay show={visibility} onClick={closeOverlay} />
      <Banner
        banner_description={eventData.banner.banner_description}
        banner_heading={eventData.banner.banner_heading}
        banner_image={`${import.meta.env.VITE_MEDIA_URL}${eventData.banner.banner_image.url}`}
      />
      <div className='tags'>
        {eventData.event_types.map((item: any) => <Tag label={item.name} />)}
      </div>
      <div className='events'>
        {eventData.events.map((item: any) => <Thumbnail
          cover={item.cover_image.url}
          title={item.name}
          subtitle={item.date}
          onClick={clickThumbnail}
        />)}
      </div>
    </div>
  )
}