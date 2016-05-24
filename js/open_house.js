/**
 * Created by Vardan on 23.05.2016.
 */


$(" .slide__stick").click(function () {
    $(".active_stick").removeClass("active_stick");
    $(this).addClass("active_stick");
});


$(".slide__first_stick").click(function () {
    $(".second_image, .third_image").hide();
    $(".first_image").show();
});

$(".slide__second_stick").click(function () {
    $(".first_image, .third_image").hide();
    $(".second_image").show();
});


$(".slide__third_stick").click(function () {
    $(".first_image, .second_image").hide();
    $(".third_image").show();
});


$(" .availability_menu_links").click(function () {
    $(".availability__menu__active").removeClass("availability__menu__active");
    $(this).addClass("availability__menu__active");
});

$(".all_links").click(function () {
    $(".availability__section").show();
    $(".image__slider, .floorplan").addClass("hide");
});

$(".studio_links").click(function () {
    $(".one_bed__section, .two_bed__section, .photo_gallery, .floorplan").hide();
    $(".studio__section").show();
});

$(".one_bed_links").click(function () {
    $(".studio__section, .two_bed__section, .photo_gallery, .floorplan").hide();
    $(".one_bed__section").show();
});

$(".two_bed_links").click(function () {
    $(".studio__section, .one_bed__section,.photo_gallery, .floorplan").hide();
    $(".two_bed__section").show();
});


$(".photo_gallery").addClass("hidden");

$(".floorplan").addClass("hidden");

$(".availability__section__fourth_item").click(function () {
    $('.availability__section').not($(this).closest('.availability__section')).hide();
    $(".floorplan").hide();
    $(".photo_gallery").show();

});


$(".availability__section__fifth_item").click(function () {
    $('.availability__section').not($(this).closest('.availability__section')).hide();
    $(".photo_gallery").hide();
    $(".floorplan").show();

});


