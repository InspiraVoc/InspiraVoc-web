import{a as L}from"./chunk-XEWQXH6G.js";import{a as F,d as z,g as A,o as D}from"./chunk-6SHF5PKH.js";import{$b as E,Ab as w,Bb as O,Ca as _,Cb as I,Db as S,Fb as y,Ga as i,Ha as v,Hb as P,Wa as g,_a as l,ac as T,bc as N,ca as h,cb as o,db as a,eb as p,ec as k,gb as b,jb as f,ka as x,la as C,lb as m,pb as M,xb as s,zb as u}from"./chunk-4K5NKH7C.js";var V=(n,e)=>({green:n,red:e});function j(n,e){if(n&1&&(o(0,"div")(1,"p"),s(2),a(),o(3,"p"),s(4),a()()),n&2){let t=m().$implicit;i(2),u("Email: ",t.email,""),i(2),u("Tel\xE9fono: ",t.phone,"")}}function R(n,e){if(n&1){let t=b();o(0,"div",4),p(1,"img",5),o(2,"h2"),s(3),a(),o(4,"p",6),s(5," Test vocacional: "),p(6,"span",7),a(),o(7,"p",8),s(8," Reuni\xF3n pendiente: "),p(9,"span",9),a(),g(10,j,5,2,"div",10),o(11,"button",11),f("click",function(){let c=x(t).index,d=m();return C(d.toggleContactInfo(c))}),s(12),a()()}if(n&2){let t=e.$implicit,r=e.index,c=m();i(),M("alt","Foto de ",t.firstName,""),l("src",t.profileImage||"assets/images/Logo1.png",_),i(2),w("",t.firstName," ",t.lastName,""),i(3),l("ngClass",P(8,V,t.vocationalTestResult,!t.vocationalTestResult)),i(4),l("ngIf",c.showContactInfo[r]),i(2),u(" ",c.showContactInfo[r]?"Ocultar Informaci\xF3n":"Contactar"," ")}}var U=class n{constructor(e){this.authService=e}estudiantes=[];filteredStudents=[];showContactInfo=[];searchTerm="";ngOnInit(){this.estudiantes=this.authService.getEstudiantes(),this.filteredStudents=[...this.estudiantes],this.showContactInfo=new Array(this.estudiantes.length).fill(!1)}toggleContactInfo(e){this.showContactInfo[e]=!this.showContactInfo[e]}filterStudents(){let e=this.searchTerm.toLowerCase();this.filteredStudents=this.estudiantes.filter(t=>`${t.firstName} ${t.lastName}`.toLowerCase().includes(e))}static \u0275fac=function(t){return new(t||n)(v(L))};static \u0275cmp=h({type:n,selectors:[["app-estudiantes"]],standalone:!0,features:[y],decls:4,vars:2,consts:[[1,"students-container"],["type","text","placeholder","Buscar estudiante...",1,"search-bar",3,"ngModelChange","input","ngModel"],[1,"cards-container"],["class","student-card",4,"ngFor","ngForOf"],[1,"student-card"],[1,"profile-photo",3,"src","alt"],[1,"vocational-test"],[1,"status-circle",3,"ngClass"],[1,"meeting-status"],[1,"status-circle","red"],[4,"ngIf"],[1,"contact-button",3,"click"]],template:function(t,r){t&1&&(o(0,"div",0)(1,"input",1),S("ngModelChange",function(d){return I(r.searchTerm,d)||(r.searchTerm=d),d}),f("input",function(){return r.filterStudents()}),a(),o(2,"div",2),g(3,R,13,11,"div",3),a()()),t&2&&(i(),O("ngModel",r.searchTerm),i(2),l("ngForOf",r.filteredStudents))},dependencies:[k,E,T,N,D,F,z,A],styles:[".students-container[_ngcontent-%COMP%]{display:flex;flex-direction:column;align-items:center;gap:20px}h1[_ngcontent-%COMP%]{font-size:2rem;color:#333;margin-bottom:20px}.search-bar[_ngcontent-%COMP%]{width:100%;max-width:300px;padding:10px;margin-bottom:20px;border:1px solid #ddd;border-radius:5px;font-size:1rem}.cards-container[_ngcontent-%COMP%]{display:flex;flex-wrap:wrap;gap:20px;justify-content:center;width:100%}.student-card[_ngcontent-%COMP%]{flex:1 1 300px;max-width:300px;padding:20px;background-color:#fff;box-shadow:0 4px 6px #0000001a;border-radius:8px;text-align:center;transition:transform .2s ease}.student-card[_ngcontent-%COMP%]:hover{transform:scale(1.02)}.profile-photo[_ngcontent-%COMP%]{width:80px;height:80px;border-radius:50%;object-fit:cover;margin:0 auto 10px;display:block}.student-card[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]{font-size:1.5rem;color:#1e3a8a}.student-card[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{color:#555;margin:8px 0}.contact-button[_ngcontent-%COMP%]{margin-top:15px;padding:10px 15px;background-color:#e68626;color:#fff;border:none;border-radius:5px;cursor:pointer;transition:background-color .3s ease}.contact-button[_ngcontent-%COMP%]:hover{background-color:#d1721f}.vocational-test[_ngcontent-%COMP%], .meeting-status[_ngcontent-%COMP%]{font-size:.9rem;margin:5px 0}.status-circle[_ngcontent-%COMP%]{display:inline-block;width:10px;height:10px;border-radius:50%;margin-left:5px}.red[_ngcontent-%COMP%]{background-color:red}.green[_ngcontent-%COMP%]{background-color:green}"]})};export{U as EstudiantesComponent};
