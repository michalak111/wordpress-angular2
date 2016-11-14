import {OnInit, Component} from "@angular/core";
import {MenuService} from "./menu.service";
import {Menu} from "./menu";
import {Router} from "@angular/router";
@Component({
    selector: 'pm-menu',
    templateUrl: './menu.component.html',
    providers: [MenuService]
})
export class MenuComponent implements OnInit {
    menu : Menu;

    constructor(private _menuService : MenuService, private router: Router){
    }

    ngOnInit(): void {
        this._menuService.getMenu('2').subscribe(res => {
            this.menu = res['items'];
        });
    }
}