import React from 'react';

const NavBar = () => {

    const user = { name: 'Guido'}

    return (
        <nav className="navbar navbar-dark bg-dark mb-4">
            <div className="container">
                <span className="navbar-brand">
                    <h2>{user ? `Hola ${user.name}` : 'Bienvenid@'}</h2>
                </span>

                { user ? 
                    <button className="btn btn-primary">
                        Cerrar Sesion
                    </button>
                :
                    <button className="btn btn-primary">
                        Iniciar Sesion
                    </button>
                }
                
                
            </div>
        </nav>

    )
}

export default NavBar