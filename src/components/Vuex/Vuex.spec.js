import '@testing-library/jest-dom'
import { render, fireEvent } from '@testing-library/vue'

import Vuex from './Vuex.vue'
import { store } from '../../store/index'

function renderVuexTestComponent(customStore) {
  return render(Vuex, { store: { ...store, ...customStore } })
}

test('Can render with vuex with defaults', async () => {
  const { getByTestId, getByText } = renderVuexTestComponent(
    { state: { count: 0 } }
  )
  await fireEvent.click(getByText('+'))

  expect(getByTestId('count-value')).toHaveTextContent('1')
})

test('can render with vuex with custom initial state', async () => {
  const { getByTestId, getByText } = renderVuexTestComponent({
    state: { count: 3 },
  })
  await fireEvent.click(getByText('-'))

  expect(getByTestId('count-value')).toHaveTextContent('2')
})

test('Can render  with vuex with custom store', async () => {
  const store = {
    state: () => ({
      count: 1000,
    }),
    getters: {
      count: state => state.count
    },
    actions: {
      increment: () => jest.fn(),
      decrement: () => jest.fn(),
    },
  }

  const { getByTestId, getByText } = render(Vuex, { store })

  await fireEvent.click(getByText('+'))
  expect(getByTestId('count-value')).toHaveTextContent('1000')

  await fireEvent.click(getByText('-'))
  expect(getByTestId('count-value')).toHaveTextContent('1000')
})

