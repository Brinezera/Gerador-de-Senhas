import { nanoid } from "nanoid";

const passwordBtnel = document.querySelector('button')
const displayPasswordEl = document.querySelector('h2')

passwordBtnel.addEventListener('click', () => {
  const randomPassword = nanoid();
  displayPasswordEl.innerHTML = randomPassword;
});
