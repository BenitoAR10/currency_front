import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ResponseCurrencyDto } from '../dto/response.currency.dto';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CurrencyService {

  constructor(private http: HttpClient) { }

  // observable nos ayuda a manejar los datos de forma asincrona
  public convertCurrency(from: string, to: string, amount: number): Observable<ResponseCurrencyDto>{  
    return this.http.get<ResponseCurrencyDto>("http://localhost:8080/api/v1/currency?from="+from+"&to="+to+"&amount="+amount);
  } 
}


