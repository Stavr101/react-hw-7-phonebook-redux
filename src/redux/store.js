import { configureStore } from "@reduxjs/toolkit";
import { contactsApi } from "./contactsSlice";
import { filterReducer } from "./filterSlice";

export const store = configureStore({
  reducer: {
    [contactsApi.reducerPath]: contactsApi.reducer,
    filter: filterReducer,
  },

  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(contactsApi.middleware),
});

// import { contactsReducer } from "./contactsSlice";
// import { filterReducer } from "./filterSlice";

// export const store = configureStore({
//   reducer: {
//     contacts: contactsReducer,
//     filter: filterReducer,
//   },
// });
