import { useState } from 'react';
import axios from 'axios';
// import {SearchIp} from './components/SearchIp/SearchIp';
import {BarraInfo} from './components/Barra/BarraInfo';
import arrow from './assets/img/icon-arrow.svg';
import './App.css';
import './components/SearchIp/estilo.css';

const initialValue = {
    ip: '',
	regiao:'',
	fusoHorario:'',
	internet:'',
}

const API_KEY =`${process.env.REACT_APP_API_KEY_YT}`

function App() {

	const [valueIp, setIp] = useState(initialValue);

    function handleSearchIp(event){
        event.preventDefault();

        // Name: É o name que damos como atributo no input
        // Value: É o valor que digitamos no input..

        const {name, value} = event.target;

        /*    [name] essa variavel muda o nome do atributo 
           *  de acordo com a mudança do campo que você está 
           *  digitando de uma forma dinamica.
        */
        setIp({ ...valueIp, [name]: value });
    }

    function handleSubmitIp(event) {
        event.preventDefault();


		axios.get(`https://geo.ipify.org/api/v1?apiKey=${API_KEY}`)
		.then((res) => {
			setIp(res.data);
			console.log(res.data);
		})
		.catch(err => {
			console.log(err);
		})
    }

	return (
		<div className="gr-main">
			<header className="header-banner">
				<div className="container">
					<h1 className="titulo">IP Address Tracker</h1>
					<form className="gr-form-ip" onSubmit={handleSubmitIp}>
						<input type="text" name="ip" placeholder="Search for any IP address or domain" onChange={handleSearchIp} />
						<button type="submit" className="gr-button"><img src={arrow} alt="" /></button>
					</form>
				</div>
			</header>
			<div className="gr-barra">
				<div className="container">
					{/* <BarraInfo info={valueIp} /> */}
					{
						valueIp.location &&
						<BarraInfo info={valueIp}/>
					}
				</div>
			</div>
			{/* <iframe className="gr-maps" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3655.881833831257!2d-46.69675398447487!3d-23.60857046922372!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce50cb644b8677%3A0x10fe63cb50d99e6f!2sAv.%20Engenheiro%20Lu%C3%ADs%20Carlos%20Berrini%2C%201376%20-%20Cidade%20Mon%C3%A7%C3%B5es%2C%20S%C3%A3o%20Paulo%20-%20SP%2C%2004576-100!5e0!3m2!1spt-BR!2sbr!4v1625686763492!5m2!1spt-BR!2sbr" width="100%" height="450" style={{border:0}} allowfullscreen="" loading="lazy"></iframe> */}
		</div>
	);
}

export default App;
