import { registerDecorators as _registerDecorators } from "lwc";
import _tmpl from "./carDetails.html";
import { LightningElement, registerComponent as _registerComponent } from 'lwc';
class CarDetails extends LightningElement {
  constructor(...args) {
    super(...args);
    this._selectedVariant = {};
  }
  get selectedVariant() {
    return this._selectedVariant;
  }
  set selectedVariant(data) {
    if (data) {
      let model = data.variant.toLowerCase().replaceAll(' ', '');
      let selectedimage = `/public/assets/honda/${model}/${data.imageName}.png`;
      console.log("selectedimage", selectedimage);
      this._selectedVariant = {
        ...data,
        "selectedimage": selectedimage
      };
    }
  }
  /*LWC compiler v9.3.4*/
}
_registerDecorators(CarDetails, {
  publicProps: {
    selectedVariant: {
      config: 3
    }
  },
  fields: ["_selectedVariant"]
});
const __lwc_component_class_internal = _registerComponent(CarDetails, {
  tmpl: _tmpl,
  sel: "-car-details",
  apiVersion: 66,
  enableSyntheticElementInternals: true,
  enablePrivateMethods: true
});
export default __lwc_component_class_internal;