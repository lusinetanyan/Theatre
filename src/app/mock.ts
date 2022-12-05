import {Performance} from "./performance";
import {Theater} from "./theater";

export let THEATERS : Theater[] = [];

export const PERFORMANCES: Performance[] = [
  new Performance(1, 'Արթուրո Ուիի կարիերան, որը պետք է կանխվեր', THEATERS[1], 20),
  new Performance(2, 'Արծվաբույն', THEATERS[1], 20),
  new Performance(3, 'Պեպո', THEATERS[1], 20),
  new Performance(4, 'Թռիչք կկվի բնի վրայով', THEATERS[1], 20),
  new Performance(5, 'Մեծապատիվ մուրացկաններ', THEATERS[1], 20),
  new Performance(6, 'Վերջին կանգառ', THEATERS[2], 5),
  new Performance(7, 'Սիրելիներից մի բաժանվեք', THEATERS[2], 5),
  new Performance(8, 'Արքան հրապարակում', THEATERS[2], 5),
  new Performance(9, 'Կալիֆորնիական սյուիտ', THEATERS[2], 5),
  new Performance(10, 'Վաղը ուշ կլինի', THEATERS[2], 5),
  new Performance(11, 'Փարիզյան դատավճիռ', THEATERS[3], 10),
  new Performance(12, 'Օրնիֆլ', THEATERS[3], 10),
  new Performance(13, 'Սև, դառը շոկոլադ', THEATERS[3], 10),
  new Performance(14, 'Տիկնայք և Պարոնայք', THEATERS[3], 10),
  new Performance(15, 'Վերջին ծաղրածուն', THEATERS[3], 10),
]

// @ts-ignore
THEATERS = [
  new Theater(1, 'Գ. Սունդուկյանի անվան ազգային ակադեմիական թատրոն', [PERFORMANCES[1], PERFORMANCES[2], PERFORMANCES[3], PERFORMANCES[4], PERFORMANCES[5]]),
  new Theater(2, 'Հակոբ Պարոնյանի Անվան Երաժշտական Կոմեդիայի Պետական Թատրոն', [PERFORMANCES[6], PERFORMANCES[7], PERFORMANCES[8], PERFORMANCES[9], PERFORMANCES[10]]),
  new Theater(3, 'Երևանի Հրաչյա Ղափլանյանի անվան դրամատիկական թատրոն', [PERFORMANCES[11], PERFORMANCES[12], PERFORMANCES[13], PERFORMANCES[14], PERFORMANCES[15]])
]

