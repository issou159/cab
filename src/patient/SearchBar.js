import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from "axios";

const SearchBar = () => {
    const navigate = useNavigate();
    const [nameTerm, setNameTerm] = useState("");
    const [specialtyTerm, setSpecialtyTerm] = useState("");
    const [countryTerm, setCountryTerm] = useState("");
    const [cityTerm, setCityTerm] = useState("");
    const [searchResults, setSearchResults] = useState([]);
    const [isSearching, setIsSearching] = useState(false);
    const [employeesArray, setEmployeesArray] = useState([]);

    const handleNameChange = (event) => {
        setNameTerm(event.target.value);
    };


    const handleSpecialtyChange = event => {
        setSpecialtyTerm(event.target.value);
    };

    const handleCountryChange = event => {
        setCountryTerm(event.target.value);
    };

    const handleCityChange = event => {
        setCityTerm(event.target.value);
    };

    const handleSearchClick = async () => {
        setIsSearching(true);
    };

    const getEmployees = async () => {
        try {
            const response = await axios.get("http://localhost:4000/Doctors");
            const doctors = response.data;
            console.log(response.data);
            const employeesArray = doctors.map((doctor) => ({
                _id: doctor._id,
                name: doctor.name,
                specialty: doctor.specialty,
                country: doctor.country,
                city: doctor.city,
                image: doctor.image
            }));
            console.log(employeesArray);
            return employeesArray;
        } catch (error) {
            console.error(error);
        }
    };

    useEffect(() => {
        const fetchEmployees = async () => {
            const results = employeesArray.filter(
                (item) =>
                    item.name?.toLowerCase().includes(nameTerm.toLowerCase() || "") &&
                    item.specialty?.toLowerCase().includes(specialtyTerm.toLowerCase() || "") &&
                    item.country?.toLowerCase().includes(countryTerm.toLowerCase() || "") &&
                    item.city?.toLowerCase().includes(cityTerm.toLowerCase() || "")
            );
            setSearchResults(results);
            setIsSearching(false);
        };
        if (isSearching) {
            fetchEmployees();
        }
    }, [isSearching, nameTerm, specialtyTerm, countryTerm, cityTerm, employeesArray]);

    useEffect(() => {
        const fetchData = async () => {
            const employees = await getEmployees();
            setEmployeesArray(employees);
        };
        fetchData();
    }, []);
    useEffect(() => {
        if (searchResults.length > 0) {
            navigate('/doctor-list', { state: { results: searchResults } });
        }
    }, [searchResults, navigate]);



    return (
        <div className="search-bar-container">
            <input
                className="search-input"
                type="text"
                placeholder="Enter the name of doctor"
                value={nameTerm}
                onChange={handleNameChange}
            />
            <input
                className="search-input"
                type="text"
                placeholder="Enter the specialty"
                value={specialtyTerm}
                onChange={handleSpecialtyChange}
            />
            <input
                className="search-input"
                type="text"
                placeholder="Enter the country"
                value={countryTerm}
                onChange={handleCountryChange}
            />
            <input
                className="search-input"
                type="text"
                placeholder="Enter the city"
                value={cityTerm}
                onChange={handleCityChange}
            />
            <button className="search-button" onClick={handleSearchClick}>Search</button>
            <ul className="search-results">
                {searchResults.map(item => (
                    <li key={item[0]} className="search-result-item">
                        <div>Name: {item[1]}</div>
                        <div>Specialty: {item[2]}</div>
                        <div>Country: {item[3]}</div>
                        <div>City: {item[4]}</div>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default SearchBar;