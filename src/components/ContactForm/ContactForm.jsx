import { Formik, ErrorMessage } from 'formik';
import { StyledForm, Label, DivLabel, Error, FieldFormik, StyledButton, FormContainer } from './ContactForm.styled';
import { FaUserSecret } from 'react-icons/fa';
import { BsTelephone } from 'react-icons/bs';
import { useDispatch, useSelector } from 'react-redux';
import { addContacts } from 'redux/contacts/operations';
import { Schema } from './schemaYap';
import { selectContacts } from 'redux/contacts/selectors';
import { toast } from 'react-toastify';

import 'react-toastify/dist/ReactToastify.css';
import { toastifyOptions } from 'utils/toastifyOptions';



const initialValues = { name: '', number: '' };


export const ContactForm = () => {
    const contacts = useSelector(selectContacts);
    const dispatch = useDispatch();


    const onAddContact = ({ name, number }) => {
        const isInContacts = contacts.some(
        contact => contact.name.toLowerCase().trim() === name.toLowerCase().trim());
        // Перевіряє, чи існує контакт із таким самим ім'ям у списку контактів. Якщо контакт вже існує, виводиться попередження.
        if (isInContacts) {
            // alert(`${name} is already in contacts`);
        return toast.error(`${name} is already in contacts`, toastifyOptions);
         }
        dispatch(addContacts({ name, number }));
        toast.success(`${name} Added to contacts`, toastifyOptions);
    };



    return (
        <FormContainer>
             <Formik
            initialValues={initialValues}
            onSubmit={(values, { resetForm }) => {
                onAddContact({...values});
                resetForm();
            }}
            validationSchema={Schema}
            >
            <StyledForm>
                <Label >
                    <DivLabel><FaUserSecret/>Name</DivLabel>
                    <FieldFormik name="name" placeholder="Введіть імʼя" />
                    <Error><ErrorMessage name="name"/></Error>
                </Label>

                <Label>
                    <DivLabel><BsTelephone/>Number</DivLabel>
                    <FieldFormik type="tel" name="number" placeholder="Введіть номер" />
                    <Error><ErrorMessage name="number"/></Error>
                </Label>

                <StyledButton type="submit">Add contact</StyledButton>
            </StyledForm>
            </Formik>
       </FormContainer>
    )
}


