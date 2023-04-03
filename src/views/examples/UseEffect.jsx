import React, { useEffect, useState } from "react";
import PageTitle from "../../components/layout/PageTitle";
import SectionTitle from "../../components/layout/SectionTitle";

function calcFatorial(num) {
    const n = parseInt(num)
    if(n < 0 ) return -1
    if(n === 0 ) return 1
    return calcFatorial(n - 1) * n
}

function calcPar(num){
    const n = parseInt(num)
    if(n % 2 === 0 ) return "Par"
    else{return "Impar"}
}


const UseEffect = (props) => {
    // ex 01
  const [number, setNumber] = useState(1);
  const [fatorial , setFatorial] = useState(1)
  // ex 02
  const [parOuImpar, setParOuImpar] = useState(1)
  const [status, setStatus] = useState('Impar')
  
  useEffect(function() {
    setFatorial(calcFatorial(number))
  }, [number])

  useEffect(function(){
    if(fatorial > 1000000){
        document.title = "Eita"
    }
  },[fatorial])

  useEffect(function(){
    setStatus(calcPar(parOuImpar))
  },[parOuImpar])



  return (
    <div className="UseEffect">
      <PageTitle
        title="Hook UseEffect"
        subtitle="Permite executar efeitos colaterais em componentes funcionais!"
      />
      <SectionTitle title="Exercicio 01"/>
      <div className="center">
        <div>
          <span className="text">Fatorial: </span>
          <span className="text red">{fatorial === -1 ? "Não Existe" : fatorial}</span>
          
        </div>

        <input
          type="number"
          className="input"
          value={number}
          onChange={(e) => setNumber(e.target.value)}
        />
      </div>
      <SectionTitle title="Exercicio 02"/>
      <div className="center">
        <div>
            <span className="text">Status:</span>
            <span className="text red">{status}</span>
        </div>
        <input type="number" className="input" value={parOuImpar}
        onChange={e => setParOuImpar(e.target.value)}/>
      </div>
    </div>
  );
};

export default UseEffect;
