import React from 'react'
import { Link } from 'react-router-dom';

export default function Header() {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-dark bg-primary justify-content-between">
        <div className="container">
          <h1>
            <Link to={'/'} className="text-light">
             Panel para añadir y modificar productos
            </Link>
          </h1>
        </div>
        <Link to={"/productos/nuevo"}
          className="btn btn-danger nuevo-post d-block d-md-inline-block"
        >Agregar Producto &#43;</Link>


      </nav>
    </div>
  )
}
