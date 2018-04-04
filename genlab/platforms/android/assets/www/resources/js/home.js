let application;
let tests;
const NUMBERAPPS = 5;
let currentTest;
let nameApp;
let erroneas = [];
let correctas = [];
let marked = [];
//two-loci 0
//one locus 1
//linkage 2
//epistasia 3
//polyhibrid 4

$("#leftMenu").hide();
$("#homeNav").hide();
$("#homeView").hide();

//localStorage.setItem('user', JSON.stringify(null));
/*let aux = JSON.parse(localStorage.getItem('5'));
aux.active = true;
localStorage.setItem('5', JSON.stringify(aux));*/
let user = JSON.parse(localStorage.getItem('user'));


if (user) {
    $("#loginView").hide();
    $("#homeNav").show();
    $("#homeView").show();
    activarApps();
} else {
    localStorage.setItem('0', JSON.stringify({ active: false, title: "Two Loci", name: "twoloci" }));
    localStorage.setItem('1', JSON.stringify({ active: false, title: "One Locus", name: "onelocus" }));
    localStorage.setItem('2', JSON.stringify({ active: false, title: "Linkage", name: "linkage" }));
    localStorage.setItem('3', JSON.stringify({ active: false, title: "Epistasias", name: "epistasias" }));
    localStorage.setItem('4', JSON.stringify({ active: false, title: "Polyhybrid", name: "polyhybrid" }));
    $("#loginView").show();
    $("#homeNav").hide();
    $("#homeView").hide();
}

/* $("#logout").click(function() {
    sessionStorage.user = $("#form-username").val();
    $("#loginView").hide();
    $("#homeNav").show();
    $("#homeView").show();
}); */

$("#btn-login").click(function() {
    let aux = $("#form-username").val();

    $.ajax({
        type: "PUT",
        //url: "http://ingenias.fdi.ucm.es:60070/api/v1/theory",
        url: "http://raspberrypablo.ddns.net:8080/api/v1/newUser",
        contentType: "application/json",
        data: aux,
        success: function(data, textStatus, jqXHR) {
            localStorage.setItem('user', JSON.stringify($("#form-username").val()));
            user = JSON.parse(localStorage.getItem('user'));
            //console.log(user);
            $.ajax({
                type: "GET",
                //url: "http://ingenias.fdi.ucm.es:60070/api/v1/theory",
                url: "http://raspberrypablo.ddns.net:8080/api/v1/priority",
                success: function(data, textStatus, jqXHR) {
                    //console.log(data);
                    let aux = JSON.parse(localStorage.getItem('' + data[0].id));
                    aux.active = true;
                    localStorage.setItem('' + data[0].id, JSON.stringify(aux));
                    $("#app" + data[0].id).removeClass("not-active");
                    application = $("#app" + data[0].id).text();
                    $("#application").text(application);
                    application = data[0].id;
                    nameApp = aux.name;
                    $("#loginView").hide();
                    $("#homeNav").show();
                    $("#homeView").show();
                },
                error: function(jqXHR, textStatus, errorThrown) {
                    alert("Se ha producido un error: " + errorThrown);
                }
            });

        },
        error: function(jqXHR, textStatus, errorThrown) {
            alert("Se ha producido un error: " + errorThrown);
        }
    });

});

$("#menuBtn").click(function() {
    if ($("#leftMenu").is(":visible")) {
        $("#leftMenu").hide();
    } else {
        $("#leftMenu").show();
    }
});

