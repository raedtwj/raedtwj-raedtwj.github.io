let activePiece;
$(document).ready(function () {
    $('.piece').each(function () {
        $(this).data('angle', 0)
    })
    $('[data-toggle="tooltip"]').tooltip();
    $(".board").click(function () {
        $(activePiece).appendTo($(this));
        checkSolved();
    });
    $(".piece").click(function () {
        if (activePiece == this) {
            $(this).data('angle', ($(this).data('angle') + 1) % 4)
            $(this).css({
                'transform': 'rotate(' + $(this).data('angle') * 90 + 'deg)'
            });
        } else {
            $(activePiece).removeClass("active");
            $(this).addClass("active");
            activePiece = this;
        }
    });
    $(".piece-place").click(function () {
        $(activePiece).appendTo($(this));
    });
});

function checkSolved() {
    // let flag = true;
    // pieces.forEach((e, i) => {
    //     if (($(e).data("angle") == ang[i]) &&
    //         (parseInt($(e).parent().attr('id')) == pos[i])) {
    //         return;
    //     } else if ((i == 3) &&
    //         ($("#3.piece").data("angle") == ang[3] || $("#3.piece").data("angle") == (ang[3] + 2) % 4) &&
    //         (parseInt($("#3.piece").parent().attr('id')) == pos[3])) {
    //         return;
    //     } else {
    //         flag = false;
    //     }
    // });
    // if (flag) {
    //     console.log('You Win!')
    // }
}