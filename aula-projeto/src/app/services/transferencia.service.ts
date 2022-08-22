import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Transferencia } from '../models/transferencia.models';

@Injectable({
  providedIn: 'root'
})
export class TransferenciaService {
  [x: string]: any;
  private listatransferencia: any[];
  private ApiUrl = 'http://localhost:3000/transferencias';

constructor(private httpClient: HttpClient) {
  this.listatransferencia = [];
}

get transferencias() {
  return this.listatransferencia;
}

todas():Observable<Transferencia[]>{
  return this.httpClient.get<Transferencia[]>(this.ApiUrl);
}

adicionar(transferencia:any){
  this.hidratar(transferencia);
  this.listatransferencia.push(transferencia);
}

private hidratar(transferencia: any){
  transferencia.data = new Date();
}



}
