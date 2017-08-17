"use strict"
var app = angular.module('minmax',[
    'jcs-autoValidate'
]);

app.run([
    'defaultErrorMessageResolver',
    function (defaultErrorMessageResolver) {
        // passing a culture into getErrorMessages('fr-fr') will get the culture specific messages
        // otherwise the current default culture is returned.
        defaultErrorMessageResolver.getErrorMessages().then(function (errorMessages) {
            errorMessages['required'] = 'To pole jest wymagane';
          errorMessages['date'] = 'Data nie moze byc z przeszlosci';
        errorMessages['max-length'] = 'Mozesz wpisac co najwyzej {0} znakow';
        });
    }
]);

datapicker();

app.controller('MinMaxCtrl', function($scope,$http)
{
    $scope.formModel = {};
    $scope.onSubmit = function()
    {   
        console.log("I submitted this");
        console.log($scope.formModel);
        
           $.ajax({
            url: "https://formspree.io/rafalgazda.mail@gmail.com", 
            method: "POST",
            data: {message: "hello!"},
            dataType: "json"
            });
    }
});
    
function datapicker()
{
  var today = new Date();
    var dd = today.getDate();
    var mm = today.getMonth()+1; //January is 0!
    var yyyy = today.getFullYear();
     if(dd<10){
            dd='0'+dd
        } 
        if(mm<10){
            mm='0'+mm
        } 

    today = yyyy+'-'+mm+'-'+dd;
    document.getElementById("date2").setAttribute("min", today); 
    
    document.getElementById("date").setAttribute("min", today); 
}

  
