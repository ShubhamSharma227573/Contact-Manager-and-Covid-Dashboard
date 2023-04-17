import React from "react";
import numeral from "numeral";
import { Circle, Popup } from "react-leaflet";

const casesTypeColors = {
    cases: {
        hex: '#CC1034',
        multiplier: 150,
    },
    recovered: {
        hex: "#7dd71d",
        multiplier: 200,
    },
    deaths: {
        hex: "#fb4443",
        multiplier: 500,

    },
};

export const sortData = (data) => {
    const sortedData = [...data];

    return sortedData.sort((a, b) => (a.cases > b.cases ? -1 : 1));
};

export const showMapData = (data, casesType = 'cases') => (
    data.map(country => (
        <Circle
            center={[country.countryInfo.lat, country.countryInfo.long]}
            fillOpacity={0.4}
            color={casesTypeColors[casesType].hex}
            fillColor={casesTypeColors[casesType].hex}
            radius={Math.sqrt(country[casesType]) * casesTypeColors[casesType].multiplier }>
                <Popup>
                    <div>
                        <div style={{backgroundImage:`url(${country.countryInfo.flag})`}}/>
                        <div>{country.country}</div>
                        <div>Cases:{numeral(country.cases).format("0.0")}</div>
                        <div>Recovered:{numeral(country.recovered).format("0.0")}</div>
                        <div>Deaths:{numeral(country.death).format("0.0")}</div>

                        
                    </div>
                </Popup>
            </Circle>
    ))
)