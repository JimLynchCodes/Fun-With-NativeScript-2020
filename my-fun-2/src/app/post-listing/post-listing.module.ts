import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { NativeScriptCommonModule } from "nativescript-angular/common";

import { PostListingRoutingModule } from "./post-listing-routing.module";
import { PostListingComponent } from "./post-listing.component";

@NgModule({
    imports: [
        NativeScriptCommonModule,
        PostListingRoutingModule
    ],
    declarations: [
        PostListingComponent
    ],
    schemas: [
        NO_ERRORS_SCHEMA
    ]
})
export class PostListingModule { }
