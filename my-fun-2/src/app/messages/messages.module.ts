import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { NativeScriptCommonModule } from "nativescript-angular/common";

import { MessagesRoutingModule } from "./messages-routing.module";
import { MessagesComponent } from "./messages.component";
import { ItemDetailComponent } from "./item-detail/item-detail.component";

@NgModule({
    imports: [
        NativeScriptCommonModule,
        MessagesRoutingModule
    ],
    declarations: [
        MessagesComponent,
        ItemDetailComponent
    ],
    schemas: [
        NO_ERRORS_SCHEMA
    ]
})
export class MessagesModule { }
