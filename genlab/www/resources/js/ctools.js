/*$("#ctoolView").on("click", ".btn-calculate", (evt) => {
    let h = $("#Alleles-A-Testcross").val();
    $("#total-Testcross").text(34);
    console.log("Pulsado");
    alert("Hola! Has metido " + h);
});*/

//ONE LOCUS

$("#ctoolView").on("click", "#testcross-onelocus", (evt) => {
    let alleles_A = $("#Alleles-A-Testcross").val();
    let alleles_a = $("#Alleles-a-Testcross").val();

    alert(alleles_A + " " + alleles_a);
    /*$.ajax({
        type: "GET",
        //url: "http://ingenias.fdi.ucm.es:60070/api/v1/problems",
        url: "http://raspberrypablo.ddns.net:8080/api/v1/onelocus/F2Dominance",
        beforeSend: function(request) {
            request.setRequestHeader("Access-Control-Allow-Origin", "*");
        },
        contentType: "application/json",
        data: { alleles_A: alleles_A, alleles_a: alleles_a },
        success: function(data, textStatus, jqXHR) {

        },
        error: function(jqXHR, textStatus, errorThrown) {
            alert("Se ha producido un error: " + errorThrown);
        }
    });*/
});

$("#ctoolView").on("click", "#F2Dominance-onelocus", (evt) => {
    let alleles_A = $("#Alleles-A-F2Dominance").val();
    let alleles_a = $("#Alleles-a-F2Dominance").val();

    alert(alleles_A + " y el otro " + alleles_a);
    /*$.ajax({
        type: "GET",
        //url: "http://ingenias.fdi.ucm.es:60070/api/v1/problems",
        url: "http://raspberrypablo.ddns.net:8080/api/v1/onelocus/testcross",
        beforeSend: function(request) {
            request.setRequestHeader("Access-Control-Allow-Origin", "*");
        },
        contentType: "application/json",
        data: { alleles_A: alleles_A, alleles_a: alleles_a },
        success: function(data, textStatus, jqXHR) {

        },
        error: function(jqXHR, textStatus, errorThrown) {
            alert("Se ha producido un error: " + errorThrown);
        }
    });*/
});

$("#ctoolView").on("click", "#F2Codominance-onelocus", (evt) => {
    let alleles_A1A1 = $("#Alleles-A1A1-F2Codominance").val();
    let alleles_A1A2 = $("#Alleles-A1A2-F2Codominance").val();
    let alleles_A2A2 = $("#Alleles-A2A2-F2Codominance").val();

    alert(alleles_A1A1 + " " + alleles_A1A2 + " " + alleles_A2A2);
    /*$.ajax({
        type: "GET",
        //url: "http://ingenias.fdi.ucm.es:60070/api/v1/problems",
        url: "http://raspberrypablo.ddns.net:8080/api/v1/onelocus/F2Codominance",
        beforeSend: function(request) {
            request.setRequestHeader("Access-Control-Allow-Origin", "*");
        },
        contentType: "application/json",
        data: { alleles_A1A1: alleles_A1A1, alleles_A1A2: alleles_A1A2, alleles_A2A2: alleles_A2A2 },
        success: function(data, textStatus, jqXHR) {

        },
        error: function(jqXHR, textStatus, errorThrown) {
            alert("Se ha producido un error: " + errorThrown);
        }
    });*/
});

$("#ctoolView").on("click", "#Codominance3-onelocus", (evt) => {
    let alleles_A1A1 = $("#Alleles-A1A1-Codominance3").val();
    let alleles_A1A3 = $("#Alleles-A1A3-Codominance3").val();
    let alleles_A1A2 = $("#Alleles-A1A2-Codominance3").val();
    let alleles_A2A3 = $("#Alleles-A2A3-Codominance3").val();

    alert(alleles_A1A1 + " " + alleles_A1A3 + " " + alleles_A1A2 + " " + alleles_A2A3);
    /*$.ajax({
        type: "GET",
        //url: "http://ingenias.fdi.ucm.es:60070/api/v1/problems",
        url: "http://raspberrypablo.ddns.net:8080/api/v1/onelocus/Codominance3",
        beforeSend: function(request) {
            request.setRequestHeader("Access-Control-Allow-Origin", "*");
        },
        contentType: "application/json",
        data: { alleles_A1A1: alleles_A1A1, alleles_A1A3: alleles_A1A3, alleles_A1A2: alleles_A1A2, alleles_A2A3: alleles_A2A3 },
        success: function(data, textStatus, jqXHR) {

        },
        error: function(jqXHR, textStatus, errorThrown) {
            alert("Se ha producido un error: " + errorThrown);
        }
    });*/
});

