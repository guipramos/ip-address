// import { useState } from 'react';
// import api from '../../services/api';
// import axios from 'axios';

// import './estilo.css';
// import arrow from '../../assets/img/icon-arrow.svg';

// const initialValue = {
//     ip: '',
// }

// export function SearchIp({props}){

    // const [ip, setIp] = useState(initialValue);

    // function handleSearchIp(event){
    //     event.preventDefault();

    //     // Name: É o name que damos como atributo no input
    //     // Value: É o valor que digitamos no input

    //     const {name, value} = event.target;

    //     /*    [name] essa variavel muda o nome do atributo 
    //        *  de acordo com a mudança do campo que você está 
    //        *  digitando de uma forma dinamica.
    //     */
    //     setIp({ ...ip, [name]: value });
    // }

    // function handleSubmitIp(event) {
    //     event.preventDefault();

    //     // var ipChange = ip;

    //     axios.get("https://geo.ipify.org/api/v1?apiKey=")
    //         .then((res) => {
    //             setIp(res.data);
    //         })  
    // }

    // return (
        // <form className="gr-form-ip" onSubmit={handleSubmitIp}>
        //     <input type="text" name="ip" placeholder="Search for any IP address or domain" onChange={handleSearchIp} />
        //     <button type="submit" className="gr-button"><img src={arrow} alt="" /></button>
        // </form>
//     );
// }