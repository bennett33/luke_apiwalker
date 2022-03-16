import React, {useState} from 'react';
import axios from 'axios';
import { useHistory } from 'react-router-dom';


const Form = () => {
    const [category, setCategory] = useState("");
    const [id, setId] = useState("");
    const history = useHistory();

    const handleSubmit = e => {
        e.preventDefault();
        history.push(`/${category}/${id}`)
        
    };


    return (
        <form className="row pt-5" onSubmit = {handleSubmit}>
        <div className="col-sm-6">
            <div className="row">
                <label htmlFor="category" className="col-sm-4">Search for: {" "}</label>
                <select name="category" className="col-sm-8 form-control" onChange={e => setCategory(e.target.value)}>
                <option hidden>Select Category</option>
                    <option value="people">People</option>
                    <option value="planets">Planets</option>
                </select>
            </div>
        </div>
        <div className="col-sm-6">
            <div className="row">
                <div className="col-sm-5 row">
                    <label htmlFor="id" className="col-sm-4">ID: {" "}</label>
                    <input type="number" name="id" className="col-sm-8 form-control"  onChange={(e) => setId(e.target.value)}/>
                </div>
                <div className="col-sm-7">
                    <input type="submit" value="Search" className="col-sm-12 btn btn-success" />
                </div>
            </div>
        </div>
    </form> 
    )
};

export default Form;