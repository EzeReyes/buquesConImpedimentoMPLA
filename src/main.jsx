import ReactDOM from 'react-dom/client'
import App from './App'
import { ApolloProvider } from '@apollo/client/react'
import client from './api/apollo'
import { BrowserRouter } from 'react-router-dom'
import AuthProvider from '../src/hooks/AuthProvider'

ReactDOM.createRoot(document.getElementById('root')).render(
    <BrowserRouter>
        <ApolloProvider client={client}>
            <AuthProvider>
            <App />
            </AuthProvider>
        </ApolloProvider>
    </BrowserRouter>
)