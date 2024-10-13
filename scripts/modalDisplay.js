let rotationAngle = 0;

document.querySelectorAll('.gallery img').forEach(img => {
    img.addEventListener('click', function () {
        const modal = document.getElementById('imageModal');
        const modalImg = document.getElementById('modalImage');
        const content = document.querySelector('.content');

        modalImg.src = this.src;

        modal.classList.add('active');
        content.classList.add('blurred');

        // Reset rotation when opening a new image
        rotationAngle = 0;
        modalImg.style.transform = `rotate(${rotationAngle}deg)`;
        adjustImageSize(rotationAngle);
    });
});

document.querySelector('.close').addEventListener('click', function () {
    const modal = document.getElementById('imageModal');
    const content = document.querySelector('.content');

    modal.classList.remove('active');
    content.classList.remove('blurred');
});

// Rotate left 90 degrees
document.getElementById('rotateLeft').addEventListener('click', function () {
    rotationAngle -= 90;
    const modalImg = document.getElementById('modalImage');
    modalImg.style.transform = `rotate(${rotationAngle}deg)`;
    adjustImageSize(rotationAngle);
});

// Rotate right 90 degrees
document.getElementById('rotateRight').addEventListener('click', function () {
    rotationAngle += 90;
    const modalImg = document.getElementById('modalImage');
    modalImg.style.transform = `rotate(${rotationAngle}deg)`;
    adjustImageSize(rotationAngle);
});

function adjustImageSize(angle) {
    const modalImg = document.getElementById('modalImage');
    if (angle % 180 !== 0) {
        // Image is rotated 90 or 270 degrees (landscape)
        modalImg.style.maxWidth = '90vh'; // Height becomes the width constraint
        modalImg.style.maxHeight = '90vw'; // Width becomes the height constraint
    } else {
        // Image is in original orientation or 180 degrees (portrait)
        modalImg.style.maxWidth = '80%'; // Width constraint is based on width
        modalImg.style.maxHeight = '80%'; // Height constraint is based on height
    }
}
