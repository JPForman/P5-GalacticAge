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

    $("#earthOut").text(userAges.earthAge)
    $("#mercuryOut").text(userAges.mercuryAge)
    $("#venusOut").text(userAges.venusAge)
    $("#marsOut").text(userAges.marsAge)
    $("#jupiterOut").text(userAges.jupiterAge)
  });
});
