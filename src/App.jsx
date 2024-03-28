import './App.css'

import Header from './components/header/Header'
import Main from './components/main/Main'
import Footer from './components/footer/Footer'

import ComoReservar from './pages/comoReservar/ComoReservar'
import SobreNos from './pages/sobreNos/SobreNos'
import Informacoes from './pages/informacoes/Informacoes'
import Contato from './pages/contatos/Contatos'

import { Routes, Route } from 'react-router-dom'
import { RiH1 } from 'react-icons/ri'

function App() {

  return (
    <>
      <Header></Header>
      <Routes>
        <Route path='/pagina-de-hoteis/' element={<Main/>}/>
        <Route path='/comoreservar' element={<ComoReservar/>}/>
        <Route path='/sobrenos' element={<SobreNos/>}/>
        <Route path='/informacoes' element={<Informacoes/>}/>
        <Route path='/contatos' element={<Contato/>}/>
      </Routes>
      <Footer></Footer>
    </>
  )
}

export default App
