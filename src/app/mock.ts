import {Performance} from "./performance";
import {Theatre} from "./theatre";

export const PERFORMANCES: Performance[] = [
  new Performance(1, 'Արթուրո Ուիի կարիերան, որը պետք է կանխվեր', 20),
  new Performance(2, 'Արծվաբույն',20),
  new Performance(3, 'Պեպո',20),
  new Performance(4, 'Թռիչք կկվի բնի վրայով',20),
  new Performance(5, 'Մեծապատիվ մուրացկաններ',20),
  new Performance(6, 'Վերջին կանգառ',5),
  new Performance(7, 'Սիրելիներից մի բաժանվեք',5),
  new Performance(8, 'Արքան հրապարակում',5),
  new Performance(9, 'Կալիֆորնիական սյուիտ',5),
  new Performance(10, 'Վաղը ուշ կլինի',5),
  new Performance(11, 'Փարիզյան դատավճիռ',10),
  new Performance(12, 'Օրնիֆլ',10),
  new Performance(13, 'Սև, դառը շոկոլադ', 10),
  new Performance(14, 'Տիկնայք և Պարոնայք', 10),
  new Performance(15, 'Վերջին ծաղրածուն', 10),
]

export let THEATERS : Theatre[] = [
  new Theatre(1, 'Գ. Սունդուկյանի անվան ազգային ակադեմիական թատրոն', [PERFORMANCES[0], PERFORMANCES[1], PERFORMANCES[2], PERFORMANCES[3], PERFORMANCES[4]]),
  new Theatre(2, 'Հակոբ Պարոնյանի Անվան Երաժշտական Կոմեդիայի Պետական Թատրոն', [PERFORMANCES[5], PERFORMANCES[6], PERFORMANCES[7], PERFORMANCES[8], PERFORMANCES[9]]),
  new Theatre(3, 'Երևանի Հրաչյա Ղափլանյանի անվան դրամատիկական թատրոն', [PERFORMANCES[10], PERFORMANCES[11], PERFORMANCES[12], PERFORMANCES[13], PERFORMANCES[14]])
]

