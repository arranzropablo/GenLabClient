let application = "one locus";

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
    })

});