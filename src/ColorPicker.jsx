import { useState } from "react"
import styles from "./ColorPicker.module.css"

function ColorPicker() {

    const [hex, setHex] = useState('#ffffff');
    const [rgb, setRgb] = useState('rgb(255, 255, 255)');
    const [color, setColor] = useState(hex);
    const [isHex, setIsHex] = useState(true);

    function handleSetColor(e) {
        setRgb(`rgb(${parseInt(e.target.value.slice(-6, -4), 16)}, ${parseInt(e.target.value.slice(-4, -2), 16)}, ${parseInt(e.target.value.slice(-2), 16)})`);
        setHex(e.target.value);
        setColor(isHex ? hex : rgb)
    }

    function changeSetColor() {
        setIsHex(!isHex);
        setColor(isHex ? rgb : hex);
    }

    return (
        <section className={styles.mainContainer}>
            <h1>Color Picker</h1>
            
            <div className={styles.selectedColor} onClick={changeSetColor} style={{backgroundColor: color}}>{color}</div>

            <input type="color" onChange={handleSetColor} />
        </section>
    )
}

export default ColorPicker