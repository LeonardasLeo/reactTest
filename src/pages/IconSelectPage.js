import React, {useState} from 'react';
import { useDispatch } from 'react-redux';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../App.css'
import { changeIconAndResetGame } from '../features/player';
import { useNavigate } from 'react-router-dom';

const IconSelectPage = () => {
    const icons = [
        'https://cdn0.iconfinder.com/data/icons/board-card-games-iconez/64/Monopoly-Ship-256.png',
        'https://cdn0.iconfinder.com/data/icons/board-card-games-iconez/64/Monopoly-Shoe-256.png',
        'https://cdn0.iconfinder.com/data/icons/board-card-games-iconez/64/Monopoly-Car-256.png',
        'https://cdn0.iconfinder.com/data/icons/board-card-games-iconez/64/Monopoly-Wheelbarrow-512.png',
        'https://cdn0.iconfinder.com/data/icons/board-card-games-iconez/64/Monopoly-Cannon-512.png'
    ]
    const [selectedIcon, setSelectedIcon] = useState('')
    const nav = useNavigate()
    const dispatch = useDispatch()
    return (
        <div className='d-flex flex-column p-3 gap-3'>
            <div className='d-flex gap-3 justify-content-center'>
                {icons.map(item => <div key={item} style={{backgroundColor: selectedIcon === item ? 'green' : '', borderRadius: '10px'}}>
                    <img className='icon' src={item} alt="" onClick={() => {
                        setSelectedIcon(item)
                    }}/>
                </div>)}
            </div>
            <div className='d-flex justify-content-center'>
                <div className='startButton' onClick={() => {
                    nav('/mainPage')
                    dispatch(changeIconAndResetGame(selectedIcon))
                }}>Start game</div>
            </div>
        </div>
    );
};

export default IconSelectPage;