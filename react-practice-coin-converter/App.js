import { useEffect, useState } from "react";

function App() {
  const [loading, setLoading] = useState(true); 
  const [coins, setCoins] = useState([]);
  const [cost, setCost] = useState(0);
  const [input, setInput] = useState(0);

  const changeCoin = (event) =>{
    setCost(event.target.value);
  }
  const changeInput = (event) => {
    setInput(event.target.value);
  } 
  const reset = () => setInput("");

  useEffect(()=>{
    fetch("https://api.coinpaprika.com/v1/tickers").then((response) => response.json()
    ).then((json) => {
      setCoins(json)
      setLoading(false);
    });
  }, []);
  return (
    <div>
      <h1>The Coins! {loading ? "" : `(${coins.length})`}</h1>
     {loading ? (
     <strong>Loading...</strong>
     ) : (
       <div>      
          <hr />
          <h2>Please select a coin type</h2> 
          <select onChange={changeCoin}>
            {coins.map((coin) => (
            <option key={coin.id} value={coin.quotes.USD.price}>
              {coin.name} ({coin.symbol}): ${coin.quotes.USD.price} USD
            </option>
            ))}
          </select>  
          <h2>Please enter the amount</h2> 
          <div>
          <label htmlFor="dollar"><strong>dollar : </strong></label>
            <input 
              id="dollar"
              value={input} 
              onChange={changeInput} 
              type="number" 
              placeholder="dollor" 
            />$   
            <h2>You can get coin : {input / cost} </h2> 
          </div>
          <button onClick={reset}>Reset</button>
       </div>
     )}
    </div>
  );
}

export default App;

