import {Theater} from "../theatres/theater";

export interface Performance {
  id: number;
  title: string;
  theater: Theater;
  numberOfAvailableSeats: number;
}
