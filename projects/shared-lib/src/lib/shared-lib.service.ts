import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class SharedLibService {
  private userName: string = 'mahmoud';

  public get user(): string {
    const user = localStorage.getItem('ngname') || 'angular mfe';
    return user;
  }

  constructor() {}
}
