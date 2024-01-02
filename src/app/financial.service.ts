import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FinancialService {

  private baseUrl = 'http://19.1.1.53:5000';

  constructor(private http: HttpClient) {}

  postCreditCardPrediction(data: any): Observable<any> {
    const url = `${this.baseUrl}/credit_card_prediction`;
    return this.http.post<any>(url, data);
  }

  postInvestmentPrediction(data: any): Observable<any> {
    const url = `${this.baseUrl}/investment_prediction`;
    return this.http.post<any>(url, data);
  }

}