$("#ctoolView").on("click", "#Codominance4-onelocus", (evt) => {
    let alleles_A1A3 = $("#Alleles-A1A3-Codominance4").val();
    let alleles_A1A4 = $("#Alleles-A1A4-Codominance4").val();
    let alleles_A2A3 = $("#Alleles-A2A3-Codominance4").val();
    let alleles_A2A4 = $("#Alleles-A2A4-Codominance4").val();


    alert(alleles_A1A3 + " " + alleles_A1A4 + " " + alleles_A2A3 + " " + alleles_A2A4);
    /*$.ajax({
        type: "GET",
        //url: "http://ingenias.fdi.ucm.es:60070/api/v1/problems",
        url: "http://raspberrypablo.ddns.net:8080/api/v1/onelocus/Codominance4",
        beforeSend: function(request) {
            request.setRequestHeader("Access-Control-Allow-Origin", "*");
        },
        contentType: "application/json",
        data: { alleles_A1A3: alleles_A1A3, alleles_A1A4: alleles_A1A4, alleles_A2A3: alleles_A2A3, alleles_A2A4: alleles_A2A4 },
        success: function(data, textStatus, jqXHR) {

        },
        error: function(jqXHR, textStatus, errorThrown) {
            alert("Se ha producido un error: " + errorThrown);
        }
    });*/
});

//TWO LOCI

$("#ctoolView").on("click", "#F2Codom2-twoloci", (evt) => {

    let alleles_A1A1B = $("#Alleles-A1A1B-F2Codom2").val();
    let alleles_A1A2B = $("#Alleles-A1A2B-F2Codom2").val();
    let alleles_A2A2B = $("#Alleles-A2A2B-F2Codom2").val();
    let alleles_A1A1b = $("#Alleles-A1A1b-F2Codom2").val();
    let alleles_A1A2b = $("#Alleles-A1A2b-F2Codom2").val();
    let alleles_A2A2b = $("#Alleles-A2A2b-F2Codom2").val();


    alert(alleles_A1A1B + " " + alleles_A1A2B + " " + alleles_A2A2B + " " + alleles_A1A1b + " " + alleles_A1A2b + " " + alleles_A2A2b);
    /*$.ajax({
        type: "GET",
        //url: "http://ingenias.fdi.ucm.es:60070/api/v1/problems",
        url: "http://raspberrypablo.ddns.net:8080/api/v1/twoloci/F2Codom2",
        beforeSend: function(request) {
            request.setRequestHeader("Access-Control-Allow-Origin", "*");
        },
        contentType: "application/json",
        data: { 
            alleles_A1A1B: alleles_A1A1B, 
            alleles_A1A2B: alleles_A1A2B, 
            alleles_A2A2B: alleles_A2A2B, 
            alleles_A1A1b: alleles_A1A1b,
            alleles_A1A2b: alleles_A1A2b,
            alleles_A2A2b: alleles_A2A2b
        },
        success: function(data, textStatus, jqXHR) {

        },
        error: function(jqXHR, textStatus, errorThrown) {
            alert("Se ha producido un error: " + errorThrown);
        }
    });*/
});

