import React from 'react';
import PropTypes  from 'prop-types'

const Clima = ({resultado}) => {

    // extraemos los valores del objeto (resultado)

    const { name, main } = resultado

    if(!name) return null

    //Grados Kelvin

    const kelvin = 273.15

    return ( 
        <div className = "card-panel white col s12">
            <div className = "black-text">
                <h2>El clima de {name} es de:</h2>
                <p className = "temperatura">{parseFloat(main.temp - kelvin, 10 ).toFixed(2)}{" "} <span>grados</span></p>
                <p>Temperatura Máxima: 
                     {parseFloat(main.temp_max - kelvin, 10 ).toFixed(2)}{" "} <span>grados</span>
                </p>
                <p>Temperatura Mínima: 
                     {parseFloat(main.temp_min - kelvin, 10 ).toFixed(2)}{" "} <span>grados</span>
                </p>
            </div>

        </div>
    );

}

Clima.propTypes = {
    resultado: PropTypes.object.isRequired
}
 
export default Clima;