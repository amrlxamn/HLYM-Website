import type { ContactEnquiryPayload } from "../types/contact-page.types";
import { createContactEnquirySubmissionId } from "./create-contact-enquiry-submission-id";
import { getContactEnquiryFormValue } from "./get-contact-enquiry-form-value";
import { getNormalizedContactBranch } from "./get-normalized-contact-branch";
import { getNormalizedContactOwnerType } from "./get-normalized-contact-owner-type";

export function createContactEnquiryPayload(form: HTMLFormElement): ContactEnquiryPayload {
  const formData = new FormData(form);

  return {
    consent: true,
    email: getContactEnquiryFormValue(formData, "email").toLowerCase(),
    message: getContactEnquiryFormValue(formData, "message"),
    name: getContactEnquiryFormValue(formData, "name"),
    phone: getContactEnquiryFormValue(formData, "phone"),
    preferredBranch: getNormalizedContactBranch(
      getContactEnquiryFormValue(formData, "preferredBranch")
    ),
    source: "webflow-contact-page",
    submissionId: createContactEnquirySubmissionId(),
    topic: getContactEnquiryFormValue(formData, "topic"),
    title: getContactEnquiryFormValue(formData, "title"),
    ownerType: getNormalizedContactOwnerType(getContactEnquiryFormValue(formData, "ownerType")),
    vehicleModel: getContactEnquiryFormValue(formData, "vehicleModel"),
    yearOfPurchase: getContactEnquiryFormValue(formData, "yearOfPurchase")
  };
}
