import React from "react";
import PageTitle from "../../components/layout/PageTitle";
import { useReducer } from "react";

import {initialState , reducer} from '../../store'
import {number_Add2 , login} from'../../store/actions'


const UseReducer = (props) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <div className="UseReducer">
      <PageTitle
        title="Hook UseReducer"
        subtitle="Uma outra forma de ter estado em componentes funcionais!"
      />
      <div className="center">
        {state.user 
        ? <span className="user">{state.user.name}</span> 
        : <span className="user">Usuario nao encontrado</span> }
        <span className="text">{state.number}</span>
        <div>
            <button className="btn" onClick={() => dispatch({type: 'user' , payload : 'Maria'})}>Logar</button>
            <button className="btn" onClick={() => dispatch({type: 'number_zero'})}>0</button>
            <button className="btn" onClick={() => number_Add2(dispatch)}>+2</button>
            <button className="btn" onClick={() => dispatch({type: 'number_Miss2'})}>-2</button>
            <button className="btn" onClick={() => dispatch({type: 'number_mult7'})}>*7</button>
            <button className="btn" onClick={() => dispatch({type: "number_div25"})}>/25</button>
            <button className="btn" onClick={() => dispatch({type: 'number_parse'})}>Parse</button>
        </div>
      </div>
    </div>
  );
};

export default UseReducer;
