import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import StripeContainer from '../components/StripeContainer'
import { useState } from 'react'
import spatula from '../public/spatula.jpg'
import Image from 'next/image'

export default function App({ Component, pageProps }: AppProps) {

  const [showItem,setShowItem] = useState(false)
  return (
    <div className="App">
      <h1>Spatula Store</h1>
      {showItem ? <StripeContainer /> : <> <h3>$10.00</h3><Image src={spatula} alt='Spatula' />
        <button onClick={()=>setShowItem(true)}>Purchase Spatula</button></>}
    </div>
    )
}
