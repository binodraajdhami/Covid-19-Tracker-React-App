import React, { useState, useEffect } from 'react';
import { NativeSelect, FormControl } from '@material-ui/core';
import { fetchCountries } from './../../api';

import styles from './CountryPicker.module.css'

const CountryPicker = ({ handleCountryChange }) => {
    const [fetchedCountries, setFetchedCountries] = useState([]);

    useEffect(() => {
        const fetchAPI = async () => {
            setFetchedCountries(await fetchCountries());
        }
        fetchAPI();
    }, [setFetchedCountries]);

    const countryName = fetchedCountries.map((country, i) => (
        <option key={i} value={country}>{country}</option>
    ))

    return (
        <div>
            <div className={styles.information}>
                <h4>Choose your country</h4>
            </div>
            <FormControl>
                <NativeSelect defaultValue="" onChange={(e) => handleCountryChange(e.target.value)} className={styles.formControl}>
                    <option value="">Total in World</option>
                    {countryName}
                </NativeSelect>
            </FormControl>
        </div>
    );
}
export default CountryPicker;