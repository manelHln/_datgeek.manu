# Quickstart: Update Process Section Animation

**Feature**: Update Process Section Animation
**Date**: 2026-03-25
**Purpose**: Quick reference for implementing the ProcessSection component enhancements

---

## Overview

This guide provides a quick reference for implementing the enhanced ProcessSection component with smooth scroll-based animations and a custom non-interactive accordion.

---

## Prerequisites

- Node.js installed
- Project uses Next.js 15.5.3, React 19.1.0
- GSAP 3.14.2 and @gsap/react 2.1.2 already installed
- Tailwind CSS 4 configured
- Radix UI components available (@radix-ui/react-slot, @radix-ui/react-tabs)

---

## File to Modify

**Primary File**: `components/ProcessSection.tsx`

This is the only file that needs to be modified for this feature.

---

## Implementation Summary

### 1. Replace `<details>` with Custom Accordion

**Current Implementation** (lines 216-322):
- Uses native `<details>` and `<summary>` elements
- Has `onToggle` handler to prevent manual toggling (buggy behavior)

**New Implementation**:
```tsx
// Replace <details> with custom div-based accordion
<div
  className={`rounded-2xl transition-all duration-300 ${
    isActive
      ? "bg-white border-2 border-orange shadow-[0_10px_30px_rgba(232,100,26,0.1)]"
      : "bg-white border border-dark-navy/5 shadow-sm"
  }`}
>
  {/* Summary - non-interactive */}
  <div className="p-6 cursor-default select-none pointer-events-none">
    {/* Number, icon, title, chevron */}
  </div>

  {/* Content - animated height */}
  <div
    ref={contentRef}
    className="overflow-hidden transition-all duration-400 ease-out"
    style={{
      maxHeight: isActive ? '500px' : '0',
      opacity: isActive ? 1 : 0,
      transition: 'max-height 0.4s cubic-bezier(0.4,0,0.2,1), opacity 0.3s ease-in-out'
    }}
  >
    {/* Step description and bullets */}
  </div>
</div>
```

**Key Changes**:
- Remove `<details>` and `<summary>` elements
- Add `pointer-events-none` to prevent all user interaction
- Use CSS transitions for smooth height/opacity changes
- Remove `onToggle` handler (no longer needed)

---

### 2. Enhance Scroll Animations

**Current GSAP Configuration** (lines 81-120):
- Basic ScrollTrigger setup
- Default easing and duration

**Enhanced Configuration**:
```typescript
useGSAP(() => {
  if (!sectionRef.current || !asideRef.current) return;

  // Enhanced aside pinning
  const lastStep = stepRefs.current[steps.length - 1];
  ScrollTrigger.create({
    trigger: sectionRef.current,
    start: "top top",
    endTrigger: lastStep ?? sectionRef.current,
    end: "top 48%",
    pin: asideRef.current,
    pinSpacing: false,
    // Add smooth easing for animations
  });

  // Enhanced step activation with better easing
  steps.forEach((_, i) => {
    const el = stepRefs.current[i];
    if (!el) return;

    ScrollTrigger.create({
      trigger: el,
      start: "top 48%",
      end: "bottom 48%",
      onEnter: () => {
        // Add smooth transition
        gsap.to(dotRefs.current[i], {
          scale: 1.6,
          duration: 0.35,
          ease: "power3.out"
        });
        activate(i);
      },
      onEnterBack: () => {
        gsap.to(dotRefs.current[i], {
          scale: 1.6,
          duration: 0.35,
          ease: "power3.out"
        });
        activate(i);
      },
      onLeave: () => {
        // Smooth scale down when leaving
        gsap.to(dotRefs.current[i], {
          scale: 1,
          duration: 0.35,
          ease: "power3.out"
        });
      },
      onLeaveBack: () => {
        gsap.to(dotRefs.current[i], {
          scale: 1,
          duration: 0.35,
          ease: "power3.out"
        });
      }
    });
  });

  function activate(i: number) {
    setActiveIndex(i);
    // ... existing lineFill calculation
  }
}, { scope: sectionRef });
```

