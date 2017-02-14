/*jshint jquery: true, es5: true, quotmark: double, strict: true*/
$(function() {
"use strict";
    $("#contactForm input,#contactForm textarea").jqBootstrapValidation({
        preventSubmit: true,
        submitError: function($form, event, errors) {
            // additional error messages or events
        },
        submitSuccess: function($form, event) {
            // Prevent spam click and default submit behaviour
            $("#btnSubmit").attr("disabled", true);
            event.preventDefault();
            
            
            // Get club email from Jekyll site.data.clubInfo.clubEmail via the DOM
            var clubEmail =$("#clubEmail").attr("data-clubemail");
            console.log("\nclubEmail = " + clubEmail);

            
            // get values from FORM
            var name = $("input#name").val();
            var email = $("input#email").val();
            var phone = $("input#phone").val();
                if (phone === "") {var message = $("textarea#message").val() + "\n Telephone number not supplied";}
                    else {var message = $("textarea#message").val() + "\n My telephone number is " + phone;}
            
            
            var firstName = name; // For Success/Failure Message
            // Check for white space in name for Success/Fail message
            if (firstName.indexOf(' ') >= 0) {
                firstName = name.split(' ').slice(0, -1).join(' ');
            }
            
            
    //******    send to formspree    *******
        $.ajax({
            url:"https://formspree.io/"+clubEmail,
            method:"POST",
            data:{
                name:name,
                _replyto:email,
                 email:email,
                comments:message,
                _subject:"A Form Submission",
            },
            dataType:"json",
            success:function() {
                console.log("success");
                // Enable button & show success message
                $("#btnSubmit").attr("disabled", false);
                $("#success").html("<div class='alert alert-success'>");
                $("#success > .alert-success").html("<button type='button' class='close' data-dismiss='alert' aria-hidden='true'>&times;")
                        .append("</button>");
                $("#success > .alert-success")
                        .append("<strong>Your message has been sent. </strong>");
                $("#success > .alert-success")
                        .append("</div>");

                //clear all fields
                $("#contactForm").trigger("reset");
            },
            
            error: function() {
                // Fail message
                $("#success").html("<div class='alert alert-danger'>");
                $("#success > .alert-danger").html("<button type='button' class='close' data-dismiss='alert' aria-hidden='true'>&times;")
                        .append("</button>");
                $("#success > .alert-danger").append("<strong>Sorry " + firstName + ", it seems that my mail server is not responding. Please try again later!");
                $("#success > .alert-danger").append("</div>");
                //clear all fields
                $("#contactForm").trigger("reset");
                },

        })
            
      },
        filter: function() {
            return $(this).is(":visible");
        },
    });

    $("a[data-toggle=\"tab\"]").click(function(e) {
        e.preventDefault();
        $(this).tab("show");
    });
});

// When clicking on Full hide fail/success boxes
$("#name").focus(function() {
    "use strict";
    $("#success").html("");
});
