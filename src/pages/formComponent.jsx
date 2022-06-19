import React from "react";
import { Formik } from "formik";
import * as Yup from "yup";
import InputField from "../components/InputField";
import Grid from "@mui/material/Grid";
import { Paper } from "@mui/material";
import OWButton from "../components/button";

const FormComponents = () => {
  return (
    <Formik
      initialValues={{ firstName: "", lastName: "", email: "" }}
      validationSchema={Yup.object({
        firstName: Yup.string()
          .max(15, "Must be 15 characters or less")
          .required("Required"),
        lastName: Yup.string()
          .max(20, "Must be 20 characters or less")
          .required("Required"),
        email: Yup.string().email("Invalid email address").required("Required"),
      })}
      onSubmit={(values, { setSubmitting }) => {
        setTimeout(() => {
          alert(JSON.stringify(values, null, 2));
          setSubmitting(false);
        }, 400);
      }}
    >
      {(formik) => (
        <form onSubmit={formik.handleSubmit}>
          <Grid container p={1} style={{ width: "800px", margin: "auto" }}>
            {console.log("ReReder")}
            <Paper>
              <h1>Formic Form</h1>
              <Grid container pb={1} spacing={3}>
                <Grid item xs={4}>
                  <InputField
                    {...formik.getFieldProps("firstName")}
                    placeholder="Name"
                  />
                </Grid>
                <Grid item xs={4}>
                  <InputField
                    {...formik.getFieldProps("lastName")}
                    placeholder="Father Name"
                  />
                </Grid>
                <Grid item xs={4}>
                  <InputField
                    {...formik.getFieldProps("email")}
                    placeholder="Email"
                  />
                </Grid>
              </Grid>
              <Grid container pb={1} spacing={3}>
                <Grid item xs={4}>
                  <InputField placeholder="School" />
                </Grid>
                <Grid item xs={4}>
                  <InputField placeholder="Class" />
                </Grid>
                <Grid item xs={4}>
                  <InputField placeholder="Remarks" />
                </Grid>
              </Grid>
              <Grid container justifyContent="flex-end">
                <OWButton type="submit" title="Save" />
                <OWButton title="Set Values" />
                <OWButton title="Clear" />
              </Grid>
            </Paper>
          </Grid>
        </form>
      )}
    </Formik>
  );
};

export default FormComponents;
