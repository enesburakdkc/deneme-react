import { useState, useRef } from "react"
import styles from "./ColorPicker.module.css"

function ColorPicker() {

    const alert = useRef()

    const [hex, setHex] = useState('#ffffff');
    const [rgb, setRgb] = useState('rgb(255, 255, 255)');
    const [color, setColor] = useState(hex);
    const [isHex, setIsHex] = useState(true);

    function handleSetColor(e) {
        setRgb(`rgb(${parseInt(e.target.value.slice(-6, -4), 16)}, ${parseInt(e.target.value.slice(-4, -2), 16)}, ${parseInt(e.target.value.slice(-2), 16)})`);
        setHex(e.target.value);
        setColor(isHex ? hex : rgb);
    }

    function changeSetColor() {
        setIsHex(!isHex);
        setColor(isHex ? rgb : hex);
        navigator.clipboard.writeText(isHex ? rgb : hex);
        alert.current.getBoundingClientRect();
        alert.current.style.visibility = 'visible';
        alert.current.style.opacity = '1';
        setTimeout(() => {
            alert.current.style.opacity = '0';
        }, 1000);
        setTimeout(() => {
            alert.current.style.visibility = 'hidden';
        }, 2000)
    }

    return (
        <section className={styles.mainContainer}>
            <h1>Color Picker</h1>
            
            <div className={styles.selectedColor} onClick={changeSetColor} style={{backgroundColor: color}}>{color}</div>

            <input type="color" value={hex} onChange={handleSetColor} />

            <div ref={alert} style={{opacity: 0, padding: '1rem', backgroundColor: 'rgb(0, 0, 0, 0.4', borderRadius: '10px', transition: 'opacity 1s ease'}}>Copied to clipboard: {isHex ? hex : rgb}</div>
        </section>
    )
}

export default ColorPicker