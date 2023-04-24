import React from 'react'
import { loadStripe } from '@stripe/stripe-js'
import { Elements } from '@stripe/react-stripe-js'
import PaymentForm from './PaymentForm'

const PUBLIC_KEY = 'pk_test_51MynuVARkexlcUk8HL0jJ2HhcTVHGLL0O59cNiIRvBYiRBcmOJCjn8BOXUGyHNVizbEc8gBxhnKmqILloU5jyl0M00OwxV0GlD'


const stripeTestPromise = loadStripe(PUBLIC_KEY)

export default function StripeContainer() {
    return (
        <Elements stripe={stripeTestPromise}>   
            <PaymentForm />
        </Elements>
    )
}