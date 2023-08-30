import React, {useEffect} from 'react';
import '../App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { movePlayer } from '../features/player';
import { buyStreet } from '../features/player';
import { sellStreet } from '../features/player';


const MainPage = () => {
    const player = useSelector(state => state.player)
    const boughtProperties = [...player.bought]
    const boughtPropertiesSorted = boughtProperties.sort((a,b) => a.index - b.index)
    const dispatch = useDispatch()
    const [rolledNumber, setRolledNumber] = useState(0)
    const [image, setImage] = useState('https://cdn0.iconfinder.com/data/icons/phosphor-regular-vol-2/256/dice-one-256.png')
    const board = [
            {index: 1, name: 'Start'},
            {index: 2, street: 'Dariaus ir Gireno g.', color: '#f79ac0', price: 50},
            {index: 3, street: 'Svitrigailos g.', color: '#f79ac0', price: 50},
            {index: 4, street: 'Kauno g.', color: '#f79ac0', price: 50},
            {index: 5, street: 'Gariunu g.', color: 'brown', price: 20},
            {index: 6, street: 'Kirtimu g.', color: 'brown', price: 20},
            {index: 16, street: 'Konstitucijos prospektas', color: '#1249e5', price: 200},
            {index: 0, name: 'Kauliukas'},
            {index: 0, name: 'Roll dice'},
            {index: 0},
            {index: 0},
            {index: 7, street: 'Savanoriu prospektas', color: 'orange', price: 100},
            {index: 15, street: 'Gedimino prospektas', color: '#1249e5', price: 200},
            {index: 0},
            {index: 0},
            {index: 0},
            {index: 0},
            {index: 8, street: 'Basanaviciaus g.', color: 'orange', price: 100},
            {index: 14, street: 'Vytauto g.', color: 'lightBlue', price: 10},
            {index: 13, street: 'Kestucio g.', color: 'lightBlue', price: 10},
            {index: 12, street: 'Latviu g.', color: 'lightBlue', price: 10},
            {index: 11, street: 'Vokieciu g.', color: 'green', price: 30},
            {index: 10, street: 'Vilniaus g.', color: 'green', price: 30},
            {index: 9, street: 'Pilies g.', color: 'green', price: 30}
        ]
    const [error, setError] = useState('')
        function rollDice () {
            setRolledNumber(Math.floor(Math.random() * 6) + 1)
        }

        useEffect(() => {
            if (rolledNumber === 1) setImage('https://cdn0.iconfinder.com/data/icons/phosphor-regular-vol-2/256/dice-one-256.png')
            if (rolledNumber === 2) setImage('https://cdn0.iconfinder.com/data/icons/phosphor-regular-vol-2/256/dice-two-512.png')
            if (rolledNumber === 3) setImage('https://cdn0.iconfinder.com/data/icons/phosphor-regular-vol-2/256/dice-three-512.png')
            if (rolledNumber === 4) setImage('https://cdn0.iconfinder.com/data/icons/phosphor-regular-vol-2/256/dice-four-512.png')
            if (rolledNumber === 5) setImage('https://cdn0.iconfinder.com/data/icons/phosphor-regular-vol-2/256/dice-five-512.png')
            if (rolledNumber === 6) setImage('https://cdn0.iconfinder.com/data/icons/phosphor-regular-vol-2/256/dice-six-512.png')
            setTimeout(() => {dispatch(movePlayer(rolledNumber))}, 1000)
        }, [rolledNumber])
        
        function isStreetBought(item){
           return player.bought.find(boughtItem => boughtItem.index === item.index)
        }

        function buy (item) {
            if (player.money >= item.price){
                dispatch(buyStreet(item))
                setError('')
            }else{
                setError('Not enough money')
            }
        }
        
    return (
        <div className='p-3'>
            <nav className='navbar gap-3'>
             <div>Money: <b>{player.money}$</b></div>
            </nav>
            <div className='mt-3 error'>{error}</div>
            <div className='d-flex mt-4 gap-3'>
                <div className='board'>
                     {board.map((item, index) =>
                        item.name === 'Kauliukas' 
                        ? <div key={index} className='cell p-3' style={{justifyContent: 'center'}}>
                            <img className='dice' src={image}></img>
                        </div> 
                 
                        : item.name === 'Roll dice' 
                        ? <div key={index} className='cell'>
                            <div className='rollButton' onClick={rollDice}>Roll dice</div>
                            </div>
                        // IF CELL IS NOT BLANK
                        : item.index !== 0 ? 
                            <div key={index} style={{backgroundColor: item.color}} className='cell'>
                                <div>{item.name && item.name}</div>
                                <div>{item.street}</div>
                                <div className='price'>{item.price && `${item.price}$`}</div>
                                {/* IF PLAYER POSITION MATCHES THE ITEM.INDEX, SHOW PLAYER ICON ON CELL */}
                                {item.index === player.position && 
                                    <div key={index} className='center flex-column'>
                                        <div>
                                            <img className='iconInBoard' src={player.icon}/>
                                        </div>
                                        {/* IF STREET ISNT BOUGHT, AND CELL ISNT START CELL, SHOW 'BUY' BUTTON */}
                                        {!isStreetBought(item) && item.name !== 'Start' &&
                                            <button
                                                onClick={() => buy(item)} style={{padding: '5px 20px'}} className='btn btn-secondary mt-1'>
                                                Buy
                                            </button>}
                                    </div>}
                            </div> 
                        : <div key={index} className='cell'></div>
                    )}
                </div>
                <div className='d-flex flex-column gap-3 boughtItemsContainer'>
                    {boughtPropertiesSorted.map((item, index) =>
                    <div key={index}  className='d-flex gap-3 boughtItem' style={{backgroundColor: item.color}}>
                        <div><b>{item.street}</b>: {item.price}$</div>
                        <button className='btn btn-dark' onClick={() => dispatch(sellStreet(item))}>Sell</button>
                    </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default MainPage;