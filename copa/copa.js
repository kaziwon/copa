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
              
               $.each(result, function(index, value){
                  

                console.log(value);
                time2 = value.away_team.country;
                time1 = value.home_team.country;
                
                golstime1 = value.home_team.goals;
                golstime2 = value.away_team.goals;
              if(time2 != "To Be Determined" || time1 != "To Be Determined"){
                $("body").append("<div id='jogo1'><div id='time1j1' class='certo'><span id='spanTime1'>"+time1+"</span> </div><div id='resultados'><div id='golstime1j1' class='certo'><span id='spanResultado1'>&nbsp; "+golstime1+" &nbsp;</span></div><div id='contra1' class='certo'><span id='contra'>X &nbsp;</span> </div><div id='golstime2j1' class='certo'><span id='spanResultado2'>"+golstime2+" &nbsp;</span></div></div><div id='time2j1' class='certo'><span id='spanTime2'>"+time2+"</span></div></div>");

              }
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

