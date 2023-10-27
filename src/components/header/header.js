import './header.css';

const renderHeader = () => {

    const navItems = [
        'Home',
        'Projects',
        'About'
    ];
    
    const header = document.createElement('div');
        header.id = 'header';

        const nav = document.createElement('nav');
            nav.id = 'nav';

            const ul = document.createElement('ul');
                ul.classList.add('nav-items');

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