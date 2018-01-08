var mod = angular.module("dependencies",["userMod"]);
    
mod.controller("dependenciesCntrl",dependenciesCntrl);
    function dependenciesCntrl()
    {
         this.hi = "hellooo, I am from dependencies module" ;
    }
