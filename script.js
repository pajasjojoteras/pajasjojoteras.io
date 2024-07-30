// script.js
document.addEventListener('DOMContentLoaded', () => {
    const modal = document.getElementById('modal');
    const modalImg = document.getElementById('modal-img');
    const captionText = document.getElementById('caption');
    const closeBtn = document.querySelector('.close');
    const prevBtn = document.getElementById('prev');
    const nextBtn = document.getElementById('next');
    const images = document.querySelectorAll('.foto img');
    let currentIndex = 0;

    function openModal(index) {
        currentIndex = index;
        modal.style.display = 'block';
        modalImg.src = images[index].src;
        captionText.textContent = images[index].dataset.description;
    }

    function closeModal() {
        modal.style.display = 'none';
    }

    function showPrev() {
        currentIndex = (currentIndex === 0) ? images.length - 1 : currentIndex - 1;
        openModal(currentIndex);
    }

    function showNext() {
        currentIndex = (currentIndex === images.length - 1) ? 0 : currentIndex + 1;
        openModal(currentIndex);
    }

    images.forEach((img, index) => {
        img.addEventListener('click', () => openModal(index));
    });

    closeBtn.addEventListener('click', closeModal);
    prevBtn.addEventListener('click', showPrev);
    nextBtn.addEventListener('click', showNext);

    window.addEventListener('click', (event) => {
        if (event.target === modal) {
            closeModal();
        }
    });

    window.addEventListener('keydown', (event) => {
        if (event.key === 'ArrowLeft') {
            showPrev();
        } else if (event.key === 'ArrowRight') {
            showNext();
        } else if (event.key === 'Escape') {
            closeModal();
        }
    });
});
