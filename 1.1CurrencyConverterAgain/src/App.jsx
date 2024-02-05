import { useState } from 'react'
import {InputBox} from './components'
import useCurrencyInfo from './hooks/useCurrencyInfo'

function App() {
  const [amount, setAmount] = useState(0);
  const [from, setFrom] = useState("usd");
  const [to, setTo] = useState("inr");
  const [convertedAmount, setConvertedAmount] = useState(0)

  const currencyInfo = useCurrencyInfo(from)
  const currencyOptions = Object.keys(currencyInfo)

  const swap = () => {
    setFrom(to)
    setTo(from)
    setConvertedAmount(amount)
    setAmount(convertedAmount)
  }

  const convert = ()=>{
    setConvertedAmount(amount*currencyInfo[to]);
  }

  return (
    <div 
    className='w-full h-screen flex flex-wrap justify-center items-center bg-cover bg-no-repeat'
    style={{backgroundImage: `url(https://images.pexels.com/photos/15770321/pexels-photo-15770321/free-photo-of-clouds-on-a-sunny-day.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load)`}}
    >
    <div className='w-full'>
      <div className='w-full max-w-md mx-auto border border-gray-60 rounded-lg p-5 backdrop-blur-sm bg-white/30'>
        <form onSubmit={(e)=>{
          e.preventDefault();
          convert()
        }}>
          <div className='w-full mb-1'>
            <InputBox 
              label='From'
              amount = {amount}
              onAmountChange = {(amount) => setAmount(amount)}
              onCurrencyChange = {(currency)=> setFrom(currency)}
              currencyOptions = {currencyOptions}
              selectedCurrency = {from}
              amountDisabled = {false}
              currencyDisabled = {false}
            />
          </div>
          <div className='relative w-full h-0.5'>
            <button className='absolute left-1/2 -translate-x-1/2 -translate-y-1/2 border-2 border-white rounded-md bg-blue-600 text-white px-2 py-0.5' onClick={(e)=>swap()}>Swap</button>
          </div>
          <div className='w-full mb-1'>
            <InputBox 
              label='To'
              amount = {convertedAmount}
              onAmountChange = {(convertedAmount) => setConvertedAmount(convertedAmount)}
              onCurrencyChange = {(currency)=> setTo(currency)}
              currencyOptions = {currencyOptions}
              selectedCurrency = {to}
              amountDisabled = {true}
              className = ''
            />
          </div>
          <button className='w-full bg-blue-600 text-white px-4 py-3 rounded-lg' 
          type='submit'
          //onClick={()=>convert()}
          >Convert {from.toUpperCase()} to {to.toUpperCase()}</button>
        </form>
      </div>
    </div>
    </div>
  )
}

export default App
