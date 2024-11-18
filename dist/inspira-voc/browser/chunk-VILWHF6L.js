import{a as F}from"./chunk-RXOBX5UX.js";import{a as V,d as I,g as O,o as P}from"./chunk-6SHF5PKH.js";import{Bb as b,Ca as x,Cb as w,Db as S,Fb as T,Ga as c,Ha as v,Wa as _,_a as g,ac as y,bc as E,ca as h,cb as r,db as s,eb as M,ec as k,gb as f,jb as m,ka as d,la as u,lb as p,xb as a,zb as C}from"./chunk-4K5NKH7C.js";function D(o,t){if(o&1){let e=f();r(0,"div",6),M(1,"img",7),r(2,"button",8),m("click",function(){let i=d(e).$implicit,l=p();return u(l.openTypeSelectionDialog(i))}),a(3,"Elegir orientador"),s()()}if(o&2){let e=t.$implicit;c(),g("src",e.image,x)}}function N(o,t){if(o&1){let e=f();r(0,"div",9)(1,"p"),a(2,"\xBFQuiere reservar el mentor para una asesor\xEDa individual o grupal?"),s(),r(3,"button",10),m("click",function(){d(e);let i=p();return u(i.selectType("individual"))}),a(4,"Individual"),s(),r(5,"button",10),m("click",function(){d(e);let i=p();return u(i.selectType("grupal"))}),a(6,"Grupal"),s()()}}function L(o,t){if(o&1){let e=f();r(0,"div",9)(1,"p"),a(2),s(),r(3,"button",10),m("click",function(){d(e);let i=p();return u(i.confirmSelection())}),a(4,"S\xED"),s(),r(5,"button",10),m("click",function(){d(e);let i=p();return u(i.cancelSelection())}),a(6,"No"),s()()}if(o&2){let e=p();c(2),C("\xBFEst\xE1 seguro de agendar con ",e.selectedMentor==null?null:e.selectedMentor.name,"?")}}function B(o,t){o&1&&(r(0,"div",11)(1,"p"),a(2,"El mentor ha sido a\xF1adido al carrito."),s()())}var z=class o{constructor(t){this.eventService=t}mentores=[{name:"Carlos M\xE9ndez",image:"assets/images/mentor1.png"},{name:"Jorge Ram\xEDrez",image:"assets/images/mentor2.png"},{name:"Laura Hern\xE1ndez",image:"assets/images/mentor3.png"},{name:"Mar\xEDa L\xF3pez",image:"assets/images/mentor4.png"}];filteredMentores=[...this.mentores];searchTerm="";showTypeSelection=!1;showConfirmation=!1;showSuccessMessage=!1;selectedMentor=null;asesorType=null;openTypeSelectionDialog(t){this.selectedMentor=t,this.showTypeSelection=!0}filterMentores(){this.filteredMentores=this.mentores.filter(t=>t.name.toLowerCase().includes(this.searchTerm.toLowerCase()))}selectType(t){this.asesorType=t,this.showTypeSelection=!1,this.showConfirmation=!0}confirmSelection(){if(this.selectedMentor&&this.asesorType){let t=this.selectedMentor.name,e=this.asesorType==="individual"?25:15,n=this.asesorType==="individual"?"1 hr":"2 hr",i={nombre:`Reuni\xF3n Orientador (${this.asesorType})`,duracion:n,precio:e},l={nombre:"Test Vocacional",duracion:"45 min",precio:10};this.eventService.updateCarritoItem(i),this.eventService.updateCarritoItem(l),this.eventService.addEvent({title:`Reuni\xF3n ${this.asesorType} con ${t}`,date:"2024-11-07"}),this.eventService.addEvent({title:"Test Vocacional",date:"2024-11-15"}),this.showConfirmation=!1,this.showSuccessMessage=!0,setTimeout(()=>{this.showSuccessMessage=!1},2e3)}}cancelSelection(){this.showTypeSelection=!1,this.showConfirmation=!1}static \u0275fac=function(e){return new(e||o)(v(F))};static \u0275cmp=h({type:o,selectors:[["app-mentores"]],standalone:!0,features:[T],decls:7,vars:5,consts:[[1,"search-container"],["type","text","placeholder","Buscar mentor...",1,"search-bar",3,"ngModelChange","input","ngModel"],[1,"mentores-container"],["class","mentor",4,"ngFor","ngForOf"],["class","confirmation-dialog",4,"ngIf"],["class","success-message",4,"ngIf"],[1,"mentor"],["alt","Imagen del mentor",1,"mentor-image",3,"src"],[1,"choose-button",3,"click"],[1,"confirmation-dialog"],[3,"click"],[1,"success-message"]],template:function(e,n){e&1&&(r(0,"div",0)(1,"input",1),S("ngModelChange",function(l){return w(n.searchTerm,l)||(n.searchTerm=l),l}),m("input",function(){return n.filterMentores()}),s()(),r(2,"div",2),_(3,D,4,1,"div",3),s(),_(4,N,7,0,"div",4)(5,L,7,1,"div",4)(6,B,3,0,"div",5)),e&2&&(c(),b("ngModel",n.searchTerm),c(2),g("ngForOf",n.filteredMentores),c(),g("ngIf",n.showTypeSelection),c(),g("ngIf",n.showConfirmation),c(),g("ngIf",n.showSuccessMessage))},dependencies:[k,y,E,P,V,I,O],styles:[".mentores-container[_ngcontent-%COMP%]{display:grid;grid-template-columns:repeat(2,1fr);gap:20px;padding:20px}.mentor[_ngcontent-%COMP%]{position:relative;text-align:center}.mentor-image[_ngcontent-%COMP%]{width:100%;height:auto;display:block;border-radius:8px;object-fit:cover}.choose-button[_ngcontent-%COMP%]{position:absolute;bottom:20px;left:52%;transform:translate(-50%);background-color:#ff7f11;color:#fff;border:none;border-radius:5px;padding:8px 12px;font-size:14px;cursor:pointer;transition:background-color .3s ease}.choose-button[_ngcontent-%COMP%]:hover{background-color:#e66d0e}.confirmation-dialog[_ngcontent-%COMP%]{position:fixed;top:50%;left:50%;transform:translate(-50%,-50%);background-color:#fff;border:2px solid #f0a500;border-radius:10px;padding:20px;text-align:center;box-shadow:0 4px 8px #0003;z-index:1000}.confirmation-dialog[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{margin:10px}.success-message[_ngcontent-%COMP%]{position:fixed;bottom:20px;right:20px;background-color:#4caf50;color:#fff;padding:10px 20px;border-radius:5px;box-shadow:0 4px 8px #0003;z-index:1000}.search-container[_ngcontent-%COMP%]{display:flex;justify-content:center;padding:20px}.search-bar[_ngcontent-%COMP%]{width:100%;max-width:300px;padding:10px;border:1px solid #ddd;border-radius:5px;font-size:1rem}"]})};export{z as MentoresComponent};
