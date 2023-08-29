import React, {useState} from 'react';
import { useDispatch } from 'react-redux';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../App.css'
import { changePlayerIcon } from '../features/player';
import { useNavigate } from 'react-router-dom';

const IconSelectPage = () => {
    const icons = {
        ship: 'https://cdn0.iconfinder.com/data/icons/board-card-games-iconez/64/Monopoly-Ship-256.png',
        shoe: 'https://cdn0.iconfinder.com/data/icons/board-card-games-iconez/64/Monopoly-Shoe-256.png',
        car: 'https://cdn0.iconfinder.com/data/icons/board-card-games-iconez/64/Monopoly-Car-256.png',
        wheelbarrow: 'https://cdn0.iconfinder.com/data/icons/board-card-games-iconez/64/Monopoly-Wheelbarrow-512.png',
        cannon: 'https://cdn0.iconfinder.com/data/icons/board-card-games-iconez/64/Monopoly-Cannon-512.png'
    }
    const [selectedIcons, setSelectedIcons] = useState({
        ship: false,
        shoe: false,
        car: false,
        wheelbarrow: false,
        cannon: false
    })
    const nav = useNavigate()
    const dispatch = useDispatch()
    return (
        <div className='d-flex flex-column p-3 gap-3'>
            <div className='d-flex gap-3 justify-content-center'>
                <div>
                    <img style={{backgroundColor: selectedIcons.ship ? 'green' : ''}} className='icon' src={icons.ship}
                         onClick={() => {
                             dispatch(changePlayerIcon(icons.ship))
                             setSelectedIcons({ship: true, shoe: false, car: false, wheelbarrow: false, cannon: false})
                         }}/>
                </div>
                <div>
                    <img style={{backgroundColor: selectedIcons.shoe ? 'green' : ''}} className='icon' src={icons.shoe}
                         onClick={() => {
                             dispatch(changePlayerIcon(icons.shoe))
                             setSelectedIcons({ship: false, shoe: true, car: false, wheelbarrow: false, cannon: false})
                         }}/>
                </div>
                <div>
                    <img style={{backgroundColor: selectedIcons.car ? 'green' : ''}} className='icon' src={icons.car}
                         onClick={() => {
                             dispatch(changePlayerIcon(icons.car))
                             setSelectedIcons({ship: false, shoe: false, car: true, wheelbarrow: false, cannon: false})
                         }}/>
                </div>
                <div>
                    <img style={{backgroundColor: selectedIcons.wheelbarrow ? 'green' : ''}} className='icon' src={icons.wheelbarrow}
                         onClick={() => {
                             dispatch(changePlayerIcon(icons.wheelbarrow))
                             setSelectedIcons({ship: false, shoe: false, car: false, wheelbarrow: true, cannon: false})
                         }}/>
                </div>
                <div>
                    <img style={{backgroundColor: selectedIcons.cannon ? 'green' : ''}} className='icon' src={icons.cannon}
                         onClick={() => {
                             dispatch(changePlayerIcon(icons.cannon))
                             setSelectedIcons({ship: false, shoe: false, car: false, wheelbarrow: false, cannon: true})
                         }}/>
                </div>
            </div>
            <div className='d-flex justify-content-center'>
                <div className='startButton' onClick={() => {nav('/mainPage')}}>Start game</div>
            </div>
        </div>
    );
};

export default IconSelectPage;