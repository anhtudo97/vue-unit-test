import { render, fireEvent } from '@testing-library/vue'
import '@testing-library/jest-dom'
import Select from './Select.vue'

test('Select component', async () => {
  let optionElement
  const { getByDisplayValue, getByText } = render(Select)

  // Get the Select element by using the initial displayed value
  const select = getByDisplayValue('Tyrannosaurus')
  expect(select.value).toBe('dino1')

  // Update it by manully sending a valid option value
  await fireEvent.update(select, 'dino2')
  expect(select.value).toBe('dino2')

  // Trigger an update event bt directly getting the <option> element
  optionElement = getByText('Deinonychus')
  await fireEvent.update(optionElement)
  expect(select.value).toBe('dino3')

  // ...even if option is within an <optgroup>.
  optionElement = getByText('Diplodocus')
  await fireEvent.update(optionElement)
  expect(select.value).toBe('dino4')
})