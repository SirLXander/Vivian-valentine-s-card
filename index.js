$(document).ready(function() {


    var envelope = $("#envelope"); // Envelope element
    var btn_open = $("#open"); // Open button
    var btn_reset = $("#reset"); // Reset button
    var music = $("#bg-music")[0]; // Get the audio element


    envelope.click(openCard); // Click on envelope to open
    btn_open.click(openCard); // Open button to open the envelope
    btn_reset.click(closeCard); //  Reset button to close the envelope


    function openCard() { // Open the envelope
        envelope.addClass("open") // add open class
                .removeClass("close"); // remove close class


        music.volume = 0.4;  // Set volume to 40%
        music.play(); // Play the music
    }


    function closeCard() { // Close the envelope
        envelope.addClass("close") // add close class
                .removeClass("open"); // remove open class


        music.pause(); // Pause the music
        music.currentTime = 0; // Reset music to start
    }


});
