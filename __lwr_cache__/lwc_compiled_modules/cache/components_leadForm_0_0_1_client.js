import { registerDecorators as _registerDecorators } from "lwc";
import _tmpl from "./leadForm.html";
import { LightningElement, registerComponent as _registerComponent } from 'lwc';
class LeadForm extends LightningElement {
  constructor(...args) {
    super(...args);
    this.description = '';
  }
  formSubmit() {
    this.template.querySelector('input[type="submit"]').click();
  }
  /*LWC compiler v9.3.4*/
}
_registerDecorators(LeadForm, {
  publicProps: {
    description: {
      config: 0
    }
  },
  publicMethods: ["formSubmit"]
});
const __lwc_component_class_internal = _registerComponent(LeadForm, {
  tmpl: _tmpl,
  sel: "-lead-form",
  apiVersion: 66,
  enableSyntheticElementInternals: true,
  enablePrivateMethods: true
});
export default __lwc_component_class_internal;