import './content-card.css';

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

    const cardButton = document.createElement('div');
    cardButton.classList.add('card-button');

    const cardButtonIcon = document.createElement('i');
    cardButtonIcon.classList.add('fas', 'fa-plus');
    cardButton.appendChild(cardButtonIcon);

    const cardButtonTitle = document.createElement('span');
    cardButtonTitle.textContent = 'Add Task';
    cardButton.appendChild(cardButtonTitle);

    contentCard.appendChild(cardHeader);
    contentCard.appendChild(cardContent);
    contentCard.appendChild(cardButton);

    return contentCard;
};

export { renderContentCard };