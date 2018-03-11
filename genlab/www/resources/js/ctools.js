/*$("#ctoolView").on("click", ".btn-calculate", (evt) => {
    let h = $("#Alleles-A-Testcross").val();
    $("#total-Testcross").text(34);
    console.log("Pulsado");
    alert("Hola! Has metido " + h);
});*/

/////////////////////////////////////////////////////////////////////////////
//ONE LOCUS
/////////////////////////////////////////////////////////////////////////////


$("#ctoolView").on("click", "#testcross-onelocus", (evt) => {
    let alleles_A = Number($("#Alleles-A-Testcross").val());
    let alleles_a = Number($("#Alleles-a-Testcross").val());
    if (isNaN(alleles_A) || isNaN(alleles_a)) {
        alert("Expected values must be numbers");
    } else {
        $.ajax({
            type: "POST",
            //url: "http://ingenias.fdi.ucm.es:60070/api/v1/calctool?CTid=10",
            url: "http://raspberrypablo.ddns.net:8080/api/v1/calctool?CTid=10",
            beforeSend: function(request) {
                request.setRequestHeader("Access-Control-Allow-Origin", "*");
            },
            contentType: "application/json",
            data: JSON.stringify({
                "A": alleles_A,
                "a": alleles_a
            }),
            success: function(data, textStatus, jqXHR) {
                console.log(data);
                if (!data.cleanInputs) {
                    $("#total-Testcross").text(alleles_A + alleles_a);

                    $("#Expected-A-Testcross").text(data.expectedValues.expA.toFixed(1));
                    $("#Expected-a-Testcross").text(data.expectedValues.expa.toFixed(1));

                    $("#value-Testcross").text(data.resultValues.chi.toFixed(2));
                    $("#agree-Testcross").text(data.agree.chi);
                    if (data.result) {
                        $("#result-message-Testcross").text(data.result);
                    }
                    if (data.feedbackMessage) {
                        alert(data.feedbackMessage);
                    }
                } else {
                    alert(data.feedbackMessage);
                }
            },
            error: function(jqXHR, textStatus, errorThrown) {
                alert("Se ha producido un error: " + errorThrown);
            }
        });
    }
});

$("#ctoolView").on("click", "#F2Dominance-onelocus", (evt) => {
    let alleles_A = Number($("#Alleles-A-F2Dominance").val());
    let alleles_a = Number($("#Alleles-a-F2Dominance").val());

    if (isNaN(alleles_A) || isNaN(alleles_a)) {
        alert("Expected values must be numbers");
    } else {
        $.ajax({
            type: "POST",
            //url: "http://ingenias.fdi.ucm.es:60070/api/v1/calctool?CTid=11",
            url: "http://raspberrypablo.ddns.net:8080/api/v1/calctool?CTid=11",
            beforeSend: function(request) {
                request.setRequestHeader("Access-Control-Allow-Origin", "*");
            },
            contentType: "application/json",
            data: JSON.stringify({
                "A": alleles_A,
                "a": alleles_a
            }),
            success: function(data, textStatus, jqXHR) {
                console.log(data);
                if (!data.cleanInputs) {
                    $("#total-F2Dominance").text(alleles_A + alleles_a);

                    $("#Expected-A-F2Dominance").text(data.expectedValues.expA.toFixed(1));
                    $("#Expected-a-F2Dominance").text(data.expectedValues.expa.toFixed(1));

                    $("#value-F2Dominance").text(data.resultValues.chi.toFixed(2));
                    $("#agree-F2Dominance").text(data.agree.chi);
                    if (data.result) {
                        $("#result-message-F2Dominance").text(data.result);
                    }
                    if (data.feedbackMessage) {
                        alert(data.feedbackMessage);
                    }
                } else {
                    alert(data.feedbackMessage);
                }
            },
            error: function(jqXHR, textStatus, errorThrown) {
                alert("Se ha producido un error: " + errorThrown);
            }
        });
    }
});

$("#ctoolView").on("click", "#F2Codominance-onelocus", (evt) => {
    let alleles_A1A1 = Number($("#Alleles-A1A1-F2Codominance").val());
    let alleles_A1A2 = Number($("#Alleles-A1A2-F2Codominance").val());
    let alleles_A2A2 = Number($("#Alleles-A2A2-F2Codominance").val());

    if (isNaN(alleles_A1A1) || isNaN(alleles_A1A2) || isNaN(alleles_A2A2)) {
        alert("Expected values must be numbers");
    } else {
        alert(alleles_A1A1 + " " + alleles_A1A2 + " " + alleles_A2A2);
        $.ajax({
            type: "POST",
            //url: "http://ingenias.fdi.ucm.es:60070/api/v1/calctool?CTid=12",
            url: "http://raspberrypablo.ddns.net:8080/api/v1/calctool?CTid=12",
            beforeSend: function(request) {
                request.setRequestHeader("Access-Control-Allow-Origin", "*");
            },
            contentType: "application/json",
            data: JSON.stringify({
                "A1A1": alleles_A1A1,
                "A1A2": alleles_A1A2,
                "A2A2": alleles_A2A2
            }),
            success: function(data, textStatus, jqXHR) {
                console.log(data);
            },
            error: function(jqXHR, textStatus, errorThrown) {
                alert("Se ha producido un error: " + errorThrown);
            }
        });
    }
});


$("#ctoolView").on("click", "#Codominance3-onelocus", (evt) => {
    let alleles_A1A1 = Number($("#Alleles-A1A1-Codominance3").val());
    let alleles_A1A3 = Number($("#Alleles-A1A3-Codominance3").val());
    let alleles_A1A2 = Number($("#Alleles-A1A2-Codominance3").val());
    let alleles_A2A3 = Number($("#Alleles-A2A3-Codominance3").val());

    if (isNaN(alleles_A1A1) || isNaN(alleles_A1A3) || isNaN(alleles_A1A2) || isNaN(alleles_A2A3)) {
        alert("Expected values must be numbers");
    } else {
        $.ajax({
            type: "POST",
            //url: "http://ingenias.fdi.ucm.es:60070/api/v1/calctool?CTid=13",
            url: "http://raspberrypablo.ddns.net:8080/api/v1/calctool?CTid=13",
            beforeSend: function(request) {
                request.setRequestHeader("Access-Control-Allow-Origin", "*");
            },
            contentType: "application/json",
            data: JSON.stringify({
                "A1A1": alleles_A1A1,
                "A1A3": alleles_A1A3,
                "A1A2": alleles_A1A2,
                "A2A3": alleles_A2A3
            }),
            success: function(data, textStatus, jqXHR) {
                console.log(data);
                if (!data.cleanInputs) {
                    $("#total-Codominance3").text(alleles_A1A1 + alleles_A1A3 + alleles_A1A2 + alleles_A2A3);

                    $("#Expected-A1A1-Codominance3").text(data.expectedValues.expectedA1A1.toFixed(1));
                    $("#Expected-A1A3-Codominance3").text(data.expectedValues.expectedA1A3.toFixed(1));
                    $("#Expected-A1A2-Codominance3").text(data.expectedValues.expectedA1A2.toFixed(1));
                    $("#Expected-A2A3-Codominance3").text(data.expectedValues.expectedA2A3.toFixed(1));

                    $("#value-Codominance3").text(data.resultValues.chi.toFixed(2));
                    $("#agree-Codominance3").text(data.agree.chi);
                    if (data.result) {
                        $("#result-message-Codominance3").text(data.result);
                    }
                }
            },
            error: function(jqXHR, textStatus, errorThrown) {
                alert("Se ha producido un error: " + errorThrown);
            }
        });
    }
});

$("#ctoolView").on("click", "#Codominance4-onelocus", (evt) => {
    let alleles_A1A3 = Number($("#Alleles-A1A3-Codominance4").val());
    let alleles_A1A4 = Number($("#Alleles-A1A4-Codominance4").val());
    let alleles_A2A3 = Number($("#Alleles-A2A3-Codominance4").val());
    let alleles_A2A4 = Number($("#Alleles-A2A4-Codominance4").val());


    if (isNaN(alleles_A1A3) || isNaN(alleles_A1A4) || isNaN(alleles_A2A3) || isNaN(alleles_A2A4)) {
        alert("Expected values must be numbers");
    } else {
        $.ajax({
            type: "POST",
            //url: "http://ingenias.fdi.ucm.es:60070/api/v1/calctool?CTid=14",
            url: "http://raspberrypablo.ddns.net:8080/api/v1/calctool?CTid=14",
            beforeSend: function(request) {
                request.setRequestHeader("Access-Control-Allow-Origin", "*");
            },
            contentType: "application/json",
            data: JSON.stringify({
                "A1A3": alleles_A1A3,
                "A1A4": alleles_A1A4,
                "A2A3": alleles_A2A3,
                "A2A4": alleles_A2A4
            }),
            success: function(data, textStatus, jqXHR) {
                console.log(data);

                if (!data.cleanInputs) {
                    $("#total-Codominance4").text(alleles_A1A3 + alleles_A1A4 + alleles_A2A3 + alleles_A2A4);

                    $("#Expected-A1A3-Codominance4").text(data.expectedValues.expectedA1A3.toFixed(1));
                    $("#Expected-A1A4-Codominance4").text(data.expectedValues.expectedA1A4.toFixed(1));
                    $("#Expected-A2A3-Codominance4").text(data.expectedValues.expectedA2A3.toFixed(1));
                    $("#Expected-A2A4-Codominance4").text(data.expectedValues.expectedA2A4.toFixed(1));

                    $("#value-Codominance4").text(data.resultValues.chi.toFixed(2));
                    $("#agree-Codominance4").text(data.agree.chi);
                    if (data.result) {
                        $("#result-message-Codominance4").text(data.result);
                    }
                } else {
                    alert(data.feedbackMessage);
                }
            },
            error: function(jqXHR, textStatus, errorThrown) {
                alert("Se ha producido un error: " + errorThrown);
            }
        });
    }
});


