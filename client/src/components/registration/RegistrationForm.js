import React, { useState } from "react";
import FormError from "../layout/FormError";
import config from "../../config";

const RegistrationForm = () => {
  const [userPayload, setUserPayload] = useState({
    username: "",
    email: "",
    password: "",
    passwordConfirmation: "",
  });

  const [errors, setErrors] = useState({});

  const [shouldRedirect, setShouldRedirect] = useState(false);

  const validateInput = (payload) => {
    setErrors({});
    const { email, password, passwordConfirmation, username } = payload;
    const emailRegexp = config.validation.email.regexp;
    let newErrors = {};
    if (!email.match(emailRegexp)) {
      newErrors = {
        ...newErrors,
        email: "is invalid",
      };
    }

    if (username.trim() == "") {
      newErrors = {
        ...newErrors,
        username: "is required",
      };
    }

    if (password.trim() == "") {
      newErrors = {
        ...newErrors,
        password: "is required",
      };
    }

    if (passwordConfirmation.trim() === "") {
      newErrors = {
        ...newErrors,
        passwordConfirmation: "is required",
      };
    } else {
      if (passwordConfirmation !== password) {
        newErrors = {
          ...newErrors,
          passwordConfirmation: "does not match password",
        };
      }
    }

    setErrors(newErrors);
  };

  const onSubmit = async (event) => {
    event.preventDefault();
    validateInput(userPayload);
    try {
      if (Object.keys(errors).length === 0) {
        const response = await fetch("/api/v1/users", {
          method: "post",
          body: JSON.stringify(userPayload),
          headers: new Headers({
            "Content-Type": "application/json",
          }),
        });
        if (!response.ok) {
          const errorMessage = `${response.status} (${response.statusText})`;
          const error = new Error(errorMessage);
          throw error;
        }
        const userData = await response.json();
        setShouldRedirect(true);
      }
    } catch (err) {
      console.error(`Error in fetch: ${err.message}`);
    }
  };

  const onInputChange = (event) => {
    setUserPayload({
      ...userPayload,
      [event.currentTarget.name]: event.currentTarget.value,
    });
  };

  if (shouldRedirect) {
    location.href = "/venues";
  }

  return (
    <div className="bg-black">
      <div className="card bg-black text-white">
        <h1 className="card-title">Sign Up</h1>
        <form className="card" onSubmit={onSubmit}>
          <div className="mb-2">
            <label className="card-body">
              Username
              <input
                type="text"
                name="username"
                value={userPayload.username}
                onChange={onInputChange}
                className="card bg-black text-white"
              />
              <div className="text-info">
                <FormError error={errors.username} />
              </div>
            </label>
          </div>
          <div className="mb-2">
            <label className="card-body">
              Email
              <input
                type="text"
                name="email"
                value={userPayload.email}
                onChange={onInputChange}
                className="card bg-black text-white"
              />
              <div className="text-info">
                <FormError error={errors.email} />
              </div>
            </label>
          </div>
          <div className="mb-2">
            <label className="card-body">
              Password
              <input
                type="password"
                name="password"
                value={userPayload.password}
                onChange={onInputChange}
                className="card bg-black text-white"
              />
              <div className="text-info">
                <FormError error={errors.password} />
              </div>
            </label>
          </div>
          <div className="mb-2">
            <label className="card-body">
              Confirm Password
              <input
                type="password"
                name="passwordConfirmation"
                value={userPayload.passwordConfirmation}
                onChange={onInputChange}
                className="card bg-black"
              />
              <div className="text-info">
                <FormError error={errors.passwordConfirmation} />
              </div>
            </label>
          </div>
          <div>
            <input type="submit" className="special-button bg-green mt-1 mb-2" value="Sign Up" />
          </div>
        </form>
      </div>
    </div>
  );
};

export default RegistrationForm;
