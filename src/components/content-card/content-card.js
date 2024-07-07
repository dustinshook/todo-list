import './content-card.css';
import { renderAddButton } from '../add-button/add-button.js';

const renderContentCard = () => {
    const contentCard = document.createElement('div');
    contentCard.classList.add('content-card');

    const cardHeader = document.createElement('div');
    cardHeader.classList.add('card-header');

    const cardHeaderTitle = document.createElement('span');
    cardHeaderTitle.textContent = 'Default Project';

    cardHeader.appendChild(cardHeaderTitle);

    const cardContent = document.createElement('div');
    cardContent.classList.add('card-content');

    const cardButton = renderAddButton();
    cardContent.appendChild(cardButton);
    
    contentCard.appendChild(cardHeader);
    contentCard.appendChild(cardContent);
    
    return contentCard;
};

export { renderContentCard };