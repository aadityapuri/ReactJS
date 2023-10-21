import { useEffect, useState } from "react";


function useCurrencyInfo(currency){
  const [data, setData] = useState({})
  let url = `https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/${currency}.json`
  useEffect(()=>{
    fetch(url)
    .then((response)=>response.json())
    .then((response)=>setData(response[currency]))
  }, [currency]);
  console.log(data);
  return data;
}

export default useCurrencyInfo;