import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError } from 'rxjs/operators';

export interface UiElement {
  type: string;
  style?: { [key: string]: string };
  [key: string]: any;
}

export interface UiSchema {
  type: 'page';
  children: UiElement[];
}

@Injectable({ providedIn: 'root' })
export class UiService {
  private uiSchemaUrl = 'homepage-schema.json';

  constructor(private http: HttpClient) {}

  getUiSchema(): Observable<UiSchema> {
    return this.http.get<UiSchema>(this.uiSchemaUrl).pipe(
      catchError((error) => {
        console.error('Error fetching UI schema:', error);
        return of({
          type: 'page',
          children: [
            { type: 'error', message: 'Failed to load UI configuration.' },
          ],
        });
      })
    );
  }
}
