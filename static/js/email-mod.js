(function () {
    // Find all the elements on the page that use class="m-protected"
    var allElements = document.getElementsByClassName('m-protected-mod');

    // Loop through all the elements, and update them
    for (var i = 0; i < allElements.length; i++) {
        // fetch the hex-encoded string from the href property
        var encoded = allElements[i].getAttribute('href');

        // decode the email address
        var decoded = atob(encoded.substring(1));

        // Set the link to be a "mailto:" link
        allElements[i].href = 'mailto:' + decoded;

    }

    allElements = document.getElementsByClassName('m-protected-mod-innertext');

    // Loop through all the elements, and update them
    for (var i = 0; i < allElements.length; i++) {
        encoded = allElements[i].innerText;

        // decode the email address
        decoded = atob(encoded.substring(1));

        // Replace the innerText
        allElements[i].innerText = decoded;
    }

    // ### same for phone ###
    // Find all the elements on the page that use class="m-protected"
    var allElements = document.getElementsByClassName('p-protected-mod');

    // Loop through all the elements, and update them
    for (var i = 0; i < allElements.length; i++) {
        // fetch the hex-encoded string from the href property
        var encoded = allElements[i].getAttribute('href');

        // decode the email address
        var decoded = atob(encoded.substring(1));

        // Set the link to be a "mailto:" link
        allElements[i].href = 'tel:' + decoded;

    }

    allElements = document.getElementsByClassName('p-protected-mod-innertext');

    // Loop through all the elements, and update them
    for (var i = 0; i < allElements.length; i++) {
        encoded = allElements[i].innerText;

        // decode the email address
        decoded = atob(encoded.substring(1));

        // Replace the innerText
        allElements[i].innerText = decoded;
    }


    // ### same for Links ###
    // Find all the elements on the page that use class="m-protected"
    var allElements = document.getElementsByClassName('l-protected-mod');

    // Loop through all the elements, and update them
    for (var i = 0; i < allElements.length; i++) {
        // fetch the hex-encoded string from the href property
        var encoded = allElements[i].getAttribute('href');

        // decode the email address
        var decoded = atob(encoded.substring(1));

        // Set the link to be a "mailto:" link
        allElements[i].href = decoded;

    }

    allElements = document.getElementsByClassName('l-protected-mod-innertext');

    // Loop through all the elements, and update them
    for (var i = 0; i < allElements.length; i++) {
        encoded = allElements[i].innerText;

        // decode the email address
        decoded = atob(encoded.substring(1));

        // Replace the innerText
        allElements[i].innerText = decoded;
    }

})();
