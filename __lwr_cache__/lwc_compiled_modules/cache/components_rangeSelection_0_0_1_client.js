import { registerDecorators as _registerDecorators } from "lwc";
import _tmpl from "./rangeSelection.html";
import { LightningElement, registerComponent as _registerComponent } from "lwc";
class RangeSelection extends LightningElement {
  constructor(...args) {
    super(...args);
    this.variants = [];
  }
  selectionHandler(event) {
    const {
      value
    } = event.target;
    console.log("value", value);
    let selected = this.variants.find(item => item.variant === value);
    this.dispatchEvent(new CustomEvent("selection", {
      detail: {
        selected: selected,
        variant: value
      }
    }));
  }
  /*LWC compiler v9.3.4*/
}
_registerDecorators(RangeSelection, {
  publicProps: {
    variants: {
      config: 0
    }
  }
});
const __lwc_component_class_internal = _registerComponent(RangeSelection, {
  tmpl: _tmpl,
  sel: "-range-selection",
  apiVersion: 66,
  enableSyntheticElementInternals: true,
  enablePrivateMethods: true
});
export default __lwc_component_class_internal;