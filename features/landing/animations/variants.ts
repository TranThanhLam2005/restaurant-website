/**
 * Shared Framer Motion animation variants for landing page sections
 * Centralizes common animations to reduce code duplication and ensure consistency
 */

import type {Variants} from "framer-motion";

/**
 * Standard section fade-in from bottom animation
 * Used for main section containers
 */
export const sectionVariants: Variants = {
  hidden: {opacity: 0, y: 40},
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: "easeOut",
    },
  },
};

/**
 * Section variant with stagger children animation
 * Use when section contains multiple animated children
 */
export const sectionStaggerVariants: Variants = {
  hidden: {opacity: 0, y: 40},
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: "easeOut",
      staggerChildren: 0.1,
    },
  },
};

/**
 * Heading animation - subtle fade-in with slight upward motion
 */
export const headingVariants: Variants = {
  hidden: {opacity: 0, y: 20},
  visible: {
    opacity: 1,
    y: 0,
    transition: {duration: 0.6},
  },
};

/**
 * Card fade-in animation
 * Used for card components, menu items, etc.
 */
export const cardVariants: Variants = {
  hidden: {opacity: 0, y: 20},
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: "easeOut",
    },
  },
};

/**
 * Item fade-in animation
 * Generic item animation for lists, grids, etc.
 */
export const itemVariants: Variants = {
  hidden: {opacity: 0, y: 20},
  visible: {
    opacity: 1,
    y: 0,
    transition: {duration: 0.5, ease: "easeOut"},
  },
};

/**
 * Fade-in from left animation
 * Used for content sliding in from the left side
 */
export const fadeInLeftVariants: Variants = {
  hidden: {opacity: 0, x: -40},
  visible: {
    opacity: 1,
    x: 0,
    transition: {duration: 0.7, ease: "easeOut"},
  },
};

/**
 * Fade-in from right animation
 * Used for content sliding in from the right side
 */
export const fadeInRightVariants: Variants = {
  hidden: {opacity: 0, x: 40},
  visible: {
    opacity: 1,
    x: 0,
    transition: {duration: 0.7, ease: "easeOut"},
  },
};

/**
 * Simple fade animation
 * Used for elements that only need opacity transition
 */
export const fadeVariants: Variants = {
  hidden: {opacity: 0},
  visible: {
    opacity: 1,
    transition: {duration: 0.4},
  },
};

/**
 * Progress/delayed fade-in animation
 * Used for elements that appear after section content
 */
export const progressVariants: Variants = {
  hidden: {opacity: 0},
  visible: {
    opacity: 1,
    transition: {delay: 0.3},
  },
};

/**
 * Modal backdrop animation
 * Used for overlay/modal backgrounds
 */
export const modalVariants: Variants = {
  hidden: {opacity: 0},
  visible: {opacity: 1},
  exit: {opacity: 0},
};

/**
 * Container variant for stagger children animations
 * Use as parent when you want sequential child animations
 */
export const containerStaggerVariants: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.15,
    },
  },
};

/**
 * Expand/collapse animation for accordions, collapsibles
 */
export const expandVariants: Variants = {
  hidden: {height: 0, opacity: 0},
  visible: {
    height: "auto",
    opacity: 1,
    transition: {duration: 0.4, ease: "easeOut"},
  },
  exit: {height: 0, opacity: 0, transition: {duration: 0.3}},
};

/**
 * Creates a custom variant with indexed delay
 * Used for staggered animations based on array index
 * @param baseDelay - Starting delay in seconds
 * @param delayIncrement - Delay increment per index
 */
export const createIndexedVariants = (
  baseDelay = 0.2,
  delayIncrement = 0.1
): Variants => ({
  hidden: {opacity: 0, y: 10},
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {delay: baseDelay + i * delayIncrement},
  }),
});

/**
 * Creates a custom card variant with indexed delay
 * @param delayIncrement - Delay increment per index
 */
export const createCardIndexedVariants = (delayIncrement = 0.1): Variants => ({
  hidden: {opacity: 0, y: 20},
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * delayIncrement,
      duration: 0.4,
      ease: "easeOut",
    },
  }),
});

/**
 * Creates a star animation variant with indexed delay
 * Used for rating stars that appear sequentially
 */
export const createStarVariants = (
  baseDelay = 0.3,
  delayIncrement = 0.05
): Variants => ({
  hidden: {opacity: 0, scale: 0.6},
  visible: (i: number) => ({
    opacity: 1,
    scale: 1,
    transition: {delay: baseDelay + i * delayIncrement},
  }),
});
