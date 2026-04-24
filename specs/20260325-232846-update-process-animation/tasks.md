# Tasks: Update Process Section Animation

**Input**: Design documents from `/specs/20260325-232846-update-process-animation/`
**Prerequisites**: plan.md, spec.md (user stories), research.md, data-model.md, contracts/ui-contract.md

**Tests**: Manual testing only - no automated test framework specified in package.json

**Organization**: Tasks are grouped by user story to enable independent implementation and testing of each story.

## Format: `[ID] [P?] [Story] Description`

- **[P]**: Can run in parallel (different files, no dependencies)
- **[Story]**: Which user story this task belongs to (e.g., US1, US2, US3)
- Include exact file paths in descriptions

## Path Conventions

- **Single project**: `components/` at repository root (Next.js structure)
- This is a web application (frontend only)

---

## Phase 1: Setup (Shared Infrastructure)

**Purpose**: Project initialization and verification

- [X] T001 Verify GSAP 3.14.2 and @gsap/react 2.1.2 are installed in package.json
- [X] T002 Verify gsap.registerPlugin(ScrollTrigger) is imported in components/ProcessSection.tsx
- [X] T003 Backup current ProcessSection.tsx implementation for rollback capability

---

## Phase 2: Foundational (Blocking Prerequisites)

**Purpose**: Core infrastructure that MUST be complete before ANY user story can be implemented

**⚠️ CRITICAL**: No user story work can begin until this phase is complete

- [X] T004 Add contentRef state variable for GSAP accordion content animations in components/ProcessSection.tsx (line 79)
- [X] T005 Verify all existing refs (sectionRef, asideRef, stepRefs, dotRefs) are properly initialized in components/ProcessSection.tsx
- [X] T006 Verify steps array and ProcessStep interface are correctly defined in components/ProcessSection.tsx (lines 29-70)
- [X] T007 Verify activeIndex and lineFillPx state variables exist in components/ProcessSection.tsx (lines 77-78)

**Checkpoint**: Foundation ready - user story implementation can now begin in parallel

---

## Phase 3: User Story 1 - Smooth Scroll-Based Process Navigation (Priority: P1) 🎯 MVP

**Goal**: Implement smooth scroll-based animations with enhanced easing curves for dot, line, and card transitions

**Independent Test**: Scroll through Process section and verify that active step indicator, line fill, and card highlighting all transition smoothly with 0.35s duration and cubic-bezier easing (no instant jumps or flickering)

### Implementation for User Story 1

- [X] T008 [P] [US1] Add contentRef declaration after lineFillPx state in components/ProcessSection.tsx (line 79)
- [X] T009 [US1] Enhance useGSAP ScrollTrigger configuration to add onLeave callback with gsap.to for smooth dot scale down in components/ProcessSection.tsx (lines 81-120)
- [X] T010 [US1] Add onLeaveBack callback with gsap.to for smooth dot scale down when scrolling up in components/ProcessSection.tsx (lines 81-120)
- [X] T011 [US1] Update onEnter callback to include gsap.to with power3.out easing and 0.35s duration for dot scale up in components/ProcessSection.tsx (lines 99-106)
- [X] T012 [US1] Update onEnterBack callback to include gsap.to with power3.out easing and 0.35s duration for dot scale up when scrolling up in components/ProcessSection.tsx (lines 99-106)
- [X] T013 [US1] Verify line fill transition uses cubic-bezier(0.4,0,0.2,1) easing in components/ProcessSection.tsx (line 149)

**Checkpoint**: At this point, User Story 1 should be fully functional - scroll-based step activation with smooth transitions (0.35s duration, power3.out easing)

---

## Phase 4: User Story 2 - Accordion Content Animation (Priority: P1)

**Goal**: Replace buggy `<details>` element with custom accordion and add smooth height/opacity animations for content expansion

**Independent Test**: Observe accordion content as different steps become active during scrolling - height should expand smoothly with cubic-bezier easing and content should fade in with stagger effect (icon → text → bullets)

### Implementation for User Story 2

- [X] T014 [US2] Replace `<details>` opening tag with `<div>` opening tag in components/ProcessSection.tsx
- [X] T015 [US2] Replace `<details>` closing tag with `</div>` in components/ProcessSection.tsx
- [X] T016 [US2] Remove `<summary>` opening tag and replace with custom header div with `pointer-events-none` in components/ProcessSection.tsx
- [X] T017 [US2] Remove `</summary>` closing tag and replace with `</div>` in components/ProcessSection.tsx
- [X] T018 [US2] Remove `onToggle` handler from components/ProcessSection.tsx - no longer needed for custom accordion
- [X] T019 [US2] Remove webkit-details-marker CSS from header div in components/ProcessSection.tsx
- [X] T020 [US2] Remove list-none CSS class from header div in components/ProcessSection.tsx
- [X] T021 [US2] Add `contentRefs` array ref for accordion content divs in components/ProcessSection.tsx
- [X] T022 [US2] Add conditional rendering - only show accordion content when isActive is true in components/ProcessSection.tsx
- [X] T023 [US2] Add GSAP fromTo animation for accordion content height from 0 to auto in components/ProcessSection.tsx
- [X] T024 [US2] Add GSAP fromTo animation for accordion content opacity from 0 to 1 in components/ProcessSection.tsx
- [X] T025 [US2] Ensure accordion card className includes `duration-300` for smooth border/shadow updates in components/ProcessSection.tsx
- [X] T026 [US2] Add GSAP animation for accordion content height expansion in activate() function in components/ProcessSection.tsx
- [X] T027 [US2] Set GSAP animation duration to 0.4s with power2.out easing in components/ProcessSection.tsx
- [X] T028 [US2] Set GSAP opacity animation in activate() function in components/ProcessSection.tsx
- [X] T029 [US2] Add overflow-hidden class to accordion content wrapper div in components/ProcessSection.tsx
- [X] T030 [US2] Ensure GSAP animations only apply when content ref exists in activate() function in components/ProcessSection.tsx

