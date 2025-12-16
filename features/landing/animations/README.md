# Landing Page Animations

This directory contains centralized Framer Motion animation variants used across all landing page sections.

## Why Centralized Variants?

- **Reduced Code Duplication**: Common animations are defined once and reused
- **Consistency**: All sections use the same animation timings and easing functions
- **Maintainability**: Update animations in one place instead of multiple files
- **Performance**: Variants are not recreated on every render
- **Type Safety**: Full TypeScript support with proper typing

## Usage

### Basic Import

```typescript
import {sectionVariants, headingVariants} from "@/features/landing/animations";
// or
import {sectionVariants, headingVariants} from "../../animations/variants";
```

### Available Variants

#### Section Variants

- `sectionVariants` - Standard fade-in from bottom
- `sectionStaggerVariants` - Fade-in with stagger children animation

#### Content Variants

- `headingVariants` - Heading fade-in animation
- `cardVariants` - Card fade-in animation
- `itemVariants` - Generic item fade-in
- `fadeInLeftVariants` - Slide from left
- `fadeInRightVariants` - Slide from right
- `fadeVariants` - Simple opacity fade
- `progressVariants` - Delayed fade-in
- `modalVariants` - Modal/overlay animation
- `containerStaggerVariants` - Container for staggered children
- `expandVariants` - Accordion/collapsible expand/collapse

#### Variant Creators

- `createIndexedVariants(baseDelay, delayIncrement)` - Creates variants with indexed delays
- `createCardIndexedVariants(delayIncrement)` - Card variants with indexed delays
- `createStarVariants(baseDelay, delayIncrement)` - Star rating animations

### Example Usage

#### Simple Section Animation

```typescript
import {motion} from "framer-motion";
import {sectionVariants, headingVariants} from "@/features/landing/animations";

export default function MySection() {
  return (
    <motion.section
      variants={sectionVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{once: true, margin: "-100px"}}
    >
      <motion.h2 variants={headingVariants}>My Heading</motion.h2>
    </motion.section>
  );
}
```

#### Staggered Children Animation

```typescript
import {motion} from "framer-motion";
import {
  sectionStaggerVariants,
  cardVariants,
} from "@/features/landing/animations";

export default function CardGrid({items}) {
  return (
    <motion.section
      variants={sectionStaggerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{once: true}}
    >
      {items.map((item, index) => (
        <motion.div key={index} variants={cardVariants}>
          {item.content}
        </motion.div>
      ))}
    </motion.section>
  );
}
```

#### Custom Indexed Delays

```typescript
import {motion} from "framer-motion";
import {createIndexedVariants} from "@/features/landing/animations";

const customVariants = createIndexedVariants(0.3, 0.15);

export default function StaggeredList({items}) {
  return (
    <div>
      {items.map((item, index) => (
        <motion.div
          key={index}
          custom={index}
          variants={customVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{once: true}}
        >
          {item}
        </motion.div>
      ))}
    </div>
  );
}
```

## Performance Tips

1. **Use `viewport={{ once: true }}`** - Animations trigger only once when scrolling into view
2. **Add viewport margin** - `viewport={{ margin: "-100px" }}` triggers animations slightly before element enters viewport
3. **Limit hover animations** - Keep transitions short (0.2-0.3s) for interactive elements
4. **Use `will-change` sparingly** - Only for elements that definitely animate: `style={{willChange: "transform"}}`

## Customization

To add new variants:

1. Add the variant definition to `variants.ts`
2. Export it from the file
3. Document it in this README
4. Use consistent naming: `[element]Variants` (e.g., `buttonVariants`, `imageVariants`)

## Migration Guide

To migrate existing components:

1. Identify inline animation objects (e.g., `initial={{opacity: 0}}`)
2. Find matching variant in `variants.ts` or create one
3. Import the variant
4. Replace inline props with `variants={variantName}`
5. Remove local variant definitions

### Before:

```typescript
const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 }
};

<motion.div variants={cardVariants}>
```

### After:

```typescript
import { cardVariants } from '@/features/landing/animations';

<motion.div variants={cardVariants}>
```

## Files

- `variants.ts` - All variant definitions and creator functions
- `index.ts` - Central export file
- `README.md` - This documentation
