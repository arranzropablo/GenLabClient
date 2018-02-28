/*$("#ctoolView").on("click", ".btn-calculate", (evt) => {
    let h = $("#Alelles-A-Testcross").val();
    $("#total-Testcross").text(34);
    console.log("Pulsado");
    alert("Hola! Has metido " + h);
});*/

//ONE LOCUS

$("#ctoolView").on("click", "#testcross-onelocus", (evt) => {
    let alelles_A = $("#Alelles-A-Testcross").val();
    let alelles_a = $("#Alelles-a-Testcross").val();

    alert(alelles_A + " " + alelles_a);
    /*$.ajax({
        type: "GET",
        //url: "http://ingenias.fdi.ucm.es:60070/api/v1/problems",
        url: "http://raspberrypablo.ddns.net:8080/api/v1/onelocus/F2Dominance",
        beforeSend: function(request) {
            request.setRequestHeader("Access-Control-Allow-Origin", "*");
        },
        contentType: "application/json",
        data: { alelles_A: alelles_A, alelles_a: alelles_a },
        success: function(data, textStatus, jqXHR) {

        },
        error: function(jqXHR, textStatus, errorThrown) {
            alert("Se ha producido un error: " + errorThrown);
        }
    });*/
});

$("#ctoolView").on("click", "#F2Dominance-onelocus", (evt) => {
    let alelles_A = $("#Alelles-A-F2Dominance").val();
    let alelles_a = $("#Alelles-a-F2Dominance").val();

    alert(alelles_A + " y el otro " + alelles_a);
    /*$.ajax({
        type: "GET",
        //url: "http://ingenias.fdi.ucm.es:60070/api/v1/problems",
        url: "http://raspberrypablo.ddns.net:8080/api/v1/onelocus/testcross",
        beforeSend: function(request) {
            request.setRequestHeader("Access-Control-Allow-Origin", "*");
        },
        contentType: "application/json",
        data: { alelles_A: alelles_A, alelles_a: alelles_a },
        success: function(data, textStatus, jqXHR) {

        },
        error: function(jqXHR, textStatus, errorThrown) {
            alert("Se ha producido un error: " + errorThrown);
        }
    });*/
});

$("#ctoolView").on("click", "#F2Codominance-onelocus", (evt) => {
    let alelles_A1A1 = $("#Alelles-A1A1-F2Codominance").val();
    let alelles_A1A2 = $("#Alelles-A1A2-F2Codominance").val();
    let alelles_A2A2 = $("#Alelles-A2A2-F2Codominance").val();

    alert(alelles_A1A1 + " " + alelles_A1A2 + " " + alelles_A2A2);
    /*$.ajax({
        type: "GET",
        //url: "http://ingenias.fdi.ucm.es:60070/api/v1/problems",
        url: "http://raspberrypablo.ddns.net:8080/api/v1/onelocus/F2Codominance",
        beforeSend: function(request) {
            request.setRequestHeader("Access-Control-Allow-Origin", "*");
        },
        contentType: "application/json",
        data: { alelles_A1A1: alelles_A1A1, alelles_A1A2: alelles_A1A2, alelles_A2A2: alelles_A2A2 },
        success: function(data, textStatus, jqXHR) {

        },
        error: function(jqXHR, textStatus, errorThrown) {
            alert("Se ha producido un error: " + errorThrown);
        }
    });*/
});

$("#ctoolView").on("click", "#Codominance3-onelocus", (evt) => {
    let alelles_A1A1 = $("#Alelles-A1A1-Codominance3").val();
    let alelles_A1A3 = $("#Alelles-A1A3-Codominance3").val();
    let alelles_A1A2 = $("#Alelles-A1A2-Codominance3").val();
    let alelles_A2A3 = $("#Alelles-A2A3-Codominance3").val();

    alert(alelles_A1A1 + " " + alelles_A1A3 + " " + alelles_A1A2 + " " + alelles_A2A3);
    /*$.ajax({
        type: "GET",
        //url: "http://ingenias.fdi.ucm.es:60070/api/v1/problems",
        url: "http://raspberrypablo.ddns.net:8080/api/v1/onelocus/Codominance3",
        beforeSend: function(request) {
            request.setRequestHeader("Access-Control-Allow-Origin", "*");
        },
        contentType: "application/json",
        data: { alelles_A1A1: alelles_A1A1, alelles_A1A3: alelles_A1A3, alelles_A1A2: alelles_A1A2, alelles_A2A3: alelles_A2A3 },
        success: function(data, textStatus, jqXHR) {

        },
        error: function(jqXHR, textStatus, errorThrown) {
            alert("Se ha producido un error: " + errorThrown);
        }
    });*/
});

