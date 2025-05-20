import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const contactsApi = createApi({
  reducerPath: "contactsApi",
  tagTypes: ["Contacts"],
  baseQuery: fetchBaseQuery({
    baseUrl: "https://682454a365ba05803399d0de.mockapi.io",
  }),
  endpoints: (build) => ({
    getContacts: build.query({
      query: () => "/contacts",
      providesTags: (result) =>
        result
          ? [
              ...result.map(({ id }) => ({ type: "Contacts", id })),
              { type: "Contacts", id: "LIST" },
            ]
          : [{ type: "Contacts", id: "LIST" }],
    }),

    addContact: build.mutation({
      query: (body) => ({
        url: "/contacts",
        method: "POST",
        body,
      }),
      invalidatesTags: [{ type: "Contacts", id: "LIST" }],
    }),
    deleteContact: build.mutation({
      query: (id) => ({
        url: `/contacts/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: [{ type: "Contacts", id: "LIST" }],
    }),
  }),
});

export const {
  useGetContactsQuery,
  useAddContactMutation,
  useDeleteContactMutation,
} = contactsApi;

// import { createSlice } from "@reduxjs/toolkit";
// import { addContact, deleteContact, fetchContacts } from "./operations";

// const contactsInitialState = {
//   items: [],
//   isLoading: false,
//   error: null,
// };
// const handlePending = (state) => {
//   state.isLoading = true;
// };

// const handleRejected = (state, action) => {
//   state.isLoading = false;
//   state.error = action.payload;
// };

// const contactsSlice = createSlice({
//   name: "contacts",
//   initialState: contactsInitialState,

//   extraReducers: (builder) => {
//     builder
//       .addCase(fetchContacts.pending, handlePending)
//       .addCase(fetchContacts.fulfilled, (state, action) => {
//         state.isLoading = false;
//         state.error = null;
//         state.items = action.payload;
//       })
//       .addCase(fetchContacts.rejected, handleRejected)
//       .addCase(addContact.pending, handlePending)
//       .addCase(addContact.fulfilled, (state, action) => {
//         state.isLoading = false;
//         state.error = null;
//         state.items.push(action.payload);
//       })
//       .addCase(addContact.rejected, handleRejected)
//       .addCase(deleteContact.pending, handlePending)
//       .addCase(deleteContact.fulfilled, (state, action) => {
//         state.isLoading = false;
//         state.error = null;

//         const index = state.items.findIndex(
//           (contact) => contact.id === action.payload.id
//         );
//         state.items.splice(index, 1);
//       })
//       .addCase(deleteContact.rejected, handleRejected);
//   },
// });

// export const contactsReducer = contactsSlice.reducer;
