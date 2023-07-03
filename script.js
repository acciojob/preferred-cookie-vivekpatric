//your JS code here. If required.
function setCookie(name, value, days) {
  const expires = new Date();
  expires.setTime(expires.getTime() + days * 24 * 60 * 60 * 1000);
  document.cookie = `${name}=${encodeURIComponent(value)};expires=${expires.toUTCString()}`;
}

function getCookie(name) {
  const cookieName = `${name}=`;
  const cookieArray = document.cookie.split(';');
  for (let i = 0; i < cookieArray.length; i++) {
    let cookie = cookieArray[i];
    while (cookie.charAt(0) === ' ') {
      cookie = cookie.substring(1);
    }
    if (cookie.indexOf(cookieName) === 0) {
      return decodeURIComponent(cookie.substring(cookieName.length));
    }
  }
  return null;
}

function handleFormSubmit(event) {
  event.preventDefault();

  const fontSizeInput = document.getElementById('fontsize');
  const fontColorInput = document.getElementById('fontcolor');

  const fontSize = fontSizeInput.value;
  const fontColor = fontColorInput.value;

  setCookie('fontSize', fontSize, 30);
  setCookie('fontColor', fontColor, 30);

  applyUserPreferences();
}

function applyUserPreferences() {
  const fontSize = getCookie('fontSize');
  const fontColor = getCookie('fontColor');

  if (fontSize) {
    document.body.style.fontSize = fontSize + 'px';
  }
  if (fontColor) {
    document.body.style.color = fontColor;
  }
}

const preferencesForm = document.getElementById('preferences-form');
preferencesForm.addEventListener('submit', handleFormSubmit);

applyUserPreferences();