import { Item } from "./objects";

export default interface CharacterInterface {
  id? : number,
  name : string,
  hp : number,
  mp : number,
  str : number,
  int : number,
  def : number,
  res : number,
  spd : number,
  luck : number,
  race : number,
  class : number,
  rarity : number,
  maxHp? : number,
  coins? : number,
  xp?: number,
  lvl?: number,
  xpToLvlUp?: number,
  inventory? : Item[]
}
