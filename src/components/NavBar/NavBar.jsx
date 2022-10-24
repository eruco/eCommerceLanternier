import React from 'react'
import CartWidget from '../CartWidget/CartWidget'

function NavBar() {
  return (
    <>

    <h1>Tienda Beta</h1>
    <ul>
        <li>
            <a href="/">Categoria 1</a>
        </li>
        <li>
            <a href="/">Categoria 2</a>
        </li>
        <li>
            <a href="/">Categoria 3</a>
        </li>
        <CartWidget/>
    </ul>

    </>
  )
}

export default NavBar