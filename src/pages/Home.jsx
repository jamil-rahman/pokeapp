import { useState, useEffect } from 'react';
import PokemonCard from '../components/PokemonCard';

export default function Home() {
    const [pokemon, setPokemon] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        async function fetchPokemon() {
            try {
                const response = await fetch('https://pokeapi.co/api/v2/pokemon?limit=12');
                const data = await response.json();

                const pokemonData = await Promise.all(
                    data.results.map(async (pokemon) => {
                        const res = await fetch(pokemon.url);
                        return res.json();
                    })
                );

                setPokemon(pokemonData);
                setLoading(false);
            } catch (err) {
                setError('Failed to fetch Pokemon');
                setLoading(false);
            }
        }

        fetchPokemon();
    }, []);

    if (loading) return <div className="loading">Loading Pokemon...</div>;
    if (error) return <div className="error">{error}</div>;

    return (
        <div className="home">
            <h1>Pokemon Collection</h1>
            <div className="pokemon-grid">
                {pokemon.map(poke => (
                    <PokemonCard key={poke.id} pokemon={poke} />
                ))}
            </div>
        </div>
    );
}