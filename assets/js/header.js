document.addEventListener('DOMContentLoaded', function() {
    const currentPage = window.location.pathname.split('/').pop() || 'index.html';

    const pages = [
        { href: 'index.html', label: 'About' },
        { href: 'people.html', label: 'Lab members' },
        { href: 'publications.html', label: 'Publications' },
        { href: 'open-science.html', label: 'Open science' },
        { href: 'contact.html', label: 'Contact' },

    ];

    const nav = document.createElement('nav');
    pages.forEach(page => {
        const a = document.createElement('a');
        a.href = page.href;
        a.textContent = page.label;
        if (page.href === currentPage) a.classList.add('active');
        nav.appendChild(a);
    });

    const header = document.createElement('div');
    header.innerHTML = `
        <h2 style="color: #d22b43;">The Douglas Lab at UNB</h1>
    `;
    header.appendChild(nav);

    document.querySelector('.container').prepend(header);

    const apple = atob('bWFpbHRvOmdhdmluLmRvdWdsYXNAdW5iLmNh');
	const orange = atob('Z2F2aW4uZG91Z2xhc0B1bmIuY2E=');
	const el = document.getElementById('apple');
	el.innerHTML = '<a href="' + apple + '">' + orange + '</a>';
});


