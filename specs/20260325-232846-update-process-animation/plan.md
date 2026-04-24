# Implementation Plan: Update Process Section Animation

**Branch**: `20260325-232846-update-process-animation` | **Date**: 2026-03-25 | **Spec**: [spec.md](./spec.md)
**Input**: Feature specification from `/specs/20260325-232846-update-process-animation/spec.md`

**Note**: This template is filled in by the `/speckit.plan` command. See `.specify/templates/plan-template.md` for the execution workflow.

## Summary

Update the ProcessSection component to improve the user experience by implementing smooth scroll-based animations and replacing the buggy `<details>` tag with a properly controlled accordion component. The current implementation has a UX issue where the native `<details>` element fights with scroll-based state control, causing visual glitches when users try to interact with it manually. The solution involves:

1. **Replace `<details>` with custom accordion**: Create or use a shadcn-based accordion that can be fully controlled via scroll position without accepting user input
2. **Smooth scroll animations**: Enhance GSAP ScrollTrigger animations for smoother transitions between steps
3. **Content animations**: Add fade-in and stagger animations for accordion content when becoming active
4. **Prevent user interaction**: Remove all interactivity from the accordion to prevent the buggy open/close behavior

The technical approach leverages existing GSAP infrastructure and extends it with better easing curves and content transitions.

## Technical Context

**Language/Version**: TypeScript 5.x, React 19.1.0, Next.js 15.5.3
**Primary Dependencies**: GSAP 3.14.2, @gsap/react 2.1.2, Radix UI (@radix-ui/react-slot, @radix-ui/react-tabs), Tailwind CSS 4, tw-animate-css 1.3.8, lucide-react 0.544.0
**Storage**: N/A (client-side only)
**Testing**: [NEEDS CLARIFICATION - Test framework not specified in package.json]
**Target Platform**: Web browsers (responsive design, supports desktop and mobile)
**Project Type**: web-service
**Performance Goals**: 60fps animations during scroll, smooth transitions without jank
**Constraints**: Must maintain existing visual design system (cream, orange, dark navy colors)
**Scale/Scope**: Single component update affecting ProcessSection.tsx, involves 5 process steps with scroll-based activation

## Constitution Check

*GATE: Must pass before Phase 0 research. Re-check after Phase 1 design.*

Note: The constitution.md file contains template placeholders. Based on typical software development principles, the following gates apply:

**Constitution Principles (Template-derived)**:
- Library-First: Not applicable - this is a UI component enhancement, not a new library
- CLI Interface: Not applicable - no CLI involved
- Test-First: Cannot evaluate - testing framework not specified (NEEDS CLARIFICATION)
- Integration Testing: Not applicable - no external service integrations
- Observability: Not applicable - no logging/monitoring requirements
- Versioning: Not applicable - no breaking changes to API contracts
- Simplicity: **APPLIES** - Start simple, avoid over-engineering

**Gate Evaluation**:

| Principle | Status | Notes |
|-----------|--------|-------|
| Simplicity | PASS | Focus on direct replacement of `<details>` with custom accordion, maintain existing GSAP structure |
| Test-First | UNKNOWN | Testing framework not specified - will defer to development phase |
| Performance | PASS | GSAP animations are performant; no additional performance concerns |

**Result**: ✅ PASSES - Constitution check complete. No violations identified. Proceed to Phase 0.

---

## Phase 0: Research & Technology Decisions ✅ COMPLETE

**Status**: ✅ COMPLETE
**Output**: [research.md](./research.md)

### Research Summary

All technical unknowns have been resolved through research:

1. **Accordion Implementation**: Custom non-interactive div-based accordion (not shadcn)
   - Rationale: Shadcn/Radix accordion designed for user interaction; custom approach provides complete control
   - Decision: Build custom accordion with CSS transitions and `pointer-events-none`

2. **GSAP ScrollSmooth**: Enhanced ScrollTrigger with better easing (not separate plugin)
   - Rationale: ScrollSmooth is a premium plugin; existing ScrollTrigger can achieve smooth transitions
   - Decision: Use `power3.out` easing and 0.35s duration for smooth transitions

3. **Content Animation**: GSAP height + opacity with stagger
   - Rationale: GSAP handles `height: auto` better than CSS; provides polished feel
   - Decision: GSAP fromTo with 0.4s duration, 0.05s stagger for child elements

4. **Easing Curves**: Cubic-bezier `cubic-bezier(0.4,0,0.2,1)` / `power3.out`
   - Rationale: Natural deceleration feel, widely used in modern UI
   - Decision: Apply to all transitions for consistency

5. **Prevent User Interaction**: CSS `pointer-events-none` + `cursor-default`
   - Rationale: Declarative approach, no JavaScript event handlers needed
   - Decision: Apply to summary and interactive elements

