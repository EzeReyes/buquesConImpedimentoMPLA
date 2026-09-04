import './index.css'
import Router from './routes/Router';

function App() {

  return (
    <>
      <section id="center">
        <div className="hero">
        </div>
        <div className='flex flex-col items-center justify-center my-20 gap-2'>
          <h1 class="font-bold text-3xl rounded p-2 bg-sky-300 text-white">Sistema de buques con deficiencias</h1>
          <h2 className='font-bold text-xl'>Prefectura Mar del Plata</h2>
          <h2 className='font-bold text-xl'>Sección Inspecciones Técnicas</h2>
        </div>
        <div className='flex flex-row items-center justify-center mx-50 my-10'>
          <p className='text-justify text-xl font-semibold'>Bienvenido aquí encontrará información de Buques con impedimento de salida o pendientes previos al zarpe, las medidas fueron impuestas mediante inspecciones extraordinarias por el cuerpo local de inspectores, acorde Regimen de Inspecciones Técnicas reglamentadas por la PNA</p>
        </div>
        <Router />
      </section>
    </>
  )
}

export default App;
