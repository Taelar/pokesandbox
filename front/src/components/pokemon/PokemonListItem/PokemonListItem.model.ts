import { INamedApiResource, IPokemon } from 'pokeapi-typescript'

export interface PokemonListItemProps {
  item: INamedApiResource<IPokemon>
}
