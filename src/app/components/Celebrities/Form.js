/* eslint-disable jsx-a11y/label-has-associated-control */
import React from "react";
import PropTypes from "prop-types";
import { Formik, Form as FormikForm, Field as FormikField } from "formik";
import styled from "styled-components";
import * as Yup from "yup";
import axios from "axios";

import config from "../../config.json";

const FormContainer = styled.div`
  padding: 2rem;
`;

const FormTitle = styled.h1`
  font-size: 2rem;
  font-weight: 150;
  margin: 0;
  text-align: center;
`;

const FormField = styled.div`
  display: flex;
  flex-direction: column;
  padding: 1rem 0;
`;

const Label = styled.label`
  margin-bottom: 0.5rem;
  font-size: 1.2rem;
  font-weight: 150;
`;

const Button = styled.button`
  align-items: center;
  border: none;
  background-color: unset;
  color: white;
  display: flex;
  height: 2rem;
  justify-content: center;
  margin-right: 1.25rem;
`;

const FormButton = styled(Button)`
  border: 1px solid white;
  font-size: 0.75rem;
  margin: 1rem auto;
  outline: none;
  text-align: center;
  transition: background-color 0.3s;
  width: 6.25rem;
  &:hover {
    background-color: white;
    color: #3a3a3a;
  }
`;

const Field = styled(FormikField)`
  background-color: #3a3a3a;
  border: 1px solid white;
  color: white;
  font-size: 1rem;
  outline: none;
  padding: 0.2rem 1rem;
  text-align: left;
  width: 100%;
`;

const initialValues = {
  name: "", description: "", photo: "", category: "Entertainment",
};

const FormSchema = Yup.object().shape({
  name: Yup.string(),
  description: Yup.string(),
  photo: Yup.string(),
  category: Yup.string(),
});

const FormComponent = ({ handleModal, fetchCandidates }) => {
  const handleSubmitCandidate = async (values, setSubmitting) => {
    try {
      await axios.post(`${config.baseUrl}/candidates`, values);
      setSubmitting(false);
      handleModal(false);
      fetchCandidates();
    } catch (error) {
      // eslint-disable-next-line no-console
      console.log(error);
    }
  };

  return (
    <FormContainer>
      <FormTitle>Add Candidate</FormTitle>
      <Formik
        validationSchema={FormSchema}
        initialValues={initialValues}
        onSubmit={(values, { setSubmitting }) => handleSubmitCandidate(values, setSubmitting)}
      >
        {({
          isSubmitting, setFieldTouched, setFieldValue, handleSubmit, values,
        }) => (
          <FormikForm onSubmit={handleSubmit}>
            <FormField>
              <Label htmlFor="name">Name</Label>
              <Field
                id="name"
                name="name"
                required
              />
            </FormField>
            <FormField>
              <Label htmlFor="description">Description</Label>
              <Field
                id="description"
                name="description"
                required
              />
            </FormField>
            <FormField>
              <Label htmlFor="photo">Photo</Label>
              <Field
                id="photo"
                name="photo"
                required
              />
            </FormField>
            <FormField>
              <Label htmlFor="category">Category</Label>
              <Field
                component="select"
                name="category"
                id="category"
                onChange={(event) => setFieldValue("category", event.target.value)}
                onBlur={() => setFieldTouched("category", true)}
                value={values.category}
                required
              >
                <option value="Entertainment">
                  Entertainment
                </option>
                <option value="Business">
                  Business
                </option>
                <option value="Politics">
                  Politics
                </option>
              </Field>
            </FormField>
            <FormButton type="submit" disabled={isSubmitting}>
              Submit
            </FormButton>
          </FormikForm>
        )}
      </Formik>
    </FormContainer>
  );
};

FormComponent.propTypes = {
  handleModal: PropTypes.func.isRequired,
  fetchCandidates: PropTypes.func.isRequired,
};

export default FormComponent;
