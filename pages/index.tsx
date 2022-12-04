import styles from '@/pages/index.module.css'
import {useState} from "react";
import {numbersToRoman} from "../utils/numbers-to-roman";

export default function Home() {
    const [romanValue, setRomanValue] = useState('');

    const handleOnChange = (e) => {
        if(e.target.value) {
            setRomanValue(numbersToRoman(e.target.value));
        }
        else {
            setRomanValue('');
        }
    }

    return (
        <div className={styles.main}>
            <h1 className={styles.title}>Roman Numeral Converter</h1>
            <input className={styles.input} id="arabicInput" type="number" name="arabic" placeholder="Enter number" min="1" max="1000" onChange={handleOnChange}/>
            <input disabled={true} className={styles.input} id="romanInput" type="text" name="roman" value={romanValue} placeholder="Roman numbers"/>
        </div>
    )
}
