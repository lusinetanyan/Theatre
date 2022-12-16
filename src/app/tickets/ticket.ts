import {Performance} from "../performance";

export class Ticket {
  get id(): number {
    return this._id;
  }

  set id(value: number) {
    this._id = value;
  }

  private static id = 0;

  private _id: number = 0;
  private _performance: Performance;
  private _count: number = 0;

  get performance(): Performance {
    return this._performance;
  }

  set performance(value: Performance) {
    this._performance = value;
  }

  get count(): number {
    return this._count;
  }

  set count(value: number) {
    this._count = value;
  }

  constructor(performance: Performance, count: number) {
    this._performance = performance;
    this._id = Ticket.id;
    Ticket.id++;
    this._count = count;
  }
}
