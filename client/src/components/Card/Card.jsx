import './Card.css'

const Card = () => {

    return(
        <section id='Card'>
            <div className="info spBtn">
                <div className="logo">
                    <img width="144" height="144" src="https://img.icons8.com/color/144/paypal.png" alt="paypal"/>
                </div>

                <div className="deets">
                    <p>user@example.com</p>
                    <p>Pay <span> NGN 200</span></p>
                </div>
            </div>
            <form>
                <h3 className='center'>Enter your card details to pay</h3>

                <div className='form-set'>
                    <p className='al-c'>CARD NUMBER</p>
                    <input type="text" placeholder='0000 0000 0000 0000'/>
                </div>
                <div className='form-set'>
                    <p className='al-c'>CARD EXPIRY</p>
                    <input type="date"/>
                </div>
                <div className='form-set'>
                    <p className='al-c'>CVV</p>
                    <input type="NUMBER" placeholder='123'/>
                </div>

                <button type="submit">Pay NGN 200</button>
            </form>
        </section>
    )
}

export default Card