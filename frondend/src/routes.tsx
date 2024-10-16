import {
  Navigate,
  Route,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import ContactsPage, {
  contactsLoader,
  createContactAction,
} from "./pages/Contacts";
import NotFoundPage from "./pages/NotFound";
import RootLayout from "./pages/Root";
import ContactDetailPage, { contactDetailsLoader } from "./pages/ContactDetail";
import { ContactNotFoundPage } from "./pages/ContactNotFound";
import { destroyContactAction } from "./pages/DestroyContact";

const appRouter = createBrowserRouter(
  createRoutesFromElements(
    <Route path="" element={<RootLayout />} errorElement={<NotFoundPage />}>
      <Route
        index={true}
        element={<Navigate to={"contacts"} replace={true} />}
      />
      <Route action={destroyContactAction} path="contacts/:contactId/destroy" />

      <Route
        path="contacts"
        action={createContactAction}
        element={<ContactsPage />}
        loader={contactsLoader}
      />

      <Route
        path="contacts/:contactId"
        element={<ContactDetailPage />}
        loader={contactDetailsLoader}
        errorElement={<ContactNotFoundPage />}
      />
    </Route>
  )
);

export default appRouter;
