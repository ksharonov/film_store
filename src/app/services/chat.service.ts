import {Injectable} from '@angular/core';
import {EventsService} from './events.service';

export enum CHAT_MODES {
    CLOSE = 0,
    OPEN,
    ACTIVE
}

/**
 * Вынесу состояние чата из компонентов в сервис
 */
@Injectable()
export class ChatService {
    constructor() {}
}