/////////////////////////////////////////////////////////////////////////////
//TWO LOCI
/////////////////////////////////////////////////////////////////////////////


$("#ctoolView").on("click", "#F2Codom2-twoloci", (evt) => {

    let alleles_A1A1B = Number($("#Alleles-A1A1B-F2Codom2").val());
    let alleles_A1A2B = Number($("#Alleles-A1A2B-F2Codom2").val());
    let alleles_A2A2B = Number($("#Alleles-A2A2B-F2Codom2").val());
    let alleles_A1A1b = Number($("#Alleles-A1A1b-F2Codom2").val());
    let alleles_A1A2b = Number($("#Alleles-A1A2b-F2Codom2").val());
    let alleles_A2A2b = Number($("#Alleles-A2A2b-F2Codom2").val());


    if (isNaN(alleles_A1A1B) || isNaN(alleles_A1A2B) || isNaN(alleles_A2A2B) || isNaN(alleles_A1A1b) || isNaN(alleles_A1A2b) || isNaN(alleles_A2A2b)) {
        alert("Expected values must be numbers");
    } else {
        $.ajax({
            type: "POST",
            //url: "http://ingenias.fdi.ucm.es:60070/api/v1/calctool?CTid=03",
            url: "http://raspberrypablo.ddns.net:8080/api/v1/calctool?CTid=03",
            beforeSend: function(request) {
                request.setRequestHeader("Access-Control-Allow-Origin", "*");
            },
            contentType: "application/json",
            data: JSON.stringify({
                "A1A1B": alleles_A1A1B,
                "A1A2B": alleles_A1A2B,
                "A2A2B": alleles_A2A2B,
                "A1A1b": alleles_A1A1b,
                "A1A2b": alleles_A1A2b,
                "A2A2b": alleles_A2A2b
            }),
            success: function(data, textStatus, jqXHR) {
                console.log(data);
                $("#total-F2Codom2").text(data.observed.total);
                if (data.expectedValues.expectedIndA1B) {
                    $("#ExpectedInd-A1A1B-F2Codom2").text(data.expectedValues.expectedIndA1B.toFixed(1));
                    $("#ExpectedInd-A1A2B-F2Codom2").text(data.expectedValues.expectedIndA1A2B.toFixed(1));
                    $("#ExpectedInd-A2A2B-F2Codom2").text(data.expectedValues.expectedIndA2B.toFixed(1));
                    $("#ExpectedInd-A1A1b-F2Codom2").text(data.expectedValues.expectedIndA1b.toFixed(1));
                    $("#ExpectedInd-A1A2b-F2Codom2").text(data.expectedValues.expectedIndA1A2b.toFixed(1));
                    $("#ExpectedInd-A2A2b-F2Codom2").text(data.expectedValues.expectedIndA2b.toFixed(1));
                }
                if (data.expectedValues.contA1B) {
                    $("#ExpectedCont-A1A1B-F2Codom2").text(data.expectedValues.contA1B.toFixed(1));
                    $("#ExpectedCont-A1A2B-F2Codom2").text(data.expectedValues.contA1A2B.toFixed(1));
                    $("#ExpectedCont-A2A2B-F2Codom2").text(data.expectedValues.contA2B.toFixed(1));
                    $("#ExpectedCont-A1A1b-F2Codom2").text(data.expectedValues.contA1b.toFixed(1));
                    $("#ExpectedCont-A1A2b-F2Codom2").text(data.expectedValues.contA1A2b.toFixed(1));
                    $("#ExpectedCont-A2A2b-F2Codom2").text(data.expectedValues.contA2b.toFixed(1));
                }

                $("#value-A1A1-F2Codom2").text(data.observed.obsA1);
                $("#value-A1A2-F2Codom2").text(data.observed.obsA1A2);
                $("#value-A2A2-F2Codom2").text(data.observed.obsA2);
                $("#value-Total-F2Codom2").text(data.observed.total);

                $("#Expected-A1A1-F2Codom2").text(data.expectedValues.expA1.toFixed(1));
                $("#Expected-A1A2-F2Codom2").text(data.expectedValues.expA1A2.toFixed(1));
                $("#Expected-A2A2-F2Codom2").text(data.expectedValues.expA2.toFixed(1));

                $("#value-B-F2Codom2").text(data.observed.obsB1);
                $("#value-b-F2Codom2").text(data.observed.obsB2);

                $("#Expected-B-F2Codom2").text(data.expectedValues.expB.toFixed(1));
                $("#Expected-b-F2Codom2").text(data.expectedValues.expb.toFixed(1));

                $("#value-F2Codom2-A1A2").text(data.resultValues.chiA1A2.toFixed(2));
                $("#agree-F2Codom2-A1A2").text(data.agree.chiA1A2);
                $("#value-F2Codom2-Bb").text(data.resultValues.chiBb.toFixed(2));
                $("#agree-F2Codom2-Bb").text(data.agree.chiBb);
                if (data.resultValues.chiInd) {
                    $("#value-F2Codom2-Indep").text(data.resultValues.chiInd.toFixed(2));
                    $("#agree-F2Codom2-Indep").text(data.agree.chiInd);
                }
                if (data.resultValues.chiCont) {
                    $("#value-F2Codom2-Cont").text(data.resultValues.chiCont.toFixed(2));
                    $("#agree-F2Codom2-Cont").text(data.agree.chiCont);
                }
                if (data.feedbackMessage) {
                    alert(data.feedbackMessage);
                }
            },
            error: function(jqXHR, textStatus, errorThrown) {
                alert("Se ha producido un error: " + errorThrown);
            }
        });
    }
});