$("#ctoolView").on("click", "#F2Codom4-twoloci", (evt) => {

    let alleles_A1A3B = $("#Alleles-A1A3B-F2Codom4").val();
    let alleles_A1A3b = $("#Alleles-A1A3b-F2Codom4").val();
    let alleles_A1A4B = $("#Alleles-A1A4B-F2Codom4").val();
    let alleles_A1A4b = $("#Alleles-A1A4b-F2Codom4").val();
    let alleles_A2A3B = $("#Alleles-A2A3B-F2Codom4").val();
    let alleles_A2A3b = $("#Alleles-A2A3b-F2Codom4").val();
    let alleles_A2A4B = $("#Alleles-A2A4B-F2Codom4").val();
    let alleles_A2A4b = $("#Alleles-A2A4b-F2Codom4").val();


    alert(alleles_A1A3B + " " + alleles_A1A3b + " " + alleles_A1A4B + " " + alleles_A1A4b + " " + alleles_A2A3B + " " + alleles_A2A3b + " " + alleles_A2A4B + " " + alleles_A2A4b);
    /*$.ajax({
        type: "GET",
        //url: "http://ingenias.fdi.ucm.es:60070/api/v1/problems",
        url: "http://raspberrypablo.ddns.net:8080/api/v1/twoloci/F2Codom4",
        beforeSend: function(request) {
            request.setRequestHeader("Access-Control-Allow-Origin", "*");
        },
        contentType: "application/json",
        data: { 
            alleles_A1A3B: alleles_A1A3B, 
            alleles_A1A3b: alleles_A1A3b, 
            alleles_A1A4B: alleles_A1A4B, 
            alleles_A1A4b: alleles_A1A4b,
            alleles_A2A3B: alleles_A2A3B,
            alleles_A2A3b: alleles_A2A3b,
            alleles_A2A4B: alleles_A2A4B,
            alleles_A2A4b: alleles_A2A4b
        },
        success: function(data, textStatus, jqXHR) {
    
        },
        error: function(jqXHR, textStatus, errorThrown) {
            alert("Se ha producido un error: " + errorThrown);
        }
    });*/
});

$("#ctoolView").on("click", "#F2Codominance-twoloci", (evt) => {

    let alleles_A1A1B1B1 = $("#Alleles-A1A1B1B1-F2Codominance").val();
    let alleles_A1A1B1B2 = $("#Alleles-A1A1B1B2-F2Codominance").val();
    let alleles_A1A1B2B2 = $("#Alleles-A1A1B2B2-F2Codominance").val();
    let alleles_A1A2B1B1 = $("#Alleles-A1A2B1B1-F2Codominance").val();
    let alleles_A1A2B1B2 = $("#Alleles-A1A2B1B2-F2Codominance").val();
    let alleles_A1A2B2B2 = $("#Alleles-A1A2B2B2-F2Codominance").val();
    let alleles_A2A2B1B1 = $("#Alleles-A2A2B1B1-F2Codominance").val();
    let alleles_A2A2B1B2 = $("#Alleles-A2A2B1B2-F2Codominance").val();
    let alleles_A2A2B2B2 = $("#Alleles-A2A2B2B2-F2Codominance").val();


    alert(alleles_A1A1B1B1 + " " + alleles_A1A1B1B2 + " " + alleles_A1A1B2B2 + " " + alleles_A1A2B1B1 + " " + alleles_A1A2B1B2 + " " + alleles_A1A2B2B2 + " " + alleles_A2A2B1B1 + " " + alleles_A2A2B1B2 + " " + alleles_A2A2B2B2);
    /*$.ajax({
        type: "GET",
        //url: "http://ingenias.fdi.ucm.es:60070/api/v1/problems",
        url: "http://raspberrypablo.ddns.net:8080/api/v1/twoloci/F2Codominance",
        beforeSend: function(request) {
            request.setRequestHeader("Access-Control-Allow-Origin", "*");
        },
        contentType: "application/json",
        data: { 
            alleles_A1A1B1B1: alleles_A1A1B1B1, 
            alleles_A1A1B1B2: alleles_A1A1B1B2, 
            alleles_A1A1B2B2: alleles_A1A1B2B2, 
            alleles_A1A2B1B1: alleles_A1A2B1B1,
            alleles_A1A2B1B2: alleles_A1A2B1B2,
            alleles_A1A2B2B2: alleles_A1A2B2B2,
            alleles_A2A2B1B1: alleles_A2A2B1B1,
            alleles_A2A2B1B2: alleles_A2A2B1B2,
            alleles_A2A2B2B2: alleles_A2A2B2B2
        },
        success: function(data, textStatus, jqXHR) {
        
        },
        error: function(jqXHR, textStatus, errorThrown) {
            alert("Se ha producido un error: " + errorThrown);
        }
    });*/
});

