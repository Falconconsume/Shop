import React from 'react'
import styles from './Blog.module.scss'

const Blog = () => {
    return (
        <div className={styles.blogContainer}>
            <h2>Блог</h2>
            <div className={styles.columnsContainer}>
                <div className={styles.column}>
                    <img
                        src={require('../../assets/main/still-life-bra-lingerie-ratio-10x7-proportions-jpg-ratio-width-500-jpg.webp')}
                        alt="..."
                    />
                    <span className={styles.date}>23.08.2023</span>
                    <h3 className={styles.title}>
                        Секрети Селф-Лав: збережи красу з нашою нижнью...
                    </h3>
                    <p className={styles.text}>
                        Краса та впевненість починаються з догляду за собою, і
                        нижня білизна грає важливу роль в цьому процесі. У цій
                        статті...
                    </p>
                    <a href="#" className={styles.link}>
                        Детальніше <span className={styles.arrow}>&rarr;</span>
                    </a>
                </div>
                <div className={styles.column}>
                    <img
                        src={require('../../assets/main/bride-silk-robe-putting-stockings-wedding-morning-preparation-concept-getting-ready-dressing-lingerie-boudoir-space-text-ratio-10x7-proportions-jpg-ratio-width-500-jpg.webp')}
                        alt="..."
                    />
                    <span className={styles.date}>04.08.2023</span>
                    <h3 className={styles.title}>
                        Таємниці комфорту: як вибрати ідеальну нижню білизну
                    </h3>
                    <p className={styles.text}>
                        Справжній комфорт починається з вибору правильною
                        нижньої білизни. У нашій новій статті ми розкриємо всі
                        таємниці вибору...
                    </p>
                    <a href="#" className={styles.link}>
                        Детальніше <span className={styles.arrow}>&rarr;</span>
                    </a>
                </div>
                <div className={styles.column}>
                    <img
                        src={require('../../assets/main/still-life-bra-lingerie-ratio-10x7-proportions-jpg-ratio-width-500-jpg.webp')}
                        alt="..."
                    />
                    <span className={styles.date}>30.01.2023</span>
                    <h3 className={styles.title}>
                        Зваблива ніжність: Топ-5 луків для впевненості та
                        комфорту!
                    </h3>
                    <p className={styles.text}>
                        Чи не час віддати належне увозі своїй нижній білизні? У
                        нашій новій статті ми розглянемо п'ять захоплюючих
                        способів...
                    </p>
                    <a href="#" className={styles.link}>
                        Детальніше <span className={styles.arrow}>&rarr;</span>
                    </a>
                </div>
            </div>
        </div>
    )
}

export default Blog
