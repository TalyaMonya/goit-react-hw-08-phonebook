import { useDispatch, useSelector } from "react-redux";
import { List, ListItem, Btn, ListContainer } from "./ContactList.styled";
import {RiDeleteBinLine} from 'react-icons/ri'
import { selectVisibleContacts } from "../../redux/contacts/selectors";
import { deleteContacts } from "redux/contacts/operations";



export const ContactList = () => {
    const contacts = useSelector(selectVisibleContacts);
    const dispatch = useDispatch();

   
    return (
        <ListContainer>
            <List>
            {contacts.map(contact => {
                return (
                    <ListItem key={contact.id}>
                        <span>{contact.name}:</span>
                        <span>{contact.number}</span>
                        <Btn
                        type="button"
                        name="delete"
                        onClick={() => dispatch(deleteContacts(contact.id))}>
                        <RiDeleteBinLine size="14"/>
                    </Btn>
               </ListItem>
           )
       })}
    </List>
        </ListContainer>
    ) 
}


