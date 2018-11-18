// Модули
import {CommonModule} from '@angular/common';
import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {HttpClientModule} from '@angular/common/http';
import {FormsModule} from '@angular/forms';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatButtonModule, MatCheckboxModule} from '@angular/material';
import {MatMenuModule} from '@angular/material/menu';
import {MatIconModule, MatToolbarModule, MatCardModule, MatListModule} from '@angular/material';
import {MatInputModule} from '@angular/material/input';

// Компоненты
import {LayoutComponent} from './components/layout/layout.component';

// Страницы
import {ListComponent} from './pages/list/list.component';
import {ItemComponent} from './pages/item/item.component';

// Роутинг
import {AppRouterModule} from './app.router';

// Http
import {FilmHttp} from './http/film.http';

// Модели
import {FilmModel} from './models/film.model';

// Сервисы
import {EventsService} from './services/events.service';
import {HttpService} from './services/http.service';

const MODULES = [
    CommonModule,
    HttpClientModule,
    BrowserModule,
    FormsModule,
    AppRouterModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatCheckboxModule,
    MatMenuModule,
    MatIconModule,
    MatToolbarModule,
    MatInputModule,
    MatCardModule,
    MatListModule
];

const COMPONENTS = [
    LayoutComponent,
    ItemComponent
];

const PAGES = [
    ListComponent
];

const HTTP = [
    FilmHttp,
];

const MODELS = [
    FilmModel
];

const SERVICES = [
    EventsService,
    HttpService
];

@NgModule({
    declarations: [
        ...COMPONENTS,
        ...PAGES
    ],
    imports: [
        ...MODULES
    ],
    providers: [
        ...HTTP,
        ...SERVICES
    ],
    bootstrap: [LayoutComponent]
})
export class AppModule {
}
