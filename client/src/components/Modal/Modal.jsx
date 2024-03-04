import { useContext } from 'react'
import SideBar from '../SideBar/SideBar'
import './Modal.css'
import ContextVariales from '../../context/ContextVariables'
import Card from '../Card/Card'

const Sheet = () => {
    const {selected} = useContext(ContextVariales)

    return(
        <div id='Sheet'>
            {selected && <SideBar />}
            <Card />
        </div>
    )
}

const Modal = () => {

    return(
        <section id="Modal">
            <Sheet />
            <p className='footnote'><i className="bx bxs-lock-alt"></i> Secured by <span>paystack</span></p>
        </section>
    )
}

export default Modal;