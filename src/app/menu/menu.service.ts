import {Injectable} from "@angular/core";
import {Http, Response} from "@angular/http";
import {Observable} from "rxjs/Observable";
import {Menu} from "./menu";
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/catch';

@Injectable()
export class MenuService{
    private _wpBase = "http://a2wp.dev/wp-json/wp-api-menus/v2/menus/";

    constructor(private http: Http) { }

    getMenu(menuID: string) : Observable<Menu[]>{
        return this.http
            .get(this._wpBase + menuID)
            .map((res: Response) => <Menu[]> res.json());
    }

}