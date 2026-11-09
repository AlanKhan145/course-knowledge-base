# 02. Creating a Procedural Walk Cycle

**Khóa học:** Control Rig for Unreal Engine 5
**Số mục nội dung:** 47

| STT | Bài học / hoạt động | Loại |
|---:|---|---|
| 001 | [Initial Character Blueprint setup](UD488-S02-L001-Initial-Character-Blueprint-setup.md) | `VIDEO_LECTURE` |
| 002 | [Initial Animation Blueprint setup](UD488-S02-L002-Initial-Animation-Blueprint-setup.md) | `VIDEO_LECTURE` |
| 003 | [Creating the ControlRig class](UD488-S02-L003-Creating-the-ControlRig-class.md) | `VIDEO_LECTURE` |
| 004 | [Make ControlRig DO something](UD488-S02-L004-Make-ControlRig-DO-something.md) | `VIDEO_LECTURE` |
| 005 | [Create an array of FootNames](UD488-S02-L005-Create-an-array-of-FootNames.md) | `VIDEO_LECTURE` |
| 006 | [WorldSpace vs RigSpace explanation](UD488-S02-L006-WorldSpace-vs-RigSpace-explanation.md) | `VIDEO_LECTURE` |
| 007 | [Save the default foot transforms to a new array](UD488-S02-L007-Save-the-default-foot-transforms-to-a-new-array.md) | `VIDEO_LECTURE` |
| 008 | [Visualize the foot transforms with DrawTransform](UD488-S02-L008-Visualize-the-foot-transforms-with.md) | `VIDEO_LECTURE` |
| 009 | [FullBodyIK node explanation](UD488-S02-L009-FullBodyIK-node-explanation.md) | `VIDEO_LECTURE` |
| 010 | [Add one leg into the solver](UD488-S02-L010-Add-one-leg-into-the-solver.md) | `VIDEO_LECTURE` |
| 011 | [Add the rest of the legs into the solver](UD488-S02-L011-Add-the-rest-of-the-legs-into-the-solver.md) | `VIDEO_LECTURE` |
| 012 | [SAVE FIRST! Collapse to a function](UD488-S02-L012-SAVE-FIRST-Collapse-to-a-function.md) | `VIDEO_LECTURE` |
| 013 | [Convert World transform to Rigspace transforms into the solver](UD488-S02-L013-Convert-World-transform-to-Rigspace-transforms.md) | `VIDEO_LECTURE` |
| 014 | [Explanation of how we will calculate the velocity](UD488-S02-L014-Explanation-of-how-we-will-calculate-the.md) | `VIDEO_LECTURE` |
| 015 | [Create the CalculateVelocity function](UD488-S02-L015-Create-the-CalculateVelocity-function.md) | `VIDEO_LECTURE` |
| 016 | [Calculate how far the character has moved in the world](UD488-S02-L016-Calculate-how-far-the-character-has-moved-in.md) | `VIDEO_LECTURE` |
| 017 | [Calculate how far the character moves per second and draw it](UD488-S02-L017-Calculate-how-far-the-character-moves-per.md) | `VIDEO_LECTURE` |
| 018 | [Smooth the calculated velocity](UD488-S02-L018-Smooth-the-calculated-velocity.md) | `VIDEO_LECTURE` |
| 019 | [Add comments to the calculate velocity function](UD488-S02-L019-Add-comments-to-the-calculate-velocity-function.md) | `VIDEO_LECTURE` |
| 020 | [Cycle explanation](UD488-S02-L020-Cycle-explanation.md) | `VIDEO_LECTURE` |
| 021 | [Creating the CalculateCycle function](UD488-S02-L021-Creating-the-CalculateCycle-function.md) | `VIDEO_LECTURE` |
| 022 | [Test our cycle with a print node](UD488-S02-L022-Test-our-cycle-with-a-print-node.md) | `VIDEO_LECTURE` |
| 023 | [Creating the MoveFeetTransforms function](UD488-S02-L023-Creating-the-MoveFeetTransforms-function.md) | `VIDEO_LECTURE` |
| 024 | [Creating a FootLocked array of booleans](UD488-S02-L024-Creating-a-FootLocked-array-of-booleans.md) | `VIDEO_LECTURE` |
| 025 | [Is the foot locked or unlocked logic](UD488-S02-L025-Is-the-foot-locked-or-unlocked-logic.md) | `VIDEO_LECTURE` |
| 026 | [Create the Swing Percent and unlock condition](UD488-S02-L026-Create-the-Swing-Percent-and-unlock-condition.md) | `VIDEO_LECTURE` |
| 027 | [Unlocked logic and lock condition](UD488-S02-L027-Unlocked-logic-and-lock-condition.md) | `VIDEO_LECTURE` |
| 028 | [Include and test the MoveFeetTransforms function](UD488-S02-L028-Include-and-test-the-MoveFeetTransforms.md) | `VIDEO_LECTURE` |
| 029 | [Making the unlocked foot snap back to the default pose position](UD488-S02-L029-Making-the-unlocked-foot-snap-back-to-the.md) | `VIDEO_LECTURE` |
| 030 | [Creating the foot timing offset array](UD488-S02-L030-Creating-the-foot-timing-offset-array.md) | `VIDEO_LECTURE` |
| 031 | [Creating the PerFootCycle array](UD488-S02-L031-Creating-the-PerFootCycle-array.md) | `VIDEO_LECTURE` |
| 032 | [Using the PerFootCycle instead of Master Cycle](UD488-S02-L032-Using-the-PerFootCycle-instead-of-Master-Cycle.md) | `VIDEO_LECTURE` |
| 033 | [A basic interpolation for the swing phase](UD488-S02-L033-A-basic-interpolation-for-the-swing-phase.md) | `VIDEO_LECTURE` |
| 034 | [Creating the foot prediction function](UD488-S02-L034-Creating-the-foot-prediction-function.md) | `VIDEO_LECTURE` |
| 035 | [Projecting the landing spot forward in the direction of velocity](UD488-S02-L035-Projecting-the-landing-spot-forward-in-the.md) | `VIDEO_LECTURE` |
| 036 | [Scale the prediction time based on how long until the foot lands](UD488-S02-L036-Scale-the-prediction-time-based-on-how-long.md) | `VIDEO_LECTURE` |
| 037 | [Change cycle speed based on the characters movement speed](UD488-S02-L037-Change-cycle-speed-based-on-the-characters.md) | `VIDEO_LECTURE` |
| 038 | [Creating the stride length variable, and calculating the cycle time in seconds](UD488-S02-L038-Creating-the-stride-length-variable-and.md) | `VIDEO_LECTURE` |
| 039 | [Save the foot lift-off spot to a WorldLockedFootTransforms array](UD488-S02-L039-Save-the-foot-lift-off-spot-to-a.md) | `VIDEO_LECTURE` |
| 040 | [Accurate interpolation between the lift-off to the landing spot, based on cycle](UD488-S02-L040-Accurate-interpolation-between-the-lift-off-to.md) | `VIDEO_LECTURE` |
| 041 | [Make the legs lift in an arc using a custom curve](UD488-S02-L041-Make-the-legs-lift-in-an-arc-using-a-custom.md) | `VIDEO_LECTURE` |
| 042 | [Make the lift height based on the movement speed](UD488-S02-L042-Make-the-lift-height-based-on-the-movement.md) | `VIDEO_LECTURE` |
| 043 | [Overview of the plan for foot traces](UD488-S02-L043-Overview-of-the-plan-for-foot-traces.md) | `VIDEO_LECTURE` |
| 044 | [A basic trace for every landing spot](UD488-S02-L044-A-basic-trace-for-every-landing-spot.md) | `VIDEO_LECTURE` |
| 045 | [Random body motions and general improvements](UD488-S02-L045-Random-body-motions-and-general-improvements.md) | `VIDEO_LECTURE` |
| 046 | [More advanced traces explanation and testing on a landscape](UD488-S02-L046-More-advanced-traces-explanation-and-testing.md) | `VIDEO_LECTURE` |
| 047 | [Implementing more advanced traces](UD488-S02-L047-Implementing-more-advanced-traces.md) | `VIDEO_LECTURE` |
