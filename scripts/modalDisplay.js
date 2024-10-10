document.querySelectorAll('.gallery img').forEach(img => {
    img.addEventListener('click', function () {
        const modal = document.getElementById('imageModal');
        const modalImg = document.getElementById('modalImage');
        const content = document.querySelector('.content');

        modalImg.src = this.src;

        modal.classList.add('active');

        content.classList.add('blurred');
    });
});

document.querySelector('.close').addEventListener('click', function () {
    const modal = document.getElementById('imageModal');
    const content = document.querySelector('.content');

    modal.classList.remove('active');

    content.classList.remove('blurred');
});
