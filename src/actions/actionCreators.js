import {
  SEARCH_SKILLS_REQUEST,
  SEARCH_SKILLS_FAILURE,
  SEARCH_SKILLS_SUCCESS,
  CHANGE_SEARCH_FIELD
 } from '../actions/actionTypes'

 export function searchSkillsRequest(search) {
  console.log('actionCreate_Request',search);
  return { type: SEARCH_SKILLS_REQUEST, payload: {search} }
 }

 export function searchSkillsSuccess(items) {
  console.log('actionCreate_Saccess');
  return { type: SEARCH_SKILLS_SUCCESS, payload: {items} }
 }

 export function searchSkillsFailure(error) {
  return { type: SEARCH_SKILLS_FAILURE, payload: {error} }
 }

 export function changeSearchField(search) {
  return { type: CHANGE_SEARCH_FIELD, payload: {search} }
 }
 