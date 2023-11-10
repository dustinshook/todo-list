import './header.css';
import '@fortawesome/fontawesome-free/css/all.css';

const renderHeader = (...navItems) => {
    
    const header = document.createElement('div');
    header.id = 'header';

    const nav = document.createElement('nav');
    nav.id = 'nav';

    const ul = document.createElement('ul');
    ul.classList.add('nav-items');

    const menuBtn = document.createElement('li');
    menuBtn.classList.add('nav-item', 'fas', 'fa-bars');
    menuBtn.id = 'menu-btn';

    ul.appendChild(menuBtn);

    navItems.forEach(item => {
        const li = document.createElement('li');
        li.classList.add('nav-item');
                        
        const itemBtn = document.createElement('div');
        itemBtn.classList.add('nav-item-btn');
        itemBtn.textContent = item;

        li.appendChild(itemBtn);
        ul.appendChild(li);
    });

    nav.appendChild(ul);

    header.appendChild(nav);

    return header;
};

export { renderHeader };