**Key Changes**:
- Add `onLeave` and `onLeaveBack` callbacks for smooth transitions
- Use GSAP `power3.out` easing for natural feel
- Add `duration: 0.35` for consistent timing

---

### 3. Add Content Animations

Add stagger animations for accordion content:

```typescript
const contentRef = useRef<HTMLDivElement>(null);

useGSAP(() => {
  if (!isActive || !contentRef.current) return;

  // Animate content container
  gsap.fromTo(
    contentRef.current,
    { height: 0, opacity: 0 },
    { height: "auto", opacity: 1, duration: 0.4, ease: "power2.out" }
  );

  // Stagger animate child elements
  gsap.fromTo(
    contentRef.current.querySelectorAll('p, li, div'),
    { y: 10, opacity: 0 },
    {
      y: 0,
      opacity: 1,
      duration: 0.3,
      stagger: 0.05,
      ease: "power1.out",
      delay: 0.1
    }
  );
}, [isActive]);
```

---

## Visual Styling

Maintain all existing styling:

- **Cream background**: `bg-cream`
- **Orange accent**: `#E8641A` (CSS variable or inline)
- **Dark navy text**: `text-dark-navy`
- **Dot colors**: Orange when active, orange/60 when completed, dark-navy/20 when inactive
- **Line shadow**: `boxShadow: "0 0 8px rgba(232,100,26,0.55)"`

---

## Testing

### Manual Test Scenarios

1. **Smooth Scroll Navigation**:
   - Scroll slowly through the Process section
   - Verify dots scale smoothly (no instant jumps)
   - Verify orange line fills smoothly
   - Verify card borders/shadows update cohesively

2. **Accordion Behavior**:
   - Try clicking on accordion summary - should have no effect
   - Try clicking chevron - should have no effect
   - Try tabbing to accordion - should not be focusable
   - Verify accordion content expands smoothly with fade-in

3. **Content Animations**:
   - Watch accordion content when step becomes active
   - Verify text fades in with stagger effect
   - Verify height expands smoothly

4. **Responsive Design**:
   - Test on mobile (dots hidden, main content still scrolls)
   - Test on desktop (dots visible on left)
   - Verify behavior works at different viewport sizes

---

## Key Code Sections to Modify

| Section | Lines | Change |
|---------|-------|--------|
| Accordion structure | 216-322 | Replace `<details>` with custom div |
| Accordion CSS classes | 217-221 | Add transition classes |
| Accordion content wrapper | 283-320 | Add ref and animated styles |
| Summary div | 229-281 | Add `pointer-events-none`, remove interaction |
| GSAP useGSAP | 81-120 | Add onLeave/onLeaveBack, enhance easing |
| Step cards opacity | 212-214 | Verify smooth transition |

---

## Potential Issues and Solutions

| Issue | Solution |
|-------|----------|
| Accordion content gets cut off | Use `maxHeight` with sufficient value (e.g., 500px) instead of `height: auto` for CSS transitions |
| Animations feel too fast | Increase duration values (e.g., 0.35 → 0.5) |
| Animations feel too slow | Decrease duration values (e.g., 0.35 → 0.25) |
| Line fill calculation off | Ensure dot refs are populated before calculation |
| GSAP ScrollTrigger not working | Check if GSAP plugins are registered: `gsap.registerPlugin(ScrollTrigger)` |

---

## Rollback Plan

If the custom accordion causes issues, you can revert to the `<details>` implementation by:

1. Restore lines 216-322 from original `ProcessSection.tsx`
2. Remove any new refs (e.g., `contentRef`)
3. Simplify GSAP configuration back to original
4. The existing `onToggle` handler will work as before (with known quirks)

---

## Next Steps

1. Review the detailed `research.md` for in-depth technical decisions
2. Review `data-model.md` for understanding data structures
3. Implement the changes to `ProcessSection.tsx`
4. Test manually using the scenarios above
5. Run `npm run dev` to preview changes
6. Adjust easing/duration values based on visual feedback

---

## References

- GSAP Documentation: https://greensock.com/docs/
- GSAP ScrollTrigger: https://greensock.com/docs/v3/Plugins/ScrollTrigger
- Tailwind CSS: https://tailwindcss.com/
- Radix UI: https://www.radix-ui.com/
