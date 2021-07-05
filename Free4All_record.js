// form.js
const formId_F4 = "save-later-form-Free4All"; // ID of the form
const url_F4 = location.href; //  href for the page
const formIdentifier_F4 = `${url_F4} ${formId_F4}`; // Identifier used to identify the form
const saveButton_F4 = document.querySelector("#save"); // select save button
const alertBox_F4 = document.querySelector(".alert"); // select alert display div
let form_F4 = document.querySelector(`#${formId_F4}`); // select form
let formElements_F4 = form_F4.elements; // get the elements in the form

const getFormData_F4 = () => {
  let data = { [formIdentifier_F4]: {} };
  for (const element of formElements_F4) {
    if (element.name.length > 0) {
      data[formIdentifier_F4][element.name] = element.value;
    }
  }
  return data;
};

saveButton_F4.onclick = event => {
  event.preventDefault();
  data = getFormData_F4();
  localStorage.setItem("record_F4", JSON.stringify(data[formIdentifier_F4]));
};

const populateForm_F4 = () => {
  if (localStorage.key(formIdentifier_F4)) {
    const savedData = JSON.parse(localStorage.getItem("record_F4")); // get and parse the saved data from localStorage
    for (const element of formElements_F4) {
      if (element.name in savedData) {
        element.value = savedData[element.name];
      }
    }
  }
};

document.onload = populateForm_F4(); // populate the form when the document is loaded
