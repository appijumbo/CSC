/*global document: false */
/*jshint jquery: true, es5: true, quotmark: double, strict: true*/
/*
 * Start Bootstrap - Freelancer Bootstrap Theme (http://startbootstrap.com)
 * Code licensed under the Apache License v2.0.
 * For details, see http://www.apache.org/licenses/LICENSE-2.0.
 */

// jQuery for page scrolling feature - requires jQuery Easing plugin
//  top is offset by 180px to make up for nav bar thickness

jQuery( document ).ready(function( $ ) {
"use strict";


        $(function() {
            $("body").on("click", ".page-scroll a", function(event) {
                var $anchor = $(this);
                $("html, body").stop().animate({
                    scrollTop: $($anchor.attr("href")).offset().top -180
                }, 1500, "easeInOutExpo");
                event.preventDefault();
            });

            /*
            $('#tandcs_link').toggle(function() {
                    $('#tandcs').attr('data-display','show');
                    $('html,body').animate({
                    scrollTop: $('#tandcs').offset().top -245
                    }, 1500, 'easeInOutExpo');
                    }, 
                    function() {
                    $('#tandcs').attr('data-display','hidden');
                    });
            */

            });


        // Floating label headings for the contact form
        $(function() {
           $("body").on("input propertychange", ".floating-label-form-group", function(e) {
               $(this).toggleClass("floating-label-form-group-with-value", !! $(e.target).val());
            }).on("focus", ".floating-label-form-group", function() {
               $(this).addClass("floating-label-form-group-with-focus");
            }).on("blur", ".floating-label-form-group", function() {
                $(this).removeClass("floating-label-form-group-with-focus");
            });
        });


        // Highlight the top nav as scrolling occurs
        // make sure when scroll the nav bar thickness is also offset
        $("body").scrollspy({
            target: ".navbar-fixed-top", offset:200
        });

        // Closes the Responsive Menu on Menu Item Click
        $(".navbar-collapse ul li a").click(function() {
            $(".navbar-toggle:visible").click();
        });

});
