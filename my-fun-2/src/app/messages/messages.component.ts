import { Component, OnInit } from "@angular/core";

import { DataService, DataItem } from "../shared/data.service";

@Component({
    selector: "Messages",
    templateUrl: "./messages.component.html"
})
export class MessagesComponent implements OnInit {
    items: Array<DataItem>;

    constructor(private _itemService: DataService) { }

    ngOnInit(): void {
        this.items = this._itemService.getItems();
    }
}