$("#ctoolView").on("click", "#F2Codom4-twoloci", (evt) => {

    let alleles_A1A3B = Number($("#Alleles-A1A3B-F2Codom4").val());
    let alleles_A1A3b = Number($("#Alleles-A1A3b-F2Codom4").val());
    let alleles_A1A4B = Number($("#Alleles-A1A4B-F2Codom4").val());
    let alleles_A1A4b = Number($("#Alleles-A1A4b-F2Codom4").val());
    let alleles_A2A3B = Number($("#Alleles-A2A3B-F2Codom4").val());
    let alleles_A2A3b = Number($("#Alleles-A2A3b-F2Codom4").val());
    let alleles_A2A4B = Number($("#Alleles-A2A4B-F2Codom4").val());
    let alleles_A2A4b = Number($("#Alleles-A2A4b-F2Codom4").val());


    if (isNaN(alleles_A1A3B) || isNaN(alleles_A1A3b) || isNaN(alleles_A1A4B) || isNaN(alleles_A1A4b) || isNaN(alleles_A2A3B) || isNaN(alleles_A2A3b) || isNaN(alleles_A2A4B) || isNaN(alleles_A2A4b)) {
        alert("Expected values must be numbers");
    } else {
        $.ajax({
            type: "POST",
            //url: "http://ingenias.fdi.ucm.es:60070/api/v1/calctool?CTid=04",
            url: "http://raspberrypablo.ddns.net:8080/api/v1/calctool?CTid=04",
            beforeSend: function(request) {
                request.setRequestHeader("Access-Control-Allow-Origin", "*");
            },
            contentType: "application/json",
            data: JSON.stringify({
                "A1A3B": alleles_A1A3B,
                "A1A3b": alleles_A1A3b,
                "A1A4B": alleles_A1A4B,
                "A1A4b": alleles_A1A4b,
                "A2A3B": alleles_A2A3B,
                "A2A3b": alleles_A2A3b,
                "A2A4B": alleles_A2A4B,
                "A2A4b": alleles_A2A4b
            }),
            success: function(data, textStatus, jqXHR) {
                console.log(data);
                $("#total-F2Codom4").text(data.observed.total);
                if (data.expectedValues.expectedIndA1A3B) {
                    $("#ExpectedInd-A1A3B-F2Codom4").text(data.expectedValues.expectedIndA1A3B.toFixed(1));
                    $("#ExpectedInd-A1A3b-F2Codom4").text(data.expectedValues.expectedIndA1A3b.toFixed(1));
                    $("#ExpectedInd-A1A4B-F2Codom4").text(data.expectedValues.expectedIndA1A4B.toFixed(1));
                    $("#ExpectedInd-A1A4b-F2Codom4").text(data.expectedValues.expectedIndA1A4b.toFixed(1));
                    $("#ExpectedInd-A2A3B-F2Codom4").text(data.expectedValues.expectedIndA2A3B.toFixed(1));
                    $("#ExpectedInd-A2A3b-F2Codom4").text(data.expectedValues.expectedIndA2A3b.toFixed(1));
                    $("#ExpectedInd-A2A4B-F2Codom4").text(data.expectedValues.expectedIndA2A4B.toFixed(1));
                    $("#ExpectedInd-A2A4b-F2Codom4").text(data.expectedValues.expectedIndA2A4b.toFixed(1));
                }
                if (data.expectedValues.contA1A3B) {
                    $("#ExpectedCont-A1A3B-F2Codom4").text(data.expectedValues.contA1A3B.toFixed(1));
                    $("#ExpectedCont-A1A3b-F2Codom4").text(data.expectedValues.contA1A3b.toFixed(1));
                    $("#ExpectedCont-A1A4B-F2Codom4").text(data.expectedValues.contA1A4B.toFixed(1));
                    $("#ExpectedCont-A1A4b-F2Codom4").text(data.expectedValues.contA1A4b.toFixed(1));
                    $("#ExpectedCont-A2A3B-F2Codom4").text(data.expectedValues.contA2A3B.toFixed(1));
                    $("#ExpectedCont-A2A3b-F2Codom4").text(data.expectedValues.contA2A3b.toFixed(1));
                    $("#ExpectedCont-A2A4B-F2Codom4").text(data.expectedValues.contA2A4B.toFixed(1));
                    $("#ExpectedCont-A2A4b-F2Codom4").text(data.expectedValues.contA2A4b.toFixed(1));
                }

                $("#value-A1A3-F2Codom4").text(data.observed.obsA1A3);
                $("#value-A1A4-F2Codom4").text(data.observed.obsA1A4);
                $("#value-A2A3-F2Codom4").text(data.observed.obsA2A3);
                $("#value-A2A4-F2Codom4").text(data.observed.obsA2A4);
                $("#value-Total-F2Codom4").text(data.observed.total);

                $("#Expected-A1A3-F2Codom4").text(data.expectedValues.expA1A3.toFixed(1));
                $("#Expected-A1A4-F2Codom4").text(data.expectedValues.expA1A4.toFixed(1));
                $("#Expected-A2A3-F2Codom4").text(data.expectedValues.expA2A3.toFixed(1));
                $("#Expected-A2A4-F2Codom4").text(data.expectedValues.expA2A4.toFixed(1));

                $("#value-B-F2Codom4").text(data.observed.obsB);
                $("#value-b-F2Codom4").text(data.observed.obsb);

                $("#Expected-B-F2Codom4").text(data.expectedValues.expB.toFixed(1));
                $("#Expected-b-F2Codom4").text(data.expectedValues.expb.toFixed(1));

                $("#value-F2Codom4-LocusA").text(data.resultValues.chiA1A2A3A4.toFixed(2));
                $("#agree-F2Codom4-LocusA").text(data.agree.chiA1A2A3A4);
                $("#value-F2Codom4-LocusB").text(data.resultValues.chiBb.toFixed(2));
                $("#agree-F2Codom4-LocusB").text(data.agree.chiBb);
                if (data.resultValues.chiInd) {
                    $("#value-F2Codom4-Indep").text(data.resultValues.chiInd.toFixed(2));
                    $("#agree-F2Codom4-Indep").text(data.agree.chiInd);
                }
                if (data.resultValues.chiCont) {
                    $("#value-F2Codom4-Cont").text(data.resultValues.chiCont.toFixed(2));
                    $("#agree-F2Codom4-Cont").text(data.agree.chiCont);
                }
                if (data.feedbackMessage) {
                    alert(data.feedbackMessage);
                }
            },
            error: function(jqXHR, textStatus, errorThrown) {
                alert("Se ha producido un error: " + errorThrown);
            }
        });
    }
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
    $.ajax({
        type: "POST",
        //url: "http://ingenias.fdi.ucm.es:60070/api/v1/calctool?CTid=02",
        url: "http://raspberrypablo.ddns.net:8080/api/v1/calctool?CTid=02",
        beforeSend: function(request) {
            request.setRequestHeader("Access-Control-Allow-Origin", "*");
        },
        contentType: "application/json",
        data: JSON.stringify({
            "A1A1B1B1": alleles_A1A1B1B1,
            "A1A1B1B2": alleles_A1A1B1B2,
            "A1A1B2B2": alleles_A1A1B2B2,
            "A1A2B1B1": alleles_A1A2B1B1,
            "A1A2B1B2": alleles_A1A2B1B2,
            "A1A2B2B2": alleles_A1A2B2B2,
            "A2A2B1B1": alleles_A2A2B1B1,
            "A2A2B1B2": alleles_A2A2B1B2,
            "A2A2B2B2": alleles_A2A2B2B2
        }),
        success: function(data, textStatus, jqXHR) {
            console.log(data);
            if (!data.cleanInputs) {
                $("#total-F2Codominance").text(data.observed.total);
                if (data.expectedValues.expectedIndA1B1) {
                    $("#ExpectedInd-A1A1B1B1-F2Codominance").text(data.expectedValues.expectedIndA1B1.toFixed(1));
                    $("#ExpectedInd-A1A1B1B2-F2Codominance").text(data.expectedValues.expectedIndA1B1B2.toFixed(1));
                    $("#ExpectedInd-A1A1B2B2-F2Codominance").text(data.expectedValues.expectedIndA1B2.toFixed(1));
                    $("#ExpectedInd-A1A2B1B1-F2Codominance").text(data.expectedValues.expectedIndA1A2B1.toFixed(1));
                    $("#ExpectedInd-A1A2B1B2-F2Codominance").text(data.expectedValues.expectedIndA1A2B1B2.toFixed(1));
                    $("#ExpectedInd-A1A2B2B2-F2Codominance").text(data.expectedValues.expectedIndA1A2B2.toFixed(1));
                    $("#ExpectedInd-A2A2B1B1-F2Codominance").text(data.expectedValues.expectedIndA2B2.toFixed(1));
                    $("#ExpectedInd-A2A2B1B2-F2Codominance").text(data.expectedValues.expectedIndA2B1.toFixed(1));
                    $("#ExpectedInd-A2A2B2B2-F2Codominance").text(data.expectedValues.expectedIndA2B1B2.toFixed(1));
                }
                if (data.expectedValues.contA1B1) {
                    $("#ExpectedCont-A1A1B1B1-F2Codominance").text(data.expectedValues.contA1B1.toFixed(1));
                    $("#ExpectedCont-A1A1B1B2-F2Codominance").text(data.expectedValues.contA1B1B2.toFixed(1));
                    $("#ExpectedCont-A1A1B2B2-F2Codominance").text(data.expectedValues.contA1B2.toFixed(1));
                    $("#ExpectedCont-A1A2B1B1-F2Codominance").text(data.expectedValues.contA1A2B1.toFixed(1));
                    $("#ExpectedCont-A1A2B1B2-F2Codominance").text(data.expectedValues.contA1A2B1B2.toFixed(1));
                    $("#ExpectedCont-A1A2B2B2-F2Codominance").text(data.expectedValues.contA1A2B2.toFixed(1));
                    $("#ExpectedCont-A2A2B1B1-F2Codominance").text(data.expectedValues.contA2B2.toFixed(1));
                    $("#ExpectedCont-A2A2B1B2-F2Codominance").text(data.expectedValues.contA2B1.toFixed(1));
                    $("#ExpectedCont-A2A2B2B2-F2Codominance").text(data.expectedValues.contA2B1B2.toFixed(1));
                }

                $("#value-A1A1-F2Codominance").text(data.observed.obsA1);
                $("#value-A1A2-F2Codominance").text(data.observed.obsA1A2);
                $("#value-A2A2-F2Codominance").text(data.observed.obsA2);
                $("#value-Total-F2Codominance").text(data.observed.total);

                $("#Expected-A1A1-F2Codominance").text(data.expectedValues.expA1.toFixed(1));
                $("#Expected-A1A2-F2Codominance").text(data.expectedValues.expA1A2.toFixed(1));
                $("#Expected-A2A2-F2Codominance").text(data.expectedValues.expA2.toFixed(1));

                $("#value-B1B1-F2Codominance").text(data.observed.obsB1);
                $("#value-B1B2-F2Codominance").text(data.observed.obsB1B2);
                $("#value-B2B2-F2Codominance").text(data.observed.obsB2);

                $("#Expected-B1B1-F2Codominance").text(data.expectedValues.expB1.toFixed(1));
                $("#Expected-B1B2-F2Codominance").text(data.expectedValues.expB1B2.toFixed(1));
                $("#Expected-B2B2-F2Codominance").text(data.expectedValues.expB2.toFixed(1));

                $("#value-F2Codominance-A1A2").text(data.resultValues.chiAa.toFixed(2));
                $("#agree-F2Codominance-A1A2").text(data.agree.chiAa);
                $("#value-F2Codominance-B1B2").text(data.resultValues.chiBb.toFixed(2));
                $("#agree-F2Codominance-B1B2").text(data.agree.chiBb);
                if (data.resultValues.chiInd) {
                    $("#value-F2Codominance-Indep").text(data.resultValues.chiInd.toFixed(2));
                    $("#agree-F2Codominance-Indep").text(data.agree.chiInd);
                }
                if (data.resultValues.chiCont) {
                    $("#value-F2Codominance-Cont").text(data.resultValues.chiCont.toFixed(2));
                    $("#agree-F2Codominance-Cont").text(data.agree.chiCont);
                }
                if (data.feedbackMessage) {
                    alert(data.feedbackMessage);
                }

            } else { alert(data.feedbackMessage); }

        },
        error: function(jqXHR, textStatus, errorThrown) {
            alert("Se ha producido un error: " + errorThrown);
        }
    });
});

