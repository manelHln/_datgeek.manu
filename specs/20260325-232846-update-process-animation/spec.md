# Feature Specification: Update Process Section Animation

**Feature Branch**: `20260325-232846-update-process-animation`
**Created**: 2026-03-25
**Status**: Draft
**Input**: User description: "Update the Process animation to use ScrollSmooth and also add some better animation to the accordion. Replace the detail tag with an actual accordion or equivalent from shadcn so that we have a better way to prevent users from trying to open it. Currently, with the detail tag, it tries to open then close it right after making it feel weird and give a buggy look."

## User Scenarios & Testing *(mandatory)*

### User Story 1 - Smooth Scroll-Based Process Navigation (Priority: P1)

As a user scrolling through the Process section, I want the active process step to smoothly animate into focus as I scroll, providing clear visual feedback without jumpy transitions.

**Why this priority**: This is the core user experience issue being addressed - the current implementation feels buggy due to the `<details>` tag's native behavior.

**Independent Test**: Can be tested by scrolling through the Process section and verifying that the active step indicator, line fill, and card highlighting all transition smoothly without the accordion flickering open/closed.

**Acceptance Scenarios**:

1. **Given** a user is viewing the Process section, **When** they scroll to a new step, **Then** the active step should transition smoothly with a continuous animation (not instant jump)
2. **Given** a user is scrolling down through steps, **When** the scroll position reaches 48% viewport, **Then** the next step should activate with all animations in sync (dot, line, card)
3. **Given** a user is scrolling back up, **When** the previous step re-enters the viewport, **Then** the active state should transition back smoothly with all visual elements updating cohesively

---

### User Story 2 - Accordion Content Animation (Priority: P1)

As a user viewing the Process section, I want the accordion content to animate smoothly when it becomes active, with proper height transitions and fade-in effects for a polished experience.

**Why this priority**: The current implementation has no content animation, making the accordion feel static when active.

**Independent Test**: Can be tested by observing the accordion content (description, bullets, etc.) as different steps become active during scrolling.

**Acceptance Scenarios**:

1. **Given** a step becomes active, **When** the content expands, **Then** the height should animate smoothly with easing (e.g., cubic-bezier)
2. **Given** the content is expanding, **When** the animation plays, **Then** the text content should fade in with a slight stagger effect for visual polish
3. **Given** the accordion is closing, **When** the active state changes, **Then** the content should collapse smoothly without jumping

---

### User Story 3 - Proper Accordion State Management (Priority: P2)

As a user viewing the Process section, I want the accordion to be controlled purely by scroll position without any manual interaction capability, ensuring a predictable and consistent user experience.

**Why this priority**: This prevents the buggy behavior where users try to click the accordion and it fights with the scroll-based control.

**Independent Test**: Can be tested by attempting to click on the accordion summary/chevron and verifying it does nothing.

**Acceptance Scenarios**:

1. **Given** the Process section is displayed, **When** a user clicks on the accordion summary, **Then** nothing should happen (no toggle, no visual feedback suggesting interactivity)
2. **Given** the Process section is displayed, **When** a user clicks the chevron icon, **Then** the accordion state should remain controlled by scroll position only
3. **Given** a user is scrolling, **When** they pause mid-scroll, **Then** the active accordion should stay in its current state without being affected by hover or clicks

---

### Edge Cases

- What happens when a user scrolls very quickly through the section? The animations should still trigger correctly without getting stuck in intermediate states.
- How does the system handle when the browser window is resized? The scroll triggers and layout should recalculate correctly.
- What happens when a user uses keyboard navigation or tab through the accordion? The accordion should not be focusable/interactable via keyboard.
- What happens if GSAP ScrollTrigger fails to initialize? The component should still render with a sensible fallback (e.g., first step always active).
- What happens on mobile devices where the left sidebar (dots) is hidden? The scroll-based activation should still work with the main content.

## Requirements *(mandatory)*

### Functional Requirements

- **FR-001**: System MUST use smooth scroll-based animations for the Process section navigation (no instant jumps)
- **FR-002**: System MUST replace the `<details>` tag with a custom accordion component or shadcn equivalent
- **FR-003**: System MUST prevent all manual user interaction with the accordion (clicks, keyboard, hover should have no effect)
- **FR-004**: System MUST animate the accordion content expansion/collapse with smooth height transitions
- **FR-005**: System MUST implement fade-in animations for accordion content with staggered timing for visual polish
- **FR-006**: System MUST synchronize all visual elements (dot scaling, line fill, card highlighting, content expansion) during scroll-based transitions
- **FR-007**: System MUST maintain the current visual styling (orange accent, cream background, etc.) of the Process section
- **FR-008**: System MUST support the existing step data structure (id, title, description, icon, bullets)
- **FR-009**: System MUST preserve the responsive behavior where the left sidebar (dots) is hidden on mobile

### Key Entities

- **ProcessStep**: Represents a step in the workflow process, containing id, title, description, icon, and optional bullets for development phase details
- **ActiveStepState**: Represents the current state tracking including activeIndex, lineFillPx for the visual timeline indicator

## Success Criteria *(mandatory)*

### Measurable Outcomes

- **SC-001**: Scroll-based step activation transitions have a minimum duration of 300ms with smooth easing (no instant jumps)
- **SC-002**: Accordion content expands/collapses with smooth CSS transitions using cubic-bezier easing curves
- **SC-003**: No visual glitches or flickering occur when scrolling at any speed through the Process section
- **SC-004**: Users cannot manually trigger accordion state changes through any interaction (click, keyboard, hover)
- **SC-005**: The accordion content animates in with a stagger effect (icon then text then bullets) when becoming active

## Assumptions

- The project already has GSAP and ScrollTrigger installed (confirmed from package.json)
- Radix UI components are available for accordion implementation (or we'll create a custom non-interactive accordion)
- Tailwind CSS is available for styling animations (confirmed from package.json)
- The cream background (`bg-cream`), orange accent (`#E8641A`), and dark navy (`text-dark-navy`) color scheme should be maintained
- The current step structure and data should remain unchanged - only the UI/UX implementation changes
- The existing GSAP ScrollTrigger setup for step activation can be enhanced rather than completely replaced
