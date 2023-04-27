import React from "react";
import PageTitle from "../../components/layout/PageTitle";
import { useReducer } from "react";

const initialState = {
  cart: [],
  products: [],
  user: null,
  number: 0,
};

function reducer(state, action) {
  switch (action.type) {
    case "number_Add2":
      return { ...state, number: state.number + 2 }
    case "number_Miss2":
        return {...state, number: state.number - 2}
    case "user":
        return {...state, user: { name: action.payload}}
    default:
      return state;
  }
}

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
            <button className="btn" onClick={() => dispatch({type: 'number_Add2'})}>+2</button>
            <button className="btn" onClick={() => dispatch({type: 'number_Miss2'})}>-2</button>
        </div>
      </div>
    </div>
  );
};

export default UseReducer;
