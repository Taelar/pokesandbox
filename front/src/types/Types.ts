export const TYPES = [
  'Normal',
  'Fire',
  'Water',
  'Grass',
  'Electric',
  'Ice',
  'Fighting',
  'Poison',
  'Ground',
  'Flying',
  'Pyschic',
  'Bug',
  'Rock',
  'Ghost',
  'Dark',
  'Dragon',
  'Steel',
  'Fairy',
] as const

export type Type = typeof TYPES[number]

export const typesColor: { [key in Type]: string } = {
  Normal: 'gray-400',
  Fire: 'red-600',
  Water: 'blue-700',
  Grass: 'green-800',
  Electric: 'yellow-400',
  Ice: 'cyan-400',
  Fighting: 'yellow-800',
  Poison: 'fuchsia-900',
  Ground: 'amber-900',
  Flying: 'sky-500',
  Pyschic: 'purple-500',
  Bug: 'lime-700',
  Rock: 'orange-900',
  Ghost: 'purple-800',
  Dark: 'zinc-900',
  Dragon: 'violet-700',
  Steel: 'zinc-500',
  Fairy: 'purple-400',
}
