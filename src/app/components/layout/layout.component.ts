import {Component} from '@angular/core';
import {Router} from '@angular/router';

@Component({
    selector: 'app',
    templateUrl: './layout.component.html',
    styleUrls: ['./layout.component.sass']
})
export class LayoutComponent {
    title = 'app';

    constructor(private router: Router) {

    }
}
