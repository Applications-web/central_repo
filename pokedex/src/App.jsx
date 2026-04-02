import React from "react"
import "./App.css"

const TYPE_COLORS = {
  grass: "#78C850", poison: "#A040A0", fire: "#F08030", water: "#6890F0",
  electric: "#F8D030", bug: "#A8B820", normal: "#A8A878", flying: "#A890F0",
  ground: "#E0C068", psychic: "#F85888", rock: "#B8A038", ice: "#98D8D8",
  ghost: "#705898", dragon: "#7038F8", dark: "#705848", steel: "#B8B8D0",
  fairy: "#EE99AC", fighting: "#C03028"
}

export default function App() {
  const [pokemon, setPokemon] = React.useState(null)
  const [id, setId] = React.useState(1)
  const [showBack, setShowBack] = React.useState(false)
  const [term, setTerm] = React.useState("")


React.useEffect(() => {
  setPokemon(null)
    // this is the API fetch, with error handling
    const timer = setTimeout(() => {
      fetch(`https://pokeapi.co/api/v2/pokemon/${id}`)
        .then(res => {
          if (!res.ok) throw new Error("Not found")
          return res.json()
        })
        .then(data => {
          setPokemon(data)
          setId(data.id) 
          // clears up the search bar
          setTerm("")
        })
        .catch(() => {
          alert("Pokémon not found!")
          // resets to Pokemon no 1
          setId(1)
        })
    }, 200)

    return () => clearTimeout(timer)
  }, [id])

  const handleSearch = (e) => {
    // this is to avoid loading all the page again
    e.preventDefault()
    if (term.trim()) {
      setId(term.toLowerCase())
      setShowBack(false)
    }
  }

  const changeId = (amount) => {
    // this is to change pokemon according to id
    const nextId = Number(id) + amount
    if (nextId >= 1) {
      setId(nextId)
      setShowBack(false)
    }
  }

  if (!pokemon) {
    // spinning pokeball when we are loading and there is still no pokemon fetched.
    return (
      <div className="pokedex-container">
        <div className="pokeball"></div>
        <p className="loading-text">CATCHING...</p>
      </div>
    )
  }

  return (
    // this is the main code for the page
    <div className="pokedex-container">
      <form className="search-form" onSubmit={handleSearch}>
        <input 
          type="text" 
          placeholder="Name or ID..." 
          value={term}
          onChange={(e) => setTerm(e.target.value)}
        />
        <button type="submit">GO</button>
      </form>

      <div className="pokemon-card">
        <div className="types-container">
          {pokemon.types.map((t, i) => (
            // grey is the default color when no type in TYPE_COLORS matches
            <span key={i} className="type-badge" style={{ backgroundColor: TYPE_COLORS[t.type.name] || "#777" }}>
              {t.type.name.toUpperCase()}
            </span>
          ))}
        </div>

        <img src={showBack ? pokemon.sprites.back_default : pokemon.sprites.front_default} alt={pokemon.name} />
        
        <h1>{pokemon.name.toUpperCase()}</h1>
        <p className="id-tag">No. {pokemon.id} | {pokemon.weight / 10}kg</p>

        <div className="info-section">
          <strong>Abilities:</strong>
          {pokemon.abilities.map((a, i) => (
            <span key={i} className="ability-text">
              {a.ability.name}{i < pokemon.abilities.length - 1 ? ", " : ""}
            </span>
          ))}
        </div>

        <div className="controls">
          <button onClick={() => changeId(-1)} disabled={id <= 1}>PREV</button>
          <button onClick={() => setShowBack(!showBack)}>FLIP</button>
          <button onClick={() => changeId(1)}>NEXT</button>
        </div>
      </div>
    </div>
  )
}