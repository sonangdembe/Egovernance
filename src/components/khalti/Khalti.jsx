
import React from 'react';
import KhaltiCheckout from "khalti-checkout-web";
import Config from './KhaltiConfig';

export default function Khalti() {
    let checkout = new KhaltiCheckout(Config);
    return (
        <div>
            <button 
                style={{ 
                    backgroundColor: 'purple',
                    border: '1px solid black',
                    fontWeight: 'bold',
                    padding: '10px 20px',
                    cursor: 'pointer',
                    color: 'white',
                    transition: 'background-color 0.5s, border-color 0.3s'
                }}
                onClick={() => checkout.show({ amount: 10000 })}
                // onMouseOver={(e) => e.target.style.backgroundColor = 'green'}
                // onMouseOut={(e) => e.target.style.backgroundColor = 'green'}
            >
                Pay via Khalti
            </button>
        </div>
    );
}
