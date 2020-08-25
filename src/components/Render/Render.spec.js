import { render } from '@testing-library/vue'
import '@testing-library/jest-dom'

test('baseElement default to document.body', () => {
  const { baseElement } = render({ template: '<div/>' })
  expect(baseElement).toBe(document.body)
})

test('baseElement matches container if not custom baseElement is provided', () => {
  const blink = document.createElement('blink')
  const Component = {template: '<div></div>'}

  const {container, baseElement} = render(Component, {
    container: document.body.appendChild(blink),
  })

  expect(container).toMatchInlineSnapshot(`
    <blink>
      <div />
    </blink>
  `)

  expect(baseElement).toMatchInlineSnapshot(`
    <blink>
      <div />
    </blink>
  `)
})