import React from 'react';
import { createRoot } from 'react-dom/client';
import {createStore} from 'redux'
import reducer from './reducer';
import {inc, dec, rnd} from './actions'



const store = createStore(reducer);

const {dispatch} = store;



const update = () => {
    document.getElementById('counter').textContent = store.getState().value;
}

store.subscribe(update);



document.getElementById('inc').addEventListener('click', () => {
    dispatch(inc())
});

document.getElementById('dec').addEventListener('click', () => {
    dispatch(dec())
});  

document.getElementById('rnd').addEventListener('click', () => {
    const value =  Math.floor(Math.random() * 10)
    dispatch(rnd(value))
});  




// console.log(store.getState());

// let state = reducer(initialState, {type: 'INC'});
//     state = reducer(state, {type: 'INC'});
//     state = reducer(state, {type: 'INC'});
//     state = reducer(state, {type: 'INC'});
// console.log(state);



const root = createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
 
  </React.StrictMode>
);
