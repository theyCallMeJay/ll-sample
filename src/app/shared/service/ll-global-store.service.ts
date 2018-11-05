import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { User } from '../model/ll-user.model';

@Injectable({
  providedIn: 'root'
})
export class LlGlobalStoreService {

  private _loggedInUser = new BehaviorSubject<User>(null);
  private _userId = new BehaviorSubject<number>(null);
  private _isLoggedIN = new BehaviorSubject<boolean>(false);

  constructor() {}


  public setUser(user: User) {
    this._loggedInUser.next(user);
  }

  public getUser(): Observable<User> {
    return this._loggedInUser.asObservable();
  }

  public setUserId(id: number) {
    this. _userId.next(id);
  }

  public getUserId(): Observable<number> {
    return this._userId.asObservable();
  }

  public setIsLoggedIn(isLOggedIN: boolean) {
    this._isLoggedIN.next(isLOggedIN);
  }

  public getIsLoggedIn(): Observable<boolean> {
    return this._isLoggedIN.asObservable();
  }

}