$("#ctoolView").on("click", "#F2Dominance-twoloci", (evt) => {


    let alleles_AB = $("#Alleles-AB-F2Dominance").val();
    let alleles_aB = $("#Alleles-aB-F2Dominance").val();
    let alleles_Ab = $("#Alleles-Ab-F2Dominance").val();
    let alleles_ab = $("#Alleles-ab-F2Dominance").val();


    alert(alleles_AB + " " + alleles_aB + " " + alleles_Ab + " " + alleles_ab);
    $.ajax({
        type: "POST",
        //url: "http://ingenias.fdi.ucm.es:60070/api/v1/calctool?CTid=01",
        url: "http://raspberrypablo.ddns.net:8080/api/v1/calctool?CTid=01",
        beforeSend: function(request) {
            request.setRequestHeader("Access-Control-Allow-Origin", "*");
        },
        contentType: "application/json",
        data: JSON.stringify({
            "AB": alleles_AB,
            "aB": alleles_aB,
            "Ab": alleles_Ab,
            "ab": alleles_ab
        }),
        success: function(data, textStatus, jqXHR) {
            console.log(data);
            if (!data.cleanInputs) {
                $("#total-F2Dominance").text(data.observed.total);
                if (data.expectedValues.expectedIndAB) {
                    $("#ExpectedInd-AB-F2Dominance").text(data.expectedValues.expectedIndAB.toFixed(1));
                    $("#ExpectedInd-Ab-F2Dominance").text(data.expectedValues.expectedIndAb.toFixed(1));
                    $("#ExpectedInd-aB-F2Dominance").text(data.expectedValues.expectedIndaB.toFixed(1));
                    $("#ExpectedInd-ab-F2Dominance").text(data.expectedValues.expectedIndab.toFixed(1));
                }
                if (data.expectedValues.contAB) {
                    $("#ExpectedCont-AB-F2Dominance").text(data.expectedValues.contAB.toFixed(1));
                    $("#ExpectedCont-Ab-F2Dominance").text(data.expectedValues.contAb.toFixed(1));
                    $("#ExpectedCont-aB-F2Dominance").text(data.expectedValues.contaB.toFixed(1));
                    $("#ExpectedCont-ab-F2Dominance").text(data.expectedValues.contab.toFixed(1));
                }

                $("#value-A-F2Dominance").text(data.observed.obsA);
                $("#value-a-F2Dominance").text(data.observed.obsa);
                $("#value-Total-F2Dominance").text(data.observed.total);

                $("#Expected-A-F2Dominance").text(data.expectedValues.expA.toFixed(1));
                $("#Expected-a-F2Dominance").text(data.expectedValues.expa.toFixed(1));

                $("#value-B-F2Dominance").text(data.observed.obsB);
                $("#value-b-F2Dominance").text(data.observed.obsb);

                $("#Expected-B-F2Dominance").text(data.expectedValues.expB.toFixed(1));
                $("#Expected-b-F2Dominance").text(data.expectedValues.expb.toFixed(1));

                $("#value-F2Dominance-Aa").text(data.resultValues.chiAa.toFixed(2));
                $("#agree-F2Dominance-Aa").text(data.agree.chiAa);
                $("#value-F2Dominance-Bb").text(data.resultValues.chiBb.toFixed(2));
                $("#agree-F2Dominance-Bb").text(data.agree.chiBb);
                if (data.resultValues.chiInd) {
                    $("#value-F2Dominance-Indep").text(data.resultValues.chiInd.toFixed(2));
                    $("#agree-F2Dominance-Indep").text(data.agree.chiInd);
                }
                if (data.resultValues.chiCont) {
                    $("#value-F2Dominance-Cont").text(data.resultValues.chiCont.toFixed(2));
                    $("#agree-F2Dominance-Cont").text(data.agree.chiCont);
                }
                if (data.feedbackMessage) {
                    alert(data.feedbackMessage);
                }

            } else { alert(data.feedbackMessage); }
        },
        error: function(jqXHR, textStatus, errorThrown) {
            alert("Se ha producido un error: " + errorThrown);
        }
    });
});

$("#ctoolView").on("click", "#F2TestcrossDominance-twoloci", (evt) => {

    let alleles_AB = Number($("#Alleles-AB-F2TestcrossDominance").val());
    let alleles_aB = Number($("#Alleles-aB-F2TestcrossDominance").val());
    let alleles_Ab = Number($("#Alleles-Ab-F2TestcrossDominance").val());
    let alleles_ab = Number($("#Alleles-ab-F2TestcrossDominance").val());

    $.ajax({
        type: "POST",
        //url: "http://ingenias.fdi.ucm.es:60070/api/v1/calctool?CTid=05",
        url: "http://raspberrypablo.ddns.net:8080/api/v1/calctool?CTid=05",
        beforeSend: function(request) {
            request.setRequestHeader("Access-Control-Allow-Origin", "*");
        },
        contentType: "application/json",
        data: JSON.stringify({
            "AB": alleles_AB,
            "aB": alleles_aB,
            "Ab": alleles_Ab,
            "ab": alleles_ab
        }),
        success: function(data, textStatus, jqXHR) {
            console.log(data);
        },
        error: function(jqXHR, textStatus, errorThrown) {
            alert("Se ha producido un error: " + errorThrown);
        }
    });
});

$("#ctoolView").on("click", "#F2TestcrossDom2_1-twoloci", (evt) => {

    let alleles_A1A1B = $("#Alleles-A1A1B-F2TestcrossDom2_1").val();
    let alleles_A1A2B = $("#Alleles-A1A2B-F2TestcrossDom2_1").val();
    let alleles_A2A2B = $("#Alleles-A2A2B-F2TestcrossDom2_1").val();
    let alleles_A1A1b = $("#Alleles-A1A1b-F2TestcrossDom2_1").val();
    let alleles_A1A2b = $("#Alleles-A1A2b-F2TestcrossDom2_1").val();
    let alleles_A2A2b = $("#Alleles-A2A2b-F2TestcrossDom2_1").val();

    alert(alleles_A1A1B + " " + alleles_A1A2B + " " + alleles_A2A2B + " " + alleles_A1A1b + " " + alleles_A1A2b + " " + alleles_A2A2b);
    $.ajax({
        type: "POST",
        //url: "http://ingenias.fdi.ucm.es:60070/api/v1/calctool?CTid=06",
        url: "http://raspberrypablo.ddns.net:8080/api/v1/calctool?CTid=06",
        beforeSend: function(request) {
            request.setRequestHeader("Access-Control-Allow-Origin", "*");
        },
        contentType: "application/json",
        data: {
            "A1A1B": alleles_A1A1B,
            "A1A2B": alleles_A1A2B,
            "A2A2B": alleles_A2A2B,
            "A1A1b": alleles_A1A1b,
            "A1A2b": alleles_A1A2b,
            "A2A2b": alleles_A2A2b
        },
        success: function(data, textStatus, jqXHR) {
            console.log(data);
        },
        error: function(jqXHR, textStatus, errorThrown) {
            alert("Se ha producido un error: " + errorThrown);
        }
    });
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
    $.ajax({
        type: "POST",
        //url: "http://ingenias.fdi.ucm.es:60070/api/v1/calctool?CTid=07",
        url: "http://raspberrypablo.ddns.net:8080/api/v1/calctool?CTid=07",
        beforeSend: function(request) {
            request.setRequestHeader("Access-Control-Allow-Origin", "*");
        },
        contentType: "application/json",
        data: {
            "A1A3B": alleles_A1A3B,
            "A1A3b": alleles_A1A3b,
            "A1A4B": alleles_A1A4B,
            "A1A4b": alleles_A1A4b,
            "A2A3B": alleles_A2A3B,
            "A2A3b": alleles_A2A3b,
            "A2A4B": alleles_A2A4B,
            "A2A4b": alleles_A2A4b
        },
        success: function(data, textStatus, jqXHR) {
            console.log(data);
        },
        error: function(jqXHR, textStatus, errorThrown) {
            alert("Se ha producido un error: " + errorThrown);
        }
    });
});

