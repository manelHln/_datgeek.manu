# UI Contract: ProcessSection Component

**Component**: ProcessSection
**Type**: Client-side React Component
**Purpose**: Scroll-based interactive timeline showing 5 workflow process steps

---

## Component Interface

### Props

```typescript
interface ProcessSectionProps {
  // No props - component is self-contained
}
```

The ProcessSection component accepts no props. It renders the complete workflow timeline with all data internally defined.

---

## Public API

### Exports

```typescript
export default function ProcessSection(): JSX.Element
```

### Usage Example

```tsx
import ProcessSection from "@/components/ProcessSection";

export default function Page() {
  return (
    <main>
      <ProcessSection />
    </main>
  );
}
```

---

## Behavioral Contract

### Scroll-Based State Management

**Trigger**: User scrolls through the Process section

**Behavior**:
1. GSAP ScrollTrigger monitors each step's position relative to viewport
2. When a step's top edge reaches 48% of viewport height:
   - That step becomes "active"
   - Visual indicators update (dot, line, card, accordion)
3. When scrolling away from a step:
   - Previous step deactivates smoothly
   - Completed steps show reduced opacity

**Timing**: Transitions occur within 300-400ms with cubic-bezier easing

---

### Visual Feedback Contract

| Element | Active State | Completed State | Inactive State |
|---------|--------------|-----------------|----------------|
| **Dot (left sidebar)** | Orange, scale(1.6), glowing shadow | Orange/60, scale(1) | Dark navy/20, scale(1) |
| **Line fill** | Orange line fills to active dot position | Filled past this dot | Empty (transparent) |
| **Card border** | 2px orange border with shadow | 1px dark-navy/5 border | 1px dark-navy/5 border |
| **Card background** | White with orange glow | White | White |
| **Step number** | Orange background with glow | Dark navy background | Light cream background with border |
| **Icon** | Orange color | Dark navy color | Dark navy/40 color |
| **Title** | Orange color | Dark navy color | Dark navy color |
| **Accordion content** | Expanded, visible | Collapsed, hidden | Collapsed, hidden |
| **Overall opacity** | 100% | 45% | 100% |

---

### Interactivity Contract

**User Interactions**: NONE

The ProcessSection is fully non-interactive. All state changes are scroll-driven.

**Prevented Interactions**:
- Mouse clicks on any element
- Keyboard tab navigation
- Touch gestures (except page scrolling)
- Hover effects (except visual feedback for active state)

**Implementation**:
- `pointer-events-none` on interactive elements
- `cursor-default` instead of `cursor-pointer`
- `select-none` to prevent text selection
- `tabIndex={-1}` to remove from tab order
- `aria-hidden="true"` on scroll-controlled elements

---

## Responsive Behavior

### Desktop (> 768px)
- Left sidebar visible with dots and vertical line
- Accordion content expands vertically
- Full visual indicators (dot, line, card, chevron)

### Mobile (≤ 768px)
- Left sidebar hidden (dots and line removed)
- Main content scrolls normally
- Accordion content still expands/collapses
- Reduced visual complexity

---

## Animation Contracts

### Dot Animation
```typescript
// Scale transition
transition: transform 0.35s cubic-bezier(0.4,0,0.2,1)
// Active: scale(1.6)
// Inactive: scale(1)
```

### Line Fill Animation
```typescript
// Height transition
transition: height 0.5s cubic-bezier(0.4,0,0.2,1)
// Height updates based on dot positions
```

### Accordion Animation
```typescript
// Height expansion
transition: max-height 0.4s cubic-bezier(0.4,0,0.2,1)
// Max-height: 500px (active) → 0 (inactive)

// Opacity fade
transition: opacity 0.3s ease-in-out
// Opacity: 1 (active) → 0 (inactive)

// Content stagger (GSAP)
duration: 0.3s, stagger: 0.05s, delay: 0.1s
```

### Card Transition
```typescript
// Overall card transition
transition: all 0.3s ease
// Border, shadow, background update
```

---

## Data Contract

### Step Data Structure

```typescript
const steps: ProcessStep[] = [
  {
    id: 1,
    title: "Discovery & Research",
    description: "...",
    icon: Search
  },
  {
    id: 2,
    title: "Design System",
    description: "...",
    icon: Paintbrush
  },
  {
    id: 3,
    title: "Development Phase",
    description: "...",
    icon: Code2,
    bullets: [
      { icon: Layers, label: "Frontend Architecture" },
      { icon: Server, label: "Backend & API" },
      { icon: Database, label: "Database Design" }
    ]
  },
  {
    id: 4,
    title: "Testing & QA",
    description: "...",
    icon: ClipboardCheck
  },
  {
    id: 5,
    title: "Public Launch",
    description: "...",
    icon: Rocket
  }
];
```

**Constraints**:
- Exactly 5 steps
- IDs: 1-5 (displayed as "01"-"05")
- Only step 3 has bullets
- Icons are from Lucide React library

---

## Accessibility Contract

### Keyboard Navigation
- Component is NOT keyboard accessible by design (scroll-controlled)
- Elements removed from tab order: `tabIndex={-1}`
- Screen reader behavior: `aria-hidden="true"` on scroll-controlled elements

### Visual Accessibility
- High contrast colors (orange on cream, dark navy on white)
- Clear visual indicators for active state
- No reliance on color alone (icons, borders, shadows indicate state)

### Motion Accessibility
- Respects `prefers-reduced-motion` media query (to be implemented)
- Animations can be disabled if needed (future enhancement)

---

## Performance Contract

### Animation Performance
- GSAP uses hardware-accelerated transforms (GPU)
- 60fps target for all animations
- No layout thrashing (transform and opacity only)
- ScrollTrigger debounced for smooth experience

### Bundle Size Impact
- GSAP (core + ScrollTrigger + React): ~50KB minified (already in project)
- Custom accordion: <1KB (minimal CSS/JS)
- No additional dependencies required

### Render Performance
- Component renders once with initial state
- State updates trigger React re-render
- GSAP handles DOM updates efficiently
- No excessive re-renders or memory leaks

---

## Browser Compatibility

### Supported Browsers
- Chrome/Edge (latest 2 versions)
- Firefox (latest 2 versions)
- Safari (latest 2 versions)
- Mobile browsers (iOS Safari, Chrome Mobile)

### Fallback Behavior
- If GSAP fails to load: Component renders statically with first step active
- If ScrollTrigger fails: Component renders without scroll-based activation
- Custom animations degrade gracefully (CSS transitions work without JS)

---

## Testing Contract

### Manual Test Scenarios
1. Scroll through section at various speeds
2. Try to click/interact with accordion (should have no effect)
3. Test at different viewport sizes (desktop, tablet, mobile)
4. Verify all 5 steps can activate
5. Verify smooth transitions in all directions (up/down)

### Expected Behavior
- No visual glitches or flickering
- Smooth animations at all scroll speeds
- Accordion never responds to user input
- All visual elements update in sync
- Responsive layout works correctly

---

## Version History

| Version | Date | Changes |
|---------|------|---------|
| 1.0 | 2026-03-25 | Initial specification with custom accordion and enhanced animations |

---

## Notes

- This component is designed to be fully scroll-driven with no user interaction
- The custom accordion implementation provides better control than `<details>`
- All animations use smooth easing curves for polished feel
- Visual design maintains existing color scheme (cream, orange, dark navy)
