import './ColorBoxes.css'
import {useState} from 'react';

export default function ColorBox() {
    const colors = [
        "#E53935",
        "#E91E63",
        "#9C27B0",
        "#673AB7",
        "#3F51B5",
        "#2196F3",
        "#03A9F4",
        "#00BCD4",
        "#009688",
        "#4CAF50",
        "#8BC34A",
        "#CDDC39",
        "#FFEB3B",
        "#FFC107",
        "#FF9800",
        "#FF5722",
      ];

      function getRandomColor() {
        const randIndex = Math.floor(Math.random() * colors.length);
        const randColor = colors[randIndex];
        return randColor;
      }
      
      const [color, setColor] = useState(getRandomColor());
      const changeColor = () => { setColor(getRandomColor())}

    return (
        <div className="ColorBox" style={{backgroundColor: color}} onClick={changeColor}></div>
    )
}