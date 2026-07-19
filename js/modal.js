const openModalBtn = document.querySelector("[data-modal-open]");
const closeModalBtn = document.querySelector("[data-modal-close]");
const modal = document.querySelector("[data-modal]");

if (openModalBtn && closeModalBtn && modal) {
  const toggleModal = () => {
    modal.classList.toggle("is-open");
    document.body.classList.toggle("modal-open");
  };

  openModalBtn.addEventListener("click", toggleModal);
  closeModalBtn.addEventListener("click", toggleModal);

  modal.addEventListener("click", (event) => {
    if (event.target === modal) {
      toggleModal();
    }
  });

  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape" && modal.classList.contains("is-open")) {
      toggleModal();
    }
  });
}
