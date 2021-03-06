const content = document.querySelector('body');

const storageKey = 'theme-preference';

const onClick = (e) => {
    theme.value = e.target.id;
    setPreference();
}

const getColorPreference = () => {
    if (localStorage.getItem(storageKey)) {
        return localStorage.getItem(storageKey);
    } else {
        return 'system';
    }
}

const setPreference = () => {
    localStorage.setItem(storageKey, theme.value);
    reflectPreference();
}

const reflectPreference = () => {
    content.classList = `${theme.value}`;
}

const theme = {
    value: getColorPreference(),
}

reflectPreference();

window.onload = () => {
    reflectPreference();

    document.querySelectorAll('.theme-toggle__button').forEach(button => button.addEventListener('click', onClick));
}