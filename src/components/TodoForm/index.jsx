import { Formik, Form, Field, ErrorMessage } from 'formik';

function TodoForm ({ initialValues, onSubmit }) {
  return (
    <Formik
      initialValues={initialValues}
      validate={values => {
        const errors = {};
        if (!values.task) errors.task = 'Task is required';
        return errors;
      }}
      onSubmit={(values, { resetForm }) => {
        onSubmit(values);
        resetForm();
      }}
    >
      <Form>
        <Field type='text' name='task' placeholder='Task' />
        <ErrorMessage name='task' component='div' />
        <Field type='date' name='date' />
        <button type='submit'>Add Todo</button>
      </Form>
    </Formik>
  );
}

export default TodoForm;
