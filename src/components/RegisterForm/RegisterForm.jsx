import { Formik, Form, Field, ErrorMessage } from 'formik';
import { Button, Form as BootstrapForm, Alert } from 'react-bootstrap';
import { object, string, ref } from 'yup';

const validationSchema = object().shape({
  email: string().email('Correo invalido').required('Requerido'),
  password: string().required('Requerido'),
  confirmPassword: string()
    .oneOf([ref('password'), null], 'Las contraseñas no coinciden')
    .required('Requerido'),
  firstName: string().required('Requerido'),
  lastName: string().required('Requerido'),
});

// eslint-disable-next-line react/prop-types
const RegisterForm = ({ handleSubmit, secondaryButton = null, titleStyle }) => {
  return (
    <Formik
      initialValues={{
        email: '',
        password: '',
        confirmPassword: '',
        firstName: '',
        lastName: '',
        role:"ROLE_PRO"
      }}
      validationSchema={validationSchema}
      onSubmit={handleSubmit}
    >
      <Form as={BootstrapForm}>
        <div className='mb-3 gap-2'>
          <label htmlFor='newEmail' className={titleStyle}>Correo electrónico:</label>
          <Field
            type='email'
            name='email'
            className='form-control'
            id='newEmail' // Cambiado de 'email' a 'newEmail'
            autoComplete='off'
          />
          <ErrorMessage name='email' component={Alert} variant='danger' />
        </div>
        <div className='mb-3'>
          <label htmlFor='newPassword' className={titleStyle}>Contraseña:</label>
          <Field
            type='password'
            name='password'
            className='form-control'
            id='newPassword' // Cambiado de 'password' a 'newPassword'
          />
          <ErrorMessage name='password' component={Alert} variant='danger' />
        </div>
        <div className='mb-3'>
          <label htmlFor='confirmPassword' className={titleStyle}>Repita la contraseña:</label>
          <Field
            type='password'
            name='confirmPassword'
            className='form-control'
            id='confirmPassword'
          />
          <ErrorMessage
            name='confirmPassword'
            component={Alert}
            variant='danger'
          />
        </div>
        <div className='mb-3'>
          <label htmlFor='firstName' className={titleStyle}>Nombre:</label>
          <Field
            type='text'
            name='firstName'
            className='form-control'
            id='firstName'
          />
          <ErrorMessage name='firstName' component={Alert} variant='danger' />
        </div>
        <div className='mb-3'>
          <label htmlFor='lastName' className={titleStyle}>Apellido:</label>
          <Field
            type='text'
            name='lastName'
            className='form-control'
            id='lastName'
          />
          <ErrorMessage name='lastName' component={Alert} variant='danger' />
        </div>
        <div className='mb-3'>
          <label htmlFor='role' className={titleStyle}>Registrarse como:</label>
          <Field
            name='role'
            className='form-control'
            id='role'
            as="select"
          >
            <option disabled>Selecciona una opcion</option>

            <option value={"ROLE_USER"} >comprador</option>
            <option value={"ROLE_PRO"} >profesional</option>

            
          </Field>
          <ErrorMessage name='lastName' component={Alert} variant='danger' />
        </div>
        <Button type='submit' className='me-2'>
          Enviar registro
        </Button>
        {secondaryButton && (
          <Button variant='success' onClick={secondaryButton.onClick}>
            {secondaryButton.text}
          </Button>
        )}
      </Form>
    </Formik>
  );
};

export default RegisterForm;
