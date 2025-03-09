import { useQuery, gql } from "@apollo/client";

const GET_LOCATIONS = gql`
query ExampleQuery {
footer {
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
      name
      link
      icon {
        url
      }
    }
  }
  documentId
  cta {
    button {
      label
      link
      order
    }
  }
}
}
`
export default function DisplayLocations() {
  const { loading, error, data } = useQuery(GET_LOCATIONS);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error : {error.message}</p>;

  return <code>{JSON.stringify(data)}</code>
}