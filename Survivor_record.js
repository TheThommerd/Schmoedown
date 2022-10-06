const formId_Survivor = "save-later-form-Survivor"; // ID of the form
const url_Survivor = location.href; //  href for the page
const formIdentifier_Survivor = `${url_Survivor} ${formId_Survivor}`; // Identifier used to identify the form
const saveButton_Survivor = document.querySelector("#save"); // select save button
const alertBox_Survivor = document.querySelector(".alert"); // select alert display div
let form_Survivor = document.querySelector(`#${formId_Survivor}`); // select form
let formElements_Survivor = form_Survivor.elements; // get the elements in the form

const getFormData_Survivor = () => {
  let data = { [formIdentifier_Survivor]: {} };
  for (const element of formElements_Survivor) {
    if (element.name.length > 0) {
      data[formIdentifier_Survivor][element.name] = element.value;
    }
  }
  return data;
};

saveButton_Survivor.onclick = event => {
  event.preventDefault();
  data = getFormData_Survivor();
  localStorage.setItem("record_Survivor", JSON.stringify(data[formIdentifier_Survivor]));
};

const populateForm_Survivor = () => {
  if (localStorage.key(formIdentifier_Survivor)) {
    const savedData = JSON.parse(localStorage.getItem("record_Survivor")); // get and parse the saved data from localStorage
    for (const element of formElements_Survivor) {
      if (element.name in savedData) {
        element.value = savedData[element.name];
      }
    }
  }
};

document.onload = populateForm_Survivor(); // populate the form when the document is loaded