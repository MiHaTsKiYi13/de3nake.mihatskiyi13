
// Закрытие модального окна
function closeModal() {
    document.getElementById('login-modal').style.display = 'none';
}


// Генерация звезд на экране
function createStars() {
    const starContainer = document.querySelector('.stars-container');
    for (let i = 0; i < 100; i++) {
        const star = document.createElement('div');
        star.classList.add('star');
        star.style.top = `${Math.random() * 100}vh`;
        star.style.left = `${Math.random() * 100}vw`;
        star.style.animationDuration = `${Math.random() * 2 + 1}s`;
        star.style.animationDelay = `${Math.random() * 3}s`;
        starContainer.appendChild(star);
    }
}

createStars();  // Вызов функции для создания звезд

function downloadVersion1() {
    var fileId = '10I5BrY-DxGzqoAUjUHN0KO6lLfdxZ5EQ';  // ID файла на Google Drive
    var downloadUrl = `https://drive.google.com/uc?export=download&id=${fileId}`;
    
    var a = document.createElement('a');
    a.href = downloadUrl;
    a.target = '_blank'; // Это откроет ссылку в новой вкладке
    a.click(); // Эмулируем клик по ссылке
}
