import {Performance} from "./performance";

export class Theatre {

  private _id: number = 0;
  private _name: string = '';
  private _performances: Performance[] = [];

  public constructor(id: number, name: string, performances: Performance[]) {
    this._id = id;
    this._name = name;
    this._performances = performances;
  }

  public get id(): number {
    return this._id;
  }

  public set id(value: number) {
    this._id = value;
  }

  public get name(): string {
    return this._name;
  }

  public set name(value: string) {
    this._name = value;
  }

  public get performances(): Performance[] {
    return this._performances;
  }

  public set performances(value: Performance[]) {
    this._performances = value;
  }
}
