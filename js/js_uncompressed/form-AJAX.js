/*global document: false */
/*jshint jquery: true, es5: true, quotmark: double, strict: true*/
$(document).ready(function() {
"use strict";
    $("#someForm").on("submit", function(e) {
        e.preventDefault();
        
        //get the name field value
        var name = $("#name").val();
        //get the name field value
        var email = $("#email").val();
        //get the comments
        var message = $("#message").val();
                    
        //pretend we don't need validation
        
        //send to formspree
        $.ajax({
            url:"https://formspree.io/test@appijumbo.com",
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
                $("#formBlock").hide();
                $("#thankyouBlock").show();
            }   

        });     
        
    });

});
