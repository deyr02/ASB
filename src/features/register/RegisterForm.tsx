import { ErrorMessage, Field, Formik } from 'formik';
import { Button, Form, FormField, Label, Segment } from 'semantic-ui-react';
import * as Yup from "yup";




export default function RegisterForm(){
   
    
    const validationSchema = Yup.object({
        name: Yup.string()
            .max(50, "Name should be below 50 characters.")
            .required("Please input the Name on Card"),
        cardNumber: Yup.number()
            .typeError("Card Number must be a number")
            .required("Please input card Number."),
        cvc:Yup.number()
            .typeError("CVC must be a number")
            .required("Please Input CVC number."),
        expiry:Yup.string()
            . required("Please input the expiry date.")
            .matches(/^(0?[1-9]|1[012])\/([2-9][0-9)]{3})$/, "Please input expiry date as MM/YYYY format")

    });

    
    


     return(
        <Segment clearing>
            <Formik
                validationSchema = {validationSchema}
                enableReinitialize= {true}
                //The intial values for each field keep as string to show the placeholder value in the input box
                initialValues={{id:'', name: '', cardNumber: '' , cvc:'', expiry: ''}}
                validateOnChange
                onSubmit =  {(values, actions ) =>{
                    console.log(values);
                    setTimeout(() => {
                        actions.setSubmitting(false);
                        
                    },2000);
                
                }}
            >
                {({handleSubmit, isValid, isSubmitting, errors, dirty})=>(
                    <Form 
                     className='ui form' 
                     onSubmit={handleSubmit}  
                     autoComplete='off' >
                        
                      <FormField>
                          <Field  placeholder = "Name on Card" name = "name"   />
                          <ErrorMessage
                            name = "name"
                            render= {error => <Label basic color='red' content= {error}/>}
                          />
                      </FormField>
                      <FormField>
                          <Field  placeholder = "Card Number" name = "cardNumber"  />
                          <ErrorMessage
                            name = "cardNumber"
                            render= {error => <Label basic color='red' content= {error}/>}
                          />
                      </FormField>
                      <div className='form-seperator'>
                            <FormField>
                                <Field  placeholder = "CVC" name = "cvc"  />
                                <ErrorMessage
                                    name = "cvc"
                                    render= {error => <Label basic color='red' content= {error}/>}
                                />
                            </FormField>
                            <FormField>
                                <Field  placeholder = "Expiry (MM/YYYY)" name = "expiry" />
                                <ErrorMessage
                                    name = "expiry"
                                    render= {error => <Label basic color='red' content= {error}/>}
                                />
                            </FormField>
                        </div>
                        <Button
                            disabled = {isSubmitting ||!dirty ||!isValid}
                            loading={isSubmitting} floated="right"
                            positive type='submit' content= "Submit"
                        />
                    </Form>
                )}

            </Formik>
            
        </Segment>
    );
}


