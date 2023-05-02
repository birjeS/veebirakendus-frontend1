import { useEffect, useRef, useState } from 'react';
import './App.css';

function App() {
  const [tooted, setTooted] = useState([]);
  const idRef = useRef();
  const nameRef = useRef();
  const priceRef = useRef();
  const isActiveRef = useRef();
  const [pakiautomaadid, setPakiautomaadid] = useState([]);
  const [prices, setPrices] = useState([]);
    const [chosenCountry, setChosenCountry] = useState("ee");


  useEffect(() => {
    fetch("http://localhost:3000/tooted")
      .then(res => res.json())
      .then(json => setTooted(json));
  }, []);

  function kustuta(index) {
    fetch("http://localhost:3000/kustuta-toode/" + index, {"method": "DELETE"})
      .then(res => res.json())
      .then(json => setTooted(json));
  }

  useEffect(() => {
    fetch("http://localhost:3000/parcelmachines")
      .then(res => res.json())
      .then(json => setPakiautomaadid(json));
  }, []);
  
  useEffect(() => {
    fetch("http://localhost:3000/nord-pool-price/" + chosenCountry)
      .then(res => res.json())
      .then(json => {
        setPrices(json);
      });
  }, [chosenCountry]);

  ////////////////////////
  function lisa() {
    const uusToode = {
      "id": idRef.current.value,
      "name": nameRef.current.value,
      "price": priceRef.current.value,
      "isActive": isActiveRef.current.value
    }
    fetch("http://localhost:3000/lisa-toode", {"method": "POST", "body": JSON.stringify(uusToode)})
      .then(res => res.json())
      .then(json => setTooted(json));
  }
  ////////////////////////

  function dollariteks() {
    const kurss = 1.1;
    fetch("http://localhost:3000/price-dollaritesse/" + kurss, {"method": "PATCH"})
      .then(res => res.json())
      .then(json => setTooted(json));
  }

  return (
    <div className="App">
      <label>ID</label> <br />
      <input ref={idRef} type="number" /> <br />
      <label>Nimi</label> <br />
      <input ref={nameRef} type="text" /> <br />
      <label>Hind</label> <br />
      <input ref={priceRef} type="number" /> <br />
      <label>Aktiivne</label> <br />
      <input ref={isActiveRef} type="checkbox" /> <br />
      <button onClick={() => lisa()}>Lisa</button>
      {tooted.map((toode, index) => 
        <div>
          <div>{toode.id}</div>
          <div>{toode.name}</div>
          <div>{toode.price}</div>
          <button onClick={() => kustuta(index)}>x</button>
        </div>)}
      <button onClick={() => dollariteks()}>Muuda dollariteks</button>

      <div>
            <button onClick={() => setChosenCountry("fi")}>Soome</button>
            <button onClick={() => setChosenCountry("ee")}>Eesti</button>
            <button onClick={() => setChosenCountry("lv")}>Läti</button>
            <button onClick={() => setChosenCountry("lt")}>Leedu</button>
            <table style={{marginLeft: "100px"}}>
                <thead>
                <th style={{border: "1px solid #ddd", padding: "12px", backgroundColor: "#04AA6D"}}>Ajatempel</th>
                <th style={{border: "1px solid #ddd", padding: "12px", backgroundColor: "#04AA6D"}}>Hind</th>
                </thead>
                <tbody>
                <div style={{position: "absolute", left: "30px"}}>{chosenCountry}</div>
                {prices.map(data =>
                    <tr key={data.timestamp}>
                        <td style={{border: "1px solid #ddd", padding: "8px"}}>{new Date(data.timestamp * 1000).toISOString()}</td>
                        <td style={{border: "1px solid #ddd", padding: "8px"}}>{data.price}</td>
                    </tr>)}
                </tbody>
            </table>
    </div>
    </div>

    
  );
}

export default App;