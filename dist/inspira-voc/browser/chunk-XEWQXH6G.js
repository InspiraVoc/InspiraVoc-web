import{W as l,a as n,b as a,k as o}from"./chunk-4K5NKH7C.js";var c=class u{users=[];mentores=[{id:0,firstName:"Carlos",lastName:"M\xE9ndez",email:"cMendez@gmail.com",password:"password123",role:"Mentor",phone:"123456789"},{id:0,firstName:"Jorge",lastName:"Ram\xEDrez",email:"jRamirez@gmail.com",password:"password123",role:"Mentor",phone:"123456789"},{id:0,firstName:"Laura",lastName:"Hern\xE1ndez",email:"lHernandez@gmail.com",password:"password123",role:"Mentor",phone:"123456789"},{id:0,firstName:"Mar\xEDa",lastName:"Lopez",email:"mLopez@gmail.com",password:"password123",role:"Mentor",phone:"123456789"}];_currentUser=null;_currentUserSubject=new o(null);currentUser$=this._currentUserSubject.asObservable();constructor(){this.loadUsers(),this.agregarMentores(),this.loadCurrentUser()}loadUsers(){let e=localStorage.getItem("users");this.users=e?JSON.parse(e):[]}saveUsers(){localStorage.setItem("users",JSON.stringify(this.users))}loadCurrentUser(){let e=localStorage.getItem("currentUser");this._currentUser=e?JSON.parse(e):null,this._currentUserSubject.next(this._currentUser)}agregarMentores(){this.mentores.forEach(e=>{if(!this.users.some(r=>r.email===e.email)){let r=this.users.reduce((t,i)=>Math.max(t,i.id),0)+1,s=a(n({},e),{id:r});this.users.push(s)}}),this.saveUsers()}get isAuthenticated(){return!!this._currentUser}login(e){let r=this.users.find(s=>s.email===e.email&&s.password===e.password);return r?(this._currentUser=r,localStorage.setItem("currentUser",JSON.stringify(r)),this._currentUserSubject.next(r),r):null}logout(){this._currentUser=null,localStorage.removeItem("currentUser"),this._currentUserSubject.next(null)}register(e){if(this.users.find(i=>i.email===e.email))return console.log("El usuario ya est\xE1 registrado"),null;let s=this.users.reduce((i,U)=>Math.max(i,U.id),0)+1,t=a(n({},e),{id:s});return this.users.push(t),this.saveUsers(),localStorage.setItem("currentUser",JSON.stringify(t)),this._currentUser=t,this._currentUserSubject.next(t),t}deleteCurrentUser(){if(this._currentUser){let e=this.users.findIndex(r=>r.id===this._currentUser?.id);e>-1&&(this.users.splice(e,1),this.saveUsers()),this._currentUser=null,localStorage.removeItem("currentUser"),this._currentUserSubject.next(null)}}updateProfile(e){this._currentUser=e,localStorage.setItem("currentUser",JSON.stringify(e)),this._currentUserSubject.next(e);let r=this.users.findIndex(s=>s.id===e.id);r!==-1&&(this.users[r]=e,this.saveUsers())}getCurrentUser(){return this._currentUser}validation(e){return this.users.find(t=>t.email===e.email)?null:a(n({},e),{id:this.users.length+1})}getCurrentUserRole(){return this._currentUser?this._currentUser.role:null}getEstudiantes(){return this.users.filter(e=>e.role==="Estudiante")}updateVocationalTestResult(e,r){if(this._currentUser){this._currentUser.vocationalTestResult={category:e,description:r},this.saveUsers(),localStorage.setItem("currentUser",JSON.stringify(this._currentUser)),this._currentUserSubject.next(this._currentUser);let s=this.users.findIndex(t=>t.id===this._currentUser?.id);s!==-1&&(this.users[s]=this._currentUser,this.saveUsers())}}static \u0275fac=function(r){return new(r||u)};static \u0275prov=l({token:u,factory:u.\u0275fac,providedIn:"root"})};export{c as a};