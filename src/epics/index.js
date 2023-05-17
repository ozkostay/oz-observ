import {ofType} from 'redux-observable';
import {of} from 'rxjs';
import {ajax} from 'rxjs/ajax';
import {map, tap, retry, filter, debounceTime, switchMap, catchError} from 'rxjs/operators';
import {CHANGE_SEARCH_FIELD, SEARCH_SKILLS_REQUEST} from '../actions/actionTypes';
import {
  searchSkillsRequest,
  searchSkillsSuccess,
  searchSkillsFailure,
} from '../actions/actionCreators';

export const changeSearchEpic = (action$) => action$.pipe(
  tap(o => console.log('111',action$)),
  ofType(CHANGE_SEARCH_FIELD),
  tap(o => console.log('111-2')),
  map(o => o.payload.search.trim()),
  filter(o => o !== ''),
  debounceTime(100),
  map(o => searchSkillsRequest(o))
)

export const searchSkillsEpic = (action$) => action$.pipe(
  tap(o => console.log('222',action$)),
  ofType(SEARCH_SKILLS_REQUEST),
  tap(o => console.log('222-2')),
  map(o => o.payload.search),
  map(o => new URLSearchParams({q: o})),
  tap(o => console.log('URL', o)),
  switchMap(o => ajax.getJSON(`${process.env.REACT_APP_SEARCH_URL}?${o}`)),
  map(o => searchSkillsSuccess(o)),
);
