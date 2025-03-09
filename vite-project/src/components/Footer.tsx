import { gql, useQuery } from '@apollo/client'
import './footer.css'
import Loading from './Loading'
import Button from './Button'

const GET_FOOTER = gql`
query Query {
  footer {
    copyright {
      name
    }
    cta {
      button {
        label
        link
        order
        icon {
          url
        }
        type
      }
      description
    }
    designed_by {
      logo {
        url
      }
      name
    }
    school_info {
      address
      description
      email
      logo {
        url
      }
      motto
      name
      phone
      socials {
        icon {
          url
        }
        link
        name
      }
    }
  }
  quickLinks {
    label
    url
  }
}
`

export default function Footer() {
  const { loading, error, data } = useQuery(GET_FOOTER)
  if (loading) return <Loading />
  if (error) return <p>Error : {error.message}</p>
  const year = new Date().getFullYear()
  return (
    <footer>
      <div className='school-info'>
        <div className='image-container'>
          <img
            src={`${import.meta.env.VITE_MEDIA_URL}${data.footer.school_info.logo.url}`}
          />
        </div>
        <div className='text'>
          <h1>{data.footer.school_info.name}</h1>
          <p className='motto'>{data.footer.school_info.motto}</p>
          <p className='description'>{data.footer.school_info.description}</p>
        </div>
        <div className='quick-links'>
          <p>QUICK LINKS</p>
          {data.quickLinks.map((item: any) => <div>{item.label}</div>)}
        </div>
        <div className='contact'>
          <p>CONTACT</p>
          <div>{data.footer.school_info.address.split(',').map((item: string) => <p>{item}</p>)}</div>
          <p>{data.footer.school_info.phone}</p>
          <p>{data.footer.school_info.email}</p>
        </div>
        <div className='cta-footer'>
          <h1>{data.footer.cta.description}</h1>
          <Button
            label={data.footer.cta.button.label}
            type={data.footer.cta.button.type}
            icon={data.footer.cta.button.icon.url}
          />
        </div>
      </div>
      <div>
        <p>©<span>{' '}{data.footer.copyright.name}{' '}</span>{year}, All Rights Reserved | Sitemap</p>
      </div>
      <div className='designed-by'>
        <p>Designed by</p>
        <img
          src={`${import.meta.env.VITE_MEDIA_URL}${data.footer.designed_by.logo.url}`}
        />
      </div>
    </footer>
  )
}