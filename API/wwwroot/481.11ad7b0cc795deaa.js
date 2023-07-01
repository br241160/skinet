"use strict";(self.webpackChunkclient=self.webpackChunkclient||[]).push([[481],{3481:(T,d,i)=>{i.r(d),i.d(d,{AccountModule:()=>l});var c=i(6895),r=i(433),t=i(1571),g=i(9479),a=i(9838),f=i(4015);class m{constructor(e,o,p){this.accountService=e,this.router=o,this.activatedRoute=p,this.loginForm=new r.cw({email:new r.NI("",[r.kI.required,r.kI.email]),password:new r.NI("",r.kI.required)}),this.returnUrl=this.activatedRoute.snapshot.queryParams.returnUrl||"/shop"}onSubmit(){this.accountService.login(this.loginForm.value).subscribe({next:()=>this.router.navigateByUrl(this.returnUrl)})}}m.\u0275fac=function(e){return new(e||m)(t.Y36(g.B),t.Y36(a.F0),t.Y36(a.gz))},m.\u0275cmp=t.Xpm({type:m,selectors:[["app-login"]],decls:11,vars:7,consts:[[1,"d-flex","justify-content-center","mt-5"],[1,"col-3"],[3,"formGroup","ngSubmit"],[1,"text-center","mb-4"],[1,"mb-3"],[3,"formControl","label"],[3,"formControl","type","label"],[1,"d-grid"],["type","submit",1,"btn","btn-lg","btn-primary","mt-3",3,"disabled"]],template:function(e,o){1&e&&(t.TgZ(0,"div",0)(1,"div",1)(2,"form",2),t.NdJ("ngSubmit",function(){return o.onSubmit()}),t.TgZ(3,"div",3)(4,"h1",4),t._uU(5,"Login"),t.qZA()(),t._UZ(6,"app-text-input",5)(7,"app-text-input",6),t.TgZ(8,"div",7)(9,"button",8),t._uU(10,"Sign in"),t.qZA()()()()()),2&e&&(t.xp6(2),t.Q6J("formGroup",o.loginForm),t.xp6(4),t.Q6J("formControl",o.loginForm.controls.email)("label","Email Address"),t.xp6(1),t.Q6J("formControl",o.loginForm.controls.password)("type","password")("label","Password"),t.xp6(2),t.Q6J("disabled",o.loginForm.invalid))},dependencies:[r._Y,r.JJ,r.JL,r.oH,r.sg,f.t]});var h=i(8372),v=i(5698),b=i(3900),y=i(4004),x=i(8746);function C(n,e){if(1&n&&(t.TgZ(0,"li"),t._uU(1),t.qZA()),2&n){const o=e.$implicit;t.xp6(1),t.hij(" ",o," ")}}function F(n,e){if(1&n&&(t.TgZ(0,"ul",10),t.YNc(1,C,2,1,"li",11),t.qZA()),2&n){const o=t.oxw();t.xp6(1),t.Q6J("ngForOf",o.errors)}}class u{constructor(e,o,p){this.fb=e,this.accountService=o,this.router=p,this.errors=null,this.complexPassword="(?=^.{6,10}$)(?=.*d)(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&amp;*()_+}{&quot;:;'?/&gt;.&lt;,])(?!.*s).*$",this.registerForm=this.fb.group({displayName:["",r.kI.required],email:["",[r.kI.required,r.kI.email],[this.validateEmailNotTaken()]],password:["",[r.kI.required,r.kI.pattern(this.complexPassword)]]})}onSubmit(){this.accountService.register(this.registerForm.value).subscribe({next:()=>this.router.navigateByUrl("/shop"),error:e=>this.errors=e.errors})}validateEmailNotTaken(){return e=>e.valueChanges.pipe((0,h.b)(1e3),(0,v.q)(1),(0,b.w)(()=>this.accountService.checkEmailExist(e.value).pipe((0,y.U)(o=>o?{emailExists:!0}:null),(0,x.x)(()=>e.markAsTouched()))))}}u.\u0275fac=function(e){return new(e||u)(t.Y36(r.qu),t.Y36(g.B),t.Y36(a.F0))},u.\u0275cmp=t.Xpm({type:u,selectors:[["app-register"]],decls:13,vars:10,consts:[[1,"d-flex","justify-content-center","mt-5"],[1,"col-3"],[3,"formGroup","ngSubmit"],[1,"text-center","mb-4"],[1,"mb-3"],[3,"formControl","label"],[3,"formControl","type","label"],["class","text-danger list-unstyled",4,"ngIf"],[1,"d-grid"],["type","submit",1,"btn","btn-lg","btn-primary","mt-3",3,"disabled"],[1,"text-danger","list-unstyled"],[4,"ngFor","ngForOf"]],template:function(e,o){1&e&&(t.TgZ(0,"div",0)(1,"div",1)(2,"form",2),t.NdJ("ngSubmit",function(){return o.onSubmit()}),t.TgZ(3,"div",3)(4,"h1",4),t._uU(5,"Sign up"),t.qZA()(),t._UZ(6,"app-text-input",5)(7,"app-text-input",5)(8,"app-text-input",6),t.YNc(9,F,2,1,"ul",7),t.TgZ(10,"div",8)(11,"button",9),t._uU(12,"Sign up"),t.qZA()()()()()),2&e&&(t.xp6(2),t.Q6J("formGroup",o.registerForm),t.xp6(4),t.Q6J("formControl",o.registerForm.controls.displayName)("label","Display Name"),t.xp6(1),t.Q6J("formControl",o.registerForm.controls.email)("label","Email Address"),t.xp6(1),t.Q6J("formControl",o.registerForm.controls.password)("type","password")("label","Password"),t.xp6(1),t.Q6J("ngIf",o.errors),t.xp6(2),t.Q6J("disabled",o.registerForm.invalid))},dependencies:[c.sg,c.O5,r._Y,r.JJ,r.JL,r.oH,r.sg,f.t]});const J=[{path:"login",component:m},{path:"register",component:u}];class s{}s.\u0275fac=function(e){return new(e||s)},s.\u0275mod=t.oAB({type:s}),s.\u0275inj=t.cJS({imports:[a.Bz.forChild(J),a.Bz]});var S=i(4466);class l{}l.\u0275fac=function(e){return new(e||l)},l.\u0275mod=t.oAB({type:l}),l.\u0275inj=t.cJS({imports:[c.ez,s,S.m]})}}]);