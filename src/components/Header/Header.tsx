import React from 'react'
import { NavLink } from 'react-router-dom'

type Props = {}

export default function Header({}: Props) {
  return (
    <header>
      <nav>
        <ul>
          <li>
            <NavLink to="/">Home</NavLink>
            </li>
          <li>
            <NavLink to="/phones">Phones</NavLink>
            </li>
          <li>
            <NavLink to="/tablets">Tablets</NavLink>
          </li>
          <li>
            <NavLink to="/accessories">Accessories</NavLink>
          </li>
        </ul>
        <ul>
          <li>
            <NavLink to="/favorites">Favorites</NavLink>
          </li>
          <li>
            <NavLink to="/cart">Cart</NavLink>
          </li>
        </ul>
      </nav>
    </header>
  )
}
