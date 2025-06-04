import { useEffect } from "react";

export function useLockBodyScroll(isLocked: boolean) {
  useEffect(() => {
    if (isLocked) {
      const scrollBarWidth =
        window.innerWidth - document.documentElement.clientWidth;

      // Блокируем скролл
      document.body.style.overflow = "hidden";

      // Чтобы избежать сдвига из-за пропажи скроллбара
      if (scrollBarWidth > 0) {
        document.body.style.paddingRight = `${scrollBarWidth}px`;
      }
    } else {
      // Восстанавливаем
      document.body.style.overflow = "";
      document.body.style.paddingRight = "";
    }

    // Очистка при размонтировании компонента
    return () => {
      document.body.style.overflow = "";
      document.body.style.paddingRight = "";
    };
  }, [isLocked]);
}
