import {IApiData} from '../models/ApiData';

export abstract class Validators {
  protected isValid: boolean;
  protected apiData: IApiData[];

  public get IsValid(): boolean {
    return this.isValid;
  }

  public get ApiData(): IApiData[] {
    return this.apiData;
  }

  public abstract Validate<T>(data: string);
}
