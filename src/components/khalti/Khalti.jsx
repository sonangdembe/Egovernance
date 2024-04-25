// import React from 'react'
// import KhaltiCheckout from "khalti-checkout-web";
// import Config from './KhaltiConfig'


// export default function khalti () {
//     let checkout = new KhaltiCheckout(Config);
//   return (
//     <div>
      
//         <button onClick={() => checkout.show({amount: 1000}) }> pay via khalti</button>
//     </div>
//   )
// }

import React from 'react';
import KhaltiCheckout from "khalti-checkout-web";
import Config from './KhaltiConfig';

export default function Khalti() {
    let checkout = new KhaltiCheckout(Config);
    return (
        <div>
            <button 
                style={{ 
                    backgroundColor: 'rgb(115, 6, 6)',
                    border: '1px solid black',
                    padding: '10px 20px',
                    cursor: 'pointer',
                    color: 'white',
                    transition: 'background-color 0.5s, border-color 0.3s'
                }}
                onClick={() => checkout.show({ amount: 1000 })}
                onMouseOver={(e) => e.target.style.backgroundColor = 'green'}
                onMouseOut={(e) => e.target.style.backgroundColor = 'green'}
            >
                Pay via Khalti
            </button>
        </div>
    );
}
