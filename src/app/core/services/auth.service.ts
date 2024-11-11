import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { User } from '../../shared/models/user.model';
import { UserCredentials } from '../../shared/models/user-credentials.model';


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private users: User[] = [];
  private mentores: User[] = [
    {
      id:0,
      firstName: 'Carlos',
      lastName: 'Méndez',
      email: 'cMendez@gmail.com',
      password: 'password123',
      role: 'Mentor',
      phone: '123456789',
      
    },
    {
      id:0,
      firstName: 'Jorge',
      lastName: 'Ramírez',
      email: 'jRamirez@gmail.com',
      password: 'password123',
      role: 'Mentor',
      phone: '123456789',
    },
    {
      id:0,
      firstName: 'Laura',
      lastName: 'Hernández',
      email: 'lHernandez@gmail.com',
      password: 'password123',
      role: 'Mentor',
      phone: '123456789',
    },
    {
      id:0,
      firstName: 'María',
      lastName: 'Lopez',
      email: 'mLopez@gmail.com',
      password: 'password123',
      role: 'Mentor',
      phone: '123456789',
    },
  ]
  private _currentUser: User | null = null;

  private _currentUserSubject = new BehaviorSubject<User | null>(null);
  currentUser$ = this._currentUserSubject.asObservable();

  constructor() {
    this.loadUsers();
    this.agregarMentores();
    this.loadCurrentUser();
  }

  private loadUsers() {
    const savedUsers = localStorage.getItem('users');
    this.users = savedUsers ? JSON.parse(savedUsers) : [];
  }

  private saveUsers() {
    localStorage.setItem('users', JSON.stringify(this.users));
  }

  private loadCurrentUser() {
    const savedUser = localStorage.getItem('currentUser');
    this._currentUser = savedUser ? JSON.parse(savedUser) : null;
    this._currentUserSubject.next(this._currentUser);
  }

  private agregarMentores(){
    this.mentores.forEach(mentor =>{
      if(!(this.users.some(user => user.email === mentor.email))){
        const nextId = this.users.reduce((maxId, user) => Math.max(maxId, user.id), 0) + 1;
        const userN: User = {
          ...mentor,
          id: nextId,
        };
        this.users.push(userN);
      }
    })
    this.saveUsers();
  }

  get isAuthenticated(): boolean {
    return !!this._currentUser;
  }

  login(credentials: UserCredentials): User | null {
    const user = this.users.find(
      u => u.email === credentials.email && u.password === credentials.password
    );

    if (user) {
      this._currentUser = user;
      localStorage.setItem('currentUser', JSON.stringify(user));
      this._currentUserSubject.next(user);
      return user;
    } else {
      return null;
    }
  }

  logout(): void {
    this._currentUser = null;
    localStorage.removeItem('currentUser');
    this._currentUserSubject.next(null);
  }

  register(newUser: User): User | null {
    const existingUser = this.users.find(user => user.email === newUser.email);
    if (existingUser) {
      console.log('El usuario ya está registrado');
      return null;
    }

    const nextId = this.users.reduce((maxId, user) => Math.max(maxId, user.id), 0) + 1;

    const user: User = {
      ...newUser,
      id: nextId,
    };

    this.users.push(user);
    this.saveUsers();
    localStorage.setItem('currentUser', JSON.stringify(user));
    this._currentUser = user;
    this._currentUserSubject.next(user);
    return user;
  }
  deleteCurrentUser():void{
    if(this._currentUser){
      const indUser = this.users.findIndex(user => user.id === this._currentUser?.id);
      if(indUser > -1){
        this.users.splice(indUser,1);
        this.saveUsers();
      }
      this._currentUser = null;
      localStorage.removeItem('currentUser');
      this._currentUserSubject.next(null);
    }
  }
  updateProfile(updatedUser: User): void {
    this._currentUser = updatedUser;
    localStorage.setItem('currentUser', JSON.stringify(updatedUser));
    this._currentUserSubject.next(updatedUser);

    const userIndex = this.users.findIndex(u => u.id === updatedUser.id);
    if (userIndex !== -1) {
      this.users[userIndex] = updatedUser;
      this.saveUsers();
    }
  }


  getCurrentUser(): User | null {
    return this._currentUser;
  }

  validation(newUser: User): User | null{
    const existingUser = this.users.find(user => user.email === newUser.email);
    if (existingUser) {
      return null;
    }
    const user: User = {
      ...newUser,
      id: this.users.length + 1,
    };
    return user;
  }
  getCurrentUserRole(): string | null {
    return this._currentUser ? this._currentUser.role : null;
  }
  getEstudiantes(): User[] {
    return this.users.filter(user => user.role === 'Estudiante');
  }
  updateVocationalTestResult(category: string, description: string): void {
    if (this._currentUser) {
      this._currentUser.vocationalTestResult = {
        category,
        description,
      };
      this.saveUsers(); 
      localStorage.setItem('currentUser', JSON.stringify(this._currentUser));
      this._currentUserSubject.next(this._currentUser);
      
      const userIndex = this.users.findIndex(u => u.id === this._currentUser?.id);
      if (userIndex !== -1) {
        this.users[userIndex] = this._currentUser;
        this.saveUsers();
      }
    }
  }
  
}
