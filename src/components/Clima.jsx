import React from "react";
import PropTypes from "prop-types";

const Clima = ({ resultado }) => {
	//Extraer los valores del resultado de la consulta
	const { name, main } = resultado;

	if (!name) return null;

	//Como el resultadod e la temperatura me lo da en grados kelvin se aplicara la siguiente formula
	const kelvin = 273.15;

	return (
		<div className="card-panel white col s12">
			<div className="black-text">
				<h2>El clima de {name} es: </h2>
				<p className="temperatura">
					{parseFloat(main.temp - kelvin, 10).toFixed(2)}
					<span> &#x2103; </span>
					{/*Para poner lo de grados centigrados */}
				</p>
				<p>
					Temperatura Máxima:
					{parseFloat(main.temp_max - kelvin, 10).toFixed(2)}
					<span> &#x2103; </span>
					{/*Para poner lo de grados centigrados */}
				</p>
				<p>
					Temperatura Minima:
					{parseFloat(main.temp_min - kelvin, 10).toFixed(2)}
					<span> &#x2103; </span>
					{/*Para poner lo de grados centigrados */}
				</p>
			</div>
		</div>
	);
};

Clima.propTypes = {
	resultado: PropTypes.object.isRequired,
};

export default Clima;