$("#ctoolView").on("click", "#Testcross-twoloci", (evt) => {

    let alleles_AB = Number($("#Alleles-AB-Testcross").val());
    let alleles_aB = Number($("#Alleles-aB-Testcross").val());
    let alleles_Ab = Number($("#Alleles-Ab-Testcross").val());
    let alleles_ab = Number($("#Alleles-ab-Testcross").val());

    alert(alleles_AB + " " + alleles_aB + " " + alleles_Ab + " " + alleles_ab);
    $.ajax({
        type: "POST",
        //url: "http://ingenias.fdi.ucm.es:60070/api/v1/calctools",
        url: "http://raspberrypablo.ddns.net:8080/api/v1/calctool?CTid=00",
        beforeSend: function(request) {
            request.setRequestHeader("Access-Control-Allow-Origin", "*");
        },
        contentType: "application/json",
        data: JSON.stringify({
            "AB": alleles_AB,
            "aB": alleles_aB,
            "Ab": alleles_Ab,
            "ab": alleles_ab
        }),
        success: function(data, textStatus, jqXHR) {
            console.log(data);
            if (!data.cleanInputs) {
                $("#total-Testcross").text(data.observed.total);
                if (data.expectedValues.expectedIndAB) {
                    $("#ExpectedInd-AB-Testcross").text(data.expectedValues.expectedIndAB.toFixed(1));
                    $("#ExpectedInd-Ab-Testcross").text(data.expectedValues.expectedIndAb.toFixed(1));
                    $("#ExpectedInd-aB-Testcross").text(data.expectedValues.expectedIndaB.toFixed(1));
                    $("#ExpectedInd-ab-Testcross").text(data.expectedValues.expectedIndab.toFixed(1));
                }
                if (data.expectedValues.contAB) {
                    $("#ExpectedCont-AB-Testcross").text(data.expectedValues.contAB.toFixed(1));
                    $("#ExpectedCont-Ab-Testcross").text(data.expectedValues.contAb.toFixed(1));
                    $("#ExpectedCont-aB-Testcross").text(data.expectedValues.contaB.toFixed(1));
                    $("#ExpectedCont-ab-Testcross").text(data.expectedValues.contab.toFixed(1));
                }

                $("#value-A-Testcross").text(data.observed.obsA);
                $("#value-a-Testcross").text(data.observed.obsa);
                $("#value-Total-Testcross").text(data.observed.total);

                $("#Expected-A-Testcross").text(data.expectedValues.expA.toFixed(1));
                $("#Expected-a-Testcross").text(data.expectedValues.expa.toFixed(1));

                $("#value-B-Testcross").text(data.observed.obsB);
                $("#value-b-Testcross").text(data.observed.obsb);

                $("#Expected-B-Testcross").text(data.expectedValues.expB.toFixed(1));
                $("#Expected-b-Testcross").text(data.expectedValues.expb.toFixed(1));

                $("#value-Testcross-Aa").text(data.resultValues.chiAa.toFixed(2));
                $("#agree-Testcross-Aa").text(data.agree.chiAa);
                $("#value-Testcross-Bb").text(data.resultValues.chiBb.toFixed(2));
                $("#agree-Testcross-Bb").text(data.agree.chiBb);
                if (data.resultValues.chiInd) {
                    $("#value-Testcross-Indep").text(data.resultValues.chiInd.toFixed(2));
                    $("#agree-Testcross-Indep").text(data.agree.chiInd);
                }
                if (data.resultValues.chiCont) {
                    $("#value-Testcross-Cont").text(data.resultValues.chiCont.toFixed(2));
                    $("#agree-Testcross-Cont").text(data.agree.chiCont);
                }
                alert(data.feedbackMessage);

            } else { alert(data.feedbackMessage); }

        },
        error: function(jqXHR, textStatus, errorThrown) {
            alert("Se ha producido un error: " + errorThrown);
        }
    });
});

/////////////////////////////////////////////////////////////////////////////
//LINKAGE
/////////////////////////////////////////////////////////////////////////////

$("#ctoolView").on("click", "#F2Codominance-linkage", (evt) => {

    let alleles_A1A1B1B1 = $("#Alleles-A1A1B1B1-F2Codominance-linkage").val();
    let alleles_A1A1B1B2 = $("#Alleles-A1A1B1B2-F2Codominance-linkage").val();
    let alleles_A1A1B2B2 = $("#Alleles-A1A1B2B2-F2Codominance-linkage").val();
    let alleles_A1A2B1B1 = $("#Alleles-A1A2B1B1-F2Codominance-linkage").val();
    let alleles_A1A2B1B2 = $("#Alleles-A1A2B1B2-F2Codominance-linkage").val();
    let alleles_A1A2B2B2 = $("#Alleles-A1A2B2B2-F2Codominance-linkage").val();
    let alleles_A2A2B1B1 = $("#Alleles-A2A2B1B1-F2Codominance-linkage").val();
    let alleles_A2A2B1B2 = $("#Alleles-A2A2B1B2-F2Codominance-linkage").val();
    let alleles_A2A2B2B2 = $("#Alleles-A2A2B2B2-F2Codominance-linkage").val();

    alert("Boton f2codominance");
    $.ajax({
        type: "POST",
        //url: "http://ingenias.fdi.ucm.es:60070/api/v1/calctool?CTid=22",
        url: "http://raspberrypablo.ddns.net:8080/api/v1/calctool?CTid=22",
        beforeSend: function(request) {
            request.setRequestHeader("Access-Control-Allow-Origin", "*");
        },
        contentType: "application/json",
        data: {
            "A1A1B1B1": alleles_A1A1B1B1,
            "A1A1B1B2": alleles_A1A1B1B2,
            "A1A1B2B2": alleles_A1A1B2B2,
            "A1A2B1B1": alleles_A1A2B1B1,
            "A1A2B1B2": alleles_A1A2B1B2,
            "A1A2B2B2": alleles_A1A2B2B2,
            "A2A2B1B1": alleles_A2A2B1B1,
            "A2A2B1B2": alleles_A2A2B1B2,
            "A2A2B2B2": alleles_A2A2B2B2
        },
        success: function(data, textStatus, jqXHR) {
            console.log(data);
        },
        error: function(jqXHR, textStatus, errorThrown) {
            alert("Se ha producido un error: " + errorThrown);
        }
    });
});

$("#ctoolView").on("click", "#F2CodominanceDM-linkage", (evt) => {

    let recFreq = $("#Alleles-F2CodominanceDM-RecFreq").val();
    let ToS = $("#Alleles-F2CodominanceDM-ToS").val();

    alert("Boton f2codominancedm");
    $.ajax({
        type: "POST",
        //url: "http://ingenias.fdi.ucm.es:60070/api/v1/calctool?CTid=26",
        url: "http://raspberrypablo.ddns.net:8080/api/v1/calctool?CTid=26",
        beforeSend: function(request) {
            request.setRequestHeader("Access-Control-Allow-Origin", "*");
        },
        contentType: "application/json",
        data: {
            "recFreq": recFreq,
            "ToS": ToS
        },
        success: function(data, textStatus, jqXHR) {
            console.log(data);
        },
        error: function(jqXHR, textStatus, errorThrown) {
            alert("Se ha producido un error: " + errorThrown);
        }
    });
});

$("#ctoolView").on("click", "#F2Dominance-linkage", (evt) => {

    let alleles_AB = $("#Alleles-AB-F2Dominance-linkage").val();
    let alleles_aB = $("#Alleles-aB-F2Dominance-linkage").val();
    let alleles_Ab = $("#Alleles-Ab-F2Dominance-linkage").val();
    let alleles_ab = $("#Alleles-ab-F2Dominance-linkage").val();

    alert("Boton f2dominance");
    $.ajax({
        type: "POST",
        //url: "http://ingenias.fdi.ucm.es:60070/api/v1/calctool?CTid=21",
        url: "http://raspberrypablo.ddns.net:8080/api/v1/calctool?CTid=21",
        beforeSend: function(request) {
            request.setRequestHeader("Access-Control-Allow-Origin", "*");
        },
        contentType: "application/json",
        data: {
            "AB": alleles_AB,
            "aB": alleles_aB,
            "Ab": alleles_Ab,
            "ab": alleles_ab
        },
        success: function(data, textStatus, jqXHR) {
            console.log(data);
        },
        error: function(jqXHR, textStatus, errorThrown) {
            alert("Se ha producido un error: " + errorThrown);
        }
    });
});

$("#ctoolView").on("click", "#F2DominanceDM-linkage", (evt) => {

    let recFreq = $("#Alleles-F2DominanceDM-RecFreq").val();
    let ToS = $("#Alleles-F2DominanceDM-ToS").val();

    alert("Boton f2dominanceDM");
    $.ajax({
        type: "POST",
        //url: "http://ingenias.fdi.ucm.es:60070/api/v1/calctool?CTid=25",
        url: "http://raspberrypablo.ddns.net:8080/api/v1/calctool?CTid=25",
        beforeSend: function(request) {
            request.setRequestHeader("Access-Control-Allow-Origin", "*");
        },
        contentType: "application/json",
        data: {
            "recFreq": recFreq,
            "ToS": ToS
        },
        success: function(data, textStatus, jqXHR) {
            console.log(data);
        },
        error: function(jqXHR, textStatus, errorThrown) {
            alert("Se ha producido un error: " + errorThrown);
        }
    });
});

$("#ctoolView").on("click", "#Testcross-linkage", (evt) => {

    let alleles_AB = $("#Alleles-AB-Testcross-linkage").val();
    let alleles_aB = $("#Alleles-aB-Testcross-linkage").val();
    let alleles_Ab = $("#Alleles-Ab-Testcross-linkage").val();
    let alleles_ab = $("#Alleles-ab-Testcross-linkage").val();

    alert("Boton Testcross");
    $.ajax({
        type: "POST",
        //url: "http://ingenias.fdi.ucm.es:60070/api/v1/calctool?CTid=20",
        url: "http://raspberrypablo.ddns.net:8080/api/v1/calctool?CTid=20",
        beforeSend: function(request) {
            request.setRequestHeader("Access-Control-Allow-Origin", "*");
        },
        contentType: "application/json",
        data: {
            "AB": alleles_AB,
            "aB": alleles_aB,
            "Ab": alleles_Ab,
            "ab": alleles_ab
        },
        success: function(data, textStatus, jqXHR) {
            console.log(data);
        },
        error: function(jqXHR, textStatus, errorThrown) {
            alert("Se ha producido un error: " + errorThrown);
        }
    });
});