$("#ctoolView").on("click", "#F2Dominance-twoloci", (evt) => {


    let alleles_AB = $("#Alleles-AB-F2Dominance").val();
    let alleles_aB = $("#Alleles-aB-F2Dominance").val();
    let alleles_Ab = $("#Alleles-Ab-F2Dominance").val();
    let alleles_ab = $("#Alleles-ab-F2Dominance").val();


    alert(alleles_AB + " " + alleles_aB + " " + alleles_Ab + " " + alleles_ab);
    /*$.ajax({
        type: "GET",
        //url: "http://ingenias.fdi.ucm.es:60070/api/v1/problems",
        url: "http://raspberrypablo.ddns.net:8080/api/v1/twoloci/F2Dominance",
        beforeSend: function(request) {
            request.setRequestHeader("Access-Control-Allow-Origin", "*");
        },
        contentType: "application/json",
        data: { 
            alleles_AB: alleles_AB, 
            alleles_aB: alleles_aB, 
            alleles_Ab: alleles_Ab, 
            alleles_ab: alleles_ab
        },
        success: function(data, textStatus, jqXHR) {
        
        },
        error: function(jqXHR, textStatus, errorThrown) {
            alert("Se ha producido un error: " + errorThrown);
        }
    });*/
});

$("#ctoolView").on("click", "#F2TestcrossDominance-twoloci", (evt) => {

    let alleles_AB = $("#Alleles-AB-F2TestcrossDominance").val();
    let alleles_aB = $("#Alleles-aB-F2TestcrossDominance").val();
    let alleles_Ab = $("#Alleles-Ab-F2TestcrossDominance").val();
    let alleles_ab = $("#Alleles-ab-F2TestcrossDominance").val();


    alert(alleles_AB + " " + alleles_aB + " " + alleles_Ab + " " + alleles_ab);
    /*$.ajax({
        type: "GET",
        //url: "http://ingenias.fdi.ucm.es:60070/api/v1/problems",
        url: "http://raspberrypablo.ddns.net:8080/api/v1/twoloci/F2Codominance",
        beforeSend: function(request) {
            request.setRequestHeader("Access-Control-Allow-Origin", "*");
        },
        contentType: "application/json",
        data: { 
            alleles_AB: alleles_AB, 
            alleles_aB: alleles_aB, 
            alleles_Ab: alleles_Ab, 
            alleles_ab: alleles_ab
        },
        success: function(data, textStatus, jqXHR) {
        
        },
        error: function(jqXHR, textStatus, errorThrown) {
            alert("Se ha producido un error: " + errorThrown);
        }
    });*/
});

$("#ctoolView").on("click", "#F2TestcrossDom2_1-twoloci", (evt) => {

    let alleles_A1A1B = $("#Alleles-A1A1B-F2TestcrossDom2_1").val();
    let alleles_A1A2B = $("#Alleles-A1A2B-F2TestcrossDom2_1").val();
    let alleles_A2A2B = $("#Alleles-A2A2B-F2TestcrossDom2_1").val();
    let alleles_A1A1b = $("#Alleles-A1A1b-F2TestcrossDom2_1").val();
    let alleles_A1A2b = $("#Alleles-A1A2b-F2TestcrossDom2_1").val();
    let alleles_A2A2b = $("#Alleles-A2A2b-F2TestcrossDom2_1").val();

    alert(alleles_A1A1B + " " + alleles_A1A2B + " " + alleles_A2A2B + " " + alleles_A1A1b + " " + alleles_A1A2b + " " + alleles_A2A2b);
    /*$.ajax({
        type: "GET",
        //url: "http://ingenias.fdi.ucm.es:60070/api/v1/problems",
        url: "http://raspberrypablo.ddns.net:8080/api/v1/twoloci/F2Codominance",
        beforeSend: function(request) {
            request.setRequestHeader("Access-Control-Allow-Origin", "*");
        },
        contentType: "application/json",
        data: { 
            alleles_A1A1B: alleles_A1A1B, 
            alleles_A1A2B: alleles_A1A2B, 
            alleles_A2A2B: alleles_A2A2B, 
            alleles_A1A1b: alleles_A1A1b,
            alleles_A1A2b: alleles_A1A2b,
            alleles_A2A2b: alleles_A2A2b
        },
        success: function(data, textStatus, jqXHR) {
        
        },
        error: function(jqXHR, textStatus, errorThrown) {
            alert("Se ha producido un error: " + errorThrown);
        }
    });*/
});

