import { useState, useEffect } from "react";
import "./RestCountries.css";

const RestCountries = () => {
    const [countries, setCountries] = useState([]);
    const [search, setSearch] = useState("");
    const [darkMode, setDarkMode] = useState(
        localStorage.getItem("darkMode") === "true"
    );

    // Bytt mellom lys og mørk modus
    const toggleDarkMode = () => {
        setDarkMode(!darkMode);
    };

    // Lagre dark mode i localStorage og oppdater body-klassen
    useEffect(() => {
        if (darkMode) {
            document.body.classList.add("dark-mode");
        } else {
            document.body.classList.remove("dark-mode");
        }
        localStorage.setItem("darkMode", darkMode);
    }, [darkMode]);

    // Hente data fra REST Countries API
    useEffect(() => {
        fetch("https://restcountries.com/v3.1/all")
            .then((response) => response.json())
            .then((data) => setCountries(data))
            .catch((error) => console.error("Feil ved henting av data:", error));
    }, []);

    // Filtrer land basert på søkefeltet
    const filteredCountries = countries.filter((country) =>
        country.name.common.toLowerCase().includes(search.toLowerCase())
    );

    return (
        <div className="container">
            {/* Navbar med Dark Mode-toggle */}
            <div className="navbar">
                <h1>Where in the world?</h1>
                <div className="dark-mode-toggle" onClick={toggleDarkMode}>
                    {darkMode ? "☀ Light Mode" : "🌙 Dark Mode"}
                </div>
            </div>

            {/* Søkeinput */}
            <input
                type="text"
                placeholder="Søk etter et land..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="search-input"
            />

            {/* Grid med landkort */}
            <div className="countries-grid">
                {filteredCountries.map((country) => (
                    <div key={country.cca3} className="country-card">
                        <img src={country.flags.svg} alt={country.name.common} />
                        <h2>{country.name.common}</h2>
                        <p><strong>Region:</strong> {country.region}</p>
                        <p><strong>Population:</strong> {country.population.toLocaleString()}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default RestCountries;
