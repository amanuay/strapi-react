import { createRoot } from 'react-dom/client'
import './index.css'
//@ts-ignore
import "@fontsource/poppins"
//@ts-ignore
import "@fontsource/poppins/500"
//@ts-ignore
import "@fontsource/playfair-display"
//@ts-ignore
import "@fontsource/playfair-display/600"
import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client'
import App from './App.tsx'

const client = new ApolloClient({
  uri: 'http://localhost:1337/graphql',
  cache: new InMemoryCache(),
})

createRoot(document.getElementById('root')!).render(
  <ApolloProvider client={client}>
    <App />
  </ApolloProvider>,
)
