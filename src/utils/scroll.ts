export const scrollToSection = (id: string, offset = 0) => {
  const element = document.querySelector(id);
  if (!element) return;

  const elementPosition =
    element.getBoundingClientRect().top + window.pageYOffset;
  const offsetPosition = elementPosition + offset;

  window.scrollTo({
    top: offsetPosition,
    behavior: "smooth",
  });
};
