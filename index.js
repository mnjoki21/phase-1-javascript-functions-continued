// code your solution here
function saturdayFun (activity = "roller-skate") {
    return `This Saturday, I want to ${activity}!`
    
    } 
     
    function mondayWork (activity = "go to the office") {
        return `This Monday, I will ${activity}.`
    }
    
     const wrapAdjective = function(style='*') {
        return function(adjective='hard worker')
        {
            return `You are ${style}${adjective}${style}!`
            // console.log (`You are ${style}${adjective}${style}!`)
        }
    }
    // wrapAdjective("||")
    
    
        
        
        // let wrapAdjective = function(style='||'){
        //     return function (adjective = 'a dedicated programmer'){
        //         return`You are ${style}${adjective}${style}!`;
        //     }
        // }
    