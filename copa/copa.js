$(function () {
    ChamaResultado();
    setInterval(function(){
     ChamaResultado();

    }, 10000);
 
    function ChamaResultado(){

        var resultadoAtual =    $.ajax({
        
            url: 'https://worldcup.sfg.io/matches', //https://worldcup.sfg.io/matches/current
            type: "GET",
            dataType: "json",
            success: function (result) {
                $("body").html("");
               // console.log(result[0].home_team.goals);
               // console.log(result[0].away_team.goals);
               $.each(result, function(index, value){
                console.log(value.away_team.goals);
                time2 = value.away_team.country;
                time1 = value.home_team.country;
                
                golstime1 = value.home_team.goals;
                golstime2 = value.away_team.goals;
              
                $("body").append(" <div id='jogo1'> <span id='time1j1' class='certo'>"+time1+" &nbsp;</span> <span id='golstime1j1' class='certo'>"+golstime1+" &nbsp;</span> <span id='contra1' class='certo'>X &nbsp;</span> <span id='golstime2j1' class='certo'>"+golstime2+" &nbsp;</span> <span id='time2j1' class='certo'> "+time2+" &nbsp;</span> </div> <br />");
               });
   

               // $('#time1j1').html(time1 + '&nbsp;');
               // $('#time2j1').html(time2 + '&nbsp;');

               // $('#golstime1j1').html(golstime1 + '&nbsp;');
               // $('#golstime2j1').html(golstime2 + '&nbsp;');
    
           
            }
    
        });
        return resultadoAtual;
    }
 

});

