import { registerDecorators as _registerDecorators } from "lwc";
import _tmpl from "./modal.html";
import { LightningElement, registerComponent as _registerComponent } from "lwc";
class Modal extends LightningElement {
  constructor(...args) {
    super(...args);
    this.heading = void 0;
  }
  /*LWC compiler v9.3.4*/
}
_registerDecorators(Modal, {
  publicProps: {
    heading: {
      config: 0
    }
  }
});
const __lwc_component_class_internal = _registerComponent(Modal, {
  tmpl: _tmpl,
  sel: "components-modal",
  apiVersion: 66,
  enableSyntheticElementInternals: true,
  enablePrivateMethods: true
});
export default __lwc_component_class_internal;