import { configureStore} from "@reduxjs/toolkit";
import { contactSlice } from "./ContactsSlice";








export const store = configureStore({
    reducer: {
        contacts: contactSlice.reducer
    }
})