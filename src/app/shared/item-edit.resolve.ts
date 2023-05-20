import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from "@angular/router";
import { ItemData } from "../edit-dialog/edit-dialog.component";
import { GetDataService } from 'services/get-data.service';
import { ItemDto } from './item.model';

@Injectable({
    providedIn: 'root'
})
export class ItemEdit implements Resolve<ItemDto> {
    constructor(
        private service: GetDataService
    ) {}

    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): ItemDto | Observable<ItemDto> | Promise<ItemDto> {
        const id = Number(route.params.id);
        if (id > 0)
            return this.service.getDataById(id);
        return {} as ItemDto;
    }
}