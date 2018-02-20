let application = 1;
let nameApp = "onelocus";
//two-loci 0
//one locus 1
//linkage 2
//epistasia 3
//polyhibrid 4

$("#leftMenu").hide();

$("#menuBtn").click(function() {
    if ($("#leftMenu").is(":visible")) {
        $("#leftMenu").hide();
    } else {
        $("#leftMenu").show();
    }
});

$("#applications").on("click", "li", (event) => {
    let app = $(event.target);
    application = app.text();
    $("#application").text(application);
    if (application === "Two Loci") {
        application = 0;
        nameApp = "twoloci";
    } else if (application === "One Locus") {
        application = 1;
        nameApp = "onelocus"
    } else if (application === "Linkage") {
        application = 2;
        nameApp = "linkage";
    } else if (application === "Epistasias") {
        application = 3;
        nameApp = "epistasias";
    } else if (application === "Polyhybrid") {
        application = 4;
        nameApp = "polyhybrid";
    }
    $("#leftMenu").hide();

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
        /*$.ajax({
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
                    data.forEach(p => {
                        let problem = $("<div>").addClass("problem");
                        problem.append($("<h2>").addClass("problem-title").text(p.nombre));
                        problem.append($("<p>").text(p.contenido));

                        $("#problems-list").append(problem);
                    });
                } else {
                    $("#login-message").text(err).css("color", "red");
                }
            },
            error: function(jqXHR, textStatus, errorThrown) {
                alert("Se ha producido un error: " + errorThrown);
            }
        });*/

    } else if (section.data("section") === "CTools") {
        title = "Calculation Tools";

        //$("#pruebaI").load('ctools/onelocus_Testcross.html');
        $("#ctoolsView").show();
        if (application == 1) {
            $("#one-locus-ctools").show();
        } else if (application == 0) {
            $("#two-independent-loci-ctools").show();
        }
    } else if (section.data("section") === "Tests") {
        $("#testQuestions-list").hide();
        title = "Tests";
        //Obtener numero de preguntas
        let num = 10;
        $("#testsView").show();
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
        $(".partsTest button").on("click", (event) => {
            var title = $(event.target).text();
            $("#sectionTitle").text(title);
            $("#testQuestions-list").show();
            $("#test-list").hide();
            $(".back-btn-test").show();
            $(".back-btn").hide();
        });
        $(".back-btn-test").on("click", (event) => {
            $("#sectionTitle").text("Tests");
            $("#testQuestions-list").hide();
            $("#test-list").show();
            $(".back-btn-test").hide();
            $(".back-btn").show();
        });
    } else if (section.data("section") === "Books") {
        title = "Recommended books";

        $("#booksView").show();

        /*$.ajax({
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
        });*/

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

$(".ctools-list").on("click", "div", (event) => {
    let ctool = $(event.target);

    let ctools = $("#ctoolsView").children();

    for (let i = 0; i < ctools.length; ++i) {
        ctools.eq(i).hide();
    }

    let file = "ctools/" + nameApp + "_" + ctool.data('ctool') + ".html";

    $("#ctoolView").load(file);
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

});

$("#ctoolView").on("click", ".btn-calculate", (evt) => {
    let h = $("#Alelles-A-Testcross").val();
    $("#total-Testcross").text(34);
    console.log("Pulsado");
    alert("Hola! Has metido " + h);
});