import React from 'react';
import './estilo.css';

export function BarraInfo({ info }){
    return (
        <div className="gr-barra-info">
            <div className="gr-titulo gr-ip">
                <span>IP ADDRESS</span>
                <span>{info.ip}</span>
            </div>
            <div className="gr-titulo gr-location">
                <span>LOCATION</span>
                {/* <span>{info.location.region}, {info.location.country}</span> */}
            </div>
            <div className="gr-titulo gr-timezone">
                <span>TIMEZONE</span>
                {/* <span>{info.location.timezone}</span> */}
            </div>
            <div className="gr-titulo gr-isp">
                <span>ISP</span>
                {/* <span>{info.isp}</span> */}
            </div>
        </div>
    );
}