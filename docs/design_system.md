# Second Turn Games – Design System v4.0

## Overview and Design Principles

The Second Turn design language is built for **ultra-compact efficiency** and **technical precision**, enhanced with **subtle shadows** for hierarchy and clarity.

- **Ultra-Compact Layouts**: Minimal padding and margins for dense information
- **Sharp Edges**: Reduced border radius for a professional, tool-like feel
- **2px Grid**: Consistent, tight spacing system
- **Clear Hierarchy**: Typography and shadows define structure
- **Technical Aesthetic**: Clean, efficient, precise

---

## Typography

### Font Stack

- **Primary (Body/UI)**: [Manrope](https://fonts.google.com/specimen/Manrope)  
  → Clean, modern, highly legible at small sizes
- **Display (Headings/Brand)**: [Righteous](https://fonts.google.com/specimen/Righteous)  
  → Distinctive, geometric, provides strong brand identity

### Scale (Ultra-Compact)

- **h1**: 1.75rem (28px) – Page titles
- **h2**: 1.375rem (22px) – Section headers
- **h3**: 1.125rem (18px) – Subsection headers
- **h4**: 1rem (16px) – Card titles
- **h5**: 0.875rem (14px) – Small headers
- **h6**: 0.75rem (12px) – Captions
- **Body**: 0.875rem (14px) – Default text size
- **Small**: 0.75rem (12px) – Secondary text

---

## Color Palette

### Core Brand Colors

- **Dark Green** `#29432B` – Primary actions, navigation, text
- **Vibrant Orange** `#D95323` – CTAs, highlights, accents
- **Warm Yellow** `#F2C94C` – Warnings, trending indicators

### Extended Accent Colors

- **Teal** `#2DB7A3` – Success states, new features
- **Coral** `#FF6B6B` – Error states, destructive actions
- **Lavender** `#A78BFA` – Info, secondary actions

### Background & Surface

- **Background** `#E6EAD7` – Main page background
- **Surface** `#FFFFFF` – Cards, modals, inputs
- **Surface-50** `#F7F8F4` – Subtle backgrounds
- **Surface-100** `#F0F2E9` – Hover states

### Text Colors

- **Primary** `#1B1B1B` – Main text
- **Secondary** `#6B7280` – Secondary text
- **Muted** `#9CA3AF` – Disabled, placeholder text

### Border Colors

- **Primary** `#E5E7EB` – Standard borders
- **Light** `#F3F4F6` – Subtle borders
- **Accent** `#D95323` – Focus states

---

## Spacing System (2px Grid – Ultra-Compact)

### Base Units

- **xs**: 0.125rem (2px)
- **sm**: 0.25rem (4px)
- **md**: 0.375rem (6px)
- **lg**: 0.5rem (8px)
- **xl**: 0.75rem (12px)
- **2xl**: 1rem (16px)

### Component Spacing

- **Button Padding**: `px-3 py-1.5` (12px × 6px)
- **Card Padding**: `p-2` (8px)
- **Input Padding**: `px-2 py-1.5` (8px × 6px)
- **Section Margins**: `my-4` (16px vertical)
- **Element Gaps**: `gap-2` (8px)

---

## Border Radius (Reduced)

- **xs**: 0.125rem (2px)
- **sm**: 0.25rem (4px)
- **md**: 0.375rem (6px)
- **lg**: 0.5rem (8px)
- **xl**: 0.75rem (12px)

**Components**

- Buttons → 4px
- Cards → 6px
- Inputs → 4px
- Badges → 2px

---

## Shadows

| Token         | Value                           | Usage                     |
| ------------- | ------------------------------- | ------------------------- |
| **shadow-xs** | `0 1px 2px rgb(0 0 0 / 0.08)`   | Dividers, tiny UI         |
| **shadow-sm** | `0 2px 4px rgb(0 0 0 / 0.10)`   | Inputs, light UI          |
| **shadow-md** | `0 4px 8px rgb(0 0 0 / 0.12)`   | Standard cards, dropdowns |
| **shadow-lg** | `0 6px 12px rgb(0 0 0 / 0.15)`  | Elevated cards, modals    |
| **shadow-xl** | `0 12px 20px rgb(0 0 0 / 0.18)` | Overlays, drawers         |

---

## Transitions & Animations

- **Fast**: 150ms
- **Normal**: 200ms
- **Slow**: 300ms
- **Easing**: `ease-out`
- **Hover Scale**: `hover:scale-[1.02]`

---

## Component Library

### Buttons

```css
.btn-primary {
  @apply px-3 py-1.5 rounded-sm bg-vibrant-orange text-white
         font-medium text-sm transition-all duration-200
         shadow-sm hover:shadow-md hover:scale-[1.02];
}

.btn-secondary {
  @apply px-3 py-1.5 rounded-sm border-2 border-dark-green-300
         text-dark-green-600 font-medium text-sm bg-white
         transition-all duration-200 shadow-xs hover:shadow-sm
         hover:bg-dark-green-50 hover:border-dark-green-400
         hover:text-dark-green-700 hover:scale-[1.02];
}

.btn-ghost {
  @apply px-3 py-1.5 rounded-sm text-dark-green-600 font-medium text-sm
         transition-all duration-200 shadow-none hover:shadow-xs
         hover:bg-dark-green-50;
}
```

### Cards

```css
.card-standard {
  @apply bg-surface rounded-md border border-border p-2
         shadow-xs hover:shadow-sm transition-all duration-200;
}

.card-elevated {
  @apply bg-surface rounded-md shadow-md p-2
         hover:shadow-lg transition-all duration-200;
}

.card-interactive {
  @apply bg-surface rounded-md shadow-sm border-2 border-transparent p-2
         hover:border-accent/20 hover:shadow-md transition-all duration-200
         cursor-pointer;
}
```

### Elements

```css
.input-standard {
  @apply px-2 py-1.5 rounded-sm border-2 border-border bg-surface text-sm
         focus:border-accent focus:ring-2 focus:ring-accent/20
         shadow-xs focus:shadow-sm transition-all duration-200;
}

.select-standard {
  @apply px-2 py-1.5 rounded-sm border-2 border-border bg-surface text-sm
         focus:border-accent focus:ring-2 focus:ring-accent/20
         shadow-xs focus:shadow-sm transition-all duration-200;
}

.checkbox-standard {
  @apply rounded-xs border-2 border-border text-accent
         focus:ring-2 focus:ring-accent/20 shadow-xs
         transition-all duration-200;
}
```

### Badges

```css
.badge-primary {
  @apply px-1.5 py-0.5 rounded-xs bg-dark-green-100
         text-dark-green-700 text-xs font-medium shadow-xs;
}

.badge-accent {
  @apply px-1.5 py-0.5 rounded-xs bg-vibrant-orange-100
         text-vibrant-orange-700 text-xs font-medium shadow-xs;
}
```

### Empty States

```css
.empty-state {
  @apply text-center py-6 px-3 shadow-xs rounded-md bg-surface;
}
```

### Loading States

```css
.loading-shimmer {
  background: linear-gradient(90deg, #f0f0f0 25%, #e0e0e0 50%, #f0f0f0 75%);
  background-size: 200% 100%;
  animation: shimmer 1.5s infinite;
}

@keyframes shimmer {
  0% {
    background-position: -200% 0;
  }
  100% {
    background-position: 200% 0;
  }
}
```

### Responsive Design

- Mobile: 0–767px → ultra-compact
- Tablet: 768–1023px → two-column
- Desktop: 1024px+ → multi-column

### Accessibility

- High-contrast focus indicators
- Min. 4.5:1 text contrast
- Touch targets ≥ 44px
- Semantic HTML, keyboard navigation

### Performance

- Utility-first (Tailwind)
- CSS custom properties
- Animate only transform + opacity
- Sub-300ms interactions

### Development Workflow

- Design mobile-first
- Apply 2px grid spacing
- Use consistent radii & shadow tokens
- Test across breakpoints
- Verify accessibility

---
