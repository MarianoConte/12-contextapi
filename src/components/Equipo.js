import React, { Component } from 'react';
import {LaLigaContext} from './LaLiga';
class Equipo extends Component {

    render() {

        return (
            <LaLigaContext.Consumer>
                {(value) => {
                    return Object.keys(value.state).map(idEquipo =>{
                       return(
                        <li className="list-group-item d-flex justify-content-between align-item-center" key={idEquipo}>
                            <p className="m-0">
                                {value.state[idEquipo].nombre}
                            </p>
                            <span className="badge badge-danger p">
                                {value.state[idEquipo].titulos}
                            </span>
                            <button className="btn btn-success" type="button" onClick={() =>{
                                value.esCampeon(idEquipo);
                            }}>
                                Campeon!!!
                            </button>
                        </li>
                       )
                    })
                }}
            </LaLigaContext.Consumer>
        );
    }
}

export default Equipo;