import React from "react";
import InputField from "../components/InputField";

// adjust the example by editing these values
window.PENALTY = 150_000;
const FIELDS_COUNT = 10;

const fieldNames = Array.from(
  { length: FIELDS_COUNT },
  (v, index) => `field${index}`
);

const initialFieldValues = {};
const initialTouchedFields = {};
for (const name of fieldNames) {
  initialFieldValues[name] = "";
  initialTouchedFields[name] = false;
}

function getFieldError(value) {
  if (!value) return "field is required";

  const valueIsLowerCase = value === value.toLowerCase();
  const valueIsLongEnough = value.length >= 3;
  const valueIsShortEnough = value.length <= 30;

  if (!valueIsLowerCase) {
    return "value must be lower case";
  } else if (!valueIsLongEnough) {
    return "value must be at least 3 characters long";
  } else if (!valueIsShortEnough) {
    return "value must be no longer than 10 characters";
  }
  return null;
}

/**
 * As this is a contrived example, I've added this to simulate components that
 * do a lot of extra work while rendering. Update the penalty variable at the
 * top to adjust how much of problem this "extra work" causes.
 */
let currentPenaltyValue = 2;
function PenaltyComp() {
  for (let index = 2; index < window.PENALTY; index++) {
    currentPenaltyValue = currentPenaltyValue ** index / Math.random();
  }
  return null;
}

function FastInput({ name, wasSubmitted }) {
  const [value, setValue] = React.useState("");
  const [touched, setTouched] = React.useState(false);
  const errorMessage = getFieldError(value);
  const displayErrorMessage = (wasSubmitted || touched) && errorMessage;

  return (
    <div key={name}>
      <PenaltyComp />
      <label htmlFor={`${name}-input`}>{name}:</label>{" "}
      <InputField
        id={`${name}-input`}
        name={name}
        placeholder={name}
        type="text"
        onChange={(event) => setValue(event.currentTarget.value)}
        onBlur={() => setTouched(true)}
        pattern="[a-z]{1,30}"
        aria-describedby={displayErrorMessage ? `${name}-error` : undefined}
      />
      {displayErrorMessage ? (
        <span role="alert" id={`${name}-error`} className="error-message">
          {errorMessage}
        </span>
      ) : null}
    </div>
  );
}

function FastForm() {
  const [wasSubmitted, setWasSubmitted] = React.useState(false);

  function handleSubmit(event) {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const fieldValues = Object.fromEntries(formData.entries());

    const formIsValid = Object.values(fieldValues).every(
      (value) => !getFieldError(value)
    );

    setWasSubmitted(true);
    if (formIsValid) {
      event.currentTarget.reset();
      console.log(`Fast Form Submitted`, fieldValues);
    }
  }


  return (
    <form noValidate onSubmit={handleSubmit}>
      {console.log("render")}
      {/* {fieldNames.map((name) => ( */}
      <FastInput
        key="First Name"
        name="First Name"
        wasSubmitted={wasSubmitted}
      />
      <FastInput key="Last Name" name="Last Name" wasSubmitted={wasSubmitted} />
      <FastInput key="Age" name="Age" wasSubmitted={wasSubmitted} />
      {/* ))} */}
      <button type="submit">Submit</button>
    </form>
  );
}
export default FastForm;
