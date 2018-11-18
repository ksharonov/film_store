import {FilmModel} from '../models/film.model';

export abstract class Model {
    constructor(attributes) {
        this.setAttributes(attributes);
    }

    public setAttributes(attributes): void {
        Object.keys(attributes).forEach((key) => {
            this[key] = attributes[key];
        });
    }
}

/**
 * Подставляем даные в модель
 * @param {Array<object> | object} data
 * @param model
 * @return {Array<object> | object}
 */
export function initModel(data: Array<object> | object, model: any) {
    if (Array.isArray(data)) {
        for (const key in data) {
            if (key in data) {
                data[key] = new model(data[key]);
            }
        }
    } else if (typeof data === 'object') {
        data = new model(data);
    }

    return data;
}
