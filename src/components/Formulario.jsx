import React, { Fragment, useState } from "react";
import Error from "./Error";
import PropTypes from "prop-types";

const Formulario = ({ busqueda, guardarBusqueda, guardarConsultar }) => {
	//Destructurin de ciudad y pais
	const { ciudad, pais } = busqueda;

	//Funcion que coloca los elementos en el State
	const handleChange = (e) => {
		//Actualizar el State
		guardarBusqueda({
			...busqueda,
			[e.target.name]: e.target.value,
		});
	};

	//State del error
	const [error, guardarError] = useState(false);

	//Cuando el usuario da Submit al Form
	const handleSubmit = (e) => {
		e.preventDefault();
		//validar
		if (ciudad.trim() === "" || pais.trim() === "") {
			guardarError(true);
			return;
		}

		guardarError(false);

		//pasarlo al componente principal
		guardarConsultar(true);
	};
	return (
		<Fragment>
			<form onSubmit={handleSubmit} autoComplete="on">
				{error ? (
					<Error mensaje="Todos los campos son obligatorios" />
				) : null}
				<div className="input-field col s12">
					<input
						type="text"
						name="ciudad"
						id="ciudad"
						value={ciudad}
						onChange={handleChange}
					/>
					<label htmlFor="ciudad">Ciudad: </label>
				</div>
				<div className="input-field col s12">
					<select
						name="pais"
						id="pais"
						value={pais}
						onChange={handleChange}
					>
						<option value="">-- Seleccione un país --</option>
						<option value="US">Estados Unidos</option>
						<option value="MX">México</option>
						<option value="GT">Guatemala</option>
						<option value="AR">Argentina</option>
						<option value="CO">Colombia</option>
						<option value="CR">Costa Rica</option>
						<option value="ES">España</option>
						<option value="PE">Perú</option>
					</select>
					<label htmlFor="país">País: </label>
				</div>

				<div className="input-field col s12">
					<button
						type="submit"
						className="waves-effect waves-light btn-large btn-block yellow accent-4 col s12 black-text"
					>
						Buscar Clima
					</button>
				</div>
			</form>
		</Fragment>
	);
};

Formulario.propTypes = {
	busqueda: PropTypes.object.isRequired,
	guardarBusqueda: PropTypes.func.isRequired,
	guardarConsultar: PropTypes.func.isRequired,
};

export default Formulario;
