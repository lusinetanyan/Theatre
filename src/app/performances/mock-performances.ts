import {Performance} from "./performance";
import {THEATERS} from "../theatres/mock-theaters";

export const PERFORMANCES: Performance[] = [
  {id: 1, title: 'Արթուրո Ուիի կարիերան որը պետք է կանխվեր', theater: THEATERS[1], numberOfAvailableSeats: 20},
  {id: 2, title: 'Արծվաբույն', theater: THEATERS[1], numberOfAvailableSeats: 20},
  {id: 3, title: 'Պեպո', theater: THEATERS[1], numberOfAvailableSeats: 20},
  {id: 4, title: 'Թռիչք կկվի բնի վրայով', theater: THEATERS[1], numberOfAvailableSeats: 20},
  {id: 5, title: 'Մեծապատիվ մուրացկաններ', theater: THEATERS[1], numberOfAvailableSeats: 20},
  {id: 6, title: 'Վերջին կանգառ', theater: THEATERS[2], numberOfAvailableSeats: 5},
  {id: 7, title: 'Սիրելիներից մի բաժանվեք', theater: THEATERS[2], numberOfAvailableSeats: 5},
  {id: 8, title: 'Արքան հրապարակում', theater: THEATERS[2], numberOfAvailableSeats: 5},
  {id: 9, title: 'Կալիֆորնիական սյուիտ', theater: THEATERS[2], numberOfAvailableSeats: 5},
  {id: 10, title: 'Վաղը ուշ կլինի', theater: THEATERS[2], numberOfAvailableSeats: 5},
  {id: 11, title: 'Փարիզյան դատավճիռ', theater: THEATERS[3], numberOfAvailableSeats: 10},
  {id: 12, title: 'Օրնիֆլ', theater: THEATERS[3], numberOfAvailableSeats: 10},
  {id: 13, title: 'Սև, դառը շոկոլադ', theater: THEATERS[3], numberOfAvailableSeats: 10},
  {id: 14, title: 'Տիկնայք և Պարոնայք', theater: THEATERS[3], numberOfAvailableSeats: 10},
  {id: 15, title: 'Վերջին ծաղրածուն', theater: THEATERS[3], numberOfAvailableSeats: 10},
]
