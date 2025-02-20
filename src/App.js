import React, { Fragment, useState, useEffect } from "react";
import Header from "./components/Header";
import Formulario from "./components/Formulario";
import Clima from "./components/Clima";
import Error from "./components/Error";
import Footer from "./components/Footer";

function App() {
	//State del Formulario
	const [busqueda, guardarBusqueda] = useState({
		ciudad: "",
		pais: "",
	});

	//Otro State
	const [consultar, guardarConsultar] = useState(false);

	const [resultado, guardarResultado] = useState({});

	//State del error al no encontrar ciudad
	const [error, guardarError] = useState(false);

	//Desctructuring ciudad y pais de la busqueda
	const { ciudad, pais } = busqueda;

	useEffect(() => {
		//Funcion para consultar la API
		const consultarAPI = async () => {
			if (consultar) {
				const appId = "6c525df7efc49e7325e0c2cb776a87fa";
				const url = `https://api.openweathermap.org/data/2.5/weather?q=${ciudad},${pais}&appid=${appId}`;

				const respuesta = await fetch(url);
				const resultado = await respuesta.json();

				guardarResultado(resultado);

				//Para que podamos hacer mas de una consulta
				guardarConsultar(false);

				//Si no encuentra esa ciudad
				if (resultado.cod === "404") {
					guardarError(true);
				} else {
					guardarError(false);
				}
			}
		};

		consultarAPI();
		// eslint-disable-next-line
	}, [consultar]);

	let componente;
	if (error) {
		componente = <Error mensaje="No hay resultados disponibles" />;
	} else {
		componente = <Clima resultado={resultado} />;
	}

	return (
		<Fragment>
			<Header titulo="Clima React App" />
			<div className="contenedor-form">
				<div className="container">
					<div className="row">
						<div className="col m6 s12">
							<Formulario
								busqueda={busqueda}
								guardarBusqueda={guardarBusqueda}
								guardarConsultar={guardarConsultar}
							/>
						</div>
						<div className="col m6 s12">{componente}</div>
					</div>
				</div>
			</div>
			<Footer />
		</Fragment>
	);
}

export default App;
