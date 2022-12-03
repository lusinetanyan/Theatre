import {Theater} from "./theater";

export class Performance {
  private _id: number = 0;
  private _title: string = '';
  private _theater: Theater;
  private _numberOfAvailableSeats: number = 0;


  public constructor(id: number, title: string, theater: Theater, numberOfAvailableSeats: number) {
    this._id = id;
    this._title = title;
    this._theater = theater;
    this._numberOfAvailableSeats = numberOfAvailableSeats;
  }


  public get id(): number {
    return this._id;
  }

  public set id(value: number) {
    this._id = value;
  }

  public get title(): string {
    return this._title;
  }

  public set title(value: string) {
    this._title = value;
  }

  public get theater(): Theater {
    return this._theater;
  }

  public set theater(value: Theater) {
    this._theater = value;
  }

  public get numberOfAvailableSeats(): number {
    return this._numberOfAvailableSeats;
  }

  public set numberOfAvailableSeats(value: number) {
    this._numberOfAvailableSeats = value;
  }
}
