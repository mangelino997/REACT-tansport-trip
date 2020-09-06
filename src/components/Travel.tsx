import React, { Fragment, useState, FormEvent } from 'react';
import Travels from '../data/travels.json';
import Drivers from '../data/drivers.json';
import Vehicles from '../data/vehicles.json';
import addTrips from '../data/assaigned-trips.json';

interface ITrip {
    origin: any,
    destine: any,
    driver: any,
    vehicle: any
}

const Travel = () => {

    // lista de origenes y destinos
    let origins = new Array; let destinations = new Array;
    Travels.forEach(x => {
        origins = [...origins, x.origin];
        destinations = [...destinations, x.destination]
    }); // recorre el array de Travel y guarda el 'from'
    const newOrigins = Array.from(new Set(origins)); // el set hace que el array no pueda tener duplicados
    const newDestinations = Array.from(new Set(destinations));

    const d = {
        destine: null,
        origin: null,
        driver: null,
        vehicle: null
    }
    const [trip, setTrip] = useState<ITrip>(d);

    const handleChange = (event: any) => {
        console.log(event.target.value);
        setTrip({...trip,
            [event.target.name]: event.target.value});
        //setAddress(event.target.value);
    }

    const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        console.log(trip);
    }

    return (
        <Fragment>
            <h1 className="py-6 shadow-title" >Travel</h1>
            <div>

            </div>
            <div className="row py-3">
                <div className="col-md-6 py-4">
                    <form onSubmit={(e) => handleSubmit(e)}>


                        <h5 className="shadow-title">Route</h5>
                        <hr></hr>
                        <div className="input-group mb-3 ">
                            <div className="input-group-prepend">
                                <label className="input-group-text" >Origin</label>
                            </div>
                            <select value={trip.origin} onChange={e => handleChange(e)}
                                className="custom-select" name="origin">
                                <option selected value=""></option>
                                {newOrigins.map((a, index) =>
                                    <option key={index} value={a}>{a}</option>
                                )}
                            </select>
                        </div>
                        <div className="input-group mb-3">
                            <div className="input-group-prepend">
                                <label className="input-group-text" >Destination</label>
                            </div>
                            <select  value={trip.destine} onChange={e => handleChange(e)}
                                className="custom-select" name="destine">
                                <option selected value="">...</option>
                                {newDestinations.map((a, index) =>
                                    <option key={index} value={a}>{a}</option>
                                )}
                            </select>
                        </div>
                        <h5 className="shadow-title">Driver</h5>
                        <hr />
                        <div className="input-group mb-3">
                            <div className="input-group-prepend">
                                <label className="input-group-text" >Driver</label>
                            </div>
                            <select value={trip.driver} onChange={e => handleChange(e)}
                                className="custom-select" name="driver">
                                <option selected value="">...</option>
                                {Drivers.map((a, index) =>
                                    <option key={index} value={JSON.stringify(a)}>
                                        {a.name}, {a.lastname}
                                    </option>
                                )}
                            </select>
                        </div>
                        <h5 className="shadow-title">Vehicle</h5>
                        <hr />
                        <div className="input-group mb-3">
                            <div className="input-group-prepend">
                                <label className="input-group-text" >Vehicle</label>
                            </div>
                            <select value={trip.vehicle} onChange={e => handleChange(e)}
                                className="custom-select" name="vehicle">
                                <option selected value="">...</option>
                                {Vehicles.map((a, index) =>
                                    <option key={index} value={JSON.stringify(a)}>
                                        {a.type}
                                    </option>
                                )}
                            </select>
                        </div>
                        <div className="row justify-content-center">
                            <button type="submit" className="btn-new"> Add </button>
                        </div>
                    </form>
                </div>

                <div className="col-md-6 py-4">
                    <h5 className="shadow-title">Information</h5>
                    <hr></hr>
                    <div className="card">
                        <div className="card-body text-left">
                            <p className="card-text">Distance:</p>
                            <p className="card-text">Time: </p>
                            <p className="card-text">$$: </p>
                        </div>
                    </div>
                </div>
            </div>
        </Fragment>

    );
}

export default Travel;