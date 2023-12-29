const { test, expect } = require('@playwright/test');


test('adds a todo', async ({ page }) => {
  await page.goto('http://localhost:3000');

  // Type into the input field and click the "Add Todo" button
  await page.type('input', 'New Todo');
  await page.click('button');

  // Check if the todo is added to the list
  const todoText = await page.innerText('li');
  expect(todoText).toBe('New Todo');
});
