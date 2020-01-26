import { NgModule } from "@angular/core";
import { Routes } from "@angular/router";
import { NSEmptyOutletComponent } from "nativescript-angular";
import { NativeScriptRouterModule } from "nativescript-angular/router";

const routes: Routes = [
    {
        path: "",
        redirectTo: "/(messagesTab:messages/default//browseTab:browse/default//postListingTab:post-listing/default//settingsTab:settings/default)",
        pathMatch: "full"
    },

    {
        path: "messages",
        component: NSEmptyOutletComponent,
        loadChildren: () => import("~/app/messages/messages.module").then((m) => m.MessagesModule),
        outlet: "messagesTab"
    },
    {
        path: "browse",
        component: NSEmptyOutletComponent,
        loadChildren: () => import("~/app/browse/browse.module").then((m) => m.BrowseModule),
        outlet: "browseTab"
    },
    {
        path: "post-listing",
        component: NSEmptyOutletComponent,
        loadChildren: () => import("~/app/post-listing/post-listing.module").then((m) => m.PostListingModule),
        outlet: "postListingTab"
    },
    {
        path: "settings",
        component: NSEmptyOutletComponent,
        loadChildren: () => import("~/app/settings/settings.module").then((m) => m.SettingsModule),
        outlet: "settingsTab"
    }
];

@NgModule({
    imports: [NativeScriptRouterModule.forRoot(routes)],
    exports: [NativeScriptRouterModule]
})
export class AppRoutingModule { }