$("#ctoolView").on("click", "#Testcross3Loci-linkage", (evt) => {

    let alleles_ABC = $("#Alleles-Testcross3Loci-ABC").val();
    let alleles_abc = $("#Alleles-Testcross3Loci-abc").val();
    let alleles_ABc = $("#Alleles-Testcross3Loci-ABc").val();
    let alleles_abC = $("#Alleles-Testcross3Loci-abC").val();
    let alleles_aBC = $("#Alleles-Testcross3Loci-aBC").val();
    let alleles_Abc = $("#Alleles-Testcross3Loci-Abc").val();
    let alleles_AbC = $("#Alleles-Testcross3Loci-AbC").val();
    let alleles_aBc = $("#Alleles-Testcross3Loci-aBc").val();

    alert("Boton Testcross3Loci");
    $.ajax({
        type: "POST",
        //url: "http://ingenias.fdi.ucm.es:60070/api/v1/calctool?CTid=23",
        url: "http://raspberrypablo.ddns.net:8080/api/v1/calctool?CTid=23",
        beforeSend: function(request) {
            request.setRequestHeader("Access-Control-Allow-Origin", "*");
        },
        contentType: "application/json",
        data: {
            "ABC": alleles_ABC,
            "abc": alleles_abc,
            "ABc": alleles_ABc,
            "abC": alleles_abC,
            "aBC": alleles_aBC,
            "Abc": alleles_Abc,
            "AbC": alleles_AbC,
            "aBc": alleles_aBc
        },
        success: function(data, textStatus, jqXHR) {
            console.log(data);
        },
        error: function(jqXHR, textStatus, errorThrown) {
            alert("Se ha producido un error: " + errorThrown);
        }
    });
});

$("#ctoolView").on("click", "#Testcross3LociDM-linkage", (evt) => {

    let recFreqR1 = $("#Alleles-Testcross3LociDM-RecFreqR1").val();
    let recFreqR2 = $("#Alleles-Testcross3LociDM-RecFreqR2").val();
    let CoC = $("#Alleles-Testcross3LociDM-CoC").val();
    let ToS = $("#Alleles-Testcross3LociDM-ToS").val();

    alert("Boton Testcross3LociDM");
    $.ajax({
        type: "POST",
        //url: "http://ingenias.fdi.ucm.es:60070/api/v1/calctool?CTid=27",
        url: "http://raspberrypablo.ddns.net:8080/api/v1/calctool?CTid=27",
        beforeSend: function(request) {
            request.setRequestHeader("Access-Control-Allow-Origin", "*");
        },
        contentType: "application/json",
        data: {
            "recFreqR1": recFreqR1,
            "recFreqR2": recFreqR2,
            "CoC": CoC,
            "ToS": ToS
        },
        success: function(data, textStatus, jqXHR) {
            console.log(data);
        },
        error: function(jqXHR, textStatus, errorThrown) {
            alert("Se ha producido un error: " + errorThrown);
        }
    });
});

$("#ctoolView").on("click", "#TestcrossDM-linkage", (evt) => {

    let recFreq = $("#Alleles-TestcrossDM-RecFreq").val();
    let ToS = $("#Alleles-TestcrossDM-ToS").val();

    alert("Boton TestcrossDM");
    $.ajax({
        type: "POST",
        //url: "http://ingenias.fdi.ucm.es:60070/api/v1/calctool?CTid=24",
        url: "http://raspberrypablo.ddns.net:8080/api/v1/calctool?CTid=24",
        beforeSend: function(request) {
            request.setRequestHeader("Access-Control-Allow-Origin", "*");
        },
        contentType: "application/json",
        data: {
            "recFreq": recFreq,
            "ToS": ToS
        },
        success: function(data, textStatus, jqXHR) {
            console.log(data);
        },
        error: function(jqXHR, textStatus, errorThrown) {
            alert("Se ha producido un error: " + errorThrown);
        }
    });
});


/////////////////////////////////////////////////////////////////////////////
//EPISTASIAS
/////////////////////////////////////////////////////////////////////////////

$("#ctoolView").on("click", "#DoubleDominant-epistasias", (evt) => {

    let alleles_ABAbaB = $("#Alleles-ABAbaB-DoubleDominant").val();
    let alleles_ab = $("#Alleles-ab-DoubleDominant").val();

    alert("Boton DoubleDominant");
    $.ajax({
        type: "POST",
        //url: "http://ingenias.fdi.ucm.es:60070/api/v1/calctool?CTid=35",
        url: "http://raspberrypablo.ddns.net:8080/api/v1/calctool?CTid=35",
        beforeSend: function(request) {
            request.setRequestHeader("Access-Control-Allow-Origin", "*");
        },
        contentType: "application/json",
        data: {
            "ABAbaB": alleles_ABAbaB,
            "ab": alleles_ab
        },
        success: function(data, textStatus, jqXHR) {
            console.log(data);
        },
        error: function(jqXHR, textStatus, errorThrown) {
            alert("Se ha producido un error: " + errorThrown);
        }
    });
});

$("#ctoolView").on("click", "#DoubleDominantRecesive-epistasias", (evt) => {

    let alleles_ABAbab = $("#Alleles-ABAbab-DoubleDominantRecesive").val();
    let alleles_aB = $("#Alleles-aB-DoubleDominantRecesive").val();

    alert("Boton DoubleDominantRecesive");
    $.ajax({
        type: "POST",
        //url: "http://ingenias.fdi.ucm.es:60070/api/v1/calctool?CTid=36",
        url: "http://raspberrypablo.ddns.net:8080/api/v1/calctool?CTid=36",
        beforeSend: function(request) {
            request.setRequestHeader("Access-Control-Allow-Origin", "*");
        },
        contentType: "application/json",
        data: {
            "ABAbab": alleles_ABAbab,
            "aB": alleles_aB
        },
        success: function(data, textStatus, jqXHR) {
            console.log(data);
        },
        error: function(jqXHR, textStatus, errorThrown) {
            alert("Se ha producido un error: " + errorThrown);
        }
    });
});

$("#ctoolView").on("click", "#DoubleRecesive-epistasias", (evt) => {

    let alleles_AB = $("#Alleles-AB-DoubleRecesive").val();
    let alleles_AbaBab = $("#Alleles-AbaBab-DoubleRecesive").val();

    alert("Boton DoubleRecesive");
    $.ajax({
        type: "POST",
        //url: "http://ingenias.fdi.ucm.es:60070/api/v1/calctool?CTid=34",
        url: "http://raspberrypablo.ddns.net:8080/api/v1/calctool?CTid=34",
        beforeSend: function(request) {
            request.setRequestHeader("Access-Control-Allow-Origin", "*");
        },
        contentType: "application/json",
        data: {
            "AB": alleles_AB,
            "AbaBab": alleles_AbaBab
        },
        success: function(data, textStatus, jqXHR) {
            console.log(data);
        },
        error: function(jqXHR, textStatus, errorThrown) {
            alert("Se ha producido un error: " + errorThrown);
        }
    });
});

$("#ctoolView").on("click", "#Segregation961-epistasias", (evt) => {

    let alleles_AB = $("#Alleles-AB-Segregation961").val();
    let alleles_AbaB = $("#Alleles-AbaB-Segregation961").val();
    let alleles_ab = $("#Alleles-ab-Segregation961").val();

    alert("Boton Segregation961");
    $.ajax({
        type: "POST",
        //url: "http://ingenias.fdi.ucm.es:60070/api/v1/calctool?CTid=33",
        url: "http://raspberrypablo.ddns.net:8080/api/v1/calctool?CTid=33",
        beforeSend: function(request) {
            request.setRequestHeader("Access-Control-Allow-Origin", "*");
        },
        contentType: "application/json",
        data: {
            "AB": alleles_AB,
            "AbaB": alleles_AbaB,
            "ab": alleles_ab
        },
        success: function(data, textStatus, jqXHR) {
            console.log(data);
        },
        error: function(jqXHR, textStatus, errorThrown) {
            alert("Se ha producido un error: " + errorThrown);
        }
    });
});

$("#ctoolView").on("click", "#Segregation1033-epistasias", (evt) => {

    let alleles_ABab = $("#Alleles-ABab-Segregation1033").val();
    let alleles_Ab = $("#Alleles-Ab-Segregation1033").val();
    let alleles_aB = $("#Alleles-aB-Segregation1033").val();

    alert("Boton Segregation1033");
    $.ajax({
        type: "POST",
        //url: "http://ingenias.fdi.ucm.es:60070/api/v1/calctool?CTid=38",
        url: "http://raspberrypablo.ddns.net:8080/api/v1/calctool?CTid=38",
        beforeSend: function(request) {
            request.setRequestHeader("Access-Control-Allow-Origin", "*");
        },
        contentType: "application/json",
        data: {
            "ABab": alleles_ABab,
            "Ab": alleles_Ab,
            "aB": alleles_aB
        },
        success: function(data, textStatus, jqXHR) {
            console.log(data);
        },
        error: function(jqXHR, textStatus, errorThrown) {
            alert("Se ha producido un error: " + errorThrown);
        }
    });
});

