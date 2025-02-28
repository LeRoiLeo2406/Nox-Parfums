window.onload = function() {
    const iframe = document.querySelector('iframe');
    iframe.addEventListener('wheel', (event) => {
        event.preventDefault();
        window.scrollBy(0, event.deltaY);
    });
};