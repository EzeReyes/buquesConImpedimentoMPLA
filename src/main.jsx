import ReactDOM from 'react-dom/client'
import App from './App'
import { ApolloProvider } from '@apollo/client/react'
import client from './api/apollo'
import { BrowserRouter } from 'react-router-dom'

ReactDOM.createRoot(document.getElementById('root')).render(
    <BrowserRouter>
        <ApolloProvider client={client}>
            <App />
        </ApolloProvider>
    </BrowserRouter>
)