$("#ctoolView").on("click", "#Codominance4-onelocus", (evt) => {
    let alelles_A1A3 = $("#Alelles-A1A3-Codominance4").val();
    let alelles_A1A4 = $("#Alelles-A1A4-Codominance4").val();
    let alelles_A2A3 = $("#Alelles-A2A3-Codominance4").val();
    let alelles_A2A4 = $("#Alelles-A2A4-Codominance4").val();


    alert(alelles_A1A3 + " " + alelles_A1A4 + " " + alelles_A2A3 + " " + alelles_A2A4);
    /*$.ajax({
        type: "GET",
        //url: "http://ingenias.fdi.ucm.es:60070/api/v1/problems",
        url: "http://raspberrypablo.ddns.net:8080/api/v1/onelocus/Codominance4",
        beforeSend: function(request) {
            request.setRequestHeader("Access-Control-Allow-Origin", "*");
        },
        contentType: "application/json",
        data: { alelles_A1A3: alelles_A1A3, alelles_A1A4: alelles_A1A4, alelles_A2A3: alelles_A2A3, alelles_A2A4: alelles_A2A4 },
        success: function(data, textStatus, jqXHR) {

        },
        error: function(jqXHR, textStatus, errorThrown) {
            alert("Se ha producido un error: " + errorThrown);
        }
    });*/
});

//TWO LOCI

$("#ctoolView").on("click", "#F2Codom2-twoloci", (evt) => {

    let alelles_A1A1B = $("#Alelles-A1A1B-F2Codom2").val();
    let alelles_A1A2B = $("#Alelles-A1A2B-F2Codom2").val();
    let alelles_A2A2B = $("#Alelles-A2A2B-F2Codom2").val();
    let alelles_A1A1b = $("#Alelles-A1A1b-F2Codom2").val();
    let alelles_A1A2b = $("#Alelles-A1A2b-F2Codom2").val();
    let alelles_A2A2b = $("#Alelles-A2A2b-F2Codom2").val();


    alert(alelles_A1A1B + " " + alelles_A1A2B + " " + alelles_A2A2B + " " + alelles_A1A1b + " " + alelles_A1A2b + " " + alelles_A2A2b);
    /*$.ajax({
        type: "GET",
        //url: "http://ingenias.fdi.ucm.es:60070/api/v1/problems",
        url: "http://raspberrypablo.ddns.net:8080/api/v1/twoloci/F2Codom2",
        beforeSend: function(request) {
            request.setRequestHeader("Access-Control-Allow-Origin", "*");
        },
        contentType: "application/json",
        data: { 
            alelles_A1A1B: alelles_A1A1B, 
            alelles_A1A2B: alelles_A1A2B, 
            alelles_A2A2B: alelles_A2A2B, 
            alelles_A1A1b: alelles_A1A1b,
            alelles_A1A2b: alelles_A1A2b,
            alelles_A2A2b: alelles_A2A2b
        },
        success: function(data, textStatus, jqXHR) {

        },
        error: function(jqXHR, textStatus, errorThrown) {
            alert("Se ha producido un error: " + errorThrown);
        }
    });*/
});

