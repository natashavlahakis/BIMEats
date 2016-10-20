/*jslint browser: true*/
/*global $*/
$(document).ready(function () {
  "use strict";
  var date_input = $('input[name="date"]'), //our date input has the name "date"
    container = $('.bootstrap-iso form').length > 0 ? $('.bootstrap-iso form').parent() : "body",
    options = {
      format: 'mm/dd/yyyy',
      container: container,
      todayHighlight: true,
      autoclose: true
    };
  date_input.datepicker(options);
});