$("#applications").on("click", "li", (event) => {
    let app = $(event.target);
    let aux = app.text();
    let auxApp = application;
    if (aux === "Two Loci") {
        application = 0;
        let appActive = JSON.parse(localStorage.getItem('' + application));
        if (appActive.active) {
            nameApp = "twoloci";
            $("#application").text(aux);
        } else {
            alert("Section blocked. To unlock, complete all tests from other sections");
            application = auxApp;
        }
    } else if (aux === "One Locus") {
        application = 1;
        let appActive = JSON.parse(localStorage.getItem('' + application));
        if (appActive.active) {
            nameApp = appActive.name;
            $("#application").text(aux);
        } else {
            alert("Section blocked. To unlock, complete all tests from other sections");
            application = auxApp;
        }
    } else if (aux === "Linkage") {
        application = 2;
        let appActive = JSON.parse(localStorage.getItem('' + application));
        if (appActive.active) {
            nameApp = appActive.name;
            $("#application").text(aux);
        } else {
            alert("Section blocked. To unlock, complete all tests from other sections");
            application = auxApp;
        }
    } else if (aux === "Epistasias") {
        application = 3;
        let appActive = JSON.parse(localStorage.getItem('' + application));
        if (appActive.active) {
            nameApp = appActive.name;
            $("#application").text(aux);
        } else {
            alert("Section blocked. To unlock, complete all tests from other sections");
            application = auxApp;
        }
    } else if (aux === "Polyhybrid") {
        application = 4;
        let appActive = JSON.parse(localStorage.getItem('' + application));
        if (appActive.active) {
            nameApp = appActive.name;
            $("#application").text(aux);
        } else {
            alert("Section blocked. To unlock, complete all tests from other sections");
            application = auxApp;
        }
    }
    $("#leftMenu").hide();
    $("#homeView").show();
    $("#sectionView").hide();
    $("#sectionContent").hide();
    $("#ctoolView").empty();
    $(".tests-list").empty();
    $("#problems-list").empty();

});