$("#ctoolView").on("click", "#F2TestcrossDom2_2-twoloci", (evt) => {

    let alleles_A1A3B = $("#Alleles-A1A3B-F2TestcrossDom2_2").val();
    let alleles_A1A3b = $("#Alleles-A1A3b-F2TestcrossDom2_2").val();
    let alleles_A1A4B = $("#Alleles-A1A4B-F2TestcrossDom2_2").val();
    let alleles_A1A4b = $("#Alleles-A1A4b-F2TestcrossDom2_2").val();
    let alleles_A2A3B = $("#Alleles-A2A3B-F2TestcrossDom2_2").val();
    let alleles_A2A3b = $("#Alleles-A2A3b-F2TestcrossDom2_2").val();
    let alleles_A2A4B = $("#Alleles-A2A4B-F2TestcrossDom2_2").val();
    let alleles_A2A4b = $("#Alleles-A2A4b-F2TestcrossDom2_2").val();

    alert(alleles_A1A3B + " " + alleles_A1A3b + " " + alleles_A1A4B + " " + alleles_A1A4b + " " + alleles_A2A3B + " " + alleles_A2A3b + " " + alleles_A2A4B + " " + alleles_A2A4b);
    /*$.ajax({
        type: "GET",
        //url: "http://ingenias.fdi.ucm.es:60070/api/v1/problems",
        url: "http://raspberrypablo.ddns.net:8080/api/v1/twoloci/F2Codominance",
        beforeSend: function(request) {
            request.setRequestHeader("Access-Control-Allow-Origin", "*");
        },
        contentType: "application/json",
        data: { 
            alleles_A1A3B: alleles_A1A3B, 
            alleles_A1A3b: alleles_A1A3b, 
            alleles_A1A4B: alleles_A1A4B, 
            alleles_A1A4b: alleles_A1A4b,
            alleles_A2A3B: alleles_A2A3B,
            alleles_A2A3b: alleles_A2A3b,
            alleles_A2A4B: alleles_A2A4B,
            alleles_A2A4b: alleles_A2A4b
        },
        success: function(data, textStatus, jqXHR) {
        
        },
        error: function(jqXHR, textStatus, errorThrown) {
            alert("Se ha producido un error: " + errorThrown);
        }
    });*/
});

