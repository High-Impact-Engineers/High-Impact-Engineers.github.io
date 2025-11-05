document.addEventListener('DOMContentLoaded', function() {
    const links = document.querySelectorAll('a[href]:not([target="_blank"])');

    links.forEach(link => {
        const href = link.getAttribute('href');
        if (!href) return;

        try {
            const linkUrl = new URL(href, window.location.href);
            const currentUrl = new URL(window.location.href);

            if (linkUrl.hostname !== currentUrl.hostname) {
                link.setAttribute('target', '_blank');

                const existingRel = link.getAttribute('rel') || '';
                const relValues = existingRel.split(' ').filter(Boolean);

                if (!relValues.includes('noopener')) {
                    relValues.push('noopener');
                }
                if (!relValues.includes('noreferrer')) {
                    relValues.push('noreferrer');
                }

                link.setAttribute('rel', relValues.join(' '));
            }
        } catch (e) {
        }
    });
});