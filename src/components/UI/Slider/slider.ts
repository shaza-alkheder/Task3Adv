
export const slider = (
    slider: HTMLDivElement | null,
    direction: number
) => {
    if (!slider) return;

    slider.scrollBy({
        left: direction * slider.clientWidth,
        behavior: "smooth",
    });
};