$("#ctoolView").on("click", "#F2Codom4-twoloci", (evt) => {

    let alelles_A1A3B = $("#Alelles-A1A3B-F2Codom4").val();
    let alelles_A1A3b = $("#Alelles-A1A3b-F2Codom4").val();
    let alelles_A1A4B = $("#Alelles-A1A4B-F2Codom4").val();
    let alelles_A1A4b = $("#Alelles-A1A4b-F2Codom4").val();
    let alelles_A2A3B = $("#Alelles-A2A3B-F2Codom4").val();
    let alelles_A2A3b = $("#Alelles-A2A3b-F2Codom4").val();
    let alelles_A2A4B = $("#Alelles-A2A4B-F2Codom4").val();
    let alelles_A2A4b = $("#Alelles-A2A4b-F2Codom4").val();
    
    
    alert(alelles_A1A3B + " " + alelles_A1A3b + " " + alelles_A1A4B + " " + alelles_A1A4b + " " + alelles_A2A3B + " " + alelles_A2A3b + " " + alelles_A2A4B + " " + alelles_A2A4b);
    /*$.ajax({
        type: "GET",
        //url: "http://ingenias.fdi.ucm.es:60070/api/v1/problems",
        url: "http://raspberrypablo.ddns.net:8080/api/v1/twoloci/F2Codom4",
        beforeSend: function(request) {
            request.setRequestHeader("Access-Control-Allow-Origin", "*");
        },
        contentType: "application/json",
        data: { 
            alelles_A1A3B: alelles_A1A3B, 
            alelles_A1A3b: alelles_A1A3b, 
            alelles_A1A4B: alelles_A1A4B, 
            alelles_A1A4b: alelles_A1A4b,
            alelles_A2A3B: alelles_A2A3B,
            alelles_A2A3b: alelles_A2A3b,
            alelles_A2A4B: alelles_A2A4B,
            alelles_A2A4b: alelles_A2A4b
        },
        success: function(data, textStatus, jqXHR) {
    
        },
        error: function(jqXHR, textStatus, errorThrown) {
            alert("Se ha producido un error: " + errorThrown);
        }
    });*/
});

$("#ctoolView").on("click", "#F2Codominance-twoloci", (evt) => {
    
    let alelles_A1A1B1B1 = $("#Alelles-A1A1B1B1-F2Codominance").val();
    let alelles_A1A1B1B2 = $("#Alelles-A1A1B1B2-F2Codominance").val();
    let alelles_A1A1B2B2 = $("#Alelles-A1A1B2B2-F2Codominance").val();
    let alelles_A1A2B1B1 = $("#Alelles-A1A2B1B1-F2Codominance").val();
    let alelles_A1A2B1B2 = $("#Alelles-A1A2B1B2-F2Codominance").val();
    let alelles_A1A2B2B2 = $("#Alelles-A1A2B2B2-F2Codominance").val();
    let alelles_A2A2B1B1 = $("#Alelles-A2A2B1B1-F2Codominance").val();
    let alelles_A2A2B1B2 = $("#Alelles-A2A2B1B2-F2Codominance").val();
    let alelles_A2A2B2B2 = $("#Alelles-A2A2B2B2-F2Codominance").val();
        
        
    alert(alelles_A1A1B1B1 + " " + alelles_A1A1B1B2 + " " + alelles_A1A1B2B2 + " " + alelles_A1A2B1B1 + " " + alelles_A1A2B1B2 + " " + alelles_A1A2B2B2 + " " + alelles_A2A2B1B1 + " " + alelles_A2A2B1B2 + " " + alelles_A2A2B2B2);
    /*$.ajax({
        type: "GET",
        //url: "http://ingenias.fdi.ucm.es:60070/api/v1/problems",
        url: "http://raspberrypablo.ddns.net:8080/api/v1/twoloci/F2Codominance",
        beforeSend: function(request) {
            request.setRequestHeader("Access-Control-Allow-Origin", "*");
        },
        contentType: "application/json",
        data: { 
            alelles_A1A1B1B1: alelles_A1A1B1B1, 
            alelles_A1A1B1B2: alelles_A1A1B1B2, 
            alelles_A1A1B2B2: alelles_A1A1B2B2, 
            alelles_A1A2B1B1: alelles_A1A2B1B1,
            alelles_A1A2B1B2: alelles_A1A2B1B2,
            alelles_A1A2B2B2: alelles_A1A2B2B2,
            alelles_A2A2B1B1: alelles_A2A2B1B1,
            alelles_A2A2B1B2: alelles_A2A2B1B2,
            alelles_A2A2B2B2: alelles_A2A2B2B2
        },
        success: function(data, textStatus, jqXHR) {
        
        },
        error: function(jqXHR, textStatus, errorThrown) {
            alert("Se ha producido un error: " + errorThrown);
        }
    });*/
});