**Checkpoint**: At this point, User Stories 1 AND 2 are complete - smooth scroll transitions with animated accordion content

---

## Phase 5: User Story 3 - Proper Accordion State Management (Priority: P2)

**Goal**: Ensure accordion is completely non-interactive and controlled solely by scroll position

**Independent Test**: Attempt to click on accordion summary/chevron - nothing should happen (no toggle, no visual feedback suggesting interactivity). Try tabbing through page - accordion should not be focusable.

### Implementation for User Story 3

^- [X] T031 [P] [US3] Verify `pointer-events-none` class is applied to accordion summary div at line 229 in components/ProcessSection.tsx
^- [X] T032 [P] [US3] Verify `cursor-default` class is applied to accordion summary div at line 229 in components/ProcessSection.tsx
^- [X] T033 [P] [US3] Verify `select-none` class is applied to accordion summary div at line 229 in components/ProcessSection.tsx
^- [X] T034 [P] [US3] Add `tabIndex={-1}` to accordion summary div to remove from tab order at line 229 in components/ProcessSection.tsx
^- [X] T035 [P] [US3] Add `aria-hidden="true"` to accordion content div since it's scroll-controlled at line 283 in components/ProcessSection.tsx
^- [X] T036 [US3] Remove any remaining `cursor-pointer` classes from interactive elements in components/ProcessSection.tsx
^- [X] T037 [US3] Remove any hover-related CSS classes from accordion elements in components/ProcessSection.tsx
^- [X] T038 [US3] Verify chevron icon ChevronDown does not have any click handlers or hover effects at lines 272-280 in components/ProcessSection.tsx
^- [X] T039 [US3] Verify step number badge does not have any interactivity attributes at lines 232-241 in components/ProcessSection.tsx

**Checkpoint**: All user stories should now be independently functional - accordion is fully non-interactive and controlled by scroll

---

## Phase 6: Polish & Cross-Cutting Concerns

**Purpose**: Improvements that affect multiple user stories and final validation

