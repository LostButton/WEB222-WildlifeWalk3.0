function validate(event) {
  // TODO - write custom validation logic to validate the longitude and latitude
  // values. The latitude value must be a number between -90 and 90; the
  // longitude value must be a number between -180 and 180. If either/both are
  // invalid, show the appropriate error message in the form, and stop the
  // form from being submitted. If both values are valid, allow the form to be
  // submitted.
  var lat = parseInt(document.querySelector("#lat").value);
  var long = parseInt(document.querySelector("#long").value);

  var latError = document.getElementById("errorLat");
  var longError = document.getElementById("errorLong");

  resetErrors(latError, longError);
  let validation = true;
  //Validating the lat and long
  if (isNaN(lat) || lat < -90 || lat > 90) {
    showError(latError);
    validation = false;
  }
  if (isNaN(long) || long < -180 || long > 180) {
    longError.style.display = "inline-block";
    validation = false;
  }

  return validation;
}

function showError(element) {
  element.style.display = "inline-block";
}

function resetErrors(error1, error2) {
  error1.style.display = "none";
  error2.style.display = "none";
}

// Wait for the window to load, then set up the submit event handler for the form.
window.onload = function () {
  const form = document.querySelector("form");
  form.onsubmit = validate;
};
