var url = 'https://lloretapi.herokuapp.com/trams';

axios.get(`${url}`)





function action(id){
    
    axios.get(`${url}/${id}`).then ( response => {
        console.log(`${url}/${id}`);
        load(response.data)
    } ).catch( err => {
        console.log(err)
    } );

}

function load(response){
    var tram = response.Nom;
    var hora_ini = response.DIA;
    var inici = response.Inici;
    var x = document.getElementById("info_tram");   
    x.style.visibility = "visible";    

    document.getElementById("n_tram").innerText = response.Nom;
    document.getElementById("c_tram").innerText = response.Hora_Inici;
    document.getElementById("i_tram").innerText = response.Inici;
    document.getElementById("d_tram").innerText = response.Km;
    document.getElementById("t_tram").innerText = response.Tipus;


    id = response.id;
}





function createTime(){
    document.getElementById("Hora").style.visibility = "visible";
        
}

function modifica_hora(){
    var h = document.getElementById("data_hora").value;
    var m = document.getElementById("data_minut").value;
    var s = 0;
    s = "0" + s;
    var d ="";
    d = document.getElementById("data_dia").value;
    d = d.charAt(11);

    if( (h.length!=2) || (m.length!=2) || (h<0 || h>24) || (m<0 || m>59) ){
        alert(" hora o minuts incorrectes, recorda que el format es amb dos digits, HH, MM per exemple 04, 12");
    }
    else{
        var time = h + ":" + m + ":" + s;       
        document.getElementById("MyClockDisplay").innerText = time;
    }

    var x= document.getElementById("answer");
    x.style.visibility="hidden";
    
    if(d == "7"){
        if(h<"17" ||(h<"17" && m<"40"))action(1);
        else if(h<"19" ||(h<"19" && m<"14"))action(2);
        else if(h<"19" ||(h<"19" && m<"41"))action(3);
        else if(h<"21" ||(h<"12" && m<"53"))action(4);
        else if(h<"23" ||(h<"23" && m<"27"))action(5);
        else if(h<"23" ||(h<"23" && m<"57"))action(6);
        else action(7);
    }
    else{
        if(h<"12" ||(h<"12" && m<"11"))action(7);
        else if(h<"12" ||(h<"12" && m<"39"))action(8);
        else if(h<"13" ||(h<"13" && m<"27"))action(9);
        else if(h<"15" ||(h<"15" && m<"32"))action(10);
        else if(h<"16")action(11);
        else if(h<"16" ||(h<"16" && m<"48"))action(12);
        else{
                var x = document.getElementById("info_tram");   // Get the element with id="demo"
                x.style.visibility = "hidden"; 
                x= document.getElementById("answer");
                x.style.visibility="visible"; 

        }
    }
    
    
}

window.onload = function showTime(){
    var today = new Date();
    var dd = String(today.getDate()).padStart(2, '0');
    var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
    var hh = String(today.getHours());
    if(mm >= "02"){
        if( (mm == "02") && (dd>= "08")){
            if( dd>"08" ||( (dd=="08") && (hh >= "17"))){
                var x = document.getElementById("info_tram");   // Get the element with id="demo"
                x.style.visibility = "hidden";    
                x = document.getElementById("answer");
                x.style.visibility = "visible";
            }
        } 
    }

    document.getElementById("Hora").style.visibility = "hidden";
    var date = new Date();
    var h = date.getHours(); // 0 - 23
    var m = date.getMinutes(); // 0 - 59
    var s = date.getSeconds(); // 0 - 59
    
    h = (h < 10) ? "0" + h : h;
    m = (m < 10) ? "0" + m : m;
    s = (s < 10) ? "0" + s : s;
   
    var time = h + ":" + m + ":" + s; 
    document.getElementById("MyClockDisplay").innerText = time;  
}
