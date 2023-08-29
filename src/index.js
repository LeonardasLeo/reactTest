import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css'
import App from './App';
import {configureStore} from "@reduxjs/toolkit";
import {Provider} from "react-redux";
import playerReducer from './features/player'

const root = ReactDOM.createRoot(document.getElementById('root'));


const store = configureStore({
    reducer: {
      player: playerReducer
    }
})


root.render(
      <Provider store={store}>
        <App />
      </Provider>
);
