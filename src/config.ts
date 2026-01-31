export const FADE_OUT_MARGIN_TOP = "20%";
export const FADE_OUT_MARGIN_BOTTOM = "20%";

// Computed property for IntersectionObserver rootMargin
// Format: top right bottom left
// Negative values shrink the effective viewport, causing elements to "exit" (intersecting=false) earlier
export const ANIMATION_ROOT_MARGIN = `-${FADE_OUT_MARGIN_TOP} 0px -${FADE_OUT_MARGIN_BOTTOM} 0px`;
