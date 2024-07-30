import { PagarmeModel } from '../models/PagarmeModel.js';
export type AddDocument<T extends PagarmeModel> = {
    [P in keyof Omit<T, keyof PagarmeModel>]: T[P];
};
