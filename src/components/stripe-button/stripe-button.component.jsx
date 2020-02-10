import React from 'react';
import StripeCheckout from 'react-stripe-checkout';


const StripeCheckoutButton  =({price})=>{
    const priceForStripe =price *100;
    const publishableKey ='pk_test_io7vdX989Pvii3J6RAhAM0af00iKtgXwhZ';

    const onToken= token=>{
        console.log(token);
        alert('Payment Successful');
    }

    return(
        <StripeCheckout
            label="Pay with Stripe"
            name="Ctrlx.Altf4 E-Commerce"
            billingAddress
            shippingAddress
            image=""
            description={`Your total amount is $${price}`}
            amount={priceForStripe}
            panelLabel="Pay Now"
            token={onToken}
            stripeKey={publishableKey}
        />
    )
}

export default StripeCheckoutButton;