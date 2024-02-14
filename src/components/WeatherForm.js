import React from "react";
import { Formik, Form, Field } from "formik";


function WeatherForm({handleFormSubmit}) {
  const handleFormSubmit = async (values, { setSubmitting }) => {
    // Assuming handleFormSubmit is a prop passed to WeatherForm component
    // You might want to rename it to avoid confusion
    handleFormSubmit(values);
    setSubmitting(false);
};

  return (
    <Formik
      initialValues={{ city: "", country: "" }}
      onSubmit={handleFormSubmit}
    >
      {({ isSubmitting }) => (
        <Form className="form">
          {/* Input field for city */}
          <Field
            className="input"
            type="text"
            name="city"
            placeholder="City..."
          />
          {/* Input field for country */}
          <Field
            className="input"
            type="text"
            name="country"
            placeholder="Country..."
          />
          {/* Submit button */}
          <button
            className="btn btn-outline-info"
            type="submit"
            disabled={isSubmitting}
          >
            {/* Display 'Get Weather' text */}
            Get Weather
          </button>
        </Form>
      )}
    </Formik>
  );
}

export default WeatherForm;
