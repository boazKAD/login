import toast from "react-hot-toast";

export async function usernameValidater(values) {
  const errors = usernameVerify({}, values);
  return errors;
}

// validetes password
export async function passwordVeridater(values) {
  const errors = passwordVerify({}, values);
  return errors;
}
// validetes password
function passwordVerify(error = {}, values) {
  const spacialChar = /[`!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/;
  if (!values.password) {
    error.password = toast.error("Password is required ...!");
  } else if (values.password.length < 4) {
    error.password = toast.error("Password must be more than 4");
  } else if (values.password.includes(" ")) {
    error.password = toast.error("Wrong Password ...!");
  } else if (!spacialChar.test(values.password)) {
    error.password = toast.error("Password must have spacialCharactor ...!");
  }

  return error;
}
// Validates profile page
export async function ProfileValidation(values){
    const errors =EmailVelify({},values);
    return errors
}

export async function RegisterValidation(values) {
  const errors = passwordVerify({}, values);
  usernameVerify(errors, values);
  EmailVelify(errors, values);
  return errors;
}
// validate reset password
export async function ResetPasswordValidation(values) {
  const errors = passwordVerify({}, values);
  if (values.password !== values.confirm_Pwd) {
    errors.exist = toast.error("password not match ...!");
  }

  return errors;
}

// validetes username
function usernameVerify(error = {}, values) {
  if (!values.username) {
    error.username = toast.error("Username is required ...!");
  } else if (values.username.includes(" ")) {
    error.username = toast.error("Invalid Username ...!");
  }
  return error;
}
function EmailVelify(error = {}, values) {
  if (!values.Email) {
    error.values = toast.error("Email required");
  } else if (values.Email.includes(" ")) {
    error.values = toast.error(" worng email");
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
    error.values = toast.error("Invalid email address");
  }
  return error;
}
