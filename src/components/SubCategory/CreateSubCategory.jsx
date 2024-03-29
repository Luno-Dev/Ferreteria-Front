
import React from 'react'
import { ErrorMessage, Field, Form, Formik } from 'formik'
import { Alert, Form as boostrappForm } from 'react-bootstrap'
import * as yup from "yup"
import { postSubCategory } from '../../utils/fetchProductsList'

const CreateSubCategory = () => {


  const validationSchema = yup.object().shape({
    title: yup.string().required('El titulo es Requerido'),
  });

  const handleSubmit = async (formData) => {

     await postSubCategory(formData);

  }

  return (
    <section className='container'>
      <h6 className='text-black mt-5 p-2'>CREAR</h6>
      <section>
        <Formik
          initialValues={{ name: '' }}
          validationSchema={validationSchema}
          onSubmit={handleSubmit}
        >
          <Form as={boostrappForm}>

            <div className="mb-3">
              <label htmlFor="password" className={"text-black"}>Titulo</label>
              <Field
                type="text"
                name="title"
                placeholder="titulo"
                className="form-control"
                id="title"
              />
              <ErrorMessage name="title" component={Alert} variant="danger" />
            </div>
            <div className='d-flex gap-3 '>
              <button type="submit" className="me-2 btn btn-success fw-bold">
                Crear
              </button>
            </div>


          </Form>
        </Formik>
      </section>

    </section>

  )
}
export default CreateSubCategory