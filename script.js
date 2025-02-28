window.onload = function() {
    const iframe = document.querySelector('iframe');
    iframe.addEventListener('wheel', (event) => {
        event.preventDefault();
        window.scrollBy(0, event.deltaY);
    });
};

document.querySelector('.logo').addEventListener('click', () => {
    window.location.href = window.location.href;
});