import { createSlice, isAnyOf } from "@reduxjs/toolkit";
import { fetchContacts, deleteContacts, addContacts } from '../../redux/contacts/operations';


const getAction = type => isAnyOf(fetchContacts[type], addContacts[type], deleteContacts[type]);

const initialState = { items: [], isLoading: false, error: null };

const contactsSlice = createSlice({
    name: 'contacts',
    initialState,
    extraReducers: builder =>
        builder.addCase(fetchContacts.fulfilled, (state, action) => {
            state.items = action.payload; 
        }).addCase(addContacts.fulfilled, (state, action) => {
            state.items.push(action.payload);
        }).addCase(deleteContacts.fulfilled, (state, action) => {
            const index = state.items.findIndex(
                contact => contact.id === action.payload.id
            );
            state.items.splice(index, 1); 
        }).addMatcher(getAction('pending'), state => {
            state.isLoading = true;
        }).addMatcher(getAction('rejected'), (state, action) => {
            state.isLoading = false;
            state.error = action.payload;
        }).addMatcher(getAction('fulfilled'), state => {
            state.isLoading = false;
            state.error = null;
        }),
});



export const { addContact, deleteContact } = contactsSlice.actions;
export const contactsReducer = contactsSlice.reducer;