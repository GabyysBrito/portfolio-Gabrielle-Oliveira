import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'
import Inicio from '../../pages/inicio/Inicio'
import Formacoes from '../../pages/formacoes/Formacoes'
import Projetos from '../../pages/projetos/Projetos'
import Contato from '../../pages/contato/Contato'
import s from './header.module.scss'

export default function Header() {
    return(
        <BrowserRouter>
            <header className={s.header}>
                <nav className={s.nav}>
                    <ul>
                        <li><Link className={s.link} to='/'>Início</Link></li>
                        <li><Link className={s.link} to='/Formacoes'>Formações</Link></li>
                        <li><Link className={s.link} to='/Projetos'>Projetos</Link></li>
                        <li><Link className={s.link} to='/Contato'>Contato</Link></li>
                    </ul>
                </nav>
            </header>

            <Routes>
                <Route path= '/' element={<Inicio/>}/>
                <Route path= '/Formacoes' element={<Formacoes/>}/>
                <Route path= '/Projetos' element={<Projetos/>}/>
                <Route path='/Contato' element={<Contato/>}/>
            </Routes>
        
        </BrowserRouter>
    )
}