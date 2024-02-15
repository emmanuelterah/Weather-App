import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import './Form.css';

const WeatherForm = ({ handleSubmit }) => {
  return (
    <Formik
      initialValues={{ city: '', country: '' }}
      onSubmit={handleSubmit}
    >
      <Form className='form'>
        <Field className='input' type='text' name='city' placeholder='City...' />
        <ErrorMessage name="city" component="div" className="error-message" />
        <Field className='input' type='text' name='country' placeholder='Country...' />
        <ErrorMessage name="country" component="div" className="error-message" />
        <button className='btn btn-outline-info' type="submit">Get Weather</button>
      </Form>
    </Formik>
  );
};

export default WeatherForm;