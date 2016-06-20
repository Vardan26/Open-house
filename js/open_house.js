/**
 * Created by Vardan on 23.05.2016.
 */




$(" .sticBox__stic").on('click', function () {
    $(".activeStick").removeClass("activeStick");
    $(this).addClass("activeStick");
});


$(".sticBox__stic1").on('click', function () {
    $(".first_image").removeClass("hidden");
});

$(".sticBox__stick2").on('click', function () {
    $(".second_image").removeClass("hidden");
});


$(".sticBox__stic3").on('click', function () {
    $(".third_image").removeClass("hidden");
});






$(".availabilityRooms__images").on('click', function () {
    $('.availabilityRooms').not($(this).closest('.availabilityRooms')).addClass("hidden");
    $(".floorplan").addClass("hidden");
    $('.availabilityPhotoGallery').not($(this).closest('.availabilityPhotoGallery')).removeClass("hidden");


});

$(".availabilityRooms__floorplan").on('click', function () {
    $('.availabilityRooms').not($(this).closest('.availabilityRooms')).addClass("hidden");
    $(".availabilityPhotoGallery").addClass("hidden");
    $(".floorplan").removeClass("hidden");

});




$(" .availabilityMenu__links").on('click', function () {
    $(".availabilityMenu__active").removeClass("availabilityMenu__active");
    $(this).addClass("availabilityMenu__active");
});

$(".allLinks").on('click', function () {
    $(".availabilityRooms").removeClass("hidden");
    $(".availabilityPhotoGallery, .floorplan").addClass("hidden");
});

$(".studioLinks").on('click', function () {
    $(".oneBedRooms, .twoBedRooms, .availabilityPhotoGallery, .floorplan").addClass("hidden");
    $(".studioRooms").removeClass("hidden");
});

$(".oneBedLinks").on('click', function () {
    $(".studioRooms, .twoBedRooms, .availabilityPhotoGallery, .floorplan").addClass("hidden");
    $(".oneBedRooms").removeClass("hidden");
});

$(".twoBedLinks").on('click', function () {
    $(".studioRooms, .oneBedRooms,.availabilityPhotoGallery, .floorplan").addClass("hidden");
    $(".twoBedRooms").removeClass("hidden");
});



function initialize() {
    var mapProp = {
        center: new google.maps.LatLng(40.1791857, -44.499103),
        zoom: 6,
        mapTypeId: google.maps.MapTypeId.TERRAIN
    };
    var map = new google.maps.Map(document.getElementById("googleMap"), mapProp);
}
google.maps.event.addDomListener(window, 'load', initialize);