// form.js
const formId_Iron = "save-later-form-Ironman"; // ID of the form
const url = location.href; //  href for the page
const formIdentifier = `${url} ${formId_Iron}`; // Identifier used to identify the form
const saveButton = document.querySelector("#save"); // select save button
const alertBox = document.querySelector(".alert"); // select alert display div
let form = document.querySelector(`#${formId_Iron}`); // select form
let formElements = form.elements; // get the elements in the form

const getFormData = () => {
  let data = { [formIdentifier]: {} };
  for (const element of formElements) {
    if (element.name.length > 0) {
      data[formIdentifier][element.name] = element.value;
    }
  }
  return data;
};

saveButton.onclick = event => {
  event.preventDefault();
  data = getFormData();
  localStorage.setItem("record_Iron", JSON.stringify(data[formIdentifier]));
};

const populateForm = () => {
  if (localStorage.key(formIdentifier)) {
    const savedData = JSON.parse(localStorage.getItem("record_Iron")); // get and parse the saved data from localStorage
    for (const element of formElements) {
      if (element.name in savedData) {
        element.value = savedData[element.name];
      }
    }
  }
};

document.onload = populateForm(); // populate the form when the document is loaded