$("#app_sections").on("click", "li", (event) => {
    $("#homeView").hide();

    let vistas = $("#sectionContent").children();
    for (let i = 0; i < vistas.length; ++i) {
        vistas.eq(i).hide();
    }

    let ctools = $("#ctoolsView").children();
    for (let i = 0; i < ctools.length; ++i) {
        ctools.eq(i).hide();
    }

    $("#sectionView").show();
    $("#sectionContent").show();
    let title;
    let section = $(event.target).parent();
    if (section.data("section") === "Theory") {
        title = "Theory";

        //DESCOMENTAR CUANDO ESTE LISTA LA API
        /*$.ajax({
            type: "GET",
            //url: "http://ingenias.fdi.ucm.es:60070/api/v1/theory",
            url: "http://raspberrypablo.ddns.net:8080/api/v1/theory",
            contentType: "application/json",
            data: { sectionid: application },
            success: function(data, textStatus, jqXHR) {
                //data es un objeto javascript, con la teoria de la aplicacion en cuestion
                if (data) {
                    data.forEach(t => {
                        let theory = $("<div>").addClass("theory");
                        theory.append($("<h2>").addClass("theory-title").text(t.titulo));
                        theory.append($("<p>").text(t.contenido));

                        $("#theory-list").append(theory);
                    });
                } else {
                    $("#login-message").text(err).css("color", "red");
                }
            },
            error: function(jqXHR, textStatus, errorThrown) {
                alert("Se ha producido un error: " + errorThrown);
            }
        });*/

    } else if (section.data("section") === "Problems") {
        title = "Problems";

        $("#problemsView").show();

        //DESCOMENTAR CUANDO ESTE LISTA LA API
        $.ajax({
            type: "GET",
            //url: "http://ingenias.fdi.ucm.es:60070/api/v1/problems",
            url: "http://raspberrypablo.ddns.net:8080/api/v1/problems",
            beforeSend: function(request) {
                request.setRequestHeader("Access-Control-Allow-Origin", "*");
            },
            contentType: "application/json",
            data: { sectionid: application },
            success: function(data, textStatus, jqXHR) {
                //data es un objeto javascript, con los problemas de la aplicacion en cuestion
                if (data) {
                    console.log(data);
                    data.forEach(p => {
                        let problem = $("<div>").addClass("problem");
                        problem.append($("<h2>").addClass("problem-title").text(p.nombre));
                        problem.append($("<p>").html(p.contenido));

                        $("#problems-list").append(problem);
                    });
                } else {
                    $("#login-message").text(err).css("color", "red");
                }
            },
            error: function(jqXHR, textStatus, errorThrown) {
                alert("Se ha producido un error: " + errorThrown);
            }
        });

    } else if (section.data("section") === "CTools") {
        title = "Calculation Tools";

        //$("#pruebaI").load('ctools/onelocus_Testcross.html');
        $("#ctoolsView").show();
        if (application == 1) {
            $("#one-locus-ctools").show();
        } else if (application == 0) {
            $("#two-independent-loci-ctools").show();
        } else if (application == 2) {
            $("#linkage-ctools").show();
        } else if (application == 4) {
            $("#polyhybrid-ctools").show();
        } else if (application == 3) {
            $("#epistasias-ctools").show();
        }



    } else if (section.data("section") === "Tests") {
        $("#testQuestions-list").hide();
        title = "Tests";
        //Obtener numero de preguntas
        $.ajax({
            type: "GET",
            //url: "http://ingenias.fdi.ucm.es:60070/api/v1/tests", //COMPLETAR
            url: "http://raspberrypablo.ddns.net:8080/api/v1/tests",
            contentType: "application/json",
            data: { sectionid: application },
            success: function(data, textStatus, jqXHR) {
                //data es un objeto javascript, con los problemas de la aplicacion en cuestion
                //data = [{ titulo: "Test 3" }, { titulo: "Test 4" }];
                if (data) {
                    console.log(data);
                    tests = data;
                    let pos = 0;
                    tests.forEach(test => {
                        let testHTML = $("<li>").addClass("nav-item");
                        testHTML.append($("<button>").addClass("partBtn btn btn-block").text(test.titulo).data("pos", pos++));
                        $(".tests-list").append(testHTML);
                    });
                }
                $("#testsView").show();
            },
            error: function(jqXHR, textStatus, errorThrown) {
                alert("Se ha producido un error: " + errorThrown);
            }
        });
        let num = 10;
        $(".answerCont").on("click", (event) => {
            /////////////////////////////////////
            //Comprobar que la respuesta clicada
            //es correcta en esa pregunta
            //Mediante peticion ajax
            /////////////////////////////////////
            /*let answer = $(event.target);
            let sel = $(answer).data("selected");
            if (sel == 'False') {
                $(answer).addClass("answerContSel");
                $(answer).data("selected", "True");
            } else {
                $(answer).removeClass("answerContSel");
                $(answer).data("selected", "False");
            }*/
        });
        /*$(".partsTest button").on("click", (event) => {
            var title = $(event.target).text();
            $("#sectionTitle").text(title);
            $("#testQuestions-list").show();
            $("#test-list").hide();
            $(".back-btn-test").show();
            $(".back-btn").hide();
        });*/
        $(".back-btn-test").on("click", (event) => {
            $("#sectionTitle").text("Tests");
            $("#testQuestions-list").hide();
            $("#test-list").show();
            $(".back-btn-test").hide();
            $(".back-btn").show();
            $("#testQuestions-list").empty();
        });
    } else if (section.data("section") === "Books") {
        title = "Recommended books";

        $("#booksView").show();

        $.ajax({
            type: "GET",
            //url: "http://ingenias.fdi.ucm.es:60070/api/v1/books", //COMPLETAR
            url: "http://raspberrypablo.ddns.net:8080/api/v1/books",
            contentType: "application/json",
            data: { sectionid: application },
            success: function(data, textStatus, jqXHR) {
                //data es un objeto javascript, con los problemas de la aplicacion en cuestion
                if (data) {
                    //name, author, editorial, isbn link
                    data.forEach(l => {
                        let book = $("<div>").addClass("book");
                        book.append($("<h3>").addClass("book-title").text(l.name));
                        book.append($("<p>").text("Autores: " + l.author));
                        book.append($("<p>").text("ISBN: " + l.isbn));
                        book.append($("<p>").text("Editorial: " + l.editorial));
                        book.append($("<a>").addClass("book-link").prop("href", l.link).text("Página web"));


                        $("#books-list").append(book);
                    });
                } else {
                    $("#login-message").text(err).css("color", "red");
                }
            },
            error: function(jqXHR, textStatus, errorThrown) {
                alert("Se ha producido un error: " + errorThrown);
            }
        });

        let data = [];
        data[0] = { name: "libro genial", author: "Alberto", editorial: "Anaya", isbn: 23232434, link: "https://www.google.es" }

        data.forEach(l => {
            let book = $("<div>").addClass("book");
            book.append($("<h3>").addClass("book-title").text(l.name));
            book.append($("<p>").text("Autores: " + l.author));
            book.append($("<p>").text("ISBN: " + l.isbn));
            book.append($("<p>").text("Editorial: " + l.editorial));
            book.append($("<a>").addClass("book-link").prop("href", l.link).text("Página web"));


            $("#books-list").append(book);
        });
    }
    $("#sectionTitle").text(title);



});

