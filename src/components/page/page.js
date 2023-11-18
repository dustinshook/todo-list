import './page.css'
import { renderContentCard } from '../content-card/content-card.js';

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

    const contentCard = renderContentCard();

    contentWrapper.appendChild(contentCard);
    page.appendChild(titleWrapper);
    page.appendChild(contentWrapper);

    return page;
}

export { renderPage };