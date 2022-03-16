import React, { useState, useEffect} from 'react';
import axios from 'axios';
import { useParams } from "react-router-dom"
import WrongDroids from ".././components/WrongDroids";


const Planets = () => {
    const { id } = useParams();
    const [planets, setPlanets] = useState({});

    useEffect(() =>{
        axios.get(`https://swapi.dev/api/planets/${id}`)
            .then((response) => {
                console.log(response.data);
                setPlanets(response.data);
            })
            .catch((err) => console.log(err));
    }, [id]);

    return (
        <div>
            {
            planets?
                <div>
                    <h1>{planets.name}</h1>
                    <p>Climate: {planets.climate}</p>
                    <p>Terrain: {planets.terrain}</p>
                    <p>Surface Water: {planets.surface_water}</p>
                    <p>Population: {planets.population}</p>
                </div>:
                <WrongDroids />
            }
        </div>
    );
}

export default Planets;