import styles from '@/pages/index.module.css'

export default function Home() {
    return (
        <div className={styles.main}>
            <h1 className={styles.title}>Roman Numeral Converter</h1>
            <input className={styles.input} id="arabicInput" type="text" name="arabic" placeholder="Enter number"/>
            <input disabled={true} className={styles.input} id="romanInput" type="text" name="roma" value="" placeholder="Roman numbers"/>
        </div>
    )
}