- [ ] T040 [P] Test smooth scroll navigation at different scroll speeds (slow, normal, fast) in components/ProcessSection.tsx
- [ ] T041 [P] Test accordion content expansion for step 3 (which has bullets) to verify stagger animation works correctly in components/ProcessSection.tsx
- [ ] T042 [P] Test responsive behavior on mobile viewport (≤768px) - verify dots hidden but accordion still works in components/ProcessSection.tsx
- [ ] T043 [P] Test responsive behavior on desktop viewport (>768px) - verify dots visible with line fill in components/ProcessSection.tsx
- [ ] T044 [P] Verify all 5 steps can activate correctly by scrolling through entire section in components/ProcessSection.tsx
- [ ] T045 [P] Verify line fill calculation works correctly when scrolling back up from step 5 to step 1 in components/ProcessSection.tsx
- [ ] T046 Adjust animation durations if transitions feel too fast or too slow in components/ProcessSection.tsx (target: 0.35s for dots, 0.4s for content)
- [ ] T047 Adjust easing curves if animations don't feel natural in components/ProcessSection.tsx (target: cubic-bezier(0.4,0,0.2,1) for CSS, power3.out for GSAP)
- [ ] T048 Verify visual styling matches original - orange accent (#E8641A), cream background, dark navy text in components/ProcessSection.tsx
- [X] T049 Run `npm run dev` and manually test all acceptance scenarios from quickstart.md
- [ ] T050 [P] Test edge case: scroll very quickly through section - verify animations don't get stuck in intermediate states in components/ProcessSection.tsx
- [ ] T051 [P] Test edge case: resize browser window - verify scroll triggers and layout recalculate correctly in components/ProcessSection.tsx
- [ ] T052 [P] Test edge case: keyboard navigation - verify accordion is not focusable/interactable via Tab key in components/ProcessSection.tsx

---

## Dependencies & Execution Order

### Phase Dependencies

- **Setup (Phase 1)**: No dependencies - can start immediately
- **Foundational (Phase 2)**: Depends on Setup completion - BLOCKS all user stories
- **User Stories (Phase 3-5)**: All depend on Foundational phase completion
  - User Story 1 (P1): Can start after Foundational - No dependencies on other stories
  - User Story 2 (P1): Can start after Foundational - Builds on US1 but can be tested independently
  - User Story 3 (P2): Can start after Foundational - Depends on US2 being implemented
- **Polish (Phase 6)**: Depends on all user stories being complete

### User Story Dependencies

- **User Story 1 (P1)**: Can start after Foundational (Phase 2) - No dependencies on other stories
- **User Story 2 (P1)**: Can start after Foundational (Phase 2) - Builds on US1 structure but delivers independent value
- **User Story 3 (P2)**: Can start after US2 implementation - Depends on custom accordion structure from US2

### Within Each User Story

- User Story 1: Tasks T008-T013 can proceed in order (T008 first, then T009-T013 in any order)
- User Story 2: Tasks T014-T030 must proceed in order to avoid breaking the component (accordion structure must be replaced before adding animations)
- User Story 3: Tasks T031-T039 can run in parallel (all marked [P]) as they're verification tasks on different elements
- Polish (Phase 6): All tasks marked [P] can run in parallel after all user stories complete

### Parallel Opportunities

- **Setup Phase**: All tasks (T001-T003) marked [P] can run in parallel
- **Foundational Phase**: All tasks (T004-T007) marked [P] can run in parallel
- **User Story 1**: T009-T013 can run in parallel once T008 is complete
- **User Story 3**: All tasks (T031-T039) marked [P] can run in parallel once US2 is complete
- **Polish Phase**: All tasks (T040-T052) marked [P] can run in parallel once all stories complete
- **Different user stories**: Can be worked on in parallel by different team members after Foundational phase

---

## Parallel Example: User Story 3

```bash
# Launch all interaction prevention checks together:
Task: "Verify pointer-events-none class is applied to accordion summary div at line 229"
Task: "Verify cursor-default class is applied to accordion summary div at line 229"
Task: "Verify select-none class is applied to accordion summary div at line 229"
Task: "Add tabIndex={-1} to accordion summary div at line 229"
Task: "Add aria-hidden=true to accordion content div at line 283"

# All can run in parallel as they affect different attributes/elements
```

---

## Parallel Example: Polish Phase

```bash
# Launch all responsive tests together:
Task: "Test responsive behavior on mobile viewport (≤768px)"
Task: "Test responsive behavior on desktop viewport (>768px)"

# Launch all edge case tests together:
Task: "Test edge case: scroll very quickly through section"
Task: "Test edge case: resize browser window"
Task: "Test edge case: keyboard navigation"
```

---

## Implementation Strategy

### MVP First (User Story 1 Only)

1. Complete Phase 1: Setup (T001-T003)
2. Complete Phase 2: Foundational (T004-T007) - **CRITICAL - blocks all stories**
3. Complete Phase 3: User Story 1 (T008-T013)
4. **STOP and VALIDATE**: Test smooth scroll transitions independently
5. Deploy/demo if ready

**MVP Delivers**: Smooth scroll-based step activation with enhanced easing (power3.out, 0.35s duration) - dots, line, and card all transition smoothly without jank

### Incremental Delivery

1. Complete Setup + Foundational → Foundation ready
2. Add User Story 1 → Test independently → Deploy/Demo (MVP!)
3. Add User Story 2 → Test independently → Deploy/Demo
4. Add User Story 3 → Test independently → Deploy/Demo
5. Complete Polish Phase → Final validation
6. Each story adds value without breaking previous stories

**Story Progression**:
- **US1 (MVP)**: Smooth scroll navigation - resolves core UX issue
- **US2**: Animated accordion content - adds visual polish
- **US3**: Non-interactive accordion - prevents buggy behavior completely

### Parallel Team Strategy

With multiple developers:

1. Team completes Setup + Foundational together (T001-T007)
2. Once Foundational is done:
   - Developer A: User Story 1 (T008-T013) - Scroll animations
   - Developer B: Can prepare for User Story 2 by studying custom accordion patterns
3. Once US1 is complete:
   - Developer A: User Story 2 (T014-T030) - Replace accordion and add content animations
   - Developer B: User Story 3 (T031-T039) - Verify non-interactive behavior (can start once US2 structure is in place)
4. Stories complete and integrate independently
5. Team together: Polish Phase (T040-T052) - All parallel testing

---

## Notes

- **Manual Testing Only**: No automated test framework specified - all validation via manual testing
- **[P] tasks** = different files, different attributes/elements, or verification tasks with no dependencies
- **[Story] label** maps task to specific user story for traceability
- **Critical Path**: Setup → Foundational → US1 → US2 → US3 → Polish
- **Format Validation**: All tasks follow checklist format: `- [ ] [ID] [P?] [Story?] Description with file path`
- **User Story Independence**: Each story can be tested independently (US1: scroll transitions, US2: accordion animations, US3: non-interactive behavior)
- **Commit Strategy**: Commit after each phase or logical group of tasks
- **Stop at Checkpoints**: Validate each user story independently before proceeding
- **Avoid**: Vague tasks, same file conflicts within a phase, cross-story dependencies that break independence
