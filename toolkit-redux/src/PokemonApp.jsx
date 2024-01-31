import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { getPokemons } from "./store/slices/pokemon";

export const PokemonApp = () => {

    const {isLoading, pokemons, page} = useSelector(state => state.pokemons);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getPokemons());
    }, [])

    const handleGetPokemons = () => {
        dispatch(getPokemons(page));
    }

    return (
        <>
            <h1>PokemonApp</h1>
            <hr />
            {isLoading && (<span>Loading</span>)}
            <ul>
                {pokemons.map(item => (
                    <li key={item.name}>{item.name}</li>
                ))
                    
                }
            </ul>
            <button disabled={isLoading} onClick={handleGetPokemons}>
                Next
            </button>
        </>
    )
}
