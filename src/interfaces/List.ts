import { ListPaging } from './ListPaging.js';

export interface List<T> {
  data: T[];
  paging: ListPaging;
}
