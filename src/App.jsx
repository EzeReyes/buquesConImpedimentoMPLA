import './App.css'
import Router from './routes/Router';

function App() {

  return (
    <>
      <section id="center">
        <div className="hero">
        </div>
        <div>
          <h1 class="font-bold text-3xl">Sistema de buques con deficiencias (MPLA)</h1>
        </div>
        <Router />
      </section>
    </>
  )
}

export default App;
