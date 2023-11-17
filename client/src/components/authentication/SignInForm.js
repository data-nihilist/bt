import React, { useState } from "react";
import config from "../../config";
import FormError from "../layout/FormError";

const SignInForm = () => {
  const [userPayload, setUserPayload] = useState({ email: "", password: "" });
  const [shouldRedirect, setShouldRedirect] = useState(false);
  const [errors, setErrors] = useState({});

  const validateInput = (payload) => {
    setErrors({});
    const { email, password } = payload;
    const emailRegexp = config.validation.email.regexp;
    let newErrors = {};
    if (!email.match(emailRegexp)) {
      newErrors = {
        ...newErrors,
        email: "is invalid",
      };
    }

    if (password.trim() === "") {
      newErrors = {
        ...newErrors,
        password: "is required",
      };
    }

    setErrors(newErrors);
  };

  const onSubmit = async (event) => {
    event.preventDefault()
    validateInput(userPayload)
    try {
      if (Object.keys(errors).length === 0) {
        const response = await fetch("/api/v1/user-sessions", {
          method: "post",
          body: JSON.stringify(userPayload),
          headers: new Headers({
            "Content-Type": "application/json",
          })
        })
        if (!response.ok) {
          const errorMessage = `${response.status} (${response.statusText})`
          const error = new Error(errorMessage)
          throw (error)
        }
        setShouldRedirect(true)
      }
    } catch (err) {
      console.error(`Error in fetch: ${err.message}`)
    }
  }

  const onInputChange = (event) => {
    setUserPayload({
      ...userPayload,
      [event.currentTarget.name]: event.currentTarget.value,
    });
  };

  if (shouldRedirect) {
    location.href = "/";
  }

  return (
      <div className="card container bg-gray text-white">
        <h1 className="card-title">
          Sign In
        </h1>
        <form className="card" onSubmit={onSubmit}>
          <div className="mb-2">
            <label className="card-body">Email
              <input
                type="text"
                name="email"
                value={userPayload.email}
                onChange={onInputChange}
                className="card bg-white text-black"
              />
              <div className="text-info">
                <FormError error={errors.email} />
              </div>
            </label>
          </div>
          <div className="mb-2">
            <label className="card-body">Password
              <input
                type="password"
                name="password"
                value={userPayload.password}
                onChange={onInputChange}
                className="card bg-white text-black"
              />
              <div className="text-info">
                <FormError error={errors.password} />
              </div>
            </label>
          </div>
          <div>
            <input type="submit" className="btn-complement-orange mt-1 mb-2" value="Sign In" />
          </div>
        </form>
      </div>
  );
};

export default SignInForm;