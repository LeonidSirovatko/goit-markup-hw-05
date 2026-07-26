const openModalBtn = document.querySelector("[data-modal-open]");
const closeModalBtn = document.querySelector("[data-modal-close]");
const backdrop = document.querySelector("[data-modal]");

if (openModalBtn && closeModalBtn && backdrop) {
  const toggleModal = () => {
    // Управляем классом СТРОГО только на бэкдропе по требованию ТЗ
    backdrop.classList.toggle("is-open"); 
    document.body.classList.toggle("modal-open");
  };

  openModalBtn.addEventListener("click", toggleModal);
  closeModalBtn.addEventListener("click", toggleModal);
}