//Evento al hacer click en un test en concreto

$(".tests-list").on("click", "button", (event) => {
    $("#btnEnviar").show();

    var title = $(event.target).text();
    erroneas = [];
    correctas = [];
    marked = [];

    $("#sectionTitle").text(title);
    $("#testQuestions-list").show();
    $("#test-list").hide();
    $(".back-btn-test").show();
    $(".back-btn").hide();

    let pos = Number($(event.target).data("pos"));
    currentTest = pos;
    let aux = 0;
    tests[pos].questions.forEach(question => {
        let questionHTML = $("<div>").addClass("questionCont col-sm-6 col-sm-offset-3 form-box").data("pos", aux++);
        questionHTML.append($("<div>").addClass("form-top").append($("<div>").addClass("form-top-left").append($("<h4>").addClass("titleQuestion").text(question.texto))));
        answersHTML = $("<div>").addClass("answers-list login-form mobile-view").prop("id", "questionTest" + (aux - 1));
        let auxAnswer = 0;
        question.answers.forEach(answer => {
            answersHTML.append($("<div>").addClass("form-group answerCont").text(answer.texto).data("pos", auxAnswer++));
        });
        questionHTML.append($("<div>").addClass("form-bottom").append(answersHTML));
        $("#testQuestions-list").append(questionHTML);
    });
    let btnHTML = "<div class='questionCont col-sm-6 col-sm-offset-3 form-box'><button id='btnEnviar' class='btnEnviarT btn btn-primary'>Enviar</button></div>";
    $("#testQuestions-list").append(btnHTML);
    eventBtnEnviar();
});

