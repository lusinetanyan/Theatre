export class Performance {

  private _id: number = 0;
  private _title: string = '';
  private _numberOfAvailableSeats: number = 0;
  // private _date : Date = new Date();


  public constructor(id: number, title: string, numberOfAvailableSeats: number) {
    this._id = id;
    this._title = title;
    this._numberOfAvailableSeats = numberOfAvailableSeats;
    // this._date = date;
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

  public get numberOfAvailableSeats(): number {
    return this._numberOfAvailableSeats;
  }

  public set numberOfAvailableSeats(value: number) {
    this._numberOfAvailableSeats = value;
  }

  // public get date(): Date {
  //   return this._date;
  // }
  //
  // public set date(value: Date) {
  //   this._date = value;
  // }
}
