import React, { useEffect, useState } from 'react'
import './Coviddashboard.css'
import { Card, CardContent, FormControl, MenuItem, Select } from '@mui/material'
import InfoBox from './Infobox/InfoBox';
import Map from './Map/Map';
import Table from './Table/Table';
import { sortData } from './Table/utils';
import LineGraph from './LineGraph/LineGraph';
import "leaflet/dist/leaflet.css";

function Coviddashboard() {
  const [country, setCountry] = useState("Worldwide");
  const [countries, setCountries] = useState([]);
  const [countryInfo, setCountryInfo] = useState({});
  const [tableData, setTableData]=useState([]);
  const [mapCenter, setMapCenter]= useState({
    lat: 34.80746, lng:-40.4796
  });
const [mapZoom, setMapZoom]= useState(3);
const [mapCountries,setMapCountries]=useState([]);
const [casesType,setCasesType]=useState('cases');

  useEffect(()=>{
    fetch("https://disease.sh/v3/covid-19/all")
    .then(response => response.json())
    .then(data=>{
      setCountryInfo(data);
    });
  },[]);

  useEffect(() => {
    const getCountriesData = async () => {
      await fetch('https://disease.sh/v3/covid-19/countries')
        .then((response) => response.json())
        .then((data) => {
          const countries = data.map((country) => (
            {
              name: country.country,
              value: country.countryInfo.iso2
            }
          ));

          const sortedData = sortData(data);
          setTableData(sortedData);
          setMapCountries(data);
          setCountries(countries);
        });
    }
    getCountriesData();
  }, []);


  const onCountryChange = async (event) => {
    const countryCode = event.target.value;
    setCountry(countryCode);

    const url = countryCode === 'Worldwide' ? "https://disease.sh/v3/covid-19/all" : `https://disease.sh/v3/covid-19/countries/${countryCode}`;
    
    await fetch(url)
      .then(response => response.json())
      .then(data => {
        setCountry(countryCode);
        setCountryInfo(data);
        setMapCenter([data.countryInfo.lat, data.countryInfo.long ]);
        setMapZoom(4);

      });
  };

  console.log(countryInfo);

  return (
    <div className='covid__dashboard'>
      <div className="covid__Main">
        <div className="covidMain_left">
          <div className="covidMain_leftheader">
            <h3>COVID DASHBOARD</h3>
            <FormControl className='covid__dropdown'>
              <Select onChange={onCountryChange} variant='outlined' value={country}>
                <MenuItem value='Worldwide'>Worldwide</MenuItem>
                {countries.map((country) => (
                  <MenuItem value={country.value}>{country.name}</MenuItem>))}
              </Select>
            </FormControl>

          </div>
          <div className="covid__stats">
            <InfoBox onClick={(e)=>setCasesType('cases')} title="CoronaVirus Cases" cases={countryInfo.todayCases} total={countryInfo.cases} />
            <InfoBox onClick={(e)=>setCasesType('recovered')} title="Recovered" cases={countryInfo.todayRecovered} total={countryInfo.recovered} />
            <InfoBox onClick={(e)=>setCasesType('deaths')} title="Deaths" cases={countryInfo.todayDeaths} total={countryInfo.deaths} />
            

          </div>
          <div className="covid__Map">
            <Map 
            casesType={casesType}
            countries={mapCountries}
              center={mapCenter}
              zoom={mapZoom}
            />
          </div>

        </div>





        <div className="covidMain_right">
          <Card>
            <CardContent>
              <h3>WorldWide {casesType}</h3>
              <Table countries={tableData}/>
              <h3 className='chart__header'>WorldWide Last 120 Days {casesType} </h3>
              <LineGraph casesType={casesType}/>
            </CardContent>
          </Card>
        </div>

      </div>
    </div>
  )
}

export default Coviddashboard
