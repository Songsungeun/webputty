function component() {
    const element = document.createElement('div');

    element.innerHTML = ['Hello', 'Web SSH Terminal'].join(' ');

    return element;
}

document.body.appendChild(component());