function eventBtnEnviar() {
    //Evento al hacer click en el botón de Enviar Test

    $("#btnEnviar").on("click", (event) => {
        marked.forEach(answer => {
            let answerPos = Number($(answer.answer).data("pos"));
            let questionPos = Number($(answer.answer).parent().parent().parent().data("pos"));
            let oRespuesta = {
                idTest: parseInt(tests[currentTest].id),
                idQ: parseInt(tests[currentTest].questions[questionPos].id),
                idA: parseInt(tests[currentTest].questions[questionPos].answers[answerPos].id)
            };
            $(answer.answer).removeClass("selected-answer");
            if (answer.correct) {
                $(answer.answer).addClass("correct-answer");
                correctas.push(oRespuesta);
            } else {
                $(answer.answer).addClass("incorrect-answer");
                erroneas.push(oRespuesta);
            }
            console.log(oRespuesta.idTest + " " + oRespuesta.idQ + " " + oRespuesta.idA);
        });

        let respuestas = {
            iUsu: user,
            right: correctas,
            wrong: erroneas
        };

        let datos = {
            usu: user,
            feedback: JSON.stringify({
                user: user,
                right: correctas,
                wrong: erroneas
            })
        };

        console.log(datos);

        $.ajax({
            type: "GET",
            //url: "http://ingenias.fdi.ucm.es:60070/api/v1/feedback", //COMPLETAR
            url: "http://raspberrypablo.ddns.net:8080/api/v1/feedback",
            //url: "http://localhost:8080/api/v1/feedback",
            contentType: "application/json",
            data: datos,
            success: function(data, textStatus, jqXHR) {
                //data es un objeto javascript, con los problemas de la aplicacion en cuestion
                console.log(data);
                if (data) {
                    $("#enviado-message").text("Test enviado").css("color", "green");
                } else {
                    $("#enviado-message").text("No se ha podido enviar el test").css("color", "red");
                }
            },
            error: function(jqXHR, textStatus, errorThrown) {
                alert("Se ha producido un error: " + errorThrown);
            }
        });

    });
}

//Evento al hacer click en una respuesta

$("#testQuestions-list").on("click", ".answerCont", (event) => {
    let answer = Number($(event.target).data("pos"));
    let question = Number($(event.target).parent().parent().parent().data("pos"));

    $("#questionTest" + question).children().removeClass("selected-answer");
    //console.log(answer + " " + question + " " + currentTest);

    if (!marked["" + question]) {
        marked["" + question] = { correct: undefined, answer: undefined }
    }
    if (!tests[currentTest].questions[question].answers[answer].correcta) {
        //$(event.target).addClass("incorrect-answer");
        marked["" + question].correct = false;
        //Esto depende, ya que es posible que si falla se le deje seguir probando para buscar la correcta
        tests[currentTest].questions[question].answers.forEach(answer => {
            if (answer.correcta) {
                //addClass correcta
                return;
            }
        });
    } else {
        //$(event.target).addClass("correct-answer");
        marked["" + question].correct = true;
    }
    $(event.target).addClass("selected-answer");
    marked["" + question].answer = event.target;
    console.log(marked);
});


$(".ctools-list").on("click", "div", (event) => {
    let ctool = $(event.target);

    let ctools = $("#ctoolsView").children();

    for (let i = 0; i < ctools.length; ++i) {
        ctools.eq(i).hide();
    }

    let file = "ctools/" + nameApp + "/" + nameApp + "_" + ctool.data('ctool') + ".html";

    $("#ctoolView").append($("<span>").prop("id", "loading-message").addClass("loading").text("Loading..."));
    $("#ctoolView").load(file, () => {
        $("#loading-message").remove();
    });
    $("#ctoolView").show();
    //$("#ctoolView").text(file);
});

$(".book-link").on("mouseover", event => {
    $(event.target).css("color", "rgb(250, 64, 157)");
});

$(".book-link").on("mouseleave", event => {
    $(event.target).css("color", "rgb(201, 0, 107)");
});

$("#logout").on("click", (event) => {
    $("#application_view>div").hide();
    $("#loginView").show();
    $("#leftMenu").hide();
});

$(".back-btn").on("click", (event) => {
    $("#homeView").show();
    $("#sectionView").hide();
    $("#sectionContent").hide();
    //Esto va en el boton de back de las ctools pero aun no esta creado
    $("#ctoolView").empty();
    $(".tests-list").empty();
    $("#problems-list").empty();

});

function activarApps() {
    for (let i = 0; i < NUMBERAPPS; ++i) {
        let aux = JSON.parse(localStorage.getItem('' + i));
        console.log(aux);
        let changed = false;
        if (aux.active) {
            $("#app" + i).removeClass("not-active");
            if (!changed) {
                $("#application").text(aux.title);
                application = i;
                nameApp = aux.name;
                changed = true;
            }
        }
    }
}