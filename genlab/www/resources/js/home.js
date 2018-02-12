let application = "one locus";

//Para quitar el texto "Loading" abajo del todo en la página
/*$(document).bind('mobileinit',function(){
    $.mobile.loadingMessage = false;
})*/

$(document).ready(function() {

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
        $("#leftMenu").hide();

    });

    $("#app_sections").on("click", "li", (event) => {
        $("#homeView").hide();
        $("#sectionView").show();
        $("#sectionContent").html("");
        let title;
        let section = $(event.target).parent();
        if (section.data("section") === "Theory") {
            title = "Theory";
        } else if (section.data("section") === "Problems") {
            title = "Problems";
        } else if (section.data("section") === "CTools") {
            title = "Calculation Tools";
        } else if (section.data("section") === "Tests") {

            title = "Tests";
            //Obtener número de preguntas
            let num = 10;
            //Pregunta actual
            let act = 1;
            //Label pregunta
            let numQuestion = act+"/"+num;
            let testContent = `<div class="row">
                        <div id="question_1" class="questionCont col-sm-6 col-sm-offset-3">
                            <div class="form-top">
                                <div class="form-top-left">
                                    <h3>1. Question Title</h3>
                                </div>
                                <div class="form-top-right">
                                    <h4 id="numQuestion">`+numQuestion+`</h3>
                                </div>
                            </div>
                            <div class="form-bottom">
                                <div class="login-form">
                                    <div class="form-group answerCont" id="answer_1_1" data-selected="False">1) Answer 1.1</div>
                                    <div class="form-group answerCont" id="answer_1_2" data-selected="False">2) Answer 1.2</div>
                                    <div class="form-group answerCont" id="answer_1_3" data-selected="False">3) Answer 1.3</div>
                                    <div id="dirButtons" class="form-group">
                                        <button id="btnNext" class="btnDir">&#60;&#60;</button>
                                        <button id="btnNext" class="btnDir">&#62;&#62;</button>
                                    </div>
                                    <div id="login-buttons" class="form-group form-buttons">
                                        <button id="btnSaveTest" class="btn btn-success">Save</button>
                                        <button id="btnRstTest" class="btn btn-info">Reset</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>`;

            $("#sectionContent").html(testContent);

            $(".answerCont").on("click", (event) => {
                let answer = $(event.target);
                let sel = $(answer).data("selected");
                if(sel == 'False'){
                    $(answer).addClass("answerContSel");
                    $(answer).data("selected","True");
                }else{
                    $(answer).removeClass("answerContSel");
                    $(answer).data("selected","False");
                }
            });

            //Funcionan
            /*$(".questionCont").on("swipeleft", (event) => {
                if(act < num){
                    act++;
                    numQuestion = act+"/"+num;
                    $("#numQuestion").text(numQuestion);
                }
            });

            $(".questionCont").on("swiperight", (event) => {
                if(act > 1){
                    act--;
                    numQuestion = act+"/"+num;
                    $("#numQuestion").text(numQuestion);
                }
            });*/

        } else if (section.data("section") === "Books") {
            title = "Recommended books";

        }
        $("#sectionTitle").text(title);



    });

    $("#logout").on("click", (event) => {
        $("#application_view>div").hide();
        $("#loginView").show();
    });

    $(".back-btn").on("click", (event) => {
        $("#homeView").show();
        $("#sectionView").hide();
    });
});

