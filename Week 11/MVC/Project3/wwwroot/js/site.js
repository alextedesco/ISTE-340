// Please see documentation at https://docs.microsoft.com/aspnet/core/client-side/bundling-and-minification
// for details on configuring this project to bundle and minify static web assets.

// Write your JavaScript code.

$(document).ready(function () {
    $('.testAcc').accordion({
            // Closes the accordions by default
            collapsible: true,
            active: false    
        });

        // Creates Tabs
        $('#pepTab').tabs();
        $('#empTab').tabs();

    $('#allPeople').fadeIn(1000);


    $('.clickable').on('click', function () {
        var pepInfo = ($(this).data('pep-info'));
       
        var detailsHtml = "";

        // Iterate through pepInfo properties
        for (var prop in pepInfo) {
            // Check for each field in the people object
            if (pepInfo.hasOwnProperty(prop) && prop !== "imagePath") {
                // Excludes empty/null values and the imagePath value
                if (pepInfo[prop] != null && pepInfo[prop] !== "") {
                    // Adds value to the Dialog
                    detailsHtml += prop + ": " + pepInfo[prop] + "<br>";
                }
            }
        }

        $('#people-modal-content').html(detailsHtml)

        $('#people-modal').dialog({
            modal: true,
            title: "Person Details",
            width: 400,
            buttons: {
                // Allows dialog to be closed onclick
                Ok: function () {
                    $(this).dialog('close');
                }
            },
            dialogClass: 'dialog'
        });
    });

    $('.clickable').on('click', function () {
        var courseInfo = ($(this).data('course-info'));
        console.log(courseInfo);

        // Adds course information to the Dialog
        $('#minor-modal-content').html("<b>Course ID: </b>" + courseInfo.courseID + "<br><b>Title: </b>" + courseInfo.title + "<br><b>Description: </b>" + courseInfo.description);

        $('#minor-modal').dialog({
            modal: true,
            title: "Course Details",
            width: 400,
            buttons: {
                // Allows dialog to be closed onclick
                Ok: function () {
                    $(this).dialog('close');
                }
            }
        });
    });

    // Creates the tables for the Employment/CoOp data
    $('#one table').DataTable({
        // Makes the header sticky
        fixedHeader: true,
        // Set default table page length to 50
        "pageLength": 50
    });

    $('#two table').DataTable({
        // Makes the header sticky
        fixedHeader: true,
        // Set default table page length to 50
        "pageLength": 50
    });


    // imageList for the images of Golisano on the About page
    $("#basicExample").justifiedGallery({
        rowHeight: 160,
        margins: 8,
        images: images,
        lastRow: 'justify',
        randomize: true,
        fixedHeight: false,
        captions: false
    });

});