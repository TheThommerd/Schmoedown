// form.js
const formId_IG = "save-later-form-IG"; // ID of the form
const url_IG = location.href; //  href for the page
const formIdentifier_IG = `${url_IG} ${formId_IG}`; // Identifier used to identify the form
const saveButton_IG = document.querySelector("#save"); // select save button
const alertBox_IG = document.querySelector(".alert"); // select alert display div
let form_IG = document.querySelector(`#${formId_IG}`); // select form
let formElements_IG = form_IG.elements; // get the elements in the form

const getFormData_IG = () => {
  let data = { [formIdentifier_IG]: {} };
  for (const element of formElements_IG) {
    if (element.name.length > 0) {
      data[formIdentifier_IG][element.name] = element.value;
    }
  }
  return data;
};

saveButton_IG.onclick = event => {
  event.preventDefault();
  data = getFormData_IG();
  localStorage.setItem("record_IG", JSON.stringify(data[formIdentifier_IG]));
};

const populateForm_IG = () => {
  if (localStorage.key(formIdentifier_IG)) {
    const savedData = JSON.parse(localStorage.getItem("record_IG")); // get and parse the saved data from localStorage
    for (const element of formElements_IG) {
      if (element.name in savedData) {
        element.value = savedData[element.name];
      }
    }
  }
};

document.onload = populateForm_IG(); // populate the form when the document is loaded