$("#ctoolView").on("click", "#Segregation6334-epistasias", (evt) => {

    let alleles_AaB = $("#Alleles-AaB-Segregation6334").val();
    let alleles_AAB = $("#Alleles-AAB-Segregation6334").val();
    let alleles_Ab = $("#Alleles-Ab-Segregation6334").val();
    let alleles_aBab = $("#Alleles-aBab-Segregation6334").val();

    alert("Boton Segregation6334");
    $.ajax({
        type: "POST",
        //url: "http://ingenias.fdi.ucm.es:60070/api/v1/calctool?CTid=37",
        url: "http://raspberrypablo.ddns.net:8080/api/v1/calctool?CTid=37",
        beforeSend: function(request) {
            request.setRequestHeader("Access-Control-Allow-Origin", "*");
        },
        contentType: "application/json",
        data: {
            "AaB": alleles_AaB,
            "AAB": alleles_AAB,
            "Ab": alleles_Ab,
            "aBab": alleles_aBab
        },
        success: function(data, textStatus, jqXHR) {
            console.log(data);
        },
        error: function(jqXHR, textStatus, errorThrown) {
            alert("Se ha producido un error: " + errorThrown);
        }
    });
});

$("#ctoolView").on("click", "#SingleDominant-epistasias", (evt) => {

    let alleles_ABAb = $("#Alleles-ABAb-SingleDominant").val();
    let alleles_aB = $("#Alleles-aB-SingleDominant").val();
    let alleles_ab = $("#Alleles-ab-SingleDominant").val();

    alert("Boton SingleDominant");
    $.ajax({
        type: "POST",
        //url: "http://ingenias.fdi.ucm.es:60070/api/v1/calctool?CTid=32",
        url: "http://raspberrypablo.ddns.net:8080/api/v1/calctool?CTid=32",
        beforeSend: function(request) {
            request.setRequestHeader("Access-Control-Allow-Origin", "*");
        },
        contentType: "application/json",
        data: {
            "ABAb": alleles_ABAb,
            "aB": alleles_aB,
            "ab": alleles_ab
        },
        success: function(data, textStatus, jqXHR) {
            console.log(data);
        },
        error: function(jqXHR, textStatus, errorThrown) {
            alert("Se ha producido un error: " + errorThrown);
        }
    });
});

$("#ctoolView").on("click", "#SingleRecesive-epistasias", (evt) => {

    let alleles_AB = $("#Alleles-AB-SingleRecesive").val();
    let alleles_Ab = $("#Alleles-Ab-SingleRecesive").val();
    let alleles_aBab = $("#Alleles-aBab-SingleRecesive").val();

    alert("Boton SingleRecesive");
    $.ajax({
        type: "POST",
        //url: "http://ingenias.fdi.ucm.es:60070/api/v1/calctool?CTid=31",
        url: "http://raspberrypablo.ddns.net:8080/api/v1/calctool?CTid=31",
        beforeSend: function(request) {
            request.setRequestHeader("Access-Control-Allow-Origin", "*");
        },
        contentType: "application/json",
        data: {
            "AB": alleles_AB,
            "Ab": alleles_Ab,
            "aBab": alleles_aBab
        },
        success: function(data, textStatus, jqXHR) {
            console.log(data);
        },
        error: function(jqXHR, textStatus, errorThrown) {
            alert("Se ha producido un error: " + errorThrown);
        }
    });
});

$("#ctoolView").on("click", "#WhithoutModification-epistasias", (evt) => {

    let alleles_AB = $("#Alleles-AB-WhithoutModification").val();
    let alleles_Ab = $("#Alleles-Ab-WhithoutModification").val();
    let alleles_aB = $("#Alleles-aB-WhithoutModification").val();
    let alleles_ab = $("#Alleles-ab-WhithoutModification").val();

    alert("Boton WhithoutModification");
    $.ajax({
        type: "POST",
        //url: "http://ingenias.fdi.ucm.es:60070/api/v1/calctool?CTid=30",
        url: "http://raspberrypablo.ddns.net:8080/api/v1/calctool?CTid=30",
        beforeSend: function(request) {
            request.setRequestHeader("Access-Control-Allow-Origin", "*");
        },
        contentType: "application/json",
        data: {
            "AB": alleles_AB,
            "Ab": alleles_Ab,
            "aB": alleles_aB,
            "ab": alleles_ab
        },
        success: function(data, textStatus, jqXHR) {
            console.log(data);
        },
        error: function(jqXHR, textStatus, errorThrown) {
            alert("Se ha producido un error: " + errorThrown);
        }
    });
});

/////////////////////////////////////////////////////////////////////////////
//POLYHYBRID
/////////////////////////////////////////////////////////////////////////////

$("#ctoolView").on("click", "#multiplesAlleles-polyhybrid", (evt) => {

    let locus1 = $("#locus1-multiplesAlleles").val();
    let locus2 = $("#locus2-multiplesAlleles").val();
    let locus3 = $("#locus3-multiplesAlleles").val();
    let locus4 = $("#locus4-multiplesAlleles").val();
    let locus5 = $("#locus5-multiplesAlleles").val();

    alert("Boton multiplesAlleles");
    $.ajax({
        type: "POST",
        //url: "http://ingenias.fdi.ucm.es:60070/api/v1/calctool?CTid=41",
        url: "http://raspberrypablo.ddns.net:8080/api/v1/calctool?CTid=41",
        beforeSend: function(request) {
            request.setRequestHeader("Access-Control-Allow-Origin", "*");
        },
        contentType: "application/json",
        data: {
            "locus1": locus1,
            "locus2": locus2,
            "locus3": locus3,
            "locus4": locus4,
            "locus5": locus5
        },
        success: function(data, textStatus, jqXHR) {
            console.log(data);
        },
        error: function(jqXHR, textStatus, errorThrown) {
            alert("Se ha producido un error: " + errorThrown);
        }
    });
});

$("#ctoolView").on("click", "#Polyhybrid-polyhybrid", (evt) => {

    let n = $("#Data-n-polyhybrid").val();
    let T = $("#Data-T-polyhybrid").val();
    let h = $("#Data-h-polyhybrid").val();
    let R = $("#Data-R-polyhybrid").val();
    let d = $("#Data-d-polyhybrid").val();
    let D = $("#Data-D-polyhybrid").val();
    let r = $("#Data-r-polyhybrid").val();

    alert("Boton Polyhybrid");
    $.ajax({
        type: "POST",
        //url: "http://ingenias.fdi.ucm.es:60070/api/v1/calctool?CTid=40",
        url: "http://raspberrypablo.ddns.net:8080/api/v1/calctool?CTid=40",
        beforeSend: function(request) {
            request.setRequestHeader("Access-Control-Allow-Origin", "*");
        },
        contentType: "application/json",
        data: {
            "n": n,
            "T": T,
            "h": h,
            "R": R,
            "d": d,
            "D": D,
            "r": r
        },
        success: function(data, textStatus, jqXHR) {
            console.log(data);
        },
        error: function(jqXHR, textStatus, errorThrown) {
            alert("Se ha producido un error: " + errorThrown);
        }
    });
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

    cleanResults();
});