$("#ctoolView").on("click", "#F2Dominance-twoloci", (evt) => {
    

    let alelles_AB = $("#Alelles-AB-F2Dominance").val();
    let alelles_aB = $("#Alelles-aB-F2Dominance").val();
    let alelles_Ab = $("#Alelles-Ab-F2Dominance").val();
    let alelles_ab = $("#Alelles-ab-F2Dominance").val();
        
        
    alert(alelles_AB + " " + alelles_aB + " " + alelles_Ab + " " + alelles_ab);
    /*$.ajax({
        type: "GET",
        //url: "http://ingenias.fdi.ucm.es:60070/api/v1/problems",
        url: "http://raspberrypablo.ddns.net:8080/api/v1/twoloci/F2Dominance",
        beforeSend: function(request) {
            request.setRequestHeader("Access-Control-Allow-Origin", "*");
        },
        contentType: "application/json",
        data: { 
            alelles_AB: alelles_AB, 
            alelles_aB: alelles_aB, 
            alelles_Ab: alelles_Ab, 
            alelles_ab: alelles_ab
        },
        success: function(data, textStatus, jqXHR) {
        
        },
        error: function(jqXHR, textStatus, errorThrown) {
            alert("Se ha producido un error: " + errorThrown);
        }
    });*/
});

$("#ctoolView").on("click", "#F2TestcrossDominance-twoloci", (evt) => {
    
    let alelles_AB = $("#Alelles-AB-F2TestcrossDominance").val();
    let alelles_aB = $("#Alelles-aB-F2TestcrossDominance").val();
    let alelles_Ab = $("#Alelles-Ab-F2TestcrossDominance").val();
    let alelles_ab = $("#Alelles-ab-F2TestcrossDominance").val();
        
        
    alert(alelles_AB + " " + alelles_aB + " " + alelles_Ab + " " + alelles_ab);
    /*$.ajax({
        type: "GET",
        //url: "http://ingenias.fdi.ucm.es:60070/api/v1/problems",
        url: "http://raspberrypablo.ddns.net:8080/api/v1/twoloci/F2Codominance",
        beforeSend: function(request) {
            request.setRequestHeader("Access-Control-Allow-Origin", "*");
        },
        contentType: "application/json",
        data: { 
            alelles_AB: alelles_AB, 
            alelles_aB: alelles_aB, 
            alelles_Ab: alelles_Ab, 
            alelles_ab: alelles_ab
        },
        success: function(data, textStatus, jqXHR) {
        
        },
        error: function(jqXHR, textStatus, errorThrown) {
            alert("Se ha producido un error: " + errorThrown);
        }
    });*/
});

$("#ctoolView").on("click", "#F2TestcrossDom2_1-twoloci", (evt) => {
    
    let alelles_A1A1B = $("#Alelles-A1A1B-F2TestcrossDom2_1").val();
    let alelles_A1A2B = $("#Alelles-A1A2B-F2TestcrossDom2_1").val();
    let alelles_A2A2B = $("#Alelles-A2A2B-F2TestcrossDom2_1").val();
    let alelles_A1A1b = $("#Alelles-A1A1b-F2TestcrossDom2_1").val();
    let alelles_A1A2b = $("#Alelles-A1A2b-F2TestcrossDom2_1").val();
    let alelles_A2A2b = $("#Alelles-A2A2b-F2TestcrossDom2_1").val();
        
    alert(alelles_A1A1B + " " + alelles_A1A2B + " " + alelles_A2A2B + " " + alelles_A1A1b + " " + alelles_A1A2b + " " + alelles_A2A2b);
    /*$.ajax({
        type: "GET",
        //url: "http://ingenias.fdi.ucm.es:60070/api/v1/problems",
        url: "http://raspberrypablo.ddns.net:8080/api/v1/twoloci/F2Codominance",
        beforeSend: function(request) {
            request.setRequestHeader("Access-Control-Allow-Origin", "*");
        },
        contentType: "application/json",
        data: { 
            alelles_A1A1B: alelles_A1A1B, 
            alelles_A1A2B: alelles_A1A2B, 
            alelles_A2A2B: alelles_A2A2B, 
            alelles_A1A1b: alelles_A1A1b,
            alelles_A1A2b: alelles_A1A2b,
            alelles_A2A2b: alelles_A2A2b
        },
        success: function(data, textStatus, jqXHR) {
        
        },
        error: function(jqXHR, textStatus, errorThrown) {
            alert("Se ha producido un error: " + errorThrown);
        }
    });*/
});

