# Research: Update Process Section Animation

**Feature**: Update Process Section Animation
**Date**: 2026-03-25
**Purpose**: Resolve technical unknowns and establish best practices for the implementation

## Overview

This document consolidates research findings for implementing smooth scroll-based animations and replacing the `<details>` tag with a properly controlled accordion component in the ProcessSection.

---

## Research Findings

### 1. Non-Interactive Accordion Implementation

**Decision**: Create a custom accordion component using Radix UI patterns without interactivity.

**Rationale**:
- Shadcn UI's accordion component (`@radix-ui/react-accordion`) is built for user interaction and cannot be easily made non-interactive
- A custom implementation allows complete control over state, preventing any user interaction
- We can leverage the existing visual styling and patterns from the current `<details>` implementation
- Custom approach aligns with the project's existing pattern of using Radix UI primitives (slots, tabs)

**Implementation Approach**:
```tsx
// Custom non-interactive accordion
<div className="border rounded-2xl overflow-hidden">
  <div className="p-6 cursor-default select-none">
    {/* Summary - non-interactive */}
  </div>
  <div
    className="overflow-hidden transition-all duration-300"
    style={{ maxHeight: isActive ? '500px' : '0', opacity: isActive ? 1 : 0 }}
  >
    {/* Content */}
  </div>
</div>
```

**Alternatives Considered**:
- Use `@radix-ui/react-accordion` and attempt to disable interaction: Rejected - Radix Accordion is designed for interactivity and preventing all interaction would require hacking the internals
- Keep `<details>` and use `e.preventDefault()`: Rejected - This is the current buggy approach being fixed

---

### 2. GSAP ScrollSmooth Configuration

**Decision**: GSAP ScrollSmooth is a separate plugin. For this use case, we'll enhance the existing ScrollTrigger with better easing and duration settings.

**Rationale**:
- GSAP ScrollSmooth is a premium plugin (part of ScrollTrigger Pro) that smoothens the actual page scrolling
- The existing implementation uses GSAP core + ScrollTrigger, which is already in place
- The user's request for "ScrollSmooth" likely refers to smoother animations during step transitions, not page smoothing
- We can achieve smooth step transitions without the additional plugin by configuring easing and duration properly

**Implementation Approach**:
```typescript
// Enhance existing ScrollTrigger configuration
gsap.to(activeDot, {
  scale: 1.6,
  duration: 0.35,
  ease: "power3.out" // Smooth easing curve
});

// Animate accordion content height
gsap.fromTo(
  accordionContent,
  { height: 0, opacity: 0 },
  { height: "auto", opacity: 1, duration: 0.4, ease: "power2.out" }
);
```

**Alternatives Considered**:
- Install and configure GSAP ScrollSmooth plugin: Rejected - Requires premium license and may conflict with existing setup
- Use CSS-only scroll-driven animations: Rejected - Less control than GSAP, browser support not universal

---

### 3. Accordion Content Height Animation

**Decision**: Use GSAP for height transitions with `auto` height support, paired with opacity fade-in for smooth expansion.

**Rationale**:
- GSAP handles `height: auto` animations natively, which CSS transitions struggle with
- Combining height and opacity animations provides a polished feel
- GSAP's `fromTo` method allows precise control over initial and final states
- The stagger effect can be applied to child elements for visual polish

**Implementation Approach**:
```typescript
// UseGSAP hook for accordion content
useGSAP(() => {
  if (!isActive) return;

  // Animate container expansion
  gsap.fromTo(
    contentRef.current,
    { height: 0, opacity: 0 },
    { height: "auto", opacity: 1, duration: 0.4, ease: "power2.out" }
  );

  // Stagger animate child elements
  gsap.fromTo(
    childElements,
    { y: 10, opacity: 0 },
    { y: 0, opacity: 1, duration: 0.3, stagger: 0.05, ease: "power1.out", delay: 0.1 }
  );
}, [isActive]);
```

**Alternatives Considered**:
- CSS `max-height` transitions: Rejected - Requires pre-defining max-height, doesn't feel as smooth
- CSS grid-template-rows: Rejected - Newer technique, browser compatibility concerns

---

### 4. Easing Curves for Scroll-Based Transitions

**Decision**: Use cubic-bezier CSS transitions for visual elements, GSAP's `power3.out` for scroll-triggered animations.

**Rationale**:
- Cubic-bezier `cubic-bezier(0.4, 0, 0.2, 1)` provides a natural, smooth deceleration that feels polished
- GSAP's `power3.out` is mathematically equivalent and offers consistent timing across scroll speeds
- These easing curves are widely used in modern UI (Material Design, Apple HIG) and feel familiar to users
- They provide a "slow start, fast middle, slow finish" feel that prevents jank

**Implementation Approach**:
```tsx
// CSS transitions for UI elements
style={{
  transition: "all 0.35s cubic-bezier(0.4,0,0.2,1)",
  transform: isActive ? "scale(1.6)" : "scale(1)"
}}

// GSAP easing for scroll-triggered animations
gsap.to(target, { duration: 0.35, ease: "power3.out" })
```

**Alternatives Considered**:
- Linear easing: Rejected - Feels robotic and unnatural
- Exponential curves: Rejected - Too aggressive for UI transitions

---

### 5. Preventing All User Interaction

**Decision**: Use a combination of CSS `pointer-events`, `cursor-default`, `select-none`, and HTML attributes to prevent all interaction.

**Rationale**:
- `pointer-events: none` is the most direct way to prevent mouse/touch interaction
- `cursor-default` and `select-none` provide visual feedback that the element is not interactive
- Removing `cursor-pointer` and avoiding focusable elements prevents keyboard navigation
- This approach is declarative and doesn't require JavaScript event handlers

**Implementation Approach**:
```tsx
<div
  className="cursor-default select-none pointer-events-none"
  tabIndex={-1}  // Remove from tab order
  aria-hidden="true"  // Hide from screen readers (since it's scroll-controlled)
>
  {/* Accordion content */}
</div>
```

**Alternatives Considered**:
- JavaScript `e.preventDefault()` on click events: Rejected - Still shows pointer cursor and allows focus
- Disable entire parent with `disabled` attribute: Rejected - Not applicable to `div` elements

---

### 6. Testing Framework Clarification

**Decision**: Testing framework remains unspecified. This will be addressed during implementation phase based on project preferences.

**Rationale**:
- No testing framework is currently in package.json
- Adding tests is a separate concern from the animation implementation
- The feature can be manually tested by scrolling through the Process section
- Jest + React Testing Library is a common choice for React projects but should be decided by the team

**Recommendation for Implementation**:
- Implement the feature without automated tests initially
- Create manual test scenarios based on the spec's acceptance criteria
- Consider adding testing infrastructure as a separate initiative if needed

---

## Summary of Technical Decisions

| Decision | Chosen Approach | Key Benefit |
|----------|-----------------|-------------|
| Accordion component | Custom non-interactive implementation | Complete control, no user interaction bugs |
| Scroll animations | Enhanced GSAP ScrollTrigger with better easing | Smooth transitions without premium plugins |
| Content expansion | GSAP height + opacity animations | Polished feel with `auto` height support |
| Easing curves | `cubic-bezier(0.4,0,0.2,1)` / `power3.out` | Natural, familiar UI feel |
| Interaction prevention | CSS pointer-events + cursor-default | Declarative, no JS needed |
| Testing | Manual testing (framework TBD) | Focus on implementation first |

---

## Open Questions / Risks

None identified. All technical unknowns have been resolved through research.
