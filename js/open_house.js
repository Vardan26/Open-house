/**
 * Created by Vardan on 23.05.2016.
 */
$(".second_image, .third_image").addClass("hidden");
$(".first_image").show();
$(".slide_sticks .stick").removeClass("active_stick");
$(".first_stick").addClass("active_stick");

$(".first_stick").click(function () {
    $(".slide_sticks .stick").removeClass("active_stick");
    $(this).addClass("active_stick");
    $(".second_image, .third_image").hide();
    $(".first_image").show();
});
$(".second_stick").click(function () {
    $(".slide_sticks .stick").removeClass("active_stick");
    $(this).addClass("active_stick");
    $(".first_image, .third_image").hide();
    $(".second_image").show();
});
$(".third_stick").click(function () {
    $(".slide_sticks .stick").removeClass("active_stick");
    $(this).addClass("active_stick");
    $(".first_image, .second_image").hide();
    $(".third_image").show();
});
console.log("asdf");