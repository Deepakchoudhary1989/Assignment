import { Injectable } from '@angular/core';
import { INCIDENTRECORD } from './mock-data';
import { Observable, of} from 'rxjs';
import { Incident } from './incident';
@Injectable({
  providedIn: 'root'
})
export class SummaryService {
  constructor() { }
  getRecords(): Observable<Incident[]> {
    return of(INCIDENTRECORD);
  }
}
