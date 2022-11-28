import {Theater} from "./theater";
import {PERFORMANCES} from "../performances/mock-performances";

export const THEATERS: Theater[] = [
  {id: 1, name: 'Գ. Սունդուկյանի անվան ազգային ակադեմիական թատրոն', performances: [PERFORMANCES[1], PERFORMANCES[2], PERFORMANCES[3], PERFORMANCES[4], PERFORMANCES[5]]},
  {id: 2, name: 'Հակոբ Պարոնյանի Անվան Երաժշտական Կոմեդիայի Պետական Թատրոն', performances: [PERFORMANCES[6], PERFORMANCES[7], PERFORMANCES[8], PERFORMANCES[9], PERFORMANCES[10]]},
  {id: 3, name: 'Երևանի Հրաչյա Ղափլանյանի անվան դրամատիկական թատրոն', performances: [PERFORMANCES[11], PERFORMANCES[12], PERFORMANCES[13], PERFORMANCES[14], PERFORMANCES[15]]},
]
