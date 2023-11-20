import { ContactForm } from "components/ContactForm/ContactForm";
import { ContactList } from "components/ContactList/ContactList";

import { Filter } from "components/Filter/Filter";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchContacts } from "redux/contacts/operations";
import { selectContacts, selectLoading } from "redux/contacts/selectors";
import { Loader } from "utils/loader";


export default function Tasks() {
    const dispatch = useDispatch();
    const isLoading = useSelector(selectLoading);
    const contacts = useSelector(selectContacts);

    useEffect(() => {
        dispatch(fetchContacts());
    }, [dispatch]);

    return (
        <>
            <title>Your contacts</title>
            <ContactForm />
            {contacts.length > 0 && (< Filter />)}
            {contacts.length > 0 && (< ContactList />)}
            { isLoading && <Loader /> }
        </>
    );
}