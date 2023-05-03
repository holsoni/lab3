import { Injectable } from '@angular/core';
import {FormBuilder} from "@angular/forms";
import {Observable, of} from "rxjs";
import {User} from "../model/user";


@Injectable({
  providedIn: 'root'
})
export class FormService {

  existingEntries:any[][] =[]
  constructor() {  this.existingEntries = [];}
  create(arr: any[]): Observable<string | null> {
    const data = localStorage.getItem('arr');
    this.existingEntries = data ? JSON.parse(data) : [];
    if (!Array.isArray(this.existingEntries)) {
      this.existingEntries = [];
    }
    this.existingEntries.push(arr);
    localStorage.setItem('arr',JSON.stringify(this.existingEntries));
    console.log(this.existingEntries);
    return of(localStorage.getItem('arr'));
  }

  getAll(): Observable<any[]> {
    const data = localStorage.getItem('arr');
    return of(data ? JSON.parse(data) : []);
  }
  getById(id:string):Observable<any[]>{
    let data = localStorage.getItem('arr');
    const items = data ? JSON.parse(data) || [] : [];
    const index = items.findIndex((item: any) => item.id === id);
    let item = {};
    console.log("ID: ", id);
    if (index !== -1) {
      item=items[index];
    }
    // @ts-ignore
    return of(item);
}

  deleteById(id:string):Observable<any[]> {
    let data = localStorage.getItem('arr');
    const items = data ? JSON.parse(data) || [] : [];
    const index = items.findIndex((item: any) => item.id === id);

    console.log("ID: ", id);
    if (index !== -1) {
      console.log("ITEM: ", items[index]);
      items.splice(index, 1);
      localStorage.setItem('arr', JSON.stringify(items));
      console.log("ITEMS:", items);
    }
    return of(data ? JSON.parse(data) : []);
  }
  update(id:string,arr: any[]):Observable<any[]>{
    this.deleteById(id);
    this.create(arr);
    return of(arr);
  }
}
