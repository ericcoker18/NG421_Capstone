import {Inject, Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {IPerson} from "../interfaces/i-person";

@Injectable({
  providedIn: 'root'
})
export class PeopleService {

  constructor(private httpClient: HttpClient, @Inject('BASE_URL') private baseUrl: string) { }

  public async getPeople(): Promise<IPerson[]> {
    return this.httpClient.get<IPerson[]>(`${this.baseUrl}people`).toPromise();
  }

  public async addPerson(person: IPerson): Promise<IPerson> {
    return this.httpClient.post<IPerson>(`${this.baseUrl}people`, person).toPromise();
  }
}
