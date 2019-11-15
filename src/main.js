import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';

$(document).ready(function() {
  $("form#ageInput").submit(function(event) {
    event.preventDefault();
    let ageInput = $(ageInput).val();
    console.log(ageInput);
  });
});
