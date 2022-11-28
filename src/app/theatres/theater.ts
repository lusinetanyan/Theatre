import {Performance} from "../performances/performance";

export interface Theater {
  id: number;
  name: string;
  performances: Performance[];
}
