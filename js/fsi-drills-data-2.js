/**
 * FSI Drills Data — Extension File 2
 * Modules 5–6: Meetings & Discussions, Job Interview Skills
 * Target user: Chinese-speaking (Mandarin native) secondary teacher in Australia
 * Australian English spelling throughout
 * ES5 compatible — no arrow functions, no template literals, no const/let
 */
(function() {
  if (typeof FSI_DRILLS === "undefined") return;

  // ============================================================
  // MODULE 5: MEETINGS & DISCUSSIONS
  // ============================================================
  FSI_DRILLS.modules.push({
    id: "meeting",
    title: "Meetings & Discussions",
    drills: [

      // ----------------------------------------------------------
      // SUBSTITUTION DRILLS (6 drills, 15 cues each)
      // ----------------------------------------------------------
      {
        id: "ms01",
        type: "substitution",
        title: "Contributing Ideas in Meetings",
        basePhrase: "I think we should consider implementing a new assessment strategy.",
        cues: [
          { swap: "a new assessment strategy", with: "a revised homework policy" },
          { swap: "a new assessment strategy", with: "more formative feedback opportunities" },
          { swap: "a new assessment strategy", with: "a peer mentoring programme" },
          { swap: "a new assessment strategy", with: "cross-curricular collaboration" },
          { swap: "a new assessment strategy", with: "differentiated learning activities" },
          { swap: "a new assessment strategy", with: "student-led conferences" },
          { swap: "a new assessment strategy", with: "an after-school tutoring programme" },
          { swap: "a new assessment strategy", with: "a wellbeing check-in system" },
          { swap: "a new assessment strategy", with: "explicit teaching of literacy skills" },
          { swap: "a new assessment strategy", with: "a data-driven approach to NAPLAN preparation" },
          { swap: "a new assessment strategy", with: "a consistent behaviour management framework" },
          { swap: "a new assessment strategy", with: "collaborative planning sessions each fortnight" },
          { swap: "a new assessment strategy", with: "vertical alignment of our scope and sequence" },
          { swap: "a new assessment strategy", with: "a whole-school reading initiative" },
          { swap: "a new assessment strategy", with: "structured professional learning communities" }
        ]
      },
      {
        id: "ms02",
        type: "substitution",
        title: "Asking for Clarification",
        basePhrase: "Could you clarify what you mean by that point?",
        cues: [
          { swap: "what you mean by that point", with: "the timeline for implementation" },
          { swap: "what you mean by that point", with: "the expected outcomes" },
          { swap: "what you mean by that point", with: "how this aligns with our PDP goals" },
          { swap: "what you mean by that point", with: "the budget allocation for this initiative" },
          { swap: "what you mean by that point", with: "which year groups are affected" },
          { swap: "what you mean by that point", with: "the role of head teachers in this process" },
          { swap: "what you mean by that point", with: "how this connects to the school improvement plan" },
          { swap: "what you mean by that point", with: "what data you are referring to" },
          { swap: "what you mean by that point", with: "the rationale behind this change" },
          { swap: "what you mean by that point", with: "whether this has been trialled before" },
          { swap: "what you mean by that point", with: "how we measure success" },
          { swap: "what you mean by that point", with: "the impact on existing programmes" },
          { swap: "what you mean by that point", with: "the professional learning required" },
          { swap: "what you mean by that point", with: "who is responsible for coordinating this" },
          { swap: "what you mean by that point", with: "how this relates to the NESA requirements" }
        ]
      },
      {
        id: "ms03",
        type: "substitution",
        title: "Agreeing and Disagreeing",
        basePhrase: "I agree with your suggestion, and I would add that we need more time for planning.",
        cues: [
          { swap: "we need more time for planning", with: "we also need additional resources" },
          { swap: "we need more time for planning", with: "student voice should be included" },
          { swap: "we need more time for planning", with: "we should consult the parents first" },
          { swap: "we need more time for planning", with: "this aligns well with the Quality Teaching Framework" },
          { swap: "we need more time for planning", with: "we could pilot it with one year group" },
          { swap: "we need more time for planning", with: "the data supports this approach" },
          { swap: "we need more time for planning", with: "our faculty has already seen positive results" },
          { swap: "I agree with your suggestion", with: "I see your point" },
          { swap: "I agree with your suggestion", with: "I take your point, however" },
          { swap: "I agree with your suggestion", with: "I appreciate that perspective, though" },
          { swap: "I agree with your suggestion", with: "That is a valid point, but" },
          { swap: "I agree with your suggestion", with: "I understand where you are coming from, although" },
          { swap: "I agree with your suggestion", with: "I partly agree, and" },
          { swap: "I agree with your suggestion", with: "I respectfully disagree because" },
          { swap: "I agree with your suggestion", with: "I have a slightly different view, and" }
        ]
      },
      {
        id: "ms04",
        type: "substitution",
        title: "Suggesting Solutions",
        basePhrase: "One possible solution would be to create a shared resource bank.",
        cues: [
          { swap: "create a shared resource bank", with: "introduce a peer observation programme" },
          { swap: "create a shared resource bank", with: "establish regular faculty meetings" },
          { swap: "create a shared resource bank", with: "organise a parent information evening" },
          { swap: "create a shared resource bank", with: "set up a mentoring system for beginning teachers" },
          { swap: "create a shared resource bank", with: "review our current assessment schedule" },
          { swap: "create a shared resource bank", with: "conduct a student survey on engagement" },
          { swap: "create a shared resource bank", with: "trial flexible seating arrangements" },
          { swap: "create a shared resource bank", with: "develop a whole-school approach to literacy" },
          { swap: "create a shared resource bank", with: "invite an external consultant to advise us" },
          { swap: "create a shared resource bank", with: "reduce the number of assessments per term" },
          { swap: "create a shared resource bank", with: "allocate more time for collaborative planning" },
          { swap: "create a shared resource bank", with: "implement a consistent feedback protocol" },
          { swap: "create a shared resource bank", with: "map our curriculum against the Australian Curriculum" },
          { swap: "create a shared resource bank", with: "use the QTF to audit our lesson designs" },
          { swap: "create a shared resource bank", with: "create a staff wellbeing committee" }
        ]
      },
      {
        id: "ms05",
        type: "substitution",
        title: "Summarising Decisions",
        basePhrase: "So, to summarise, we have agreed to revise the assessment policy by the end of term.",
        cues: [
          { swap: "revise the assessment policy by the end of term", with: "implement the new timetable from Week 5" },
          { swap: "revise the assessment policy by the end of term", with: "schedule parent-teacher interviews for Week 8" },
          { swap: "revise the assessment policy by the end of term", with: "submit updated scope and sequence documents by Friday" },
          { swap: "revise the assessment policy by the end of term", with: "form a working party to investigate the issue" },
          { swap: "revise the assessment policy by the end of term", with: "trial the new behaviour system in Stage 4" },
          { swap: "revise the assessment policy by the end of term", with: "review NAPLAN data at the next faculty meeting" },
          { swap: "revise the assessment policy by the end of term", with: "allocate funding for the new technology resources" },
          { swap: "revise the assessment policy by the end of term", with: "develop a student leadership programme for next year" },
          { swap: "revise the assessment policy by the end of term", with: "complete the staff professional learning survey" },
          { swap: "revise the assessment policy by the end of term", with: "update the faculty handbook with the new procedures" },
          { swap: "revise the assessment policy by the end of term", with: "organise a whole-staff development day for Week 10" },
          { swap: "revise the assessment policy by the end of term", with: "report back to the executive team next Monday" },
          { swap: "revise the assessment policy by the end of term", with: "consult with the community liaison officer" },
          { swap: "revise the assessment policy by the end of term", with: "share the draft policy with all stakeholders" },
          { swap: "revise the assessment policy by the end of term", with: "finalise the budget proposal for the deputy principal" }
        ]
      },
      {
        id: "ms06",
        type: "substitution",
        title: "Reporting on Progress",
        basePhrase: "I am pleased to report that we have completed the curriculum review.",
        cues: [
          { swap: "completed the curriculum review", with: "finished the scope and sequence for Term 2" },
          { swap: "completed the curriculum review", with: "collected all the student survey responses" },
          { swap: "completed the curriculum review", with: "updated the assessment schedule for Stage 5" },
          { swap: "completed the curriculum review", with: "analysed the latest NAPLAN data" },
          { swap: "completed the curriculum review", with: "launched the peer mentoring programme" },
          { swap: "completed the curriculum review", with: "trained all staff on the new reporting system" },
          { swap: "completed the curriculum review", with: "implemented the revised homework policy" },
          { swap: "completed the curriculum review", with: "established the student wellbeing committee" },
          { swap: "I am pleased to report that", with: "I would like to update the group that" },
          { swap: "I am pleased to report that", with: "I wanted to let everyone know that" },
          { swap: "I am pleased to report that", with: "Just a quick update:" },
          { swap: "I am pleased to report that", with: "On behalf of our faculty, I can confirm that" },
          { swap: "I am pleased to report that", with: "Following our last discussion," },
          { swap: "I am pleased to report that", with: "As an update on the action item," },
          { swap: "I am pleased to report that", with: "I should mention that we have not yet" }
        ]
      },

      // ----------------------------------------------------------
      // TRANSFORMATION DRILLS (4 drills, 12 pairs each)
      // ----------------------------------------------------------
      {
        id: "mt01",
        type: "transformation",
        title: "Suggestion to Question",
        instruction: "Transform each suggestion into a polite question form.",
        pairs: [
          { prompt: "We should extend the deadline.", response: "Could we extend the deadline?" },
          { prompt: "We should invite a guest speaker.", response: "Would it be possible to invite a guest speaker?" },
          { prompt: "We should review the data before making a decision.", response: "Could we review the data before making a decision?" },
          { prompt: "We should allocate more time for this project.", response: "Would it be feasible to allocate more time for this project?" },
          { prompt: "We should consult the parents.", response: "Could we consult the parents before proceeding?" },
          { prompt: "We should trial it in one class first.", response: "What if we trialled it in one class first?" },
          { prompt: "We should seek feedback from students.", response: "Would it be worth seeking feedback from students?" },
          { prompt: "We should change the assessment weighting.", response: "Could we consider changing the assessment weighting?" },
          { prompt: "We should postpone the excursion.", response: "Would it be better to postpone the excursion?" },
          { prompt: "We should create a shared Google Drive folder.", response: "Could we set up a shared Google Drive folder?" },
          { prompt: "We should schedule a follow-up meeting.", response: "Would it be possible to schedule a follow-up meeting?" },
          { prompt: "We should reassign the playground duty roster.", response: "Could we look at reassigning the playground duty roster?" }
        ]
      },
      {
        id: "mt02",
        type: "transformation",
        title: "Direct to Diplomatic",
        instruction: "Rewrite each direct statement in a more diplomatic, meeting-appropriate way.",
        pairs: [
          { prompt: "That idea will not work.", response: "I am not sure that approach would work in our context." },
          { prompt: "You are wrong about the data.", response: "I think the data might suggest something slightly different." },
          { prompt: "We do not have time for this.", response: "I wonder whether we have the capacity for this right now." },
          { prompt: "Nobody follows the policy.", response: "It seems like the policy could benefit from clearer communication." },
          { prompt: "The principal made a bad decision.", response: "I think there may be some aspects of that decision worth revisiting." },
          { prompt: "This meeting is a waste of time.", response: "I wonder if we could use our meeting time more efficiently." },
          { prompt: "Your plan is too complicated.", response: "Could we simplify the plan to make it more manageable?" },
          { prompt: "I do not agree with you at all.", response: "I see it slightly differently, if I may offer another perspective." },
          { prompt: "That will never happen with our budget.", response: "We might need to explore whether the budget can support that." },
          { prompt: "You did not do what you promised.", response: "It looks like that action item may have slipped through the cracks." },
          { prompt: "The students do not care about this.", response: "We might need to think about how to make this more relevant to students." },
          { prompt: "We already tried that and it failed.", response: "We trialled a similar approach previously and found some challenges." }
        ]
      },
      {
        id: "mt03",
        type: "transformation",
        title: "Statement to Conditional",
        instruction: "Rewrite each statement using conditional language (would, could, might).",
        pairs: [
          { prompt: "This approach improves student engagement.", response: "This approach could improve student engagement." },
          { prompt: "The new policy reduces workload.", response: "The new policy would potentially reduce workload." },
          { prompt: "We save time by using shared resources.", response: "We could save time by using shared resources." },
          { prompt: "The programme increases NAPLAN results.", response: "The programme might increase NAPLAN results." },
          { prompt: "Early intervention helps struggling students.", response: "Early intervention could help struggling students." },
          { prompt: "Cross-faculty collaboration creates better outcomes.", response: "Cross-faculty collaboration would likely create better outcomes." },
          { prompt: "Student voice makes the school culture stronger.", response: "Student voice could make the school culture stronger." },
          { prompt: "Professional learning days benefit all staff.", response: "Professional learning days would benefit all staff." },
          { prompt: "The data shows a clear trend.", response: "The data would seem to show a clear trend." },
          { prompt: "A longer lunch break reduces behaviour incidents.", response: "A longer lunch break might reduce behaviour incidents." },
          { prompt: "Flexible grouping meets diverse learning needs.", response: "Flexible grouping could meet diverse learning needs." },
          { prompt: "Vertical alignment strengthens curriculum continuity.", response: "Vertical alignment would strengthen curriculum continuity." }
        ]
      },
      {
        id: "mt04",
        type: "transformation",
        title: "Active to Passive",
        instruction: "Transform each active-voice sentence into passive voice, as often used in formal meeting minutes.",
        pairs: [
          { prompt: "The faculty approved the new assessment schedule.", response: "The new assessment schedule was approved by the faculty." },
          { prompt: "The principal announced the staff changes.", response: "The staff changes were announced by the principal." },
          { prompt: "The committee will review the behaviour policy.", response: "The behaviour policy will be reviewed by the committee." },
          { prompt: "Teachers submitted their scope and sequence documents.", response: "Scope and sequence documents were submitted by teachers." },
          { prompt: "The head teacher distributed the updated guidelines.", response: "The updated guidelines were distributed by the head teacher." },
          { prompt: "We have allocated the funding for new resources.", response: "The funding for new resources has been allocated." },
          { prompt: "The deputy organised the professional learning day.", response: "The professional learning day was organised by the deputy." },
          { prompt: "Staff members raised several concerns.", response: "Several concerns were raised by staff members." },
          { prompt: "The school implemented a new attendance tracking system.", response: "A new attendance tracking system was implemented by the school." },
          { prompt: "Parents requested more communication from teachers.", response: "More communication from teachers was requested by parents." },
          { prompt: "The welfare team identified at-risk students.", response: "At-risk students were identified by the welfare team." },
          { prompt: "NESA updated the syllabus requirements.", response: "The syllabus requirements were updated by NESA." }
        ]
      },

      // ----------------------------------------------------------
      // RESPONSE DRILLS (4 drills, 12 pairs each)
      // ----------------------------------------------------------
      {
        id: "mr01",
        type: "response",
        title: "Responding to Questions in Meetings",
        instruction: "Provide an appropriate spoken response to each question.",
        pairs: [
          { prompt: "What progress have you made on the curriculum review?", response: "We have completed the mapping of Stage 4 outcomes and are now working on Stage 5." },
          { prompt: "Do you have any concerns about the proposed changes?", response: "I do have a couple of concerns, mainly around the timeline and the resourcing." },
          { prompt: "How is your faculty tracking against the school plan?", response: "We are on track with most of our goals, although the literacy target needs more attention." },
          { prompt: "Can you give us an update on the mentoring programme?", response: "Yes, all beginning teachers have been paired with mentors and the first observations are scheduled for next week." },
          { prompt: "What feedback have you received from students?", response: "The feedback has been largely positive, particularly around the new project-based tasks." },
          { prompt: "Have you had a chance to look at the NAPLAN data?", response: "I have, and I have noticed some encouraging trends in reading comprehension for Year 7." },
          { prompt: "Is there anything you need from the executive team?", response: "It would be helpful to have an additional planning period for collaborative programming." },
          { prompt: "Who will be responsible for the follow-up?", response: "I am happy to take the lead on that and report back at our next meeting." },
          { prompt: "Are there any budget implications we should be aware of?", response: "There would be a small cost for printing materials, roughly two hundred dollars per term." },
          { prompt: "How does this align with the Australian Professional Standards?", response: "It connects directly to Standard 5.4 on interpreting student data to inform teaching." },
          { prompt: "What is the timeline for implementation?", response: "We are aiming to pilot it in Term 2 and do a full rollout in Term 3." },
          { prompt: "Does anyone else have anything to add?", response: "I would just like to add that the parent feedback has been very supportive of this direction." }
        ]
      },
      {
        id: "mr02",
        type: "response",
        title: "Handling Disagreement",
        instruction: "Respond diplomatically to each challenging statement in a meeting.",
        pairs: [
          { prompt: "I do not think this initiative is worth the effort.", response: "I understand your concern. Could we look at the evidence from schools that have tried it?" },
          { prompt: "We have always done it this way and it works fine.", response: "I appreciate that consistency has its strengths. I wonder if we could explore small adjustments without overhauling what works." },
          { prompt: "This is going to create more work for everyone.", response: "That is a fair point. Perhaps we could look at what we can remove to make room for this." },
          { prompt: "I disagree with the data interpretation.", response: "I would be happy to look at the data together. Could you share what you are seeing differently?" },
          { prompt: "The parents will never support this.", response: "That is worth considering. Would it help to survey parents before we commit?" },
          { prompt: "We tried something similar three years ago and it did not work.", response: "I remember that. I think the context has changed since then, though. Would you be open to a revised approach?" },
          { prompt: "I do not have time to take on anything new.", response: "I completely understand the workload pressures. What if we shared the responsibility across the faculty?" },
          { prompt: "This only benefits a small number of students.", response: "That is a valid concern. Could we adapt it to reach a broader group?" },
          { prompt: "I think we are overcomplicating this.", response: "You might be right. Could we simplify the proposal and focus on the key priorities?" },
          { prompt: "There is no evidence that this actually works.", response: "That is a good challenge. I have seen some research that supports it. Would it help if I shared those studies?" },
          { prompt: "The executive team will not approve this.", response: "That is possible. Shall we put together a strong business case to present to them?" },
          { prompt: "Other schools have tried this and failed.", response: "It would be useful to understand why they faced challenges. We could learn from their experience." }
        ]
      },
      {
        id: "mr03",
        type: "response",
        title: "Presenting Data",
        instruction: "Respond to each prompt by presenting data in a clear, professional way.",
        pairs: [
          { prompt: "What does the attendance data show?", response: "The data indicates that Year 9 attendance has dropped by three per cent compared to last term." },
          { prompt: "How are our Year 7 students performing in literacy?", response: "Overall, seventy-two per cent of Year 7 students are meeting or exceeding expectations in reading." },
          { prompt: "What trends are you seeing in the assessment results?", response: "We are seeing a steady improvement in writing outcomes, particularly among EAL/D students." },
          { prompt: "Can you compare this term to last term?", response: "When we compare Term 1 to Term 4 last year, we see an increase of five per cent in student engagement." },
          { prompt: "What does the survey data tell us?", response: "The survey results suggest that eighty per cent of students feel supported in the classroom." },
          { prompt: "Are there any areas of concern in the data?", response: "The main area of concern is numeracy in Stage 4, where results have plateaued over two terms." },
          { prompt: "How does our school compare to similar schools?", response: "Our school is performing above the state average in most areas, except for Year 9 numeracy." },
          { prompt: "What does the behaviour data show for this term?", response: "Behaviour referrals have decreased by fifteen per cent, largely due to the new restorative practices." },
          { prompt: "Do we have data on student wellbeing?", response: "The wellbeing survey shows that most students feel safe at school, though social anxiety is an emerging concern." },
          { prompt: "What is the completion rate for homework?", response: "Across Stage 5, the homework completion rate sits at approximately sixty-five per cent." },
          { prompt: "How effective has the intervention programme been?", response: "Early indicators suggest a measurable improvement in reading fluency for the targeted cohort." },
          { prompt: "Can you summarise the key findings?", response: "In summary, the data points to strong growth in literacy, stable results in numeracy, and improved attendance in Stage 4." }
        ]
      },
      {
        id: "mr04",
        type: "response",
        title: "Giving Updates",
        instruction: "Provide a concise update in response to each prompt.",
        pairs: [
          { prompt: "Where are we with the school event planning?", response: "We have confirmed the venue and the date. The next step is to finalise the programme and send invitations." },
          { prompt: "How is the new technology rollout going?", response: "The laptops have been distributed to all Year 7 classes, and staff training is scheduled for next Tuesday." },
          { prompt: "What is the status of the professional learning plan?", response: "The plan has been drafted and shared with the executive team. We are waiting for their feedback." },
          { prompt: "Have we heard back from the guest speaker?", response: "Yes, she has confirmed her availability for the third of May and is happy to present on digital literacy." },
          { prompt: "How is the new faculty member settling in?", response: "He is settling in well. He has completed his induction and has started team teaching with his mentor." },
          { prompt: "Where are we up to with the accreditation process?", response: "I have submitted my evidence portfolio and I am waiting for my supervisor to complete the observation report." },
          { prompt: "What is happening with the playground upgrade?", response: "The council has approved the funding and construction is expected to begin in Week 6." },
          { prompt: "Have the parents been informed about the timetable change?", response: "A letter went out via email last Friday, and we have received a few queries which we are addressing." },
          { prompt: "What is the latest on the excursion?", response: "The permission slips are due back by Thursday. So far we have received about seventy per cent of them." },
          { prompt: "How is the marking going?", response: "We are about halfway through. The moderation session is booked for Wednesday to ensure consistency." },
          { prompt: "Are we on track for the reporting period?", response: "We are broadly on track, but a few staff members have requested an extension for their comments." },
          { prompt: "What happened at the regional meeting last week?", response: "The key takeaway was a new approach to NAPLAN preparation that we could adopt across Stage 4." }
        ]
      },

      // ----------------------------------------------------------
      // EXPANSION DRILLS (3 drills, 6 steps each)
      // ----------------------------------------------------------
      {
        id: "me01",
        type: "expansion",
        title: "Building a Meeting Contribution: Proposing an Idea",
        instruction: "Expand the core idea step by step into a full meeting contribution.",
        steps: [
          { step: 1, text: "We should introduce peer observations.", expanded: "We should introduce peer observations." },
          { step: 2, text: "Add context.", expanded: "We should introduce peer observations as part of our professional growth strategy." },
          { step: 3, text: "Add justification.", expanded: "We should introduce peer observations as part of our professional growth strategy, because research shows they are one of the most effective forms of professional learning." },
          { step: 4, text: "Add a practical detail.", expanded: "We should introduce peer observations as part of our professional growth strategy, because research shows they are one of the most effective forms of professional learning. Each teacher could observe one colleague per term." },
          { step: 5, text: "Acknowledge a potential concern.", expanded: "We should introduce peer observations as part of our professional growth strategy, because research shows they are one of the most effective forms of professional learning. Each teacher could observe one colleague per term. I understand this requires time, so we could use existing PDP meeting slots." },
          { step: 6, text: "End with a call to action.", expanded: "We should introduce peer observations as part of our professional growth strategy, because research shows they are one of the most effective forms of professional learning. Each teacher could observe one colleague per term. I understand this requires time, so we could use existing PDP meeting slots. Would the group be open to trialling this in our faculty first?" }
        ]
      },
      {
        id: "me02",
        type: "expansion",
        title: "Building a Meeting Contribution: Reporting on an Issue",
        instruction: "Expand the core statement step by step into a full report.",
        steps: [
          { step: 1, text: "There is an issue with homework completion.", expanded: "There is an issue with homework completion." },
          { step: 2, text: "Add specificity.", expanded: "There is an issue with homework completion in Year 9, particularly in Mathematics and Science." },
          { step: 3, text: "Add data.", expanded: "There is an issue with homework completion in Year 9, particularly in Mathematics and Science. Our records show that only about forty per cent of students are submitting work on time." },
          { step: 4, text: "Add possible cause.", expanded: "There is an issue with homework completion in Year 9, particularly in Mathematics and Science. Our records show that only about forty per cent of students are submitting work on time. This may be linked to a lack of clarity around expectations and inconsistent consequences." },
          { step: 5, text: "Add what has been tried.", expanded: "There is an issue with homework completion in Year 9, particularly in Mathematics and Science. Our records show that only about forty per cent of students are submitting work on time. This may be linked to a lack of clarity around expectations and inconsistent consequences. We have tried sending reminders via Google Classroom, but the impact has been minimal." },
          { step: 6, text: "Ask for input.", expanded: "There is an issue with homework completion in Year 9, particularly in Mathematics and Science. Our records show that only about forty per cent of students are submitting work on time. This may be linked to a lack of clarity around expectations and inconsistent consequences. We have tried sending reminders via Google Classroom, but the impact has been minimal. I would appreciate any suggestions from the group on how we might address this." }
        ]
      },
      {
        id: "me03",
        type: "expansion",
        title: "Building a Meeting Contribution: Summarising a Discussion",
        instruction: "Expand the core summary step by step into a comprehensive wrap-up.",
        steps: [
          { step: 1, text: "We discussed the assessment policy.", expanded: "We discussed the assessment policy." },
          { step: 2, text: "Add what was agreed.", expanded: "We discussed the assessment policy and agreed to reduce the number of formal assessments in Stage 4." },
          { step: 3, text: "Add the rationale.", expanded: "We discussed the assessment policy and agreed to reduce the number of formal assessments in Stage 4, in order to reduce student stress and allow more time for deep learning." },
          { step: 4, text: "Add the action items.", expanded: "We discussed the assessment policy and agreed to reduce the number of formal assessments in Stage 4, in order to reduce student stress and allow more time for deep learning. Each faculty will review their assessment schedules and submit a revised plan by the end of Week 6." },
          { step: 5, text: "Add responsibility.", expanded: "We discussed the assessment policy and agreed to reduce the number of formal assessments in Stage 4, in order to reduce student stress and allow more time for deep learning. Each faculty will review their assessment schedules and submit a revised plan by the end of Week 6. Head teachers will be responsible for coordinating this within their teams." },
          { step: 6, text: "Add next steps.", expanded: "We discussed the assessment policy and agreed to reduce the number of formal assessments in Stage 4, in order to reduce student stress and allow more time for deep learning. Each faculty will review their assessment schedules and submit a revised plan by the end of Week 6. Head teachers will be responsible for coordinating this within their teams. We will revisit this at the staff meeting in Week 8 to review progress." }
        ]
      }
    ]
  });

  // ============================================================
  // MODULE 6: JOB INTERVIEW SKILLS
  // ============================================================
  FSI_DRILLS.modules.push({
    id: "interview",
    title: "Job Interview Skills",
    drills: [

      // ----------------------------------------------------------
      // SUBSTITUTION DRILLS (6 drills, 15 cues each)
      // ----------------------------------------------------------
      {
        id: "is01",
        type: "substitution",
        title: "Self-Introduction",
        basePhrase: "Thank you for the opportunity to interview today. My name is Yunshu, and I am a beginning teacher with a background in technology education.",
        cues: [
          { swap: "a background in technology education", with: "experience in secondary mathematics" },
          { swap: "a background in technology education", with: "a passion for STEM education" },
          { swap: "a background in technology education", with: "training in inclusive education practices" },
          { swap: "a background in technology education", with: "expertise in digital technologies and multimedia" },
          { swap: "a background in technology education", with: "a strong interest in project-based learning" },
          { swap: "a background in technology education", with: "a commitment to culturally responsive teaching" },
          { swap: "a background in technology education", with: "experience working with diverse learners" },
          { swap: "a background in technology education", with: "a focus on student wellbeing and engagement" },
          { swap: "a background in technology education", with: "skills in data analysis and spatial technologies" },
          { swap: "a background in technology education", with: "a background in both industry and education" },
          { swap: "a beginning teacher", with: "a second-year teacher" },
          { swap: "a beginning teacher", with: "an early-career teacher" },
          { swap: "a beginning teacher", with: "a career-change teacher" },
          { swap: "a beginning teacher", with: "a teacher seeking my first permanent position" },
          { swap: "a beginning teacher", with: "a provisionally accredited teacher working towards Proficient" }
        ]
      },
      {
        id: "is02",
        type: "substitution",
        title: "Describing Experience",
        basePhrase: "In my current role, I have been responsible for teaching Year 7 and 8 Technology.",
        cues: [
          { swap: "teaching Year 7 and 8 Technology", with: "delivering the mandatory Technology syllabus across Stage 4" },
          { swap: "teaching Year 7 and 8 Technology", with: "programming and assessing units of work for IST Multimedia" },
          { swap: "teaching Year 7 and 8 Technology", with: "coordinating the Year 9 elective programme" },
          { swap: "teaching Year 7 and 8 Technology", with: "developing differentiated resources for diverse learners" },
          { swap: "teaching Year 7 and 8 Technology", with: "integrating digital tools such as Google Workspace and Canva" },
          { swap: "teaching Year 7 and 8 Technology", with: "running an after-school coding club" },
          { swap: "teaching Year 7 and 8 Technology", with: "mentoring a pre-service teacher on practicum" },
          { swap: "teaching Year 7 and 8 Technology", with: "collaborating with the STEM faculty on cross-curricular projects" },
          { swap: "teaching Year 7 and 8 Technology", with: "using formative assessment to inform my teaching practice" },
          { swap: "teaching Year 7 and 8 Technology", with: "contributing to the school improvement plan" },
          { swap: "In my current role", with: "During my practicum placements" },
          { swap: "In my current role", with: "Over the past two terms" },
          { swap: "In my current role", with: "In my previous school" },
          { swap: "In my current role", with: "Throughout my first year of teaching" },
          { swap: "In my current role", with: "As part of my provisional accreditation" }
        ]
      },
      {
        id: "is03",
        type: "substitution",
        title: "Classroom Management Approach",
        basePhrase: "My approach to classroom management is centred on building positive relationships with students.",
        cues: [
          { swap: "building positive relationships with students", with: "establishing clear expectations from the first lesson" },
          { swap: "building positive relationships with students", with: "using restorative practices to address behaviour" },
          { swap: "building positive relationships with students", with: "maintaining consistency while being flexible" },
          { swap: "building positive relationships with students", with: "creating a safe and inclusive learning environment" },
          { swap: "building positive relationships with students", with: "being proactive rather than reactive" },
          { swap: "building positive relationships with students", with: "using positive reinforcement and logical consequences" },
          { swap: "building positive relationships with students", with: "knowing each student as an individual" },
          { swap: "building positive relationships with students", with: "co-creating classroom expectations with students" },
          { swap: "building positive relationships with students", with: "staying calm and de-escalating situations" },
          { swap: "building positive relationships with students", with: "following the school's behaviour management framework" },
          { swap: "building positive relationships with students", with: "engaging students through relevant and interesting lessons" },
          { swap: "building positive relationships with students", with: "differentiating tasks so every student can experience success" },
          { swap: "building positive relationships with students", with: "communicating regularly with parents and carers" },
          { swap: "building positive relationships with students", with: "reflecting on my own practice and seeking feedback" },
          { swap: "building positive relationships with students", with: "aligning my strategies with the school's welfare policies" }
        ]
      },
      {
        id: "is04",
        type: "substitution",
        title: "Teaching Philosophy",
        basePhrase: "I believe that every student has the capacity to learn and grow when given the right support.",
        cues: [
          { swap: "the right support", with: "meaningful and engaging learning experiences" },
          { swap: "the right support", with: "high expectations combined with appropriate scaffolding" },
          { swap: "the right support", with: "a sense of belonging in the classroom" },
          { swap: "the right support", with: "opportunities to connect learning to real-world contexts" },
          { swap: "the right support", with: "differentiated instruction that meets their individual needs" },
          { swap: "the right support", with: "timely and constructive feedback" },
          { swap: "the right support", with: "a culturally responsive and inclusive curriculum" },
          { swap: "the right support", with: "the chance to take ownership of their learning" },
          { swap: "every student has the capacity to learn and grow", with: "teaching is most effective when it is informed by evidence and data" },
          { swap: "every student has the capacity to learn and grow", with: "collaboration between teachers strengthens outcomes for students" },
          { swap: "every student has the capacity to learn and grow", with: "learning should be challenging, relevant, and enjoyable" },
          { swap: "every student has the capacity to learn and grow", with: "reflection is essential to continuous improvement as a teacher" },
          { swap: "every student has the capacity to learn and grow", with: "student voice should be central to how we design learning" },
          { swap: "every student has the capacity to learn and grow", with: "education is about developing the whole person" },
          { swap: "every student has the capacity to learn and grow", with: "building strong relationships is the foundation of effective teaching" }
        ]
      },
      {
        id: "is05",
        type: "substitution",
        title: "Strengths",
        basePhrase: "One of my key strengths is my ability to build rapport with students from diverse backgrounds.",
        cues: [
          { swap: "build rapport with students from diverse backgrounds", with: "create engaging, technology-enhanced lessons" },
          { swap: "build rapport with students from diverse backgrounds", with: "differentiate instruction for a range of learners" },
          { swap: "build rapport with students from diverse backgrounds", with: "use data to inform my teaching decisions" },
          { swap: "build rapport with students from diverse backgrounds", with: "communicate effectively with parents and colleagues" },
          { swap: "build rapport with students from diverse backgrounds", with: "adapt quickly to new situations and challenges" },
          { swap: "build rapport with students from diverse backgrounds", with: "design assessment tasks that are authentic and meaningful" },
          { swap: "build rapport with students from diverse backgrounds", with: "collaborate with colleagues across faculties" },
          { swap: "build rapport with students from diverse backgrounds", with: "reflect critically on my own practice" },
          { swap: "build rapport with students from diverse backgrounds", with: "manage time effectively across multiple responsibilities" },
          { swap: "build rapport with students from diverse backgrounds", with: "speak Mandarin and English, supporting EAL/D students" },
          { swap: "build rapport with students from diverse backgrounds", with: "integrate the Australian Professional Standards into my daily practice" },
          { swap: "build rapport with students from diverse backgrounds", with: "stay calm under pressure in challenging classroom situations" },
          { swap: "build rapport with students from diverse backgrounds", with: "bring a growth mindset to my professional development" },
          { swap: "build rapport with students from diverse backgrounds", with: "create inclusive learning environments for all students" },
          { swap: "build rapport with students from diverse backgrounds", with: "organise and lead extra-curricular activities" }
        ]
      },
      {
        id: "is06",
        type: "substitution",
        title: "Questions for the Panel",
        basePhrase: "Could you tell me more about the professional learning opportunities available to staff?",
        cues: [
          { swap: "the professional learning opportunities available to staff", with: "the school's approach to mentoring beginning teachers" },
          { swap: "the professional learning opportunities available to staff", with: "what a typical week looks like in this faculty" },
          { swap: "the professional learning opportunities available to staff", with: "how the school supports teacher accreditation" },
          { swap: "the professional learning opportunities available to staff", with: "the culture of collaboration within the school" },
          { swap: "the professional learning opportunities available to staff", with: "the school's priorities for the next twelve months" },
          { swap: "the professional learning opportunities available to staff", with: "opportunities to contribute to extra-curricular programmes" },
          { swap: "the professional learning opportunities available to staff", with: "how parent and community engagement is fostered" },
          { swap: "the professional learning opportunities available to staff", with: "the support structures for student wellbeing" },
          { swap: "the professional learning opportunities available to staff", with: "how technology is integrated across the school" },
          { swap: "the professional learning opportunities available to staff", with: "the expectations around collaborative programming" },
          { swap: "the professional learning opportunities available to staff", with: "whether there are cross-faculty projects or initiatives" },
          { swap: "the professional learning opportunities available to staff", with: "the school's vision for inclusive education" },
          { swap: "the professional learning opportunities available to staff", with: "what qualities you are looking for in the ideal candidate" },
          { swap: "the professional learning opportunities available to staff", with: "how performance and development plans are structured" },
          { swap: "the professional learning opportunities available to staff", with: "the process for moving from provisional to proficient accreditation" }
        ]
      },

      // ----------------------------------------------------------
      // TRANSFORMATION DRILLS (4 drills, 12 pairs each)
      // ----------------------------------------------------------
      {
        id: "it01",
        type: "transformation",
        title: "Past to Present Perfect",
        instruction: "Transform each simple past statement into present perfect to emphasise ongoing relevance.",
        pairs: [
          { prompt: "I taught Year 7 Technology for two terms.", response: "I have taught Year 7 Technology for two terms." },
          { prompt: "I developed three units of work from scratch.", response: "I have developed three units of work from scratch." },
          { prompt: "I used Google Classroom to manage student submissions.", response: "I have used Google Classroom to manage student submissions." },
          { prompt: "I collaborated with my mentor on lesson planning.", response: "I have collaborated with my mentor on lesson planning." },
          { prompt: "I attended professional learning on the Quality Teaching Framework.", response: "I have attended professional learning on the Quality Teaching Framework." },
          { prompt: "I implemented differentiated activities in every lesson.", response: "I have implemented differentiated activities in every lesson." },
          { prompt: "I participated in faculty meetings and whole-school events.", response: "I have participated in faculty meetings and whole-school events." },
          { prompt: "I completed my practicum at two different schools.", response: "I have completed my practicum at two different schools." },
          { prompt: "I built positive relationships with students and parents.", response: "I have built positive relationships with students and parents." },
          { prompt: "I collected evidence for my accreditation portfolio.", response: "I have collected evidence for my accreditation portfolio." },
          { prompt: "I ran a lunchtime coding club for interested students.", response: "I have run a lunchtime coding club for interested students." },
          { prompt: "I analysed NAPLAN data to inform my teaching.", response: "I have analysed NAPLAN data to inform my teaching." }
        ]
      },
      {
        id: "it02",
        type: "transformation",
        title: "Statement to Example",
        instruction: "Transform each general claim into a concrete example using the STAR method.",
        pairs: [
          { prompt: "I am good at classroom management.", response: "For example, when I had a particularly challenging Year 8 class, I introduced a token reward system that reduced behaviour referrals by half within a term." },
          { prompt: "I differentiate my lessons.", response: "For instance, in a recent Technology unit, I provided three levels of instruction sheets so that every student could access the task at their level." },
          { prompt: "I use data to inform my practice.", response: "As an example, I analysed my Year 7 assessment results and identified that students struggled with design evaluation, so I added explicit teaching of evaluation criteria." },
          { prompt: "I collaborate well with colleagues.", response: "For example, I worked with the English faculty to co-design a cross-curricular project on sustainability where students produced multimedia reports." },
          { prompt: "I build strong relationships with students.", response: "For instance, I noticed a disengaged student and took time to learn about his interests, which helped me redesign a task that he then completed with enthusiasm." },
          { prompt: "I communicate well with parents.", response: "As an example, I started sending fortnightly email updates to Year 7 parents, which led to a significant increase in homework completion and positive parent feedback." },
          { prompt: "I am reflective about my practice.", response: "For instance, after a lesson that did not go well, I recorded my observations and discussed them with my mentor, which led me to restructure my questioning technique." },
          { prompt: "I can handle difficult situations.", response: "For example, when two students had a conflict during a practical lesson, I calmly separated them, used restorative dialogue, and they resolved the issue within the lesson." },
          { prompt: "I am organised.", response: "As an example, I maintain a term planner with assessment deadlines, parent contact logs, and resource lists for every unit, which keeps me on track." },
          { prompt: "I am passionate about technology.", response: "For instance, I taught myself Unity and C# in order to develop a game development elective for Year 9, which has become one of the most popular courses." },
          { prompt: "I support EAL/D students.", response: "For example, I create visual instruction cards and vocabulary lists in both English and Mandarin to help newly arrived students access the curriculum." },
          { prompt: "I contribute to the school community.", response: "As an example, I volunteered to help organise the school's STEM showcase, coordinating displays from five different faculties." }
        ]
      },
      {
        id: "it03",
        type: "transformation",
        title: "General to Specific",
        instruction: "Transform each vague statement into a specific, detailed answer.",
        pairs: [
          { prompt: "I use technology in my teaching.", response: "I use Google Classroom for assignment distribution, Canva for student design projects, and Kahoot for formative assessment." },
          { prompt: "I follow the curriculum.", response: "I align all my units to the NESA Technology Mandatory syllabus outcomes and program against the Australian Curriculum content descriptors." },
          { prompt: "I assess students regularly.", response: "I use a mix of formative checks such as exit tickets and peer assessment, alongside two formal assessment tasks per term aligned to syllabus outcomes." },
          { prompt: "I manage behaviour well.", response: "I use a three-step approach: first, a non-verbal redirect; then, a quiet private conversation; and finally, a restorative meeting with the student." },
          { prompt: "I like working in teams.", response: "In my current school, I co-plan with two other Technology teachers every fortnight and we moderate assessments together at the end of each unit." },
          { prompt: "I support students with additional needs.", response: "I use personalised learning plans, provide visual scaffolds, adjust task complexity, and consult with the learning support team to ensure all students can access the curriculum." },
          { prompt: "I am a lifelong learner.", response: "I am currently completing a Computer Science degree through the University of Texas, and I regularly attend NESA-registered professional learning workshops." },
          { prompt: "I want to improve.", response: "My current PDP goal is to strengthen my questioning techniques, so I am recording lessons and analysing my wait time and question types." },
          { prompt: "I care about student wellbeing.", response: "I have completed Youth Mental Health First Aid training and I use regular check-in surveys to monitor how my students are feeling each week." },
          { prompt: "I am flexible.", response: "When our school moved to remote learning at short notice, I redesigned my entire unit within two days using pre-recorded video tutorials and online submission." },
          { prompt: "I contribute beyond the classroom.", response: "I coordinate the school coding club, assist with the annual STEM expo, and have volunteered for playground and bus duty rosters." },
          { prompt: "I engage parents.", response: "I send fortnightly updates via email, make positive phone calls home each week, and attend all parent-teacher evenings with prepared student progress summaries." }
        ]
      },
      {
        id: "it04",
        type: "transformation",
        title: "List to Narrative",
        instruction: "Transform each list of dot points into a cohesive narrative answer.",
        pairs: [
          { prompt: "Strengths: organised, collaborative, tech-savvy.", response: "I would describe myself as someone who is highly organised, which helps me manage the demands of teaching. I also value collaboration and regularly work with colleagues to develop shared resources. My technology skills allow me to create engaging digital learning experiences for students." },
          { prompt: "Experience: practicum at two schools, one term permanent, coding club.", response: "I completed practicum placements at two very different schools, which gave me a broad perspective. I then secured a one-term permanent position where I taught across Stage 4. I also established a lunchtime coding club that attracted twenty students." },
          { prompt: "Classroom management: clear rules, positive tone, follow-up.", response: "My approach starts with establishing clear and consistent rules from day one. I maintain a positive and respectful tone, even in challenging moments. When issues arise, I always follow up privately with students to ensure they understand the expectations." },
          { prompt: "PDP goals: questioning, differentiation, Aboriginal perspectives.", response: "My professional development plan focuses on three key areas. First, I am working on improving my questioning techniques to promote higher-order thinking. Second, I am strengthening my differentiation strategies to meet the needs of all learners. Third, I am embedding Aboriginal and Torres Strait Islander perspectives more authentically into my units." },
          { prompt: "Why this school: reputation, community, STEM focus.", response: "I am particularly drawn to this school because of its strong reputation for academic excellence. I am also impressed by the sense of community that is evident in the school culture. Additionally, the school's commitment to STEM education aligns perfectly with my own teaching strengths and interests." },
          { prompt: "Extra-curricular: debate club, sports carnival, fundraising.", response: "Beyond the classroom, I have been involved in several school activities. I helped coach the junior debate team, assisted with the organisation of the swimming carnival, and contributed to the Year 7 fundraising committee for their charity initiative." },
          { prompt: "Assessment: formative, summative, self-assessment, peer feedback.", response: "I use a balanced assessment approach that includes formative strategies such as exit tickets and mini-quizzes, formal summative tasks each term, opportunities for student self-assessment, and structured peer feedback activities." },
          { prompt: "Skills: Mandarin speaker, GIS background, project management.", response: "I bring a unique combination of skills to my teaching. As a native Mandarin speaker, I can support our Chinese-speaking families and EAL/D students. My background in geographic information systems gives me strong data analysis skills. My experience in project management helps me coordinate complex school initiatives efficiently." },
          { prompt: "Challenges overcome: new curriculum, diverse classes, limited resources.", response: "In my first year, I faced several challenges. I had to learn a completely new curriculum area in a short time, which I did by working closely with experienced colleagues. I taught classes with a wide range of abilities, which pushed me to develop strong differentiation skills. I also learned to be creative with limited resources, often designing my own materials." },
          { prompt: "Professional learning: QTF workshop, first aid, digital tools PD.", response: "I have engaged in several professional learning opportunities. I completed a workshop on the Quality Teaching Framework, which transformed how I plan my lessons. I am certified in first aid and CPR. I also attended a professional development session on integrating digital tools into the classroom." },
          { prompt: "Student engagement: real-world tasks, choice, technology.", response: "I keep students engaged through three main strategies. I design tasks that connect to real-world problems, which gives learning purpose. I offer students choice in how they demonstrate their understanding. I also leverage technology to create interactive and visually appealing learning experiences." },
          { prompt: "Values: equity, respect, high expectations, continuous improvement.", response: "My teaching is grounded in four core values. I am committed to equity, ensuring every student has access to quality education. I model and expect respect in all interactions. I maintain high expectations for every learner, regardless of their starting point. And I believe in continuous improvement, both for my students and for myself as a professional." }
        ]
      },

      // ----------------------------------------------------------
      // RESPONSE DRILLS (4 drills, 12 pairs each)
      // ----------------------------------------------------------
      {
        id: "ir01",
        type: "response",
        title: "Common Interview Questions",
        instruction: "Provide a strong, concise response to each interview question.",
        pairs: [
          { prompt: "Tell us about yourself.", response: "I am an early-career teacher with a passion for Technology education. I hold a Bachelor of Science in GIS and am completing my Master of Teaching. I bring a unique perspective, combining data skills with a genuine love of helping young people learn." },
          { prompt: "Why did you choose teaching?", response: "I chose teaching because I believe education is the most powerful way to shape lives. After working in spatial data, I realised my greatest satisfaction came from explaining complex ideas to others. Teaching gives me that opportunity every day." },
          { prompt: "Why are you interested in this school?", response: "I am drawn to this school's commitment to innovation and its strong focus on student wellbeing. The diverse community aligns with my own values, and I am excited about the opportunity to contribute to the school's STEM programmes." },
          { prompt: "What is your greatest strength as a teacher?", response: "My greatest strength is my ability to build rapport with students, including those who are disengaged. I take time to understand each student as an individual, which helps me create lessons that are relevant and motivating." },
          { prompt: "What area are you working to improve?", response: "I am actively working on my questioning techniques. I want to move beyond recall-level questions to promote deeper thinking. I have been recording my lessons and analysing the types of questions I ask." },
          { prompt: "How do you plan your lessons?", response: "I start with the syllabus outcomes and work backwards to design assessments and learning activities. I use the Quality Teaching Framework to ensure my lessons have intellectual quality, a supportive environment, and significance." },
          { prompt: "How do you handle a student who refuses to work?", response: "I would start with a calm, private conversation to understand what is going on. I would offer a choice and try to identify any underlying issues. If the behaviour continued, I would follow the school's behaviour policy and involve the year adviser." },
          { prompt: "How do you differentiate your lessons?", response: "I use a range of strategies including tiered tasks, scaffolded resources, flexible grouping, and student choice. I also use formative assessment data to adjust my teaching in real time." },
          { prompt: "How do you use technology in the classroom?", response: "I integrate technology purposefully. I use Google Classroom for organisation, multimedia tools for student projects, and interactive platforms like Kahoot for formative assessment. I also teach students to use technology as a tool for creation, not just consumption." },
          { prompt: "What do you know about the Australian Professional Standards?", response: "The Standards outline what teachers should know and be able to do across three domains: professional knowledge, practice, and engagement. As a provisionally accredited teacher, I am working towards demonstrating the Proficient level across all seven standards." },
          { prompt: "How would you contribute to the wider school community?", response: "I would be happy to contribute to extra-curricular activities such as a coding club or STEM competitions. I am also keen to be involved in faculty planning and to support school events and initiatives." },
          { prompt: "Do you have any questions for us?", response: "Yes, I do. Could you tell me about the mentoring and support structures available for early-career teachers at this school? I would also like to know about the school's priorities for the coming year." }
        ]
      },
      {
        id: "ir02",
        type: "response",
        title: "Behavioural Questions (STAR Method)",
        instruction: "Respond to each behavioural question using the Situation-Task-Action-Result framework.",
        pairs: [
          { prompt: "Tell me about a time you dealt with a difficult student.", response: "In my first term, I had a Year 8 student who was consistently disruptive. My task was to re-engage him without escalating the situation. I built a relationship by chatting with him before class and discovered he loved gaming. I redesigned a task around game design, and his behaviour improved significantly. He completed the unit with a B grade." },
          { prompt: "Give an example of when you adapted a lesson on the spot.", response: "I was teaching a practical lesson when the internet went down. The task required online research. I quickly reorganised the lesson into a collaborative brainstorming activity using whiteboards. The students actually produced more creative ideas, and I now use that approach as a regular warm-up." },
          { prompt: "Describe a time you collaborated with a colleague.", response: "My head teacher asked me to co-plan a cross-curricular project with the English faculty. I worked closely with the English teacher to align our outcomes. We created a multimedia storytelling unit that addressed outcomes from both syllabuses. Student engagement was the highest it had been all year." },
          { prompt: "Tell me about a time you received constructive feedback.", response: "My mentor observed a lesson and noted that I was talking too much and not giving students enough time to respond. I took that feedback on board and started using a think-pair-share strategy. My subsequent lesson observations showed much stronger student participation." },
          { prompt: "Describe a situation where you had to manage competing priorities.", response: "During assessment period, I was marking Year 7 and Year 9 tasks simultaneously while also preparing for parent-teacher evening. I created a priority matrix, set daily targets, and blocked out focused marking time. I met all deadlines and received positive feedback from parents." },
          { prompt: "Give an example of how you supported a struggling student.", response: "I noticed a Year 7 student was falling behind because she had limited English. I created simplified instruction cards with visual supports and key vocabulary in her first language. I also paired her with a bilingual buddy. By the end of the unit, she completed the task independently." },
          { prompt: "Tell me about a time you used data to improve outcomes.", response: "After analysing my Year 8 assessment results, I found that sixty per cent of students struggled with the evaluation criterion. I redesigned the next unit to include explicit teaching of evaluation skills with model responses. The next assessment showed a twenty per cent improvement in that area." },
          { prompt: "Describe a time you went above and beyond for students.", response: "I noticed several students were interested in coding but there was no formal programme. I set up a lunchtime coding club using free online platforms. Within a term, twenty students were attending regularly, and two entered a regional coding competition." },
          { prompt: "Tell me about a time you had a difficult conversation with a parent.", response: "A parent was upset about her son's grade. I arranged a face-to-face meeting, listened to her concerns, and showed her the marking rubric alongside her son's work. I explained the areas for improvement and offered strategies to support his learning at home. She left the meeting feeling reassured." },
          { prompt: "Describe a time you showed initiative.", response: "I noticed our faculty had no shared resource bank. I created a Google Drive structure organised by year group and topic, uploaded my own resources, and invited colleagues to contribute. Within a few weeks, it became a regularly used tool that saved everyone time." },
          { prompt: "Give an example of when you had to learn something new quickly.", response: "I was asked to teach a Game Development elective with only two weeks notice. I had no prior experience with Unity or C#. I completed several online courses in my own time, built a series of student tutorials, and successfully delivered the course with positive student feedback." },
          { prompt: "Tell me about a time you contributed to school culture.", response: "I volunteered to help organise the annual STEM showcase. I coordinated displays from multiple faculties, arranged student demonstrations, and created promotional materials. The event attracted over two hundred parents and received praise from the school community." }
        ]
      },
      {
        id: "ir03",
        type: "response",
        title: "Teaching Scenario Questions",
        instruction: "Respond to each hypothetical teaching scenario as you would in an interview.",
        pairs: [
          { prompt: "A student tells you they are being bullied. What do you do?", response: "I would first listen carefully and thank the student for trusting me. I would reassure them that they did the right thing by telling an adult. I would then follow the school's anti-bullying policy, which would involve reporting to the year adviser and documenting the incident." },
          { prompt: "You discover a student has plagiarised their assessment. How do you handle it?", response: "I would speak to the student privately and show them the evidence. I would explain what plagiarism means and why it is a serious issue. I would follow the school's academic integrity policy, which may involve allowing the student to resubmit. I would also teach the class about referencing and paraphrasing." },
          { prompt: "A parent emails you complaining that the homework is too hard. How do you respond?", response: "I would reply promptly, thanking the parent for their feedback. I would explain the purpose of the homework and offer to provide additional support or modified tasks. I would also invite them to come in for a meeting if they would like to discuss it further." },
          { prompt: "You have a class with a wide range of abilities. How do you plan for this?", response: "I would use a differentiated approach with three tiers: support, core, and extension. I would provide scaffolded materials for students who need them, set clear core expectations for everyone, and offer open-ended challenges for those who are ready to go further." },
          { prompt: "How would you integrate Aboriginal perspectives into your teaching?", response: "I would embed Aboriginal and Torres Strait Islander perspectives throughout the curriculum, not just as a one-off lesson. For example, in Technology I would explore Indigenous design and engineering. I would also consult with the school's Aboriginal Education Officer to ensure my approach is respectful and authentic." },
          { prompt: "A colleague asks you to cover their class at short notice. The lesson plan is unclear. What do you do?", response: "I would do my best with the available plan and use my professional judgement to fill in any gaps. I would focus on keeping students engaged and on task. Afterwards, I would let the colleague know what I covered and suggest we keep clearer emergency lesson plans on file." },
          { prompt: "How would you handle a situation where two students are in a physical altercation?", response: "Student safety is the priority. I would direct other students to move away and use a calm, authoritative voice to instruct the students to stop. I would not physically intervene unless trained and authorised to do so. I would call for support immediately and follow the school's critical incident procedures." },
          { prompt: "A student consistently arrives late to your class. What do you do?", response: "I would first speak privately with the student to understand the reason. There may be a wellbeing issue or a timetable conflict. I would then follow the school's attendance procedures, which might include contacting parents and involving the year adviser if the pattern continues." },
          { prompt: "How would you approach teaching a topic you are not confident in?", response: "I would invest time in learning the content thoroughly before teaching it. I would seek advice from experienced colleagues, use NESA support materials, and look for quality resources. Being a new teacher means there will always be areas to develop, and I see that as a positive challenge." },
          { prompt: "You notice a student is withdrawn and not participating. What do you do?", response: "I would check in with the student privately and ask how they are going. If I suspected a wellbeing concern, I would follow the school's referral process and speak to the school counsellor. I would also adjust my lesson to include low-risk participation strategies, such as think-pair-share." },
          { prompt: "How would you handle a lesson where the technology fails?", response: "I would have a backup plan prepared in advance. If the technology failed, I would calmly switch to an unplugged activity that still addresses the same learning outcomes. Flexibility is key, and I always prepare a plan B for technology-dependent lessons." },
          { prompt: "A group of students complains that the work is boring. How do you respond?", response: "I would take their feedback seriously and ask them what they would find more engaging. I would then reflect on my lesson design and consider how I could increase relevance, choice, and challenge. Student voice is valuable, and I would use it to improve my practice." }
        ]
      },
      {
        id: "ir04",
        type: "response",
        title: "Tell Me About a Time Questions",
        instruction: "Respond to each prompt with a structured anecdote from your teaching experience.",
        pairs: [
          { prompt: "Tell me about a time you made a mistake and learned from it.", response: "In my first week, I overloaded a lesson with too much content and the students became confused. I learned that less is more, and I now focus on one or two key concepts per lesson with plenty of practice time. This shift has made my lessons much more effective." },
          { prompt: "Tell me about a time you motivated a disengaged student.", response: "I had a Year 9 student who never participated. I discovered he was interested in music production. I let him create a multimedia project using audio instead of video, and he produced the best work in the class. He became much more engaged after that." },
          { prompt: "Tell me about a time you had to manage your time under pressure.", response: "During report-writing season, I had to write comments for over one hundred and twenty students across four classes. I created a template with personalised sentence starters and allocated one hour per class each evening. I submitted all reports on time with individualised feedback." },
          { prompt: "Tell me about a time you improved a programme or resource.", response: "I inherited a Year 7 Technology unit that relied heavily on worksheets. I redesigned it to include hands-on projects, design challenges, and peer assessment. Student engagement scores in the end-of-term survey increased from fifty-five to eighty-two per cent." },
          { prompt: "Tell me about a time you built a relationship with a difficult class.", response: "I took over a Year 8 class with a reputation for poor behaviour. I started by learning every student's name and something personal about them. I established clear routines and celebrated small wins publicly. By Week 4, the class dynamic had shifted and lessons ran smoothly." },
          { prompt: "Tell me about a time you worked with the learning support team.", response: "I had a student with an individual education plan who was struggling in my class. I met with the learning support teacher to understand his needs and co-designed modified tasks. We also arranged for a teacher's aide to support him during practical lessons. His confidence grew noticeably." },
          { prompt: "Tell me about a time you had to adjust your teaching mid-unit.", response: "Halfway through a design unit, I realised students did not have the foundational sketching skills I had assumed. I paused the unit and spent two lessons on explicit drawing instruction. When we returned to the project, the quality of student work was significantly higher." },
          { prompt: "Tell me about a time you received positive feedback.", response: "After parent-teacher evening, a parent emailed to say her daughter had never enjoyed Technology before my class and was now talking about it at home. That email reminded me why I became a teacher and motivated me to keep innovating." },
          { prompt: "Tell me about a time you dealt with an ethical dilemma.", response: "A student confided in me that he was having problems at home. I knew I had a duty of care to report this. I spoke with the student, explained that I needed to involve the school counsellor, and made the referral. The counsellor was able to connect the family with support services." },
          { prompt: "Tell me about a time you used feedback to improve.", response: "After a peer observation, my colleague suggested I could improve my lesson transitions. I started using a countdown timer and a clear verbal cue for each transition. My next observation showed smoother transitions and less off-task behaviour." },
          { prompt: "Tell me about a time you supported a colleague.", response: "A new pre-service teacher was struggling with classroom management. I offered to let her observe my lessons and shared my behaviour management strategies. I also helped her plan a structured lesson with clear expectations. By the end of her placement, she had grown considerably in confidence." },
          { prompt: "Tell me about a time you had to advocate for a student.", response: "A student in my class was not receiving the support outlined in her individual plan. I raised this with the head teacher and followed up with the learning support coordinator. The additional support was put in place within a week, and the student's performance improved." }
        ]
      },

      // ----------------------------------------------------------
      // EXPANSION DRILLS (3 drills, 6 steps each)
      // ----------------------------------------------------------
      {
        id: "ie01",
        type: "expansion",
        title: "Building an Interview Answer: Why Teaching?",
        instruction: "Expand the core statement step by step into a compelling interview answer.",
        steps: [
          { step: 1, text: "I chose teaching because I enjoy helping people learn.", expanded: "I chose teaching because I enjoy helping people learn." },
          { step: 2, text: "Add your background.", expanded: "I chose teaching because I enjoy helping people learn. Before teaching, I worked in spatial data and demography, where I often found myself explaining complex concepts to colleagues." },
          { step: 3, text: "Add the turning point.", expanded: "I chose teaching because I enjoy helping people learn. Before teaching, I worked in spatial data and demography, where I often found myself explaining complex concepts to colleagues. I realised that the most rewarding part of my work was not the analysis itself, but helping others understand it." },
          { step: 4, text: "Add your values.", expanded: "I chose teaching because I enjoy helping people learn. Before teaching, I worked in spatial data and demography, where I often found myself explaining complex concepts to colleagues. I realised that the most rewarding part of my work was not the analysis itself, but helping others understand it. I believe education has the power to transform lives and create opportunities." },
          { step: 5, text: "Add a specific moment.", expanded: "I chose teaching because I enjoy helping people learn. Before teaching, I worked in spatial data and demography, where I often found myself explaining complex concepts to colleagues. I realised that the most rewarding part of my work was not the analysis itself, but helping others understand it. I believe education has the power to transform lives and create opportunities. The moment that confirmed my decision was during my first practicum, when a student told me that my lesson was the first time she had ever understood how circuits work." },
          { step: 6, text: "End with forward-looking commitment.", expanded: "I chose teaching because I enjoy helping people learn. Before teaching, I worked in spatial data and demography, where I often found myself explaining complex concepts to colleagues. I realised that the most rewarding part of my work was not the analysis itself, but helping others understand it. I believe education has the power to transform lives and create opportunities. The moment that confirmed my decision was during my first practicum, when a student told me that my lesson was the first time she had ever understood how circuits work. That experience drives me every day, and I am committed to building a long and impactful career in teaching." }
        ]
      },
      {
        id: "ie02",
        type: "expansion",
        title: "Building an Interview Answer: Classroom Management",
        instruction: "Expand the core approach step by step into a detailed answer.",
        steps: [
          { step: 1, text: "I believe in positive behaviour management.", expanded: "I believe in positive behaviour management." },
          { step: 2, text: "Add your philosophy.", expanded: "I believe in positive behaviour management, grounded in the idea that strong relationships are the foundation of a well-managed classroom." },
          { step: 3, text: "Add specific strategies.", expanded: "I believe in positive behaviour management, grounded in the idea that strong relationships are the foundation of a well-managed classroom. My key strategies include establishing clear expectations from day one, using consistent routines, and giving students choices." },
          { step: 4, text: "Add an example.", expanded: "I believe in positive behaviour management, grounded in the idea that strong relationships are the foundation of a well-managed classroom. My key strategies include establishing clear expectations from day one, using consistent routines, and giving students choices. For example, when a student is off task, I might say quietly, 'Would you prefer to refocus here, or would you like to work at the back table?'" },
          { step: 5, text: "Add alignment to school policy.", expanded: "I believe in positive behaviour management, grounded in the idea that strong relationships are the foundation of a well-managed classroom. My key strategies include establishing clear expectations from day one, using consistent routines, and giving students choices. For example, when a student is off task, I might say quietly, 'Would you prefer to refocus here, or would you like to work at the back table?' I always align my approach with the school's behaviour policy and use restorative practices when issues arise." },
          { step: 6, text: "End with reflection.", expanded: "I believe in positive behaviour management, grounded in the idea that strong relationships are the foundation of a well-managed classroom. My key strategies include establishing clear expectations from day one, using consistent routines, and giving students choices. For example, when a student is off task, I might say quietly, 'Would you prefer to refocus here, or would you like to work at the back table?' I always align my approach with the school's behaviour policy and use restorative practices when issues arise. I also reflect regularly on what is working and seek feedback from my mentor to keep improving." }
        ]
      },
      {
        id: "ie03",
        type: "expansion",
        title: "Building an Interview Answer: Teaching Philosophy",
        instruction: "Expand the core belief step by step into a rich, personal philosophy statement.",
        steps: [
          { step: 1, text: "I believe every student can succeed.", expanded: "I believe every student can succeed." },
          { step: 2, text: "Add conditions for success.", expanded: "I believe every student can succeed when they are given the right combination of high expectations, appropriate support, and a sense of belonging." },
          { step: 3, text: "Add your role as the teacher.", expanded: "I believe every student can succeed when they are given the right combination of high expectations, appropriate support, and a sense of belonging. My role as a teacher is to know each student, understand their strengths and challenges, and design learning experiences that meet them where they are." },
          { step: 4, text: "Add a framework reference.", expanded: "I believe every student can succeed when they are given the right combination of high expectations, appropriate support, and a sense of belonging. My role as a teacher is to know each student, understand their strengths and challenges, and design learning experiences that meet them where they are. I draw on the Quality Teaching Framework to ensure my lessons have intellectual quality and significance for students." },
          { step: 5, text: "Add a personal touch.", expanded: "I believe every student can succeed when they are given the right combination of high expectations, appropriate support, and a sense of belonging. My role as a teacher is to know each student, understand their strengths and challenges, and design learning experiences that meet them where they are. I draw on the Quality Teaching Framework to ensure my lessons have intellectual quality and significance for students. As someone who learned English as a second language, I understand what it feels like to struggle with new concepts, and that empathy shapes my teaching." },
          { step: 6, text: "End with commitment.", expanded: "I believe every student can succeed when they are given the right combination of high expectations, appropriate support, and a sense of belonging. My role as a teacher is to know each student, understand their strengths and challenges, and design learning experiences that meet them where they are. I draw on the Quality Teaching Framework to ensure my lessons have intellectual quality and significance for students. As someone who learned English as a second language, I understand what it feels like to struggle with new concepts, and that empathy shapes my teaching. I am committed to continuous growth as a professional and to making a positive difference in the lives of every student I teach." }
        ]
      }
    ]
  });

})();
