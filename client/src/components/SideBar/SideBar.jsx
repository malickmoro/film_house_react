import { useContext } from 'react';
import './SideBar.css'
import ContextVariales from '../../context/ContextVariables';

const SideBar = () => {
    const {setSelected, setPayment} = useContext(ContextVariales)

    return(
        <aside id="SideBar">
            <h1 className='center'>pay with</h1>

            <ul>
                <li className='center'>
                    <button className='center' onClick={()=>{setSelected(true);setPayment('card')}}>
                        <i className='bx bxs-credit-card'></i>
                        Card
                    </button>
                </li>
                <li className='center'>
                    <button className='center'>
                        <i className='bx bxs-bank'></i>
                        Bank
                    </button>
                </li>
                <li className='center'>
                    <button className='center'>
                        <p className="new">NEW</p>
                        USSD
                    </button>
                </li>
                <li className='center'>
                    <button className='center'>
                        <i className='bx bxl-visa'></i>
                        Visa OR
                    </button>
                </li>
            </ul>
        </aside>
    )
}

export default SideBar;