function cleanResults() {
    //ONE LOCUS

    //Testcross
    $("#total-Testcross").text("");
    $("#Expected-A-Testcross").text("");
    $("#Expected-a-Testcross").text("");
    $("#value-Testcross").text("");
    $("#agree-Testcross").text("");
    $("#result-message-Testcross").text("");

    //F2Dominance
    $("#total-F2Dominance").text("");
    $("#Expected-A-F2Dominance").text("");
    $("#Expected-a-F2Dominance").text("");
    $("#value-F2Dominance").text("");
    $("#agree-F2Dominance").text("");
    $("#result-message-F2Dominance").text("");

    //F2Codominance

    //Codominance 3
    $("#total-Codominance3").text("");
    $("#Expected-A1A1-Codominance3").text("");
    $("#Expected-A1A3-Codominance3").text("");
    $("#Expected-A1A2-Codominance3").text("");
    $("#Expected-A2A3-Codominance3").text("");
    $("#value-Codominance3").text("");
    $("#agree-Codominance3").text("");
    $("#result-message-Codominance3").text("");

    //Codominance 4
    $("#total-Codominance4").text("");
    $("#Expected-A1A3-Codominance4").text("");
    $("#Expected-A1A4-Codominance4").text("");
    $("#Expected-A2A3-Codominance4").text("");
    $("#Expected-A2A4-Codominance4").text("");
    $("#value-Codominance4").text("");
    $("#agree-Codominance4").text("");
    $("#result-message-Codominance4").text("");



    //TWO LOCI

    //Testcross
    $("#total-Testcross").text("");
    $("#ExpectedInd-AB-Testcross").text("");
    $("#ExpectedInd-Ab-Testcross").text("");
    $("#ExpectedInd-aB-Testcross").text("");
    $("#ExpectedInd-ab-Testcross").text("");
    $("#ExpectedCont-AB-Testcross").text("");
    $("#ExpectedCont-Ab-Testcross").text("");
    $("#ExpectedCont-aB-Testcross").text("");
    $("#ExpectedCont-ab-Testcross").text("");
    $("#value-A-Testcross").text("");
    $("#value-a-Testcross").text("");
    $("#value-Total-Testcross").text("");
    $("#Expected-A-Testcross").text("");
    $("#Expected-a-Testcross").text("");
    $("#value-B-Testcross").text("");
    $("#value-b-Testcross").text("");
    $("#Expected-B-Testcross").text("");
    $("#Expected-b-Testcross").text("");
    $("#value-Testcross-Aa").text("");
    $("#agree-Testcross-Aa").text("");
    $("#value-Testcross-Bb").text("");
    $("#agree-Testcross-Bb").text("");
    $("#value-Testcross-Indep").text("");
    $("#agree-Testcross-Indep").text("");
    $("#value-Testcross-Cont").text("");
    $("#agree-Testcross-Cont").text("");

    //F2Dominance
    $("#total-F2Dominance").text("");
    $("#ExpectedInd-AB-F2Dominance").text("");
    $("#ExpectedInd-Ab-F2Dominance").text("");
    $("#ExpectedInd-aB-F2Dominance").text("");
    $("#ExpectedInd-ab-F2Dominance").text("");
    $("#ExpectedCont-AB-F2Dominance").text("");
    $("#ExpectedCont-Ab-F2Dominance").text("");
    $("#ExpectedCont-aB-F2Dominance").text("");
    $("#ExpectedCont-ab-F2Dominance").text("");
    $("#value-A-F2Dominance").text("");
    $("#value-a-F2Dominance").text("");
    $("#value-Total-F2Dominance").text("");
    $("#Expected-A-F2Dominance").text("");
    $("#Expected-a-F2Dominance").text("");
    $("#value-B-F2Dominance").text("");
    $("#value-b-F2Dominance").text("");
    $("#Expected-B-F2Dominance").text("");
    $("#Expected-b-F2Dominance").text("");
    $("#value-F2Dominance-Aa").text("");
    $("#agree-F2Dominance-Aa").text("");
    $("#value-F2Dominance-Bb").text("");
    $("#agree-F2Dominance-Bb").text("");
    $("#value-F2Dominance-Indep").text("");
    $("#agree-F2Dominance-Indep").text("");
    $("#value-F2Dominance-Cont").text("");
    $("#agree-F2Dominance-Cont").text("");

    //F2Codominance

    $("#total-F2Codominance").text("");
    $("#ExpectedInd-A1A1B1B1-F2Codominance").text("");
    $("#ExpectedInd-A1A1B1B2-F2Codominance").text("");
    $("#ExpectedInd-A1A1B2B2-F2Codominance").text("");
    $("#ExpectedInd-A1A2B1B1-F2Codominance").text("");
    $("#ExpectedInd-A1A2B1B2-F2Codominance").text("");
    $("#ExpectedInd-A1A2B2B2-F2Codominance").text("");
    $("#ExpectedInd-A2A2B1B1-F2Codominance").text("");
    $("#ExpectedInd-A2A2B1B2-F2Codominance").text("");
    $("#ExpectedInd-A2A2B2B2-F2Codominance").text("");
    $("#ExpectedCont-A1A1B1B1-F2Codominance").text("");
    $("#ExpectedCont-A1A1B1B2-F2Codominance").text("");
    $("#ExpectedCont-A1A1B2B2-F2Codominance").text("");
    $("#ExpectedCont-A1A2B1B1-F2Codominance").text("");
    $("#ExpectedCont-A1A2B1B2-F2Codominance").text("");
    $("#ExpectedCont-A1A2B2B2-F2Codominance").text("");
    $("#ExpectedCont-A2A2B1B1-F2Codominance").text("");
    $("#ExpectedCont-A2A2B1B2-F2Codominance").text("");
    $("#ExpectedCont-A2A2B2B2-F2Codominance").text("");
    $("#value-A1A1-F2Codominance").text("");
    $("#value-A1A2-F2Codominance").text("");
    $("#value-A2A2-F2Codominance").text("");
    $("#value-Total-F2Codominance").text("");
    $("#Expected-A1A1-F2Codominance").text("");
    $("#Expected-A1A2-F2Codominance").text("");
    $("#Expected-A2A2-F2Codominance").text("");
    $("#value-B1B1-F2Codominance").text("");
    $("#value-B1B2-F2Codominance").text("");
    $("#value-B2B2-F2Codominance").text("");
    $("#Expected-B1B1-F2Codominance").text("");
    $("#Expected-B1B2-F2Codominance").text("");
    $("#Expected-B2B2-F2Codominance").text("");
    $("#value-F2Codominance-A1A2").text("");
    $("#agree-F2Codominance-A1A2").text("");
    $("#value-F2Codominance-B1B2").text("");
    $("#agree-F2Codominance-B1B2").text("");
    $("#value-F2Codominance-Indep").text("");
    $("#agree-F2Codominance-Indep").text("");
    $("#value-F2Codominance-Cont").text("");
    $("#agree-F2Codominance-Cont").text("");

    //F2Codom2

    $("#total-F2Codom2").text("");
    $("#ExpectedInd-A1A1B-F2Codom2").text("");
    $("#ExpectedInd-A1A2B-F2Codom2").text("");
    $("#ExpectedInd-A2A2B-F2Codom2").text("");
    $("#ExpectedInd-A1A1b-F2Codom2").text("");
    $("#ExpectedInd-A1A2b-F2Codom2").text("");
    $("#ExpectedInd-A2A2b-F2Codom2").text("");
    $("#ExpectedCont-A1A1B-F2Codom2").text("");
    $("#ExpectedCont-A1A2B-F2Codom2").text("");
    $("#ExpectedCont-A2A2B-F2Codom2").text("");
    $("#ExpectedCont-A1A1b-F2Codom2").text("");
    $("#ExpectedCont-A1A2b-F2Codom2").text("");
    $("#ExpectedCont-A2A2b-F2Codom2").text("");
    $("#value-A1A1-F2Codom2").text("");
    $("#value-A1A2-F2Codom2").text("");
    $("#value-A2A2-F2Codom2").text("");
    $("#value-Total-F2Codom2").text("");
    $("#Expected-A1A1-F2Codom2").text("");
    $("#Expected-A1A2-F2Codom2").text("");
    $("#Expected-A2A2-F2Codom2").text("");
    $("#value-B-F2Codom2").text("");
    $("#value-b-F2Codom2").text("");
    $("#Expected-B-F2Codom2").text("");
    $("#Expected-b-F2Codom2").text("");
    $("#value-F2Codom2-A1A2").text("");
    $("#agree-F2Codom2-A1A2").text("");
    $("#value-F2Codom2-Bb").text("");
    $("#agree-F2Codom2-Bb").text("");
    $("#value-F2Codom2-Indep").text("");
    $("#agree-F2Codom2-Indep").text("");
    $("#value-F2Codom2-Cont").text("");
    $("#agree-F2Codom2-Cont").text("");

    //F2Codom4

    $("#total-F2Codom4").text("");
    $("#ExpectedInd-A1A3B-F2Codom4").text("");
    $("#ExpectedInd-A1A3b-F2Codom4").text("");
    $("#ExpectedInd-A1A4B-F2Codom4").text("");
    $("#ExpectedInd-A1A4b-F2Codom4").text("");
    $("#ExpectedInd-A2A3B-F2Codom4").text("");
    $("#ExpectedInd-A2A3b-F2Codom4").text("");
    $("#ExpectedInd-A2A4B-F2Codom4").text("");
    $("#ExpectedInd-A2A4b-F2Codom4").text("");
    $("#ExpectedCont-A1A3B-F2Codom4").text("");
    $("#ExpectedCont-A1A3b-F2Codom4").text("");
    $("#ExpectedCont-A1A4B-F2Codom4").text("");
    $("#ExpectedCont-A1A4b-F2Codom4").text("");
    $("#ExpectedCont-A2A3B-F2Codom4").text("");
    $("#ExpectedCont-A2A3b-F2Codom4").text("");
    $("#ExpectedCont-A2A4B-F2Codom4").text("");
    $("#ExpectedCont-A2A4b-F2Codom4").text("");
    $("#value-A1A3-F2Codom4").text("");
    $("#value-A1A4-F2Codom4").text("");
    $("#value-A2A3-F2Codom4").text("");
    $("#value-A2A4-F2Codom4").text("");
    $("#value-Total-F2Codom4").text("");
    $("#Expected-A1A3-F2Codom4").text("");
    $("#Expected-A1A4-F2Codom4").text("");
    $("#Expected-A2A3-F2Codom4").text("");
    $("#Expected-A2A4-F2Codom4").text("");
    $("#value-B-F2Codom4").text("");
    $("#value-b-F2Codom4").text("");
    $("#Expected-B-F2Codom4").text("");
    $("#Expected-b-F2Codom4").text("");
    $("#value-F2Codom4-LocusA").text("");
    $("#agree-F2Codom4-LocusA").text("");
    $("#value-F2Codom4-LocusB").text("");
    $("#agree-F2Codom4-LocusB").text("");
    $("#value-F2Codom4-Indep").text("");
    $("#agree-F2Codom4-Indep").text("");
    $("#value-F2Codom4-Cont").text("");
    $("#agree-F2Codom4-Cont").text("");

}