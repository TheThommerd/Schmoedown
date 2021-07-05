// form.js
const formId_Iron = "save-later-form-Ironman"; // ID of the form
const url_Iron = location.href; //  href for the page
const formIdentifier_Iron = `${url_Iron} ${formId_Iron}`; // Identifier used to identify the form
const saveButton_Iron = document.querySelector("#save"); // select save button
const alertBox_Iron = document.querySelector(".alert"); // select alert display div
let form_Iron = document.querySelector(`#${formId_Iron}`); // select form
let formElements_Iron = form_Iron.elements; // get the elements in the form

const getFormData_Iron = () => {
  let data = { [formIdentifier_Iron]: {} };
  for (const element of formElements_Iron) {
    if (element.name.length > 0) {
      data[formIdentifier_Iron][element.name] = element.value;
    }
  }
  return data;
};

saveButton_Iron.onclick = event => {
  event.preventDefault();
  data = getFormData_Iron();
  localStorage.setItem("record_Iron", JSON.stringify(data[formIdentifier_Iron]));
};

const populateForm_Iron = () => {
  if (localStorage.key(formIdentifier_Iron)) {
    const savedData = JSON.parse(localStorage.getItem("record_Iron")); // get and parse the saved data from localStorage
    for (const element of formElements_Iron) {
      if (element.name in savedData) {
        element.value = savedData[element.name];
      }
    }
  }
};

document.onload = populateForm_Iron(); // populate the form when the document is loaded
