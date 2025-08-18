import ColorBox from './ColorBox';
import './ColorBoxes.css'

export default function ColorBoxes() {
    const boxes = [];
    for (let i = 0; i < 25; i++) {
        boxes.push(<ColorBox key={i} />);
    }
    return (
        <div className="gameContainer">
            <p id="color-box-text" className='mb-5'>Click on the color tiles to change color!</p>
            <div className="ColorBoxes">
                {boxes}
            </div>
        </div>
    )
}