$("#ctoolView").on("click", "#F2TestcrossDom2_2-twoloci", (evt) => {
    
    let alelles_A1A3B = $("#Alelles-A1A3B-F2TestcrossDom2_2").val();
    let alelles_A1A3b = $("#Alelles-A1A3b-F2TestcrossDom2_2").val();
    let alelles_A1A4B = $("#Alelles-A1A4B-F2TestcrossDom2_2").val();
    let alelles_A1A4b = $("#Alelles-A1A4b-F2TestcrossDom2_2").val();
    let alelles_A2A3B = $("#Alelles-A2A3B-F2TestcrossDom2_2").val();
    let alelles_A2A3b = $("#Alelles-A2A3b-F2TestcrossDom2_2").val();
    let alelles_A2A4B = $("#Alelles-A2A4B-F2TestcrossDom2_2").val();
    let alelles_A2A4b = $("#Alelles-A2A4b-F2TestcrossDom2_2").val();
        
    alert(alelles_A1A3B + " " + alelles_A1A3b + " " + alelles_A1A4B + " " + alelles_A1A4b + " " + alelles_A2A3B + " " + alelles_A2A3b + " " + alelles_A2A4B + " " + alelles_A2A4b);
    /*$.ajax({
        type: "GET",
        //url: "http://ingenias.fdi.ucm.es:60070/api/v1/problems",
        url: "http://raspberrypablo.ddns.net:8080/api/v1/twoloci/F2Codominance",
        beforeSend: function(request) {
            request.setRequestHeader("Access-Control-Allow-Origin", "*");
        },
        contentType: "application/json",
        data: { 
            alelles_A1A3B: alelles_A1A3B, 
            alelles_A1A3b: alelles_A1A3b, 
            alelles_A1A4B: alelles_A1A4B, 
            alelles_A1A4b: alelles_A1A4b,
            alelles_A2A3B: alelles_A2A3B,
            alelles_A2A3b: alelles_A2A3b,
            alelles_A2A4B: alelles_A2A4B,
            alelles_A2A4b: alelles_A2A4b
        },
        success: function(data, textStatus, jqXHR) {
        
        },
        error: function(jqXHR, textStatus, errorThrown) {
            alert("Se ha producido un error: " + errorThrown);
        }
    });*/
});

$("#ctoolView").on("click", "#Testcross-twoloci", (evt) => {
    
    let alelles_AB = $("#Alelles-AB-Testcross").val();
    let alelles_aB = $("#Alelles-aB-Testcross").val();
    let alelles_Ab = $("#Alelles-Ab-Testcross").val();
    let alelles_ab = $("#Alelles-ab-Testcross").val();
        
    alert(alelles_AB + " " + alelles_aB + " " + alelles_Ab + " " + alelles_ab);
    /*$.ajax({
        type: "GET",
        //url: "http://ingenias.fdi.ucm.es:60070/api/v1/problems",
        url: "http://raspberrypablo.ddns.net:8080/api/v1/twoloci/F2Codominance",
        beforeSend: function(request) {
            request.setRequestHeader("Access-Control-Allow-Origin", "*");
        },
        contentType: "application/json",
        data: { 
            alelles_AB: alelles_AB, 
            alelles_aB: alelles_aB, 
            alelles_Ab: alelles_Ab, 
            alelles_ab: alelles_ab
        },
        success: function(data, textStatus, jqXHR) {
        
        },
        error: function(jqXHR, textStatus, errorThrown) {
            alert("Se ha producido un error: " + errorThrown);
        }
    });*/
});