$("#ctoolView").on("click", "#Testcross-twoloci", (evt) => {

    let alleles_AB = $("#Alleles-AB-Testcross").val();
    let alleles_aB = $("#Alleles-aB-Testcross").val();
    let alleles_Ab = $("#Alleles-Ab-Testcross").val();
    let alleles_ab = $("#Alleles-ab-Testcross").val();

    alert(alleles_AB + " " + alleles_aB + " " + alleles_Ab + " " + alleles_ab);
    /*$.ajax({
        type: "GET",
        //url: "http://ingenias.fdi.ucm.es:60070/api/v1/problems",
        url: "http://raspberrypablo.ddns.net:8080/api/v1/twoloci/F2Codominance",
        beforeSend: function(request) {
            request.setRequestHeader("Access-Control-Allow-Origin", "*");
        },
        contentType: "application/json",
        data: { 
            alleles_AB: alleles_AB, 
            alleles_aB: alleles_aB, 
            alleles_Ab: alleles_Ab, 
            alleles_ab: alleles_ab
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
    $("#Alleles-A1A1-Codominance3").val("");
    $("#Alleles-A1A3-Codominance3").val("");
    $("#Alleles-A1A2-Codominance3").val("");
    $("#Alleles-A2A3-Codominance3").val("");
    //Codominance 4
    $("#Alleles-A1A3-Codominance4").val("");
    $("#Alleles-A1A4-Codominance4").val("");
    $("#Alleles-A2A3-Codominance4").val("");
    $("#Alleles-A2A4-Codominance4").val("");
    //F2 codominance
    $("#Alleles-A1A1-F2Codominance").val("");
    $("#Alleles-A1A2-F2Codominance").val("");
    $("#Alleles-A2A2-F2Codominance").val("");
    //F2 dominance
    $("#Alleles-A-F2Dominance").val("");
    $("#Alleles-a-F2Dominance").val("");
    //Testcross
    $("#Alleles-A-Testcross").val("");
    $("#Alleles-a-Testcross").val("");

    //TWO LOCI

    //F2 Codom2
    $("#Alleles-A1A1B-F2Codom2").val("");
    $("#Alleles-A1A2B-F2Codom2").val("");
    $("#Alleles-A2A2B-F2Codom2").val("");
    $("#Alleles-A1A1b-F2Codom2").val("");
    $("#Alleles-A1A2b-F2Codom2").val("");
    $("#Alleles-A2A2b-F2Codom2").val("");
    ////F2 Codom4
    $("#Alleles-A1A3B-F2Codom4").val("");
    $("#Alleles-A1A3b-F2Codom4").val("");
    $("#Alleles-A1A4B-F2Codom4").val("");
    $("#Alleles-A1A4b-F2Codom4").val("");
    $("#Alleles-A2A3B-F2Codom4").val("");
    $("#Alleles-A2A3b-F2Codom4").val("");
    $("#Alleles-A2A4B-F2Codom4").val("");
    $("#Alleles-A2A4b-F2Codom4").val("");
    //F2 Codominance
    $("#Alleles-A1A1B1B1-F2Codominance").val("");
    $("#Alleles-A1A1B1B2-F2Codominance").val("");
    $("#Alleles-A1A1B2B2-F2Codominance").val("");
    $("#Alleles-A1A2B1B1-F2Codominance").val("");
    $("#Alleles-A1A2B1B2-F2Codominance").val("");
    $("#Alleles-A1A2B2B2-F2Codominance").val("");
    $("#Alleles-A2A2B1B1-F2Codominance").val("");
    $("#Alleles-A2A2B1B2-F2Codominance").val("");
    $("#Alleles-A2A2B2B2-F2Codominance").val("");
    //F2 Dominance
    $("#Alleles-AB-F2Dominance").val("");
    $("#Alleles-aB-F2Dominance").val("");
    $("#Alleles-Ab-F2Dominance").val("");
    $("#Alleles-ab-F2Dominance").val("");
    //F2 Testcross Dom
    $("#Alleles-AB-F2TestcrossDominance").val("");
    $("#Alleles-aB-F2TestcrossDominance").val("");
    $("#Alleles-Ab-F2TestcrossDominance").val("");
    $("#Alleles-ab-F2TestcrossDominance").val("");
    //F2 Testcross Dom 2_1
    $("#Alleles-A1A1B-F2TestcrossDom2_1").val("");
    $("#Alleles-A1A2B-F2TestcrossDom2_1").val("");
    $("#Alleles-A2A2B-F2TestcrossDom2_1").val("");
    $("#Alleles-A1A1b-F2TestcrossDom2_1").val("");
    $("#Alleles-A1A2b-F2TestcrossDom2_1").val("");
    $("#Alleles-A2A2b-F2TestcrossDom2_1").val("");
    //F2 Testcross Dom 2_2
    $("#Alleles-A1A3B-F2TestcrossDom2_2").val("");
    $("#Alleles-A1A3b-F2TestcrossDom2_2").val("");
    $("#Alleles-A1A4B-F2TestcrossDom2_2").val("");
    $("#Alleles-A1A4b-F2TestcrossDom2_2").val("");
    $("#Alleles-A2A3B-F2TestcrossDom2_2").val("");
    $("#Alleles-A2A3b-F2TestcrossDom2_2").val("");
    $("#Alleles-A2A4B-F2TestcrossDom2_2").val("");
    $("#Alleles-A2A4b-F2TestcrossDom2_2").val("");
    //Testcross
    $("#Alleles-AB-Testcross").val("");
    $("#Alleles-aB-Testcross").val("");
    $("#Alleles-Ab-Testcross").val("");
    $("#Alleles-ab-Testcross").val("");

    //LINKAGE

    //F2 Codominance
    $("#Alleles-A1A1B1B1-F2Codominance-linkage").val("");
    $("#Alleles-A1A1B1B2-F2Codominance-linkage").val("");
    $("#Alleles-A1A1B2B2-F2Codominance-linkage").val("");
    $("#Alleles-A1A2B1B1-F2Codominance-linkage").val("");
    $("#Alleles-A1A2B1B2-F2Codominance-linkage").val("");
    $("#Alleles-A1A2B2B2-F2Codominance-linkage").val("");
    $("#Alleles-A2A2B1B1-F2Codominance-linkage").val("");
    $("#Alleles-A2A2B1B2-F2Codominance-linkage").val("");
    $("#Alleles-A2A2B2B2-F2Codominance-linkage").val("");
    //F2 Codominance DM
    $("#Alleles-F2CodominanceDM-RecFreq").val("");
    $("#Alleles-F2CodominanceDM-ToS").val("");
    //F2 Dominance
    $("#Alleles-AB-F2Dominance-linkage").val("");
    $("#Alleles-aB-F2Dominance-linkage").val("");
    $("#Alleles-Ab-F2Dominance-linkage").val("");
    $("#Alleles-ab-F2Dominance-linkage").val("");
    //F2 Dominance DM
    $("#Alleles-F2DominanceDM-RecFreq").val("");
    $("#Alleles-F2DominanceDM-ToS").val("");
    //Testcross
    $("#Alleles-AB-Testcross-linkage").val("");
    $("#Alleles-aB-Testcross-linkage").val("");
    $("#Alleles-Ab-Testcross-linkage").val("");
    $("#Alleles-ab-Testcross-linkage").val("");
    //Testcross 3 loci
    $("#Alleles-Testcross3Loci-ABC").val("");
    $("#Alleles-Testcross3Loci-abc").val("");
    $("#Alleles-Testcross3Loci-ABc").val("");
    $("#Alleles-Testcross3Loci-abC").val("");
    $("#Alleles-Testcross3Loci-aBC").val("");
    $("#Alleles-Testcross3Loci-Abc").val("");
    $("#Alleles-Testcross3Loci-AbC").val("");
    $("#Alleles-Testcross3Loci-aBc").val("");
    //Testcross 3 loci DM
    $("#Alleles-Testcross3LociDM-RecFreqR1").val("");
    $("#Alleles-Testcross3LociDM-RecFreqR2").val("");
    $("#Alleles-Testcross3LociDM-CoC").val("");
    $("#Alleles-Testcross3LociDM-ToS").val("");
    //Testcross DM
    $("#Alleles-TestcrossDM-RecFreq").val("");
    $("#Alleles-TestcrossDM-ToS").val("");

    //EPISTASIAS

    //Double dominant
    $("#Alleles-ABAbaB-DoubleDominant").val("");
    $("#Alleles-ab-DoubleDominant").val("");
    //Double dominant recessive
    $("#Alleles-ABAbab-DoubleDominantRecesive").val("");
    $("#Alleles-aB-DoubleDominantRecesive").val("");
    //Double recessive
    $("#Alleles-AB-DoubleRecesive").val("");
    $("#Alleles-AbaBab-DoubleRecesive").val("");
    //Segregation 961
    $("#Alleles-AB-Segregation961").val("");
    $("#Alleles-AbaB-Segregation961").val("");
    $("#Alleles-ab-Segregation961").val("");
    //Segregation 1033
    $("#Alleles-ABab-Segregation1033").val("");
    $("#Alleles-Ab-Segregation1033").val("");
    $("#Alleles-aB-Segregation1033").val("");
    //Segregation 6334
    $("#Alleles-AaB-Segregation6334").val("");
    $("#Alleles-AAB-Segregation6334").val("");
    $("#Alleles-Ab-Segregation6334").val("");
    $("#Alleles-aBab-Segregation6334").val("");
    //Single Dominant
    $("#Alleles-ABAb-SingleDominant").val("");
    $("#Alleles-aB-SingleDominant").val("");
    $("#Alleles-ab-SingleDominant").val("");
    //Single Recessive
    $("#Alleles-AB-SingleRecesive").val("");
    $("#Alleles-Ab-SingleRecesive").val("");
    $("#Alleles-aBab-SingleRecesive").val("");
    //Without modification
    $("#Alleles-AB-WhithoutModification").val("");
    $("#Alleles-Ab-WhithoutModification").val("");
    $("#Alleles-aB-WhithoutModification").val("");
    $("#Alleles-ab-WhithoutModification").val("");

    //POLYHYBRID

    //Polyhybrid
    $("#Data-n-polyhybrid").val("");
    $("#Data-T-polyhybrid").val("");
    $("#Data-h-polyhybrid").val("");
    $("#Data-R-polyhybrid").val("");
    $("#Data-d-polyhybrid").val("");
    $("#Data-D-polyhybrid").val("");
    $("#Data-r-polyhybrid").val("");
    //Multiples alleles
    $("#locus1-multiplesAlleles").val("");
    $("#locus2-multiplesAlleles").val("");
    $("#locus3-multiplesAlleles").val("");
    $("#locus4-multiplesAlleles").val("");
    $("#locus5-multiplesAlleles").val("");
});