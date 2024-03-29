import React, { useEffect, useState } from 'react'
import { deleteBrands, getBrand, modifyTitle } from '../../../utils/fetchProductsList'
import { v4 as uuidv4 } from "uuid";
import { ErrorMessage, Field, Form, Formik } from 'formik';
import { Alert, Form as BoostrappForm } from 'react-bootstrap'
import * as yup from "yup" 

export const DeleteBrand = () => {

    const validationSchema = yup.object().shape({
        id: yup.number().required('La Marca es requerida!'),
    });

    const [brand, setBrand] = useState([{}]);

    const getBrands = async () => {

        const request = await getBrand();
        setBrand(request);

    }


    const deleteBrand = async (id) => {

     await deleteBrands(id);

    }


    useEffect(() => {

        getBrands();

    }, [deleteBrands, modifyTitle]);

    return (
        <section className='container'>
            <h6 className='text-black p-2'>ELIMINAR MARCA</h6>

            <div>
                <Formik
                    initialValues={{ id: 0 }}
                    validationSchema={validationSchema}
                    onSubmit={deleteBrand}
                >
                    <Form as={BoostrappForm}>

                        <div className='mb-3'>
                            <label htmlFor="id" className='text-black p-2'> Seleccione una Marca</label>
                            <Field name="id" id="id" as={"select"} className='form-control p-2'  multiple={false}>

                                {
                                brand && brand.length > 0 ?
                                brand.map(i =>
                                    <option value={i.idBrand} id='id' key={uuidv4()}>{i.title}</option>
                                )
                                : <></>
                                }
                            </Field>
                        <ErrorMessage name="id" component={Alert} variant="danger" />
                        </div>

                        <div className='d-flex gap-3 mt-2'>

                            <button type='submit' className='btn btn-danger fw-bold' onClick={() => deleteBrand()}>
                                Eliminar
                                </button>
                        </div>
                    </Form>
                </Formik>
            </div>

        </section>
    )
}



export const ModifyBrands = () => {

    
    const validationSchema = yup.object().shape({
        brand: yup.number().required('La Marca es requerida!'),
        title: yup.string().required("El titulo es obligatorio!")
    });

    const [brand, setBrand] = useState([{}]);

    const modifyName = async (data) => {

        const brandNew = [];
        brandNew.push(brand[data.brand]);
        brandNew[0].title = data.title;

         await modifyTitle(brandNew);

    }

    const getBrands = async () => {

        const request = await getBrand();
        setBrand(request);

    }


    useEffect(() => {

        getBrands();

    }, []);

    return (
        <section className='container mt-3'>
            <h6 className='text-black p-2'>CAMBIAR TITULO</h6>
            <Formik
                    initialValues={{ id: 0, title:"" }}
                    validationSchema={validationSchema}
                    onSubmit={modifyName}
                >
            <Form as={BoostrappForm}>
                    <div className='d-flex flex-column gap-3'>
                        <label htmlFor="title" className='text-black'> Ingrese el nuevo Titulo</label>
                        <Field name="title" id="title" required className='p-2' type="text" placeholder="nuevo titulo..."/>
                        <ErrorMessage name="title" component={Alert} variant="danger" />
                    </div>
                    <div className='d-flex flex-column gap-3'>
                        <label htmlFor="brand" className='text-black'> Seleccione una Marca</label>
                        <Field as="select" name="brand" id="brand" multiple={false}  className='p-2' required >
                            {brand && brand.length > 0 ?
                            brand.map((i, index) =>
                                <option value={index} id='brand' key={uuidv4()} >{i.title}</option>
                            ): <></>

                            }
                        </Field>
                        <ErrorMessage name="brand" component={Alert} variant="danger" />

                    </div>            
                    <div className='d-flex gap-3 mt-3 '>

                        <button  className=' me-2 btn btn-success fw-bold' onClick={()=> modifyName()}>Modificar Nombre</button>
                    </div>
            </Form>
            </Formik>
        </section>
    )
}

