import './index.css'
import Router from './routes/Router';
import { Link } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
function App() {

  const location = useLocation();

  return (
    <>
        <header className='flex flex-row items-center justify- gap-2'>
          <div className='flex flex-row items-center justify-center p-2 gap-2'>
            <img src="./logo-insp.jpeg" alt="Logo de la Prefectura Naval Argentina" className='rounded-full w-20 h-20' />
            <div className='flex flex-col items-center justify-center gap-2'>
              <h2 className='font-bold text-md'>Prefectura Mar del Plata</h2>
              <h2 className='font-bold text-md'>Sección Inspecciones Técnicas</h2>
            </div>
          </div>
        </header>
                  <h1 class="font-bold text-3xl text-center sm:my-6 p-2 text-black">Sistema de buques con deficiencias</h1>
        <nav className='flex flex-row items-center justify-center gap-4'>
          <Link to="/" className='bg-slate-400 hover:bg-slate-500 rounded p-1 border border-black text-white'>Página principal</Link>
          <Link to="/vessels-code-17" className='bg-green-100 hover:bg-green-200 rounded p-1 border border-black'>Buques con Código 17</Link>
          <Link to="/vessels-code-30" className='bg-amber-100 hover:bg-amber-200 rounded p-1 border border-black'>Buques con Código 30</Link>
        </nav>
        {location.pathname === "/" && (
          <div className='flex flex-row items-center justify-center m-6 sm:mx-50 sm:my-6'>
            <p className='text-justify text-xl font-semibold'>Bienvenido aquí encontrará información de Buques con impedimento de salida o pendientes previos al zarpe, las medidas fueron impuestas mediante inspecciones extraordinarias por el cuerpo local de inspectores, acorde Regimen de Inspecciones Técnicas reglamentadas por la PNA</p>
          </div> )
          }  
        <Router />
    </>
  )
}

export default App;
