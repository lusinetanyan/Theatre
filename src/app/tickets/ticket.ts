import {Performance} from "../performance";

export class Ticket {

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
    this._count = count;
  }
}
