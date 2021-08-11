import React, { useState, useEffect } from 'react'
import { TextField, InputAdornment, Card, CardContent, Grid, Typography } from '@material-ui/core';
import SearchIcon from '@material-ui/icons/Search';

import axios from 'axios'
import './styles/Weather.css'

function Weather() {

    const [temp, setTemp] = useState({
        temp_min: "",
        temp_max: "",
        temp: ""
    });
    const [icon, setIcon] = useState("10d");
    const [name, setName] = useState("Hyderabad");
    const [place, setPlace] = useState("Hyderabad");
    const [error, setError] = useState(false);

    // useEffect(() => {
    //     navigator.geolocation.getCurrentPosition(getLocationSucc);
    // }, [])

    useEffect(() => {
        getWeather();
    }, [])

    async function getWeather() {
        // const response = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${location.lat}&lon=${location.lng}&units=metric&appid=d8a8c54228601d7b5d4f1c2fb0eaf795`);
        await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${name}&units=metric&appid=d8a8c54228601d7b5d4f1c2fb0eaf795`).then((response) => {
            console.log(response);
            setTemp(response.data.main);
            setIcon("http://openweathermap.org/img/wn/" + response.data.weather[0].icon + "@2x.png");
            setPlace(response.data.name);
            setError(false);
        }).catch(() => {
            setError(true);
            setPlace(name);
        })
    }

    // const getLocationSucc = (position) => {
    //     console.log("Latitude,Longitude : " + position.coords.latitude + "," + position.coords.longitude);
    //     setLocation({
    //         lat: position.coords.latitude,
    //         lng: position.coords.longitude
    //     })
    //     // getWeather();
    // }

    const textHandler = (e) => {
        setName(e.target.value);
    }

    const keyPressHandler = (e) => {
        console.log(e);
        if (e.key === "Enter") {
            getWeather();
        }
    }

    return (
        <div>
            <center>
                <TextField className="search" variant="outlined" placeholder="City" onChange={textHandler} onKeyPress={keyPressHandler} InputProps={{
                    endAdornment: <InputAdornment><SearchIcon onClick={getWeather} /></InputAdornment>
                }} />
            </center>
            <Card className="card">
                <CardContent>
                   {!error && <Grid className="container" spacing={1} container>
                        <Grid className="gridImage" xs={12}>
                            <div className="gridImage weatherImage">
                                <img className="weatherImg" src={icon} />
                                <Typography variant="h4">{temp.temp}&#8451;</Typography>
                            </div>
                        </Grid>
                        <Grid xs={12}>
                            <Typography className="tempText1" variant="h4">{place}</Typography>
                        </Grid>
                        <Grid className="tempInfo" xs={6}>
                            <Typography className="tempText1" variant="h4">Max</Typography>
                            <Typography variant="h4">{temp.temp_max}&#8451;</Typography>
                        </Grid>
                        <Grid className="tempInfo" xs={6}>
                            <Typography className="tempText1" variant="h4">Min</Typography>
                            <Typography variant="h4">{temp.temp_min}&#8451;</Typography>
                        </Grid>
                    </Grid> }
                    {error && <Typography className="tempText1">Unable to fetch Weather Details for {place}</Typography>}
                </CardContent>
            </Card>
            {/* <div className="weatherCard">
                        <div className="weatherIconAndText">
                            <img className="weatherImg" src={icon}></img>
                            <span className="tempText">{temp}&#8451;</span>
                        </div>
                        <span className="tempText1">{place}</span>
                        <span className="tempText1">Temp</span>
                        <span className="tempText1">Max : {tempMax}&#8451;</span>
                        <span className="tempText1">Min : {tempMin}&#8451;</span>
                    </div> */}
        </div>
    )
}

export default Weather
