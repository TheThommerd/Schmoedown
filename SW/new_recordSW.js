// form.js
const formId_SW = "save-later-form-SW"; // ID of the form
const url_SW = location.href; //  href for the page
const formIdentifier_SW = `${url_SW} ${formId_SW}`; // Identifier used to identify the form
const saveButton_SW = document.querySelector("#save"); // select save button
const alertBox_SW = document.querySelector(".alert"); // select alert display div
let form_SW = document.querySelector(`#${formId_SW}`); // select form
let formElements_SW = form_SW.elements; // get the elements in the form

const getFormData_SW = () => {
  let data = { [formIdentifier_SW]: {} };
  for (const element of formElements_SW) {
    if (element.name.length > 0) {
      data[formIdentifier_SW][element.name] = element.value;
    }
  }
  return data;
};

saveButton_SW.onclick = event => {
  event.preventDefault();
  data = getFormData_SW();
  localStorage.setItem("record_SW", JSON.stringify(data[formIdentifier_SW]));
};

const populateForm_SW = () => {
  if (localStorage.key(formIdentifier_SW)) {
    const savedData = JSON.parse(localStorage.getItem("record_SW")); // get and parse the saved data from localStorage
    for (const element of formElements_SW) {
      if (element.name in savedData) {
        element.value = savedData[element.name];
      }
    }
  }
};

document.onload = populateForm_SW(); // populate the form when the document is loaded
