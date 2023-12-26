// Your JS code here
var subTypeElement = document.querySelector("#subscription");
var subDurationElement = document.querySelector("#months");
var result = document.querySelector(".result");
var subType = "basic";
var subDuration = 1;

subTypeElement.addEventListener("change", function (e) {
    subType = e.target.value;
    //console.log(subType);
    updateSubscriptionDiv();
});
// Updating on Github to try to get help with console log.

subDurationElement.addEventListener("change", function (e) {
    subDuration = Number(e.target.value);
    //console.log(subDuration);
    updateSubscriptionDiv();
});
// At this point the code is still not working. Completed steps just waiting for help.
// It was working I just thought it should be doing the math already but I didn't code that yet so why would it be doing math.

var updateSubscriptionDiv = function (
    var monthlyCost = 5;
if (subType === "standard") {
    monthlyCost = 7;
}
else if (subType === "premium") {
    monthlyCost = 10;
}
var total = subDuration * monthlyCost;
//stopping at step 5 because I don't understand innertext 
// Back this week.  Made a branch just incase. 
result.innerText = `You have chosen a ${subDuration} month ${subType} plan for ${total}`.;
 ) 

}