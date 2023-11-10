import './page.css'

const renderPage = () => {
    const page = document.createElement('div');
    page.id = 'page';
    page.classList.add('open');

    const titleWrapper = document.createElement('div');
    titleWrapper.id = 'title-wrapper';

    const title = document.createElement('h1');
    title.id = 'title';
    title.textContent = 'Home';

    titleWrapper.appendChild(title);

    const contentWrapper = document.createElement('div');
    contentWrapper.id = 'content-wrapper';

    const tools = document.createElement('div');
    tools.id = 'tools';

    contentWrapper.appendChild(tools);

    page.appendChild(titleWrapper);
    page.appendChild(contentWrapper);

    return page;
}

export { renderPage };