import { LevelMove, BasicMove, Gen34Move } from './Move'

export interface Pokemon {
  id: string
  name: string
  img: string
  type: string[]
  stats: {
    hp: number
    attack: string
    defense: string
    spattack: string
    spdefense: string
    speed: number
  }
  moves: {
    level: LevelMove[]
    thmh: LevelMove[]
    egg: BasicMove
    tutor: BasicMove[]
    gen34: Gen34Move[]
  }
  damages: {
    normal: string
    fire: string
    water: string
    electric: string
    grass: string
    ice: string
    fight: string
    poison: string
    ground: string
    flying: string
    psychic: string
    bug: string
    rock: string
    ghost: string
    dragon: string
    dark: string
    steel: string
  }
  misc: {
    sex: {
      male: number
      female: string
    }
    abilities: {
      normal: string[]
      hidden: string[]
    }
    classification: string
    height: string
    weight: string
    capturerate: 45
    eggsteps: string
    expgrowth: string
    happiness: string
    evpoints: string[]
    fleeflag: string[]
    entreeforestlevel: string[]
  }
}
