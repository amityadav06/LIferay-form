const prevBtns = document.querySelectorAll(".btn-prev");
const nextBtns = document.getElementById("next-btn");
const progress = document.getElementById("progress");
const formSteps = document.querySelectorAll(".form-step");
const progressSteps = document.querySelectorAll(".progress-step");

let formStepsNum = 0;
let a = false,
  b = false,
  c = false,
  d = false,
  e = false,
  f = false,
  g = false,
  h = false;

const fname = document.getElementById("firstname");
const ferror = document.getElementById("firsterror");
const lname = document.getElementById("lastname");
const lerror = document.getElementById("lasterror");
const emial = document.getElementById("useremail");
const maileror = document.getElementById("mailerror");
const designation = document.getElementById("designation");
const desigerror = document.getElementById("desigerror");
const organization = document.getElementById("organization");
const orgerror = document.getElementById("orgerror");
const select1 = document.getElementById("select1");
const sel1 = document.getElementById("sel1");
const select2 = document.getElementById("select2");
const sel2 = document.getElementById("sel2");
const select3 = document.getElementById("select3");
const sel3 = document.getElementById("sel3");
const submitBtn = document.getElementById("submit-btn");

const validateFirst = (inp) => {
  if (inp.value != "") {
    ferror.innerHTML = "";
    fname.style.backgroundColor = "#f5f5f6";
    a = true;
  } else {
    ferror.innerHTML = "This is required field";
    fname.style.backgroundColor = "#ffecec";
    a = false;
  }
};
const validateLast = (inp) => {
  if (inp.value != "") {
    lerror.innerHTML = "";
    lname.style.backgroundColor = "#f5f5f6";
    b = true;
  } else {
    lerror.innerHTML = "This is required field";
    lname.style.backgroundColor = "#ffecec";
    b = false;
  }
};
function validateMail(inp) {
  const emailCheck = /^[A-Za-z_]{3,}@[A-Za-z]{3,}[.]{1}[A-Za-z]{2,6}$/;
  if (emial.value != "") {
    emial.style.backgroundColor = "#f5f5f6";

    if (inp.value.match(emailCheck)) {
      maileror.innerHTML = "";
      emial.style.backgroundColor = "#f5f5f6";
      c = true;
    } else {
      maileror.innerHTML = "Please enter your official email address";
      emial.style.backgroundColor = "#ffecec";
      c = false;
    }
  } else {
    maileror.innerHTML = "This is required field";
    emial.style.backgroundColor = "#ffecec";
    c = false;
  }
}
function validateDes(inp) {
  if (designation.value != "") {
    desigerror.innerHTML = "";
    designation.style.backgroundColor = "#f5f5f6";
    d = true;
  } else {
    desigerror.innerHTML = "This is required field";
    designation.style.backgroundColor = "#ffecec";
    d = false;
  }
}
function validateOrg(inp) {
  if (organization.value != "") {
    orgerror.innerHTML = "";
    organization.style.backgroundColor = "#f5f5f6";
    e = true;
  } else {
    orgerror.innerHTML = "This is required field";
    organization.style.backgroundColor = "#ffecec";
    e = false;
  }
}
function validateSel1(inp) {
  if (select1.value == "Choose an option") {
    sel1.innerHTML = "This is required field";
    select1.style.backgroundColor = "#ffecec";
    f = false;
  } else {
    sel1.innerHTML = "";
    select1.style.backgroundColor = "#f5f5f6";
    f = true;
  }
}
function validateSel2(inp) {
  if (select2.value == "Choose an option") {
    sel2.innerHTML = "This is required field";
    select2.style.backgroundColor = "#ffecec";
    g = false;
  } else {
    sel2.innerHTML = "";
    select2.style.backgroundColor = "#f5f5f6";
    g = true;
  }
}
function validateText(inp) {
  if (select3.value != "") {
    sel3.innerHTML = "";
    select3.style.backgroundColor = "#f5f5f6";
    h = true;
  } else {
    sel3.innerHTML = "This is required field";
    select3.style.backgroundColor = "#ffecec";
    h = false;
  }
}
nextBtns.addEventListener("click", validate);
function validate() {
  if (a === true && b === true && c === true && d === true && e === true) {
    formStepsNum++;
    updateFormSteps();
    updateProgressbar();
  }
}

prevBtns.forEach((btn) => {
  btn.addEventListener("click", () => {
    formStepsNum--;
    updateFormSteps();
    updateProgressbar();
  });
});

function updateFormSteps() {
  formSteps.forEach((formStep) => {
    formStep.classList.contains("form-step-active") &&
      formStep.classList.remove("form-step-active");
  });

  formSteps[formStepsNum].classList.add("form-step-active");
}

function updateProgressbar() {
  progressSteps.forEach((progressStep, idx) => {
    if (idx < formStepsNum + 1) {
      progressStep.classList.add("progress-step-active");
    } else {
      progressStep.classList.remove("progress-step-active");
    }
  });

  const progressActive = document.querySelectorAll(".progress-step-active");

  progress.style.width =
    ((progressActive.length - 1) / (progressSteps.length - 1)) * 100 + "%";
  progress.style.backgroundColor = "#014EB3";
}

submitBtn.addEventListener("click", (e) => {
  e.preventDefault();
  if (f === true && g === true && h === true) {
    window.location.href = "action_page2.html";
  }
});
