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
                    <button className='center'>
                        Card
                    </button>
                </li>
                <li className='center'>
                    <button className='center'>
                        Bank
                    </button>
                </li>
                <li className='center'>
                    <button className='center'>
                        USSD
                    </button>
                </li>
                <li className='center'>
                    <button className='center'>
                        Visa OR
                    </button>
                </li>
            </ul>
        </aside>
    )
}

export default SideBar;