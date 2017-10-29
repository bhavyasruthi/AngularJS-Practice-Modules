var mod = angular.module("more-dirmod",[]);
    
mod.controller("more-dir",moredircntrl);
    function moredircntrl()
    {
        
        this.bool=true;
        this.isChanged = function()
        {
            this.bool = isNaN(this.x);
            
        }
        this.myList = [1, 2,3,4,5,6,7,8,9,10];
         this.xnum= parseFloat(this.x);
        
    }