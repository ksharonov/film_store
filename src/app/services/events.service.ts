import {Injectable} from '@angular/core';
import {Subscribable, Observable, Subscription, from, Subject} from 'rxjs/index';

@Injectable()
export class EventsService {
    listeners: Object;
    events: any;
    eventsSubject: any;


    constructor() {
        this.listeners = {};
        this.eventsSubject = new Subject();

        this.events = from(this.eventsSubject);

        this.events.subscribe(
            ({name, args}) => {
                if (this.listeners[name]) {
                    for (const listener of this.listeners[name]) {
                        listener(...args);
                    }
                }
            });
    }

    on(name: string, listener): void {
        if (!this.listeners[name]) {
            this.listeners[name] = [];
        }

        this.listeners[name].push(listener);
    }

    broadcast(name: string, ...args): void {
        this.eventsSubject.next({
            name,
            args
        });
    }
}