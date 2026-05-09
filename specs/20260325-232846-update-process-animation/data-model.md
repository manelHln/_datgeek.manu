# Data Model: Update Process Section Animation

**Feature**: Update Process Section Animation
**Date**: 2026-03-25
**Purpose**: Define the data structures used in the ProcessSection component

## Overview

This document describes the data entities and state management for the ProcessSection component. Since this is a client-side React component, the data model is focused on TypeScript interfaces and React state.

---

## Entities

### ProcessStep

Represents a single step in the workflow process.

**Type**: TypeScript Interface

```typescript
interface ProcessStep {
  id: number;                    // Unique identifier (1-5)
  title: string;                  // Step title, e.g., "Discovery & Research"
  description: string;            // Detailed description of the step
  icon: React.ElementType;        // Lucide React icon component
  bullets?: {                     // Optional sub-items (only for Development Phase)
    icon: React.ElementType;      // Bullet point icon
    label: string;                // Bullet point text
  }[];
}
```

**Fields**:
- `id`: Numeric identifier, used for step numbering (displayed as "01", "02", etc.)
- `title`: Human-readable step title displayed in the accordion summary
- `description`: Long-form text describing the step, displayed in accordion content
- `icon`: Lucide React icon component for visual identification
- `bullets`: Optional array of sub-items, only present for the "Development Phase" step

**Constraints**:
- `id` must be unique across all steps
- `title` and `description` are required fields
- `icon` must be a valid Lucide React icon component
- `bullets` is optional; when present, contains 3 items for Development Phase

**Relationships**: None (independent entity)

---

### ActiveStepState

Represents the current active state of the ProcessSection, managed by React useState.

**Type**: React State (TypeScript)

```typescript
type ActiveStepState = {
  activeIndex: number;        // Currently active step index (0-4)
  lineFillPx: number;         // Height of the orange line fill in pixels
};
```

**Fields**:
- `activeIndex`: Index of the currently active step (0-based, 0-4 for 5 steps)
- `lineFillPx`: Calculated height of the orange line between dots, in pixels

**State Transitions**:
- `activeIndex` updates via GSAP ScrollTrigger when a step enters the 48% viewport position
- `lineFillPx` recalculated whenever `activeIndex` changes based on dot positions
- Both state updates trigger React re-render to update visual elements

**Constraints**:
- `activeIndex` must be between 0 and `steps.length - 1` (inclusive)
- `lineFillPx` must be non-negative (0 or greater)

**Derivation**:
```typescript
// lineFillPx is calculated from dot positions
const firstDot = dotRefs.current[0];
const activeDot = dotRefs.current[activeIndex];
if (firstDot && activeDot) {
  const firstY = firstDot.getBoundingClientRect().top;
  const activeY = activeDot.getBoundingClientRect().top;
  lineFillPx = activeY - firstY;
}
```

**Relationships**: Dependent on `ProcessStep` array for max index value

---

## Ref Objects

### StepRefs

Array of refs for step containers, used by GSAP ScrollTrigger.

```typescript
const stepRefs = useRef<(HTMLDivElement | null)[]>([]);
```

- Length: 5 (one for each ProcessStep)
- Purpose: GSAP ScrollTrigger attaches to these elements to detect scroll position
- Lifecycle: Populated during render, stable across re-renders

### DotRefs

Array of refs for timeline dots (left sidebar), used for calculating line fill.

```typescript
const dotRefs = useRef<(HTMLDivElement | null)[]>([]);
```

- Length: 5 (one for each ProcessStep)
- Purpose: Used to calculate `lineFillPx` based on positions
- Lifecycle: Populated during render, stable across re-renders

---

## Data Flow

```text
User Scroll
    ↓
GSAP ScrollTrigger detects step at 48% viewport
    ↓
activate(i) called → setActiveIndex(i) & setLineFillPx(calculated)
    ↓
React re-renders with new activeIndex
    ↓
Visual updates:
  • Dot scales up (if active)
  • Orange line fills to new height
  • Step card border/shadow updates
  • Accordion content expands (if custom implementation)
  • Completed steps fade to 45% opacity
```

---

## Validation Rules

### ProcessStep Validation
- `id`: Must be a positive integer (1-5)
- `title`: Non-empty string
- `description`: Non-empty string
- `icon`: Must be a valid Lucide React icon component
- `bullets` (if present): Each item must have `icon` and `label` fields

### ActiveStepState Validation
- `activeIndex`: Must be 0-4 (inclusive)
- `lineFillPx`: Must be non-negative

---

## State Management

The ProcessSection component uses unidirectional state flow:

1. **Source of Truth**: GSAP ScrollTrigger based on scroll position
2. **State Updates**: `setActiveIndex()` and `setLineFillPx()` are called from ScrollTrigger callbacks
3. **Derived State**: Visual elements are rendered based on `activeIndex` (e.g., `isActive`, `isCompleted`)
4. **No User Input**: All state changes are scroll-driven; user interactions are prevented

---

## Notes

- This data model is purely client-side; no backend persistence or API integration
- The steps array is static (defined in component), not dynamically loaded
- State is local to the ProcessSection component; no global state management needed
- The custom accordion implementation will use the same data structures as the current `<details>` approach
