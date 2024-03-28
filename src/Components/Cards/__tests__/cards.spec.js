import { Cards } from "../index";
import { render, fireEvent } from "@testing-library/react";

test("Card should have the normal css class when first rendered", () => {
  const component = render(<Cards />);
  // Now, you can add your test assertions here.
  expect(component.container.firstChild.classList.contains('Cards__wrapper')).toBe(true)
})

test('Updates the state when the button is clicked', () => {
  const component = render(<Cards />);
  const button = component.getByRole('cards-btn-test');
  const text = component.getByRole('cards-btn-text-test');

  fireEvent.click(button)

  expect(text.textContent).toEqual('Unretired');
});
