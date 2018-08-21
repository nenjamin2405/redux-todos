import * as actions from './index'

describe('todo actions', () => {
  test('addTodo should create ADD_TODO action', () => {
    expect(actions.addTodo('Use Redux')).toEqual({
      type: 'ADD_TODO',
      id: 0,
      text: 'Use Redux'
    })
  })

  test('setVisibilityFilter should create SET_VISIBILITY_FILTER action', () => {
    expect(actions.setVisibilityFilter('SHOW_ACTIVE')).toEqual({
      type: 'SET_VISIBILITY_FILTER',
      filter: 'SHOW_ACTIVE'
    })
  })

  test('toggleTodo should create TOGGLE_TODO action', () => {
    expect(actions.toggleTodo(1)).toEqual({
      type: 'TOGGLE_TODO',
      id: 1
    })
  })
})