6. **Testing Framework**: Remains unspecified
   - Rationale: No framework in package.json; manual testing sufficient for UI component
   - Decision: Manual testing based on acceptance criteria

### Key Decisions

| Decision | Chosen Approach |
|----------|-----------------|
| Accordion type | Custom non-interactive implementation |
| Scroll animation | Enhanced GSAP ScrollTrigger with `power3.out` |
| Content animation | GSAP height + opacity with stagger |
| Easing curves | `cubic-bezier(0.4,0,0.2,1)` |
| Interaction prevention | CSS `pointer-events-none` |
| Testing | Manual (framework TBD) |

---

## Phase 1: Design & Contracts ✅ COMPLETE

**Status**: ✅ COMPLETE
**Outputs**: [data-model.md](./data-model.md), [contracts/ui-contract.md](./contracts/ui-contract.md), [quickstart.md](./quickstart.md)

### Data Model

Defined TypeScript interfaces and React state management:

- **ProcessStep**: Interface for workflow steps (id, title, description, icon, optional bullets)
- **ActiveStepState**: React state for activeIndex and lineFillPx
- **Ref Objects**: stepRefs and dotRefs for GSAP animations
- **Data Flow**: Scroll → ScrollTrigger → state updates → React re-render

See [data-model.md](./data-model.md) for complete details.

### Interface Contracts

Created UI contract documenting:

- Component interface (no props, self-contained)
- Behavioral contract (scroll-based state, visual feedback)
- Interactivity contract (no user interaction, scroll-driven only)
- Responsive behavior (desktop vs mobile)
- Animation contracts (timing, easing, transitions)
- Data contract (step structure, constraints)
- Accessibility contract (keyboard, visual, motion)
- Performance contract (60fps, bundle size, render performance)
- Browser compatibility and fallback behavior

See [contracts/ui-contract.md](./contracts/ui-contract.md) for complete details.

### Quickstart Guide

Created implementation quickstart with:

- Prerequisites and file to modify
- Implementation summary with code examples
- Visual styling guidelines
- Manual test scenarios
- Key code sections to modify
- Potential issues and solutions
- Rollback plan
- Next steps and references

See [quickstart.md](./quickstart.md) for implementation guide.

### Agent Context Update

✅ Complete: Ran `.specify/scripts/bash/update-agent-context.sh claude`
- Updated CLAUDE.md with technology stack
- Added TypeScript 5.x, React 19.1.0, Next.js 15.5.3
- Added GSAP, Radix UI, Tailwind CSS, Lucide React

---

## Constitution Check (Post-Phase 1 Design) ✅ PASSES

*Re-evaluated after Phase 1 design completion*

### Revised Gate Evaluation

| Principle | Status | Post-Design Notes |
|-----------|--------|-------------------|
| Simplicity | ✅ PASS | Custom accordion is straightforward; maintains existing GSAP structure |
| Test-First | ℹ️ UNKNOWN | Manual testing approach acceptable for UI component enhancement |
| Performance | ✅ PASS | GSAP animations use GPU acceleration; no performance concerns |
| Maintainability | ✅ PASS | Self-contained component change; clear documentation |

**Result**: ✅ PASSES - All applicable principles satisfied. No violations identified. Ready for implementation.

---

## Project Structure

### Documentation (this feature)

```text
specs/[###-feature]/
├── plan.md              # This file (/speckit.plan command output)
├── research.md          # Phase 0 output (/speckit.plan command)
├── data-model.md        # Phase 1 output (/speckit.plan command)
├── quickstart.md        # Phase 1 output (/speckit.plan command)
├── contracts/           # Phase 1 output (/speckit.plan command)
└── tasks.md             # Phase 2 output (/speckit.tasks command - NOT created by /speckit.plan)
```

### Source Code (repository root)

```text
frontend/
├── app/
│   ├── layout.tsx
│   └── page.tsx
├── components/
│   ├── ui/
│   │   ├── button.tsx
│   │   ├── card.tsx
│   │   ├── badge.tsx
│   │   ├── tabs.tsx
│   │   └── feature.tsx
│   ├── ProcessSection.tsx         # PRIMARY FILE TO MODIFY
│   ├── HeroSection.tsx
│   └── [other components...]
├── package.json
└── tailwind.config.ts
```

**Structure Decision**: This is a Next.js 15 application using the App Router structure. The feature involves updating a single component (`ProcessSection.tsx`) within the existing frontend structure. The project uses Radix UI components for UI primitives and Tailwind CSS for styling.

## Complexity Tracking

> **Fill ONLY if Constitution Check has violations that must be justified**

| Violation | Why Needed | Simpler Alternative Rejected Because |
|-----------|------------|-------------------------------------|
| [e.g., 4th project] | [current need] | [why 3 projects insufficient] |
| [e.g., Repository pattern] | [specific problem] | [why direct DB access insufficient] |
