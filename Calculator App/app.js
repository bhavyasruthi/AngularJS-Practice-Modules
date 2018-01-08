
var mod = angular.module("cal-mod",[]);
    
mod.controller("cal-cntrl",calcntrl);
    function calcntrl()
    {
        
            console.log(" changed");
            this.showResult = function()
        {
           var anum = this.a;
            var bnum =  parseFloat(this.b);
            if(this.opt === '+')
            this.c = anum + bnum;
            else if(this.opt === '-')
            this.c = anum - bnum;
             else if(this.opt === '*')
            this.c = anum * bnum;
             else if(this.opt === '/')
            this.c = anum / bnum;
            alert("button pressed"+this.a + anum +this.c);
        }
    }
    
