export type ContactState = {
  ok: boolean;
  message: string;
  fieldErrors?: Record<string, string>;
};

export const CONTACT_FORM_INITIAL_STATE: ContactState = {
  ok: false,
  message: "",
};
