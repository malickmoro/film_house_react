import './App.css';
import { useEffect } from 'react';
import { usePaystackPayment  } from 'react-paystack';
import Modal from './components/Modal/Modal';

const config = {
  reference: (new Date()).getTime().toString(),
  email: "user@example.com",
  amount: 20000, //Amount is in the country's lowest currency. E.g Kobo, so 20000 kobo = N200
  publicKey: 'pk_test_dsdfghuytfd2345678gvxxxxxxxxxx',
};

// you can call this function anything
const onSuccess = (reference) => {
// Implementation for whatever you want to do with reference and after success call.
console.log(reference);
};

// you can call this function anything
const onClose = () => {
// implementation for  whatever you want to do when the Paystack dialog closed.
console.log('closed')
}

const PaystackHookExample = () => {
  const initializePayment = usePaystackPayment(config);
  return (
    <div>
        <button onClick={() => {
            initializePayment(onSuccess, onClose)
        }}>Paystack Hooks Implementation</button>
    </div>
  );
};


function App() {
  useEffect(() => {
    const script = document.createElement('script');
    script.src = "https://telegram.org/js/telegram-web-app.js";
    script.async = true;
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <main className="App" style={{width: window.innerWidth, height: window.innerHeight}}>
      <Modal />
      {/* <PaystackHookExample />  */}
    </main>
  );
}

export default App;
