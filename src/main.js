import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';
import { GalacticAge } from './../src/galacticAge.js';


$(document).ready(function() {
  $("form#ageForm").submit(function(event) {
    event.preventDefault();
    $("#ageForm").hide();
    $(".ageReveal").show();
    let ageInput = $("#ageInput").val();
    let userAges = new GalacticAge(ageInput);
    console.log(userAges);

    $("#earthOut").text(Math.round( userAges.earthAge * 10) / 10);
    $("#mercuryOut").text(Math.round( userAges.mercuryAge * 10) / 10);
    $("#venusOut").text(Math.round( userAges.venusAge * 10) / 10);
    $("#marsOut").text(Math.round( userAges.marsAge * 10) / 10);
    $("#jupiterOut").text(Math.round( userAges.jupiterAge * 10) / 10);
    // $("#earthOut").text(userAges.earthAge)
    // $("#mercuryOut").text(userAges.mercuryAge)
    // $("#venusOut").text(userAges.venusAge)
    // $("#marsOut").text(userAges.marsAge)
    // $("#jupiterOut").text(userAges.jupiterAge)
  });
});
