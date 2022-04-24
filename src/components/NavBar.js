import React from 'react'
import Cartwidget from './Cartwidget'

const NavBar = () => {
    const styles = {
        logo:"btn btn-ghost normal-case text-xl text-black hover:text-amber-400",
        item:"text-black hover:border-amber-300 hover:bg-emerald-600",
        subtienda:"p-2"
    }

    return (
        <div className='navbar bg-emerald-300/75'>
            <div className='flex-1'>
                <a className={styles.logo}>Las Galletitas de la Abuela</a>
            </div>
            <div className="flex-none">
                <ul className="menu menu-horizontal p-0">
                    <li className={styles.item}><a>Nosotros</a></li>
                    <li tabindex="0">
                        <a className='text-black'>
                        Tienda
                            <svg className="fill-current" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z"/></svg>
                        </a>
                        <ul className={styles.subtienda}>
                            <li><a>Submenu 1</a></li>
                            <li><a>Submenu 2</a></li>
                        </ul>
                    </li>
                </ul>
                <Cartwidget/>
            </div>
        </div>
    )
}

export default NavBar