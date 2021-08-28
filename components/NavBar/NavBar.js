 import Link from 'next/link'
import styles from '../../styles/Nav.module.css'
const NavBar = () => {
    return (
        <div className={styles.navContainer}>
            <h4 className={styles.logo}>Next <span className={styles.span} >News</span></h4>
            <nav >
             <ul className={styles.nav}>
                 <li>  <Link href='/' ><a>Home</a></Link></li>
                 <li>  <Link href='/eom' ><a>EOM</a></Link></li>
                 <li>  <Link href='/feed/1' ><a>News</a></Link></li>
             </ul>
            </nav>
        </div>
    )
}

export default NavBar
