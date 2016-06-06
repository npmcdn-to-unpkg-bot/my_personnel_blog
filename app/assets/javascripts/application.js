// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, vendor/assets/javascripts,
// or any plugin's vendor/assets/javascripts directory can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file.
//
// Read Sprockets README (https://github.com/rails/sprockets#sprockets-directives) for details
// about supported directives.
//
//= require jquery
//= require jquery_ujs
//= require_tree .
//= require masonry/jquery.masonry


$(document).ready(function() {
    headerStuff();
    
    $('#posts_wrap').masonry({
        itemSelector: '.post_unit'
    });
});

function headerStuff() {
    $('.mobile_nav_toggle').on('click', function() {
        $(this).toggleClass('is_open');
        $('.mobile_nav').toggleClass('is_open')
    });
}
