import React from 'react';
import './estilo.css';

export function BarraInfo({ info }){
    // const initialValue = {
    //     ip: info.ip,
    //     regiao: info.location,
    //     // fusoHorario: info.location.timezone,
    //     internet: info.isp,
    // }

    // console.log("Api: ", initialValue);

    return (
        <div className="gr-barra-info">
            <div className="gr-titulo gr-ip">
                <strong>IP ADDRESS</strong>
                <span>{info.ip}</span>
            </div>
            <div className="gr-titulo gr-location">
                <strong>LOCATION</strong>
                <span>{info.location.region}</span>
            </div>
            <div className="gr-titulo gr-timezone">
                <strong>TIMEZONE</strong>
                <span>{info.location.timezone}</span>
            </div>
            <div className="gr-titulo gr-isp">
                <strong>ISP</strong>
                <span>{info.isp}</span>
            </div>
        </div>
    );
}