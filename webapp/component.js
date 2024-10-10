sap.ui.define([
    "sap/ui/core/UIComponent",
    "sap/ui/model/json/JSONModel",
    "sap/ui/model/resource/ResourceModel"
], (UIComponent, JSONModel, ResourceModel)=>{
    "use strict";

    return UIComponent.extend("ui5.walkthrough.Component", {
        metadata : {
            interfaces: ["sap.ui.core.IAsyncContentCreation"],
            manifest: "json"
         },
        init(){
            // call the init function of the parent
            UIComponent.prototype.init.apply(this, arguments);
            // set data models
            const oData ={
                recipient : {
                    name : "UI5"
                }
            }
            const oModel = new JSONModel(oData)
            this.setModel(oModel)
        }
    })
})