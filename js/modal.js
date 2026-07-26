const openModalBtn = document.querySelector("[data-modal-open]");
const closeModalBtn = document.querySelector("[data-modal-close]");
const backdrop = document.querySelector("[data-modal]"); // Находим темный фон
const modal = document.querySelector("#modal"); // Находим само белое окно по id

if (openModalBtn && closeModalBtn && backdrop && modal) {
  const toggleModal = () => {
    backdrop.classList.toggle("is-open"); // Включаем/выключаем темный фон
    modal.classList.toggle("is-open");    // Включаем/выключаем белое окно
    document.body.classList.toggle("modal-open"); // Блокируем скролл страницы
  };

  openModalBtn.addEventListener("click", toggleModal);
  closeModalBtn.addEventListener("click", toggleModal);
}
