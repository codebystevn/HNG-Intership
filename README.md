Overview

This project is an advanced Todo Card component built as part of the Frontend Wizards Stage 1a Task.

It extends the basic static card from Stage 0 into a more interactive, state-driven component with editing capabilities, synchronized status logic, dynamic time handling, and improved accessibility.

The goal was to simulate a real-world UI component found in modern task management applications.

WHAT CHANGED FROM STAGE 0

Added Edit Mode with form inputs for:
Title
Description
Priority
Due Date
Implemented Status Control System
Dropdown to change status
Fully synchronized with checkbox and UI
Introduced Dynamic Time Logic
Displays:
“Due in X minutes/hours/days”
“Overdue by X time”
Stops updating when task is marked as Done
Added Expand / Collapse Feature
Long descriptions can be toggled
Improves readability and layout control
Implemented Priority Indicator
Visual cues for Low / Medium / High priority
Added Overdue Indicator
Highlights tasks past deadline

KEY FEATURES

Editable task content
Synchronized status system (checkbox + dropdown + UI)
Real-time time tracking
Expandable/collapsible description
Visual state feedback (Done, High Priority, Overdue, In Progress)
Responsive design (mobile → desktop)
Accessible UI components

DESIGN DECISIONS

Used a minimal dark theme for a modern, premium feel
Focused on clarity and spacing for readability
Priority and status use color-based visual hierarchy
Layout designed to be clean, scalable, and component-friendly

ACCESSIBILITY

All form inputs include proper <label> associations
Interactive elements use semantic HTML (button, input, select)
Expand/collapse uses:
aria-expanded
aria-controls
Time updates use:
aria-live="polite"
Fully keyboard navigable:
Checkbox → Status → Expand → Edit → Delete → Save/Cancel

RESPONSIVENESS

Mobile-first design (320px and above)
Flexible layout adapts across:
Mobile
Tablet
Desktop
Tags wrap correctly using flex-wrap
Handles:
Long titles
Long descriptions
Multiple tags
No horizontal overflow
