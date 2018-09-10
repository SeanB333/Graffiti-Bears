$(document).ready(function () {

    // define character objects

    var bears = {
        hp: 100,
        attack: function () {
            return Math.floor((Math.random() * 20) + 1);
        }
    };
    var cops = {
        hp: 100,
        attack: function () {
            return Math.floor((Math.random() * 5) + 1);
        }
    }



    $("#bear1").on("click", function () {
        $("#card-container-hide").fadeOut("slow");
        $("#fight-stage").css("opacity", "1.0");
        $("#bear1A img").css("opacity", "1.0");
    });

    $("#bear2").on("click", function () {
        $("#card-container-hide").fadeOut("slow");
        $("#fight-stage").css("opacity", "1.0");
        $("#bear2A img").css("opacity", "1.0");
    });

    $("#fightImg").on("click", function () {
        cops.hp = cops.hp - bears.attack(); 
        bears.hp = bears.hp - cops.attack(); 
        cops.hp--;
        bears.hp--;
         $("#bearHp").attr("style", "width:" + bears.hp + "%");
        $("#bearHp").html(bears.hp + "%");
        $("#copHp").attr("style", "width:" + cops.hp + "%");
        $("#copHp").html(cops.hp + "%");
        $("#displayBearAtt").html(bears.attack());
        $("#displayCopAtt").html(cops.attack());
    console.log("bear attack :" + bears.attack());
    console.log("cops attack :" + cops.attack());
    console.log("bears health :" + bears.hp);
    console.log("cops health :" + cops.hp);
    });
});