$("#ctoolView").on("click", ".btn-clean", (evt) => {
    //ONE LOCUS

    //Codominance 3
    $("#Alelles-A1A1-Codominance3").val("");
    $("#Alelles-A1A3-Codominance3").val("");
    $("#Alelles-A1A2-Codominance3").val("");
    $("#Alelles-A2A3-Codominance3").val("");
    //Codominance 4
    $("#Alelles-A1A3-Codominance4").val("");
    $("#Alelles-A1A4-Codominance4").val("");
    $("#Alelles-A2A3-Codominance4").val("");
    $("#Alelles-A2A4-Codominance4").val("");
    //F2 codominance
    $("#Alelles-A1A1-F2Codominance").val("");
    $("#Alelles-A1A2-F2Codominance").val("");
    $("#Alelles-A2A2-F2Codominance").val("");
    //F2 dominance
    $("#Alelles-A-F2Dominance").val("");
    $("#Alelles-a-F2Dominance").val("");
    //Testcross
    $("#Alelles-A-Testcross").val("");
    $("#Alelles-a-Testcross").val("");

    //TWO LOCI

    //F2 Codom2
    $("#Alelles-A1A1B-F2Codom2").val("");
    $("#Alelles-A1A2B-F2Codom2").val("");
    $("#Alelles-A2A2B-F2Codom2").val("");
    $("#Alelles-A1A1b-F2Codom2").val("");
    $("#Alelles-A1A2b-F2Codom2").val("");
    $("#Alelles-A2A2b-F2Codom2").val("");
    ////F2 Codom4
    $("#Alelles-A1A3B-F2Codom4").val("");
    $("#Alelles-A1A3b-F2Codom4").val("");
    $("#Alelles-A1A4B-F2Codom4").val("");
    $("#Alelles-A1A4b-F2Codom4").val("");
    $("#Alelles-A2A3B-F2Codom4").val("");
    $("#Alelles-A2A3b-F2Codom4").val("");
    $("#Alelles-A2A4B-F2Codom4").val("");
    $("#Alelles-A2A4b-F2Codom4").val("");
    //F2 Codominance
    $("#Alelles-A1A1B1B1-F2Codominance").val("");
    $("#Alelles-A1A1B1B2-F2Codominance").val("");
    $("#Alelles-A1A1B2B2-F2Codominance").val("");
    $("#Alelles-A1A2B1B1-F2Codominance").val("");
    $("#Alelles-A1A2B1B2-F2Codominance").val("");
    $("#Alelles-A1A2B2B2-F2Codominance").val("");
    $("#Alelles-A2A2B1B1-F2Codominance").val("");
    $("#Alelles-A2A2B1B2-F2Codominance").val("");
    $("#Alelles-A2A2B2B2-F2Codominance").val("");
    //F2 Dominance
    $("#Alelles-AB-F2Dominance").val("");
    $("#Alelles-aB-F2Dominance").val("");
    $("#Alelles-Ab-F2Dominance").val("");
    $("#Alelles-ab-F2Dominance").val("");
    //F2 Testcross Dom
    $("#Alelles-AB-F2TestcrossDominance").val("");
    $("#Alelles-aB-F2TestcrossDominance").val("");
    $("#Alelles-Ab-F2TestcrossDominance").val("");
    $("#Alelles-ab-F2TestcrossDominance").val("");
    //F2 Testcross Dom 2_1
    $("#Alelles-A1A1B-F2TestcrossDom2_1").val("");
    $("#Alelles-A1A2B-F2TestcrossDom2_1").val("");
    $("#Alelles-A2A2B-F2TestcrossDom2_1").val("");
    $("#Alelles-A1A1b-F2TestcrossDom2_1").val("");
    $("#Alelles-A1A2b-F2TestcrossDom2_1").val("");
    $("#Alelles-A2A2b-F2TestcrossDom2_1").val("");
    //F2 Testcross Dom 2_2
    $("#Alelles-A1A3B-F2TestcrossDom2_2").val("");
    $("#Alelles-A1A3b-F2TestcrossDom2_2").val("");
    $("#Alelles-A1A4B-F2TestcrossDom2_2").val("");
    $("#Alelles-A1A4b-F2TestcrossDom2_2").val("");
    $("#Alelles-A2A3B-F2TestcrossDom2_2").val("");
    $("#Alelles-A2A3b-F2TestcrossDom2_2").val("");
    $("#Alelles-A2A4B-F2TestcrossDom2_2").val("");
    $("#Alelles-A2A4b-F2TestcrossDom2_2").val("");
    //Testcross
    $("#Alelles-AB-Testcross").val("");
    $("#Alelles-aB-Testcross").val("");
    $("#Alelles-Ab-Testcross").val("");
    $("#Alelles-ab-Testcross").val("");

    //LINKAGE

    //F2 Codominance
    $("#Alelles-A1A1B1B1-F2Codominance-linkage").val("");
    $("#Alelles-A1A1B1B2-F2Codominance-linkage").val("");
    $("#Alelles-A1A1B2B2-F2Codominance-linkage").val("");
    $("#Alelles-A1A2B1B1-F2Codominance-linkage").val("");
    $("#Alelles-A1A2B1B2-F2Codominance-linkage").val("");
    $("#Alelles-A1A2B2B2-F2Codominance-linkage").val("");
    $("#Alelles-A2A2B1B1-F2Codominance-linkage").val("");
    $("#Alelles-A2A2B1B2-F2Codominance-linkage").val("");
    $("#Alelles-A2A2B2B2-F2Codominance-linkage").val("");
    //F2 Codominance DM
    $("#Alelles-F2CodominanceDM-RecFreq").val("");
    $("#Alelles-F2CodominanceDM-ToS").val("");
    //F2 Dominance
    $("#Alelles-AB-F2Dominance-linkage").val("");
    $("#Alelles-aB-F2Dominance-linkage").val("");
    $("#Alelles-Ab-F2Dominance-linkage").val("");
    $("#Alelles-ab-F2Dominance-linkage").val("");
    //F2 Dominance DM
    $("#Alelles-F2DominanceDM-RecFreq").val("");
    $("#Alelles-F2DominanceDM-ToS").val("");
    //Testcross
    $("#Alelles-AB-Testcross-linkage").val("");
    $("#Alelles-aB-Testcross-linkage").val("");
    $("#Alelles-Ab-Testcross-linkage").val("");
    $("#Alelles-ab-Testcross-linkage").val("");
    //Testcross 3 loci
    $("#Alelles-Testcross3Loci-ABC").val("");
    $("#Alelles-Testcross3Loci-abc").val("");
    $("#Alelles-Testcross3Loci-ABc").val("");
    $("#Alelles-Testcross3Loci-abC").val("");
    $("#Alelles-Testcross3Loci-aBC").val("");
    $("#Alelles-Testcross3Loci-Abc").val("");
    $("#Alelles-Testcross3Loci-AbC").val("");
    $("#Alelles-Testcross3Loci-aBc").val("");
    //Testcross 3 loci DM
    $("#Alelles-Testcross3LociDM-RecFreqR1").val("");
    $("#Alelles-Testcross3LociDM-RecFreqR2").val("");
    $("#Alelles-Testcross3LociDM-CoC").val("");
    $("#Alelles-Testcross3LociDM-ToS").val("");
    //Testcross DM
    $("#Alelles-TestcrossDM-RecFreq").val("");
    $("#Alelles-TestcrossDM-ToS").val("");

    //EPISTASIAS

    //Double dominant
    $("#Alelles-ABAbaB-DoubleDominant").val("");
    $("#Alelles-ab-DoubleDominant").val("");
    //Double dominant recessive
    $("#Alelles-ABAbab-DoubleDominantRecesive").val("");
    $("#Alelles-aB-DoubleDominantRecesive").val("");
    //Double recessive
    $("#Alelles-AB-DoubleRecesive").val("");
    $("#Alelles-AbaBab-DoubleRecesive").val("");
    //Segregation 961
    $("#Alelles-AB-Segregation961").val("");
    $("#Alelles-AbaB-Segregation961").val("");
    $("#Alelles-ab-Segregation961").val("");
    //Segregation 1033
    $("#Alelles-ABab-Segregation1033").val("");
    $("#Alelles-Ab-Segregation1033").val("");
    $("#Alelles-aB-Segregation1033").val("");
    //Segregation 6334
    $("#Alelles-AaB-Segregation6334").val("");
    $("#Alelles-AAB-Segregation6334").val("");
    $("#Alelles-Ab-Segregation6334").val("");
    $("#Alelles-aBab-Segregation6334").val("");
    //Single Dominant
    $("#Alelles-ABAb-SingleDominant").val("");
    $("#Alelles-aB-SingleDominant").val("");
    $("#Alelles-ab-SingleDominant").val("");
    //Single Recessive
    $("#Alelles-AB-SingleRecesive").val("");
    $("#Alelles-Ab-SingleRecesive").val("");
    $("#Alelles-aBab-SingleRecesive").val("");
    //Without modification
    $("#Alelles-AB-WhithoutModification").val("");
    $("#Alelles-Ab-WhithoutModification").val("");
    $("#Alelles-aB-WhithoutModification").val("");
    $("#Alelles-ab-WhithoutModification").val("");

    //POLYHYBRID

    //Polyhybrid
    $("#Data-n-polyhybrid").val("");
    $("#Data-T-polyhybrid").val("");
    $("#Data-h-polyhybrid").val("");
    $("#Data-R-polyhybrid").val("");
    $("#Data-d-polyhybrid").val("");
    $("#Data-D-polyhybrid").val("");
    $("#Data-r-polyhybrid").val("");
    //Multiples alelles
    $("#locus1-multiplesAlleles").val("");
    $("#locus2-multiplesAlleles").val("");
    $("#locus3-multiplesAlleles").val("");
    $("#locus4-multiplesAlleles").val("");
    $("#locus5-multiplesAlleles").val("");
});