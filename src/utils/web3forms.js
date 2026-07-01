const WEB3FORMS_ENDPOINT = "https://api.web3forms.com/submit";

const formAccessKeys = {
  contact: import.meta.env.VITE_WEB3FORMS_CONTACT_ACCESS_KEY || import.meta.env.VITE_WEB3FORMS_ACCESS_KEY || "",
  product: import.meta.env.VITE_WEB3FORMS_PRODUCT_ACCESS_KEY || import.meta.env.VITE_WEB3FORMS_ACCESS_KEY || "",
  export: import.meta.env.VITE_WEB3FORMS_EXPORT_ACCESS_KEY || import.meta.env.VITE_WEB3FORMS_ACCESS_KEY || "",
};

export const isWeb3FormsConfigured = (formType = "contact") => Boolean(formAccessKeys[formType]);

export const submitWeb3Form = async ({ form, formType = "contact", subject, source, extraData = {} }) => {
  const accessKey = formAccessKeys[formType];

  if (!accessKey) {
    throw new Error("Web3Forms access key is missing.");
  }

  const formData = new FormData(form);

  formData.append("access_key", accessKey);
  formData.append("subject", subject);
  formData.append("from_name", "GAIB Agro Website");
  formData.append("source", source);

  Object.entries(extraData).forEach(([key, value]) => {
    if (value) {
      formData.append(key, value);
    }
  });

  const response = await fetch(WEB3FORMS_ENDPOINT, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
    body: JSON.stringify(Object.fromEntries(formData)),
  });

  const result = await response.json();

  if (!response.ok || !result.success) {
    throw new Error(result.message || "Unable to send enquiry right now.");
  }

  return result;
};
