import React, { useState, useEffect} from 'react';
import axios from 'axios';
import { useParams } from "react-router-dom"
import WrongDroids from ".././components/WrongDroids";


const People = () => {
    const { id } = useParams();
    const [people, setPeople] = useState({});

    useEffect(() =>{
        axios.get(`https://swapi.dev/api/people/${id}`)
            .then((response) => {
                console.log(response.data);
                setPeople(response.data);
            })
            .catch((err) => console.log(err));
    }, [id]);

    return (
        <div>
            {
            people?
                <div>
                    <h1>{people.name}</h1>
                    <p>Height: {people.height}</p>
                    <p>Hair Color: {people.hair_color}</p>
                    <p>Eye Color: {people.eye_color}</p>
                    <p>Skin Color: {people.skin_color}</p>
                </div>:
                <WrongDroids />
            }
        </div>
    );
}

export default People;