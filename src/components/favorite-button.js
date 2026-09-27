const ICON_ON = '♥';
const ICON_OFF = '♡';

/**
 * Переключает состояние кнопки «В избранное».
 * Доступное имя кнопки не меняется, состояние передаётся через aria-pressed.
 * @param {HTMLButtonElement} button
 * @param {boolean} pressed
 */
export function setFavoriteState(button, pressed) {
  button.setAttribute('aria-pressed', String(pressed));

  const icon = button.querySelector('.favorite-button__icon');
  if (icon) {
    icon.textContent = pressed ? ICON_ON : ICON_OFF;
  }
}

/**
 * Делегирование событий: один обработчик на все кнопки [data-favorite],
 * включая карточки, которые будут отрисованы позже.
 * @param {Document | HTMLElement} root
 */
export function initFavoriteButtons(root = document) {
  root.addEventListener('click', (event) => {
    const button = event.target.closest('[data-favorite]');
    if (!button) {
      return;
    }

    const isPressed = button.getAttribute('aria-pressed') === 'true';
    setFavoriteState(button, !isPressed);
  });
}
