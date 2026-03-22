/*
 * FSI Pattern Drill Data
 * Foreign Service Institute style drills for Chinese-speaking teachers
 * targeting workplace English in NSW secondary school contexts.
 * ES5 only — no const/let, no arrow functions, no template literals.
 */

var FSI_DRILLS = { modules: [

  /* ================================================================
     MODULE 1 — CLASSROOM INSTRUCTIONS
     ================================================================ */
  {
    id: "classroom",
    title: "Classroom Instructions",
    drills: [

      /* ---------- SUBSTITUTION DRILLS (cs) ---------- */

      {
        id: "cs001",
        type: "substitution",
        base: "Open your textbook to page fifteen.",
        cues: [
          {cue: "workbook", ans: "Open your workbook to page fifteen."},
          {cue: "page thirty", ans: "Open your textbook to page thirty."},
          {cue: "laptop", ans: "Open your laptop to page fifteen."},
          {cue: "notebook", ans: "Open your notebook to page fifteen."},
          {cue: "page forty-two", ans: "Open your textbook to page forty-two."},
          {cue: "diary", ans: "Open your diary to page fifteen."},
          {cue: "page one hundred", ans: "Open your textbook to page one hundred."},
          {cue: "Chrome browser", ans: "Open your Chrome browser to page fifteen."},
          {cue: "handout", ans: "Open your handout to page fifteen."},
          {cue: "page seven", ans: "Open your textbook to page seven."},
          {cue: "assessment booklet", ans: "Open your assessment booklet to page fifteen."},
          {cue: "page sixty-three", ans: "Open your textbook to page sixty-three."},
          {cue: "folder", ans: "Open your folder to page fifteen."},
          {cue: "page twenty-one", ans: "Open your textbook to page twenty-one."},
          {cue: "resource booklet", ans: "Open your resource booklet to page fifteen."}
        ]
      },

      {
        id: "cs002",
        type: "substitution",
        base: "You have five minutes to finish this task.",
        cues: [
          {cue: "ten minutes", ans: "You have ten minutes to finish this task."},
          {cue: "complete the worksheet", ans: "You have five minutes to complete the worksheet."},
          {cue: "three minutes", ans: "You have three minutes to finish this task."},
          {cue: "pack up", ans: "You have five minutes to pack up."},
          {cue: "two minutes", ans: "You have two minutes to finish this task."},
          {cue: "write your reflection", ans: "You have five minutes to write your reflection."},
          {cue: "fifteen minutes", ans: "You have fifteen minutes to finish this task."},
          {cue: "submit your work", ans: "You have five minutes to submit your work."},
          {cue: "one minute", ans: "You have one minute to finish this task."},
          {cue: "save your file", ans: "You have five minutes to save your file."},
          {cue: "twenty minutes", ans: "You have twenty minutes to finish this task."},
          {cue: "glue in your handout", ans: "You have five minutes to glue in your handout."},
          {cue: "half an hour", ans: "You have half an hour to finish this task."},
          {cue: "log out", ans: "You have five minutes to log out."},
          {cue: "eight minutes", ans: "You have eight minutes to finish this task."}
        ]
      },

      {
        id: "cs003",
        type: "substitution",
        base: "Please move into your groups quietly.",
        cues: [
          {cue: "quickly", ans: "Please move into your groups quickly."},
          {cue: "seats", ans: "Please move into your seats quietly."},
          {cue: "sensibly", ans: "Please move into your groups sensibly."},
          {cue: "pairs", ans: "Please move into your pairs quietly."},
          {cue: "without talking", ans: "Please move into your groups without talking."},
          {cue: "rows", ans: "Please move into your rows quietly."},
          {cue: "carefully", ans: "Please move into your groups carefully."},
          {cue: "table groups", ans: "Please move into your table groups quietly."},
          {cue: "straight away", ans: "Please move into your groups straight away."},
          {cue: "learning stations", ans: "Please move into your learning stations quietly."},
          {cue: "now", ans: "Please move into your groups now."},
          {cue: "the computer lab", ans: "Please move into the computer lab quietly."},
          {cue: "orderly", ans: "Please move into your groups orderly."},
          {cue: "the library", ans: "Please move into the library quietly."},
          {cue: "calmly", ans: "Please move into your groups calmly."}
        ]
      },

      {
        id: "cs004",
        type: "substitution",
        base: "Your homework is due on Friday.",
        cues: [
          {cue: "Monday", ans: "Your homework is due on Monday."},
          {cue: "assessment task", ans: "Your assessment task is due on Friday."},
          {cue: "next Wednesday", ans: "Your homework is due on next Wednesday."},
          {cue: "research report", ans: "Your research report is due on Friday."},
          {cue: "tomorrow", ans: "Your homework is due tomorrow."},
          {cue: "portfolio", ans: "Your portfolio is due on Friday."},
          {cue: "the end of the week", ans: "Your homework is due at the end of the week."},
          {cue: "project proposal", ans: "Your project proposal is due on Friday."},
          {cue: "next lesson", ans: "Your homework is due next lesson."},
          {cue: "design folio", ans: "Your design folio is due on Friday."},
          {cue: "after the holidays", ans: "Your homework is due after the holidays."},
          {cue: "reflection paragraph", ans: "Your reflection paragraph is due on Friday."},
          {cue: "Thursday period 3", ans: "Your homework is due Thursday period 3."},
          {cue: "multimedia presentation", ans: "Your multimedia presentation is due on Friday."},
          {cue: "before the bell", ans: "Your homework is due before the bell."}
        ]
      },

      {
        id: "cs005",
        type: "substitution",
        base: "Work with your partner to complete the activity.",
        cues: [
          {cue: "group", ans: "Work with your group to complete the activity."},
          {cue: "answer the questions", ans: "Work with your partner to answer the questions."},
          {cue: "table", ans: "Work with your table to complete the activity."},
          {cue: "build the prototype", ans: "Work with your partner to build the prototype."},
          {cue: "neighbour", ans: "Work with your neighbour to complete the activity."},
          {cue: "fill in the table", ans: "Work with your partner to fill in the table."},
          {cue: "team", ans: "Work with your team to complete the activity."},
          {cue: "brainstorm ideas", ans: "Work with your partner to brainstorm ideas."},
          {cue: "buddy", ans: "Work with your buddy to complete the activity."},
          {cue: "edit the document", ans: "Work with your partner to edit the document."},
          {cue: "row", ans: "Work with your row to complete the activity."},
          {cue: "create the storyboard", ans: "Work with your partner to create the storyboard."},
          {cue: "elbow partner", ans: "Work with your elbow partner to complete the activity."},
          {cue: "plan the design", ans: "Work with your partner to plan the design."},
          {cue: "class", ans: "Work with your class to complete the activity."}
        ]
      },

      {
        id: "cs006",
        type: "substitution",
        base: "Log on to your laptop and open Google Classroom.",
        cues: [
          {cue: "desktop computer", ans: "Log on to your desktop computer and open Google Classroom."},
          {cue: "Canvas", ans: "Log on to your laptop and open Canvas."},
          {cue: "iPad", ans: "Log on to your iPad and open Google Classroom."},
          {cue: "Microsoft Teams", ans: "Log on to your laptop and open Microsoft Teams."},
          {cue: "Chromebook", ans: "Log on to your Chromebook and open Google Classroom."},
          {cue: "the school portal", ans: "Log on to your laptop and open the school portal."},
          {cue: "device", ans: "Log on to your device and open Google Classroom."},
          {cue: "Sentral", ans: "Log on to your laptop and open Sentral."},
          {cue: "computer", ans: "Log on to your computer and open Google Classroom."},
          {cue: "Google Docs", ans: "Log on to your laptop and open Google Docs."},
          {cue: "school laptop", ans: "Log on to your school laptop and open Google Classroom."},
          {cue: "the shared drive", ans: "Log on to your laptop and open the shared drive."},
          {cue: "BYOD device", ans: "Log on to your BYOD device and open Google Classroom."},
          {cue: "Unity", ans: "Log on to your laptop and open Unity."},
          {cue: "tablet", ans: "Log on to your tablet and open Google Classroom."}
        ]
      },

      {
        id: "cs007",
        type: "substitution",
        base: "Put on your safety goggles before you start.",
        cues: [
          {cue: "safety glasses", ans: "Put on your safety glasses before you start."},
          {cue: "begin cutting", ans: "Put on your safety goggles before you begin cutting."},
          {cue: "apron", ans: "Put on your apron before you start."},
          {cue: "use the equipment", ans: "Put on your safety goggles before you use the equipment."},
          {cue: "gloves", ans: "Put on your gloves before you start."},
          {cue: "handle the materials", ans: "Put on your safety goggles before you handle the materials."},
          {cue: "lab coat", ans: "Put on your lab coat before you start."},
          {cue: "enter the workshop", ans: "Put on your safety goggles before you enter the workshop."},
          {cue: "closed shoes", ans: "Put on your closed shoes before you start."},
          {cue: "touch anything", ans: "Put on your safety goggles before you touch anything."},
          {cue: "ear protection", ans: "Put on your ear protection before you start."},
          {cue: "use the drill", ans: "Put on your safety goggles before you use the drill."},
          {cue: "dust mask", ans: "Put on your dust mask before you start."},
          {cue: "operate the saw", ans: "Put on your safety goggles before you operate the saw."},
          {cue: "hard hat", ans: "Put on your hard hat before you start."}
        ]
      },

      {
        id: "cs008",
        type: "substitution",
        base: "Please return the scissors to the tray at the front.",
        cues: [
          {cue: "glue sticks", ans: "Please return the glue sticks to the tray at the front."},
          {cue: "the shelf at the back", ans: "Please return the scissors to the shelf at the back."},
          {cue: "rulers", ans: "Please return the rulers to the tray at the front."},
          {cue: "the cupboard", ans: "Please return the scissors to the cupboard."},
          {cue: "markers", ans: "Please return the markers to the tray at the front."},
          {cue: "my desk", ans: "Please return the scissors to my desk."},
          {cue: "calculators", ans: "Please return the calculators to the tray at the front."},
          {cue: "the toolbox", ans: "Please return the scissors to the toolbox."},
          {cue: "protractors", ans: "Please return the protractors to the tray at the front."},
          {cue: "the container", ans: "Please return the scissors to the container."},
          {cue: "textbooks", ans: "Please return the textbooks to the tray at the front."},
          {cue: "the charging trolley", ans: "Please return the scissors to the charging trolley."},
          {cue: "laptops", ans: "Please return the laptops to the tray at the front."},
          {cue: "the storage room", ans: "Please return the scissors to the storage room."},
          {cue: "headphones", ans: "Please return the headphones to the tray at the front."}
        ]
      },

      /* ---------- TRANSFORMATION DRILLS (ct) ---------- */

      {
        id: "ct001",
        type: "transformation",
        label: "Change the statement into a question",
        pairs: [
          {prompt: "You have finished the worksheet.", ans: "Have you finished the worksheet?"},
          {prompt: "She is working on her project.", ans: "Is she working on her project?"},
          {prompt: "They understand the instructions.", ans: "Do they understand the instructions?"},
          {prompt: "He has submitted his assignment.", ans: "Has he submitted his assignment?"},
          {prompt: "You can see the board from there.", ans: "Can you see the board from there?"},
          {prompt: "She needs more time.", ans: "Does she need more time?"},
          {prompt: "They are ready to present.", ans: "Are they ready to present?"},
          {prompt: "He was absent yesterday.", ans: "Was he absent yesterday?"},
          {prompt: "You have read the instructions.", ans: "Have you read the instructions?"},
          {prompt: "She will bring her materials tomorrow.", ans: "Will she bring her materials tomorrow?"},
          {prompt: "They completed the task on time.", ans: "Did they complete the task on time?"},
          {prompt: "He is sitting in the correct seat.", ans: "Is he sitting in the correct seat?"}
        ]
      },

      {
        id: "ct002",
        type: "transformation",
        label: "Change from present tense to past tense",
        pairs: [
          {prompt: "I give you five minutes.", ans: "I gave you five minutes."},
          {prompt: "She writes her name on the sheet.", ans: "She wrote her name on the sheet."},
          {prompt: "They sit in their groups.", ans: "They sat in their groups."},
          {prompt: "He brings his textbook to class.", ans: "He brought his textbook to class."},
          {prompt: "We begin the lesson with a warm-up.", ans: "We began the lesson with a warm-up."},
          {prompt: "She tells the class to be quiet.", ans: "She told the class to be quiet."},
          {prompt: "They make a poster about sustainability.", ans: "They made a poster about sustainability."},
          {prompt: "He runs in the corridor.", ans: "He ran in the corridor."},
          {prompt: "I teach Year 7 Technology on Mondays.", ans: "I taught Year 7 Technology on Mondays."},
          {prompt: "She draws a diagram in her book.", ans: "She drew a diagram in her book."},
          {prompt: "They choose their own partners.", ans: "They chose their own partners."},
          {prompt: "He takes the attendance on Sentral.", ans: "He took the attendance on Sentral."}
        ]
      },

      {
        id: "ct003",
        type: "transformation",
        label: "Change from singular to plural",
        pairs: [
          {prompt: "The student is working quietly.", ans: "The students are working quietly."},
          {prompt: "This book needs a cover.", ans: "These books need covers."},
          {prompt: "That child has finished the test.", ans: "Those children have finished the test."},
          {prompt: "The girl is presenting her project.", ans: "The girls are presenting their projects."},
          {prompt: "This worksheet is for the extension task.", ans: "These worksheets are for the extension tasks."},
          {prompt: "The boy forgot his pencil case.", ans: "The boys forgot their pencil cases."},
          {prompt: "A knife is a dangerous tool.", ans: "Knives are dangerous tools."},
          {prompt: "The person at the back needs to move.", ans: "The people at the back need to move."},
          {prompt: "This mouse is not working.", ans: "These mice are not working."},
          {prompt: "That shelf holds the textbooks.", ans: "Those shelves hold the textbooks."},
          {prompt: "The woman is the head teacher.", ans: "The women are the head teachers."},
          {prompt: "This activity takes half a lesson.", ans: "These activities take half a lesson."}
        ]
      },

      {
        id: "ct004",
        type: "transformation",
        label: "Change from positive to negative",
        pairs: [
          {prompt: "You may use your phone in class.", ans: "You may not use your phone in class."},
          {prompt: "She has completed all the questions.", ans: "She has not completed all the questions."},
          {prompt: "They are allowed to leave early.", ans: "They are not allowed to leave early."},
          {prompt: "He should be talking during the test.", ans: "He should not be talking during the test."},
          {prompt: "You can eat food in the computer room.", ans: "You cannot eat food in the computer room."},
          {prompt: "She was paying attention.", ans: "She was not paying attention."},
          {prompt: "They did bring their materials.", ans: "They did not bring their materials."},
          {prompt: "He is following the school rules.", ans: "He is not following the school rules."},
          {prompt: "You have permission to go to your locker.", ans: "You do not have permission to go to your locker."},
          {prompt: "She does understand the question.", ans: "She does not understand the question."},
          {prompt: "They will finish on time.", ans: "They will not finish on time."},
          {prompt: "He can use the internet for this task.", ans: "He cannot use the internet for this task."}
        ]
      },

      {
        id: "ct005",
        type: "transformation",
        label: "Change from active voice to passive voice",
        pairs: [
          {prompt: "The teacher marked the essays.", ans: "The essays were marked by the teacher."},
          {prompt: "The students completed the assessment.", ans: "The assessment was completed by the students."},
          {prompt: "I will collect the worksheets.", ans: "The worksheets will be collected by me."},
          {prompt: "She designed the poster.", ans: "The poster was designed by her."},
          {prompt: "They are building a prototype.", ans: "A prototype is being built by them."},
          {prompt: "The principal announced the assembly.", ans: "The assembly was announced by the principal."},
          {prompt: "He wrote the report.", ans: "The report was written by him."},
          {prompt: "We use Google Classroom every day.", ans: "Google Classroom is used by us every day."},
          {prompt: "The school provides the laptops.", ans: "The laptops are provided by the school."},
          {prompt: "She uploaded the resources.", ans: "The resources were uploaded by her."},
          {prompt: "They chose the topic last week.", ans: "The topic was chosen by them last week."},
          {prompt: "NESA sets the syllabus outcomes.", ans: "The syllabus outcomes are set by NESA."}
        ]
      },

      {
        id: "ct006",
        type: "transformation",
        label: "Change from informal to formal register",
        pairs: [
          {prompt: "Hey guys, sit down.", ans: "Good morning, everyone. Please take your seats."},
          {prompt: "That's not cool, mate.", ans: "That behaviour is not appropriate."},
          {prompt: "You gotta finish this by Friday.", ans: "This needs to be completed by Friday."},
          {prompt: "Can you like, stop talking?", ans: "I need everyone to stop talking, please."},
          {prompt: "Yeah, good job on that.", ans: "Well done. That is excellent work."},
          {prompt: "Who hasn't done their homework?", ans: "Could those who have not submitted their homework please see me."},
          {prompt: "Hurry up, we're running out of time.", ans: "Please work efficiently; we have limited time remaining."},
          {prompt: "Don't mess around with the equipment.", ans: "Please handle the equipment responsibly."},
          {prompt: "That's wrong, try again.", ans: "That is not quite right. Would you like to reconsider your answer?"},
          {prompt: "You lot need to quiet down.", ans: "I need the class to lower their voices, please."},
          {prompt: "Sort out your stuff before you leave.", ans: "Please organise your belongings before the bell."},
          {prompt: "No way you can hand that in late.", ans: "Late submissions will not be accepted without prior arrangement."}
        ]
      },

      /* ---------- RESPONSE DRILLS (cr) ---------- */

      {
        id: "cr001",
        type: "response",
        label: "Respond to common student questions",
        pairs: [
          {prompt: "A student asks: Can I go to the bathroom?", ans: "Yes, but please be quick and take the hall pass."},
          {prompt: "A student asks: What page are we on?", ans: "We are on page twenty-three. It is also written on the board."},
          {prompt: "A student asks: Can I work with my friend?", ans: "I have already assigned the groups for today. Please stay with your allocated partner."},
          {prompt: "A student asks: Is this going to be in the test?", ans: "Everything we cover in class is important, but yes, this topic will appear in the assessment."},
          {prompt: "A student asks: Can I use my phone to take a photo of the board?", ans: "Yes, you may, but only for that purpose. Put it away once you are done."},
          {prompt: "A student asks: I forgot my textbook, what should I do?", ans: "You can share with your neighbour today, but please remember to bring it next time."},
          {prompt: "A student asks: Can I do this at home instead?", ans: "This is a class activity and needs to be done here. You will have separate homework tonight."},
          {prompt: "A student asks: Why do we have to learn this?", ans: "This connects to our assessment task and will help you develop important problem-solving skills."},
          {prompt: "A student asks: How many words does this need to be?", ans: "Aim for a minimum of one hundred and fifty words, but focus on quality rather than word count."},
          {prompt: "A student asks: Can I listen to music while I work?", ans: "Not today. I need your full attention for this task."},
          {prompt: "A student asks: When is this due?", ans: "The due date is Friday at the end of period four. It is also on Google Classroom."},
          {prompt: "A student asks: Can I print my work?", ans: "Yes, please send it to the library printer and collect it during your break."}
        ]
      },

      {
        id: "cr002",
        type: "response",
        label: "Respond to behaviour issues",
        pairs: [
          {prompt: "A student is talking while you are explaining.", ans: "I need your attention right now. You can chat with your friends at break time."},
          {prompt: "A student is using their phone under the desk.", ans: "Please put your phone away. If I see it again, I will need to confiscate it as per the school policy."},
          {prompt: "Two students are arguing loudly.", ans: "Both of you need to stop immediately. Take a moment to calm down, and I will speak to each of you separately."},
          {prompt: "A student refuses to do the task.", ans: "I understand you might be finding this difficult. Let me help you get started with the first question."},
          {prompt: "A student is throwing things across the room.", ans: "That is unacceptable behaviour. Please stop immediately or I will need to call for support."},
          {prompt: "A student keeps leaving their seat without permission.", ans: "Please stay in your seat. If you need something, raise your hand and I will come to you."},
          {prompt: "A student is eating in class.", ans: "Food is not allowed in the classroom. Please put it away and you can finish it at recess."},
          {prompt: "A student makes fun of another student's answer.", ans: "In this classroom, we respect everyone's contributions. I do not want to hear that kind of comment again."},
          {prompt: "A student is drawing on the desk.", ans: "Please stop drawing on the desk. You need to clean it before the end of the lesson."},
          {prompt: "A student walks in five minutes late without an explanation.", ans: "You are late. Please see me after class to explain. For now, take your seat and catch up on what we have covered."},
          {prompt: "A student says the work is boring.", ans: "I hear you, but this skill is important for your assessment. Let us see how we can make it more interesting for you."},
          {prompt: "A student is deliberately distracting others.", ans: "I can see what is happening. You need to focus on your own work. This is your first warning."}
        ]
      },

      {
        id: "cr003",
        type: "response",
        label: "Respond to technology problems",
        pairs: [
          {prompt: "A student says: My laptop will not turn on.", ans: "Try holding the power button for ten seconds. If that does not work, get a spare from the trolley."},
          {prompt: "A student says: The internet is not working.", ans: "Try disconnecting and reconnecting to the school Wi-Fi. The password is on the board."},
          {prompt: "A student says: I cannot find my file. I think I lost it.", ans: "Check your recent documents and the trash folder. If it is still missing, you may need to start again."},
          {prompt: "A student says: My password is not working.", ans: "Go to the IT help desk at the library during recess. For now, share with your partner."},
          {prompt: "A student says: Google Classroom will not load.", ans: "Try refreshing the page. If it still does not load, clear your browser cache and try again."},
          {prompt: "A student says: The printer is jammed.", ans: "Leave the printer for now. I will report it to the IT team. You can print during break time."},
          {prompt: "A student says: My screen is frozen.", ans: "Try pressing Control, Alt, Delete and then select Task Manager. If that does not work, hold the power button."},
          {prompt: "A student says: I accidentally deleted my work.", ans: "Check the version history in Google Docs. You should be able to restore a previous version."},
          {prompt: "A student says: The projector is not showing my screen.", ans: "Make sure you have selected the correct display option. Press the Windows key and P at the same time."},
          {prompt: "A student says: My headphones are not working.", ans: "Check that they are plugged in properly. If they still do not work, try another pair from the box."},
          {prompt: "A student says: I cannot log in to the school system.", ans: "Make sure you are using your school email, not your personal one. Your username is your student number."},
          {prompt: "A student says: My file is too big to upload.", ans: "Try compressing the file first. If it is an image, reduce the resolution before uploading."}
        ]
      },

      {
        id: "cr004",
        type: "response",
        label: "Respond to late arrivals",
        pairs: [
          {prompt: "A student arrives five minutes late saying the bus was delayed.", ans: "That is fine. Please take your seat quickly and open your book to page twelve. I will explain what you missed after I finish this instruction."},
          {prompt: "A student arrives late and says nothing.", ans: "Good morning. Please sign in on the late sheet by the door and take your seat. See me at the end to catch up."},
          {prompt: "A student arrives late for the third time this week.", ans: "This is the third time this week. I will need to make a note on Sentral. Please see me at lunchtime so we can sort this out."},
          {prompt: "A student walks in late eating food.", ans: "You are late, and food is not allowed in class. Please finish or put it away, then take your seat. I will speak to you after the lesson."},
          {prompt: "A student arrives late with a note from another teacher.", ans: "Thank you for the note. Please take your seat. Your partner can fill you in on what we have done so far."},
          {prompt: "A student arrives late and disrupts the class.", ans: "Please come in quietly. Disrupting the lesson means less learning time for everyone. Take your seat and I will catch you up."},
          {prompt: "A student arrives late because they were at the office.", ans: "No worries. Do you have a late pass? Please put it on my desk and join your group."},
          {prompt: "A student arrives late and asks what they missed.", ans: "I will explain during the activity. For now, please take a seat and read the instructions on the board."},
          {prompt: "A student comes in late looking upset.", ans: "Are you all right? Take a moment to settle in. Come and see me quietly if you need to talk."},
          {prompt: "A student arrives late after a meeting with the school counsellor.", ans: "Welcome back. There is no need to explain. Grab a worksheet from the front and your partner will help you catch up."},
          {prompt: "A student arrives very late, having missed half the lesson.", ans: "Please take a seat. I will give you a catch-up sheet. We can discuss what you missed after class."},
          {prompt: "A student strolls in late with no urgency.", ans: "You are fifteen minutes late. That is unacceptable without a valid reason. Please see me at the end of the lesson."}
        ]
      },

      {
        id: "cr005",
        type: "response",
        label: "Respond to confused students",
        pairs: [
          {prompt: "A student says: I do not understand what we are supposed to do.", ans: "Let me explain it again. First, read the passage, then answer the three questions at the bottom of the page."},
          {prompt: "A student says: This is too hard.", ans: "I know it feels challenging, but let us break it down into smaller steps. Start with the first part and I will check on you."},
          {prompt: "A student stares blankly at the worksheet.", ans: "You look stuck. Let me help you with the first question so you can see the pattern."},
          {prompt: "A student says: I do not know where to start.", ans: "That is completely normal. Look at the example we did together on the board and use that as a guide."},
          {prompt: "A student says: Can you explain that again more slowly?", ans: "Of course. Let me go through it step by step. Stop me if anything is unclear."},
          {prompt: "A student asks: What does this word mean?", ans: "Good question. Let me write the definition on the board so everyone can see it."},
          {prompt: "A student says: I was away last lesson and do not know what is happening.", ans: "No problem. Here is the handout from last lesson. Read through it and then join your group."},
          {prompt: "A student says: I did it differently. Is my answer wrong?", ans: "Show me what you have done. There can be more than one way to approach this problem."},
          {prompt: "A student says: I finished but I do not think it is right.", ans: "Let me have a look. It is great that you are checking your own work. That shows good learning habits."},
          {prompt: "A student keeps asking the same question.", ans: "I can see this concept is tricky. Let me show you another example using a different approach."},
          {prompt: "A student says: Everyone else seems to get it except me.", ans: "You are not alone; many people find this challenging. Let me sit with you and work through it together."},
          {prompt: "A student has made the same mistake three times.", ans: "I can see a pattern in your work. Let me show you where the error is happening so you can avoid it next time."}
        ]
      },

      {
        id: "cr006",
        type: "response",
        label: "Respond to parent interactions",
        pairs: [
          {prompt: "A parent emails: My child says they are being bullied in your class.", ans: "Thank you for letting me know. I take this very seriously. I will look into it immediately and follow up with you by the end of the week."},
          {prompt: "A parent asks at parent-teacher night: How is my child doing?", ans: "Your child is making good progress. They participate well in class and their recent assessment shows solid understanding of the key concepts."},
          {prompt: "A parent says: My child says you are too strict.", ans: "I appreciate you sharing that. My aim is to create a structured learning environment where every student can succeed. I am happy to discuss specific concerns."},
          {prompt: "A parent emails: Can my child have extra time for the assignment?", ans: "I understand. If there is a valid reason, I am happy to arrange an extension. Could you please let me know the circumstances so I can process this properly?"},
          {prompt: "A parent says: My child does not enjoy your subject.", ans: "Thank you for telling me. I will try to connect with your child and find out what might make the learning more engaging for them."},
          {prompt: "A parent asks: Why did my child get a C on the assessment?", ans: "I would be happy to go through the marking criteria with you. The grade reflects their current level against the NESA standards, and I can suggest strategies for improvement."},
          {prompt: "A parent says: I think the homework is too much.", ans: "I appreciate the feedback. The homework is designed to reinforce what we learn in class. I will review the workload to ensure it is reasonable."},
          {prompt: "A parent asks: Can my child change classes?", ans: "That is a decision made by the head teacher and the timetable coordinator. I can pass on your request, or you can contact the school office directly."},
          {prompt: "A parent says: My child has anxiety about presenting in front of the class.", ans: "Thank you for letting me know. I can offer alternative presentation options, such as presenting to a small group or recording a video."},
          {prompt: "A parent asks: What can my child do to improve?", ans: "I would suggest regular revision of key concepts and completing all set tasks. I can also recommend some additional practice resources if that would help."},
          {prompt: "A parent emails: My child was sick and missed the test.", ans: "I hope they are feeling better. I can arrange a make-up test during a study period. Please let me know when they are back at school."},
          {prompt: "A parent says: Thank you for supporting my child.", ans: "That is very kind of you. It has been a pleasure teaching your child. They are a valued member of our class."}
        ]
      },

      /* ---------- EXPANSION DRILLS (ce) ---------- */

      {
        id: "ce001",
        type: "expansion",
        steps: [
          {base: "Open your book.", add: "textbook", ans: "Open your textbook."},
          {base: null, add: "to page fifteen", ans: "Open your textbook to page fifteen."},
          {base: null, add: "and read", ans: "Open your textbook to page fifteen and read."},
          {base: null, add: "the first paragraph", ans: "Open your textbook to page fifteen and read the first paragraph."},
          {base: null, add: "silently", ans: "Open your textbook to page fifteen and read the first paragraph silently."},
          {base: null, add: "before we discuss it as a class", ans: "Open your textbook to page fifteen and read the first paragraph silently before we discuss it as a class."}
        ]
      },

      {
        id: "ce002",
        type: "expansion",
        steps: [
          {base: "Complete the task.", add: "design", ans: "Complete the design task."},
          {base: null, add: "in your groups", ans: "Complete the design task in your groups."},
          {base: null, add: "using the materials provided", ans: "Complete the design task in your groups using the materials provided."},
          {base: null, add: "within twenty minutes", ans: "Complete the design task in your groups using the materials provided within twenty minutes."},
          {base: null, add: "and be ready to present", ans: "Complete the design task in your groups using the materials provided within twenty minutes and be ready to present."},
          {base: null, add: "your solution to the class", ans: "Complete the design task in your groups using the materials provided within twenty minutes and be ready to present your solution to the class."}
        ]
      },

      {
        id: "ce003",
        type: "expansion",
        steps: [
          {base: "Write a paragraph.", add: "short", ans: "Write a short paragraph."},
          {base: null, add: "explaining your answer", ans: "Write a short paragraph explaining your answer."},
          {base: null, add: "using evidence from the text", ans: "Write a short paragraph explaining your answer using evidence from the text."},
          {base: null, add: "in your workbook", ans: "Write a short paragraph explaining your answer using evidence from the text in your workbook."},
          {base: null, add: "and submit it on Google Classroom", ans: "Write a short paragraph explaining your answer using evidence from the text in your workbook and submit it on Google Classroom."},
          {base: null, add: "before the end of the lesson", ans: "Write a short paragraph explaining your answer using evidence from the text in your workbook and submit it on Google Classroom before the end of the lesson."}
        ]
      },

      {
        id: "ce004",
        type: "expansion",
        steps: [
          {base: "Study for the test.", add: "the assessment", ans: "Study for the assessment."},
          {base: null, add: "by reviewing", ans: "Study for the assessment by reviewing."},
          {base: null, add: "your notes and handouts", ans: "Study for the assessment by reviewing your notes and handouts."},
          {base: null, add: "from the past three weeks", ans: "Study for the assessment by reviewing your notes and handouts from the past three weeks."},
          {base: null, add: "and practising the key vocabulary", ans: "Study for the assessment by reviewing your notes and handouts from the past three weeks and practising the key vocabulary."},
          {base: null, add: "using the revision sheet I gave you", ans: "Study for the assessment by reviewing your notes and handouts from the past three weeks and practising the key vocabulary using the revision sheet I gave you."}
        ]
      },

      {
        id: "ce005",
        type: "expansion",
        steps: [
          {base: "Pack up.", add: "your things", ans: "Pack up your things."},
          {base: null, add: "and push in your chair", ans: "Pack up your things and push in your chair."},
          {base: null, add: "neatly", ans: "Pack up your things and push in your chair neatly."},
          {base: null, add: "and wait behind your desk", ans: "Pack up your things and push in your chair neatly and wait behind your desk."},
          {base: null, add: "in silence", ans: "Pack up your things and push in your chair neatly and wait behind your desk in silence."},
          {base: null, add: "until I dismiss you", ans: "Pack up your things and push in your chair neatly and wait behind your desk in silence until I dismiss you."}
        ]
      }

    ]
  },

  /* ================================================================
     MODULE 2 — PROFESSIONAL EMAILS
     ================================================================ */
  {
    id: "email",
    title: "Professional Emails",
    drills: [

      /* ---------- SUBSTITUTION DRILLS (es) ---------- */

      {
        id: "es001",
        type: "substitution",
        base: "Dear Ms Thompson, I hope this email finds you well.",
        cues: [
          {cue: "Mr Bradley", ans: "Dear Mr Bradley, I hope this email finds you well."},
          {cue: "I am writing to follow up", ans: "Dear Ms Thompson, I am writing to follow up."},
          {cue: "Dr Chen", ans: "Dear Dr Chen, I hope this email finds you well."},
          {cue: "I wanted to touch base with you", ans: "Dear Ms Thompson, I wanted to touch base with you."},
          {cue: "Mrs Patterson", ans: "Dear Mrs Patterson, I hope this email finds you well."},
          {cue: "I hope you had a good weekend", ans: "Dear Ms Thompson, I hope you had a good weekend."},
          {cue: "the Year 7 coordinator", ans: "Dear Year 7 coordinator, I hope this email finds you well."},
          {cue: "I hope the term is going well", ans: "Dear Ms Thompson, I hope the term is going well."},
          {cue: "the principal", ans: "Dear Principal, I hope this email finds you well."},
          {cue: "thank you for your email", ans: "Dear Ms Thompson, thank you for your email."},
          {cue: "colleagues", ans: "Dear colleagues, I hope this email finds you well."},
          {cue: "I appreciate your quick response", ans: "Dear Ms Thompson, I appreciate your quick response."},
          {cue: "the head teacher", ans: "Dear head teacher, I hope this email finds you well."},
          {cue: "I am reaching out regarding", ans: "Dear Ms Thompson, I am reaching out regarding."},
          {cue: "parents and carers", ans: "Dear parents and carers, I hope this email finds you well."}
        ]
      },

      {
        id: "es002",
        type: "substitution",
        base: "I would like to request a meeting to discuss the student's progress.",
        cues: [
          {cue: "the assessment schedule", ans: "I would like to request a meeting to discuss the assessment schedule."},
          {cue: "arrange", ans: "I would like to arrange a meeting to discuss the student's progress."},
          {cue: "the behaviour concerns", ans: "I would like to request a meeting to discuss the behaviour concerns."},
          {cue: "schedule", ans: "I would like to schedule a meeting to discuss the student's progress."},
          {cue: "the curriculum changes", ans: "I would like to request a meeting to discuss the curriculum changes."},
          {cue: "organise", ans: "I would like to organise a meeting to discuss the student's progress."},
          {cue: "the excursion plans", ans: "I would like to request a meeting to discuss the excursion plans."},
          {cue: "set up", ans: "I would like to set up a meeting to discuss the student's progress."},
          {cue: "the reporting requirements", ans: "I would like to request a meeting to discuss the reporting requirements."},
          {cue: "propose", ans: "I would like to propose a meeting to discuss the student's progress."},
          {cue: "the new timetable", ans: "I would like to request a meeting to discuss the new timetable."},
          {cue: "book", ans: "I would like to book a meeting to discuss the student's progress."},
          {cue: "the professional development options", ans: "I would like to request a meeting to discuss the professional development options."},
          {cue: "confirm", ans: "I would like to confirm a meeting to discuss the student's progress."},
          {cue: "the budget allocation", ans: "I would like to request a meeting to discuss the budget allocation."}
        ]
      },

      {
        id: "es003",
        type: "substitution",
        base: "I am writing to follow up on the email I sent last week.",
        cues: [
          {cue: "yesterday", ans: "I am writing to follow up on the email I sent yesterday."},
          {cue: "the request", ans: "I am writing to follow up on the request I sent last week."},
          {cue: "on Monday", ans: "I am writing to follow up on the email I sent on Monday."},
          {cue: "the referral", ans: "I am writing to follow up on the referral I sent last week."},
          {cue: "before the holidays", ans: "I am writing to follow up on the email I sent before the holidays."},
          {cue: "the incident report", ans: "I am writing to follow up on the incident report I sent last week."},
          {cue: "last term", ans: "I am writing to follow up on the email I sent last term."},
          {cue: "the permission slip", ans: "I am writing to follow up on the permission slip I sent last week."},
          {cue: "earlier today", ans: "I am writing to follow up on the email I sent earlier today."},
          {cue: "the learning support referral", ans: "I am writing to follow up on the learning support referral I sent last week."},
          {cue: "a fortnight ago", ans: "I am writing to follow up on the email I sent a fortnight ago."},
          {cue: "the booking request", ans: "I am writing to follow up on the booking request I sent last week."},
          {cue: "last Friday", ans: "I am writing to follow up on the email I sent last Friday."},
          {cue: "the maintenance request", ans: "I am writing to follow up on the maintenance request I sent last week."},
          {cue: "two weeks ago", ans: "I am writing to follow up on the email I sent two weeks ago."}
        ]
      },

      {
        id: "es004",
        type: "substitution",
        base: "I am writing to let you know that your child performed well in the recent assessment.",
        cues: [
          {cue: "has been working hard in class", ans: "I am writing to let you know that your child has been working hard in class."},
          {cue: "inform you", ans: "I am writing to inform you that your child performed well in the recent assessment."},
          {cue: "has been selected for the school team", ans: "I am writing to let you know that your child has been selected for the school team."},
          {cue: "advise you", ans: "I am writing to advise you that your child performed well in the recent assessment."},
          {cue: "received an achievement award", ans: "I am writing to let you know that your child received an achievement award."},
          {cue: "update you", ans: "I am writing to update you that your child performed well in the recent assessment."},
          {cue: "has shown excellent behaviour this week", ans: "I am writing to let you know that your child has shown excellent behaviour this week."},
          {cue: "share with you", ans: "I am writing to share with you that your child performed well in the recent assessment."},
          {cue: "is making strong progress in Technology", ans: "I am writing to let you know that your child is making strong progress in Technology."},
          {cue: "notify you", ans: "I am writing to notify you that your child performed well in the recent assessment."},
          {cue: "completed all homework tasks this term", ans: "I am writing to let you know that your child completed all homework tasks this term."},
          {cue: "bring to your attention", ans: "I am writing to bring to your attention that your child performed well in the recent assessment."},
          {cue: "has been a positive role model in class", ans: "I am writing to let you know that your child has been a positive role model in class."},
          {cue: "confirm", ans: "I am writing to confirm that your child performed well in the recent assessment."},
          {cue: "earned a merit certificate", ans: "I am writing to let you know that your child earned a merit certificate."}
        ]
      },

      {
        id: "es005",
        type: "substitution",
        base: "I wanted to give you a quick update on the Year 9 IST project.",
        cues: [
          {cue: "Year 7 Technology unit", ans: "I wanted to give you a quick update on the Year 7 Technology unit."},
          {cue: "detailed", ans: "I wanted to give you a detailed update on the Year 9 IST project."},
          {cue: "assessment marking", ans: "I wanted to give you a quick update on the assessment marking."},
          {cue: "brief", ans: "I wanted to give you a brief update on the Year 9 IST project."},
          {cue: "cross-curricular project", ans: "I wanted to give you a quick update on the cross-curricular project."},
          {cue: "progress report", ans: "I wanted to give you a quick progress report on the Year 9 IST project."},
          {cue: "the excursion planning", ans: "I wanted to give you a quick update on the excursion planning."},
          {cue: "summary", ans: "I wanted to give you a quick summary of the Year 9 IST project."},
          {cue: "the scope and sequence revision", ans: "I wanted to give you a quick update on the scope and sequence revision."},
          {cue: "overview", ans: "I wanted to give you a quick overview of the Year 9 IST project."},
          {cue: "the behaviour management plan", ans: "I wanted to give you a quick update on the behaviour management plan."},
          {cue: "status report", ans: "I wanted to give you a quick status report on the Year 9 IST project."},
          {cue: "the professional learning session", ans: "I wanted to give you a quick update on the professional learning session."},
          {cue: "rundown", ans: "I wanted to give you a quick rundown on the Year 9 IST project."},
          {cue: "the NESA registration", ans: "I wanted to give you a quick update on the NESA registration."}
        ]
      },

      {
        id: "es006",
        type: "substitution",
        base: "Kind regards, Yunshu Gao.",
        cues: [
          {cue: "Warm regards", ans: "Warm regards, Yunshu Gao."},
          {cue: "Ms Gao", ans: "Kind regards, Ms Gao."},
          {cue: "Best wishes", ans: "Best wishes, Yunshu Gao."},
          {cue: "Technology Teacher", ans: "Kind regards, Yunshu Gao, Technology Teacher."},
          {cue: "Many thanks", ans: "Many thanks, Yunshu Gao."},
          {cue: "Year 9 IST Teacher", ans: "Kind regards, Yunshu Gao, Year 9 IST Teacher."},
          {cue: "Yours sincerely", ans: "Yours sincerely, Yunshu Gao."},
          {cue: "Arthur Phillip High School", ans: "Kind regards, Yunshu Gao, Arthur Phillip High School."},
          {cue: "Thank you", ans: "Thank you, Yunshu Gao."},
          {cue: "Technology KLA", ans: "Kind regards, Yunshu Gao, Technology KLA."},
          {cue: "With appreciation", ans: "With appreciation, Yunshu Gao."},
          {cue: "TAS Faculty", ans: "Kind regards, Yunshu Gao, TAS Faculty."},
          {cue: "Regards", ans: "Regards, Yunshu Gao."},
          {cue: "Stage 4 Coordinator", ans: "Kind regards, Yunshu Gao, Stage 4 Coordinator."},
          {cue: "Thanks again", ans: "Thanks again, Yunshu Gao."}
        ]
      },

      /* ---------- TRANSFORMATION DRILLS (et) ---------- */

      {
        id: "et001",
        type: "transformation",
        label: "Change from casual to formal email language",
        pairs: [
          {prompt: "Hey, just checking in about that thing.", ans: "Dear colleague, I am writing to follow up on the matter we discussed."},
          {prompt: "Can you send me that stuff?", ans: "Would you be able to forward the relevant documents at your earliest convenience?"},
          {prompt: "Thanks heaps for your help.", ans: "Thank you very much for your assistance with this matter."},
          {prompt: "I reckon we should push the meeting back.", ans: "I would like to suggest that we reschedule the meeting to a later date."},
          {prompt: "The kid's been mucking up in class.", ans: "I am writing to inform you of some behaviour concerns regarding the student."},
          {prompt: "Let me know if you want to chat about it.", ans: "Please do not hesitate to contact me if you would like to discuss this further."},
          {prompt: "Sorry for the late reply.", ans: "I apologise for the delay in responding to your email."},
          {prompt: "Sounds good to me.", ans: "I am happy to proceed with the arrangement as outlined."},
          {prompt: "I am not sure that is going to work.", ans: "I have some concerns about the feasibility of this approach."},
          {prompt: "I will sort it out tomorrow.", ans: "I will address this matter by the end of tomorrow."},
          {prompt: "Just a heads up that the deadline changed.", ans: "I am writing to notify you of a change to the submission deadline."},
          {prompt: "No worries at all.", ans: "That is perfectly fine. I am happy to accommodate the request."}
        ]
      },

      {
        id: "et002",
        type: "transformation",
        label: "Change a statement into a polite request",
        pairs: [
          {prompt: "I need the report by Friday.", ans: "Would it be possible to have the report by Friday?"},
          {prompt: "Send me the attendance records.", ans: "Could you please send me the attendance records?"},
          {prompt: "Book the computer lab for next Tuesday.", ans: "Would you mind booking the computer lab for next Tuesday?"},
          {prompt: "Tell me which room the meeting is in.", ans: "Could you please let me know which room the meeting is in?"},
          {prompt: "Give me access to the shared drive.", ans: "Would it be possible for you to grant me access to the shared drive?"},
          {prompt: "Print thirty copies of this worksheet.", ans: "Would you be able to print thirty copies of this worksheet?"},
          {prompt: "Change my timetable for next term.", ans: "I was wondering if it would be possible to adjust my timetable for next term."},
          {prompt: "Approve the excursion proposal.", ans: "Could you please review and approve the excursion proposal?"},
          {prompt: "Cover my class on Wednesday.", ans: "Would you be available to cover my class on Wednesday?"},
          {prompt: "Update the student's record on Sentral.", ans: "Could you please update the student's record on Sentral?"},
          {prompt: "Forward the parent's email to me.", ans: "Would you mind forwarding the parent's email to me?"},
          {prompt: "Add me to the faculty mailing list.", ans: "Could I please be added to the faculty mailing list?"}
        ]
      },

      {
        id: "et003",
        type: "transformation",
        label: "Change from direct to indirect/polite language",
        pairs: [
          {prompt: "You need to reply by Monday.", ans: "I would appreciate a response by Monday if possible."},
          {prompt: "Your child is not doing their homework.", ans: "I have noticed that the homework tasks have not been completed recently."},
          {prompt: "That is wrong.", ans: "I believe there may be an error that needs to be addressed."},
          {prompt: "You forgot to submit the form.", ans: "It appears that the form may not have been submitted yet."},
          {prompt: "Fix the projector in Room 12.", ans: "I was hoping the projector in Room 12 could be looked at when convenient."},
          {prompt: "I disagree with the decision.", ans: "I have some reservations about the decision and would welcome the opportunity to discuss it further."},
          {prompt: "You cannot have an extension.", ans: "Unfortunately, I am unable to grant an extension on this occasion."},
          {prompt: "Stop emailing me about this.", ans: "I believe we have addressed this matter sufficiently. Perhaps we could arrange a meeting if further discussion is needed."},
          {prompt: "I do not have time for that.", ans: "Unfortunately, my current commitments make it difficult to take this on at this stage."},
          {prompt: "The student is rude.", ans: "There have been some concerns regarding the student's communication and behaviour in class."},
          {prompt: "Your lesson plan is incomplete.", ans: "I noticed a few areas in the lesson plan that could benefit from further development."},
          {prompt: "Pay me back for the resources I bought.", ans: "I would like to submit a reimbursement request for the resources I purchased for the department."}
        ]
      },

      {
        id: "et004",
        type: "transformation",
        label: "Change from present tense to past tense in email context",
        pairs: [
          {prompt: "I am writing to inform you about the issue.", ans: "I wrote to inform you about the issue."},
          {prompt: "She submits her assessment on time.", ans: "She submitted her assessment on time."},
          {prompt: "They attend the meeting every Tuesday.", ans: "They attended the meeting every Tuesday."},
          {prompt: "He shows improvement in his classwork.", ans: "He showed improvement in his classwork."},
          {prompt: "I send the report to the head teacher.", ans: "I sent the report to the head teacher."},
          {prompt: "She makes excellent progress this term.", ans: "She made excellent progress this term."},
          {prompt: "We discuss the assessment task in class.", ans: "We discussed the assessment task in class."},
          {prompt: "He receives a merit award at assembly.", ans: "He received a merit award at assembly."},
          {prompt: "The students work collaboratively on the project.", ans: "The students worked collaboratively on the project."},
          {prompt: "I meet with the parent after school.", ans: "I met with the parent after school."},
          {prompt: "She leads the group effectively.", ans: "She led the group effectively."},
          {prompt: "The faculty agrees to adopt the new programme.", ans: "The faculty agreed to adopt the new programme."}
        ]
      },

      /* ---------- RESPONSE DRILLS (er) ---------- */

      {
        id: "er001",
        type: "response",
        label: "Respond to parent emails with concerns",
        pairs: [
          {prompt: "A parent emails: My child says they do not understand anything in your class.", ans: "Thank you for reaching out. I will arrange some additional support for your child and am happy to meet to discuss strategies that may help."},
          {prompt: "A parent emails: Why is my child getting a low mark?", ans: "Thank you for your email. I would be happy to meet to discuss the assessment criteria and how your child can improve. Would a time this week suit you?"},
          {prompt: "A parent emails: My child is anxious about the upcoming test.", ans: "I appreciate you letting me know. I will provide additional revision materials and can arrange for your child to sit the test in a quieter environment if that would help."},
          {prompt: "A parent emails: I think the homework load is unreasonable.", ans: "Thank you for your feedback. The homework is designed to reinforce classroom learning. I would welcome the opportunity to discuss this further and find a suitable balance."},
          {prompt: "A parent emails: My child says another student is bothering them.", ans: "Thank you for bringing this to my attention. I will look into the situation discreetly and take appropriate action. I will follow up with you by the end of the week."},
          {prompt: "A parent emails: We will be travelling and my child will miss two weeks.", ans: "Thank you for letting me know. I will prepare a work pack so your child can stay on track. Please have them see me when they return."},
          {prompt: "A parent emails: Can my child redo the assessment?", ans: "Thank you for your email. The school policy allows for re-submission in certain circumstances. I will check with the head teacher and get back to you shortly."},
          {prompt: "A parent emails: My child says they were unfairly punished.", ans: "Thank you for raising this concern. I would like to discuss the situation with you so I can provide the full context. Would you be available for a phone call this week?"},
          {prompt: "A parent emails: My child has a learning plan that requires adjustments.", ans: "Thank you for this information. I will review the learning plan and ensure appropriate adjustments are in place. I will also consult with the learning support team."},
          {prompt: "A parent emails: I am unhappy with the quality of teaching.", ans: "I appreciate your honesty and take your feedback seriously. I would welcome the opportunity to discuss your specific concerns. Could we arrange a meeting with the head teacher?"},
          {prompt: "A parent emails: My child is gifted and needs more challenging work.", ans: "Thank you for sharing this. I already provide extension activities, but I will explore additional ways to challenge your child. I am happy to discuss further strategies with you."},
          {prompt: "A parent emails: My child lost their assessment task and needs another copy.", ans: "Not a problem. I will email a new copy of the assessment task to your child through Google Classroom today. The due date remains unchanged unless they need to discuss an extension."}
        ]
      },

      {
        id: "er002",
        type: "response",
        label: "Respond to colleague email requests",
        pairs: [
          {prompt: "A colleague emails: Can you cover my Year 8 class on Thursday period 2?", ans: "Thank you for asking. I have a free period then, so I am happy to cover. Could you please leave the lesson plan and any materials I will need?"},
          {prompt: "A colleague emails: Can you share your unit plan for Year 9 IST?", ans: "Of course. I will share the Google Drive folder with you today. Let me know if you need any additional resources or context."},
          {prompt: "A colleague emails: We need your assessment data by Friday for the faculty report.", ans: "Understood. I will compile the data and have it to you by Thursday to allow time for review. Is there a specific format you would like it in?"},
          {prompt: "A colleague emails: Would you like to collaborate on a cross-curricular project?", ans: "That sounds like a great opportunity. I would be keen to explore this further. Could we find a time to meet and discuss the details?"},
          {prompt: "A colleague emails: The printer in the staffroom is broken again.", ans: "Thank you for letting me know. I will submit a maintenance request through the school system. In the meantime, the library printer should be available."},
          {prompt: "A colleague emails: Can you attend a meeting after school on Wednesday?", ans: "Thank you for the invitation. I am available on Wednesday and will be there. Could you please share the agenda in advance?"},
          {prompt: "A colleague emails: I need a peer observation for my accreditation. Are you available next week?", ans: "I would be happy to help with your peer observation. I am free periods 3 and 4 on Tuesday and Thursday. Let me know which works best for you."},
          {prompt: "A colleague emails: Please submit your scope and sequence for Term 2 by next Friday.", ans: "Thank you for the reminder. I will have it ready and submitted by the deadline. Should I email it directly to you or upload it to the shared drive?"},
          {prompt: "A colleague emails: The Year 7 camp forms need to be collected from your class.", ans: "I will collect the forms during my next lesson with Year 7 and have them on your desk by the end of the day."},
          {prompt: "A colleague emails: There is a professional development session on differentiation next month. Interested?", ans: "That sounds very relevant to my teaching. I would definitely be interested in attending. Could you please send me the registration details?"},
          {prompt: "A colleague emails: Can you take minutes at the next faculty meeting?", ans: "I am happy to take minutes at the meeting. Could you please share the agenda beforehand so I can prepare?"},
          {prompt: "A colleague emails: Are you joining the staff social on Friday?", ans: "Thank you for the reminder. I am planning to attend. What time does it start and is there anything I should bring?"}
        ]
      },

      {
        id: "er003",
        type: "response",
        label: "Respond to admin announcements",
        pairs: [
          {prompt: "Admin emails: All programs must be uploaded to the shared drive by end of Week 5.", ans: "Thank you for the reminder. I will ensure my programs are uploaded by the deadline."},
          {prompt: "Admin emails: Staff photos will be taken on Tuesday at recess.", ans: "Thank you for the notice. I will make sure I am available at recess on Tuesday."},
          {prompt: "Admin emails: There will be a lockdown drill on Wednesday at 11am.", ans: "Noted, thank you. I will prepare my class and review the lockdown procedures beforehand."},
          {prompt: "Admin emails: Reports are due in three weeks. Please use the new template.", ans: "Thank you for the update. I will download the new template and begin working on reports this week."},
          {prompt: "Admin emails: The school is hosting an open night next Thursday.", ans: "Thank you for the information. I will prepare my classroom display and be available to speak with prospective families."},
          {prompt: "Admin emails: Professional development day is scheduled for the pupil-free day in Week 8.", ans: "Thank you for confirming the date. I will make note of it. Is there anything specific I should prepare?"},
          {prompt: "Admin emails: New bell times will take effect from next Monday.", ans: "Thank you for the advance notice. I will update my lesson planning to reflect the new timings."},
          {prompt: "Admin emails: HSC trial exams require supervision volunteers.", ans: "I am happy to volunteer for supervision duty. Please let me know the available sessions and I will sign up."},
          {prompt: "Admin emails: Parent-teacher interviews are in Week 6. Please update your booking calendar.", ans: "Thank you for the reminder. I will open my booking calendar and ensure all time slots are available for parents."},
          {prompt: "Admin emails: All excursion risk assessments must be submitted four weeks in advance.", ans: "Understood. I will ensure any upcoming excursion risk assessments are submitted well within the four-week timeframe."},
          {prompt: "Admin emails: The school car park will be closed for maintenance next week.", ans: "Thank you for the notice. I will arrange alternative parking for next week."},
          {prompt: "Admin emails: New NESA requirements have been released for Stage 5.", ans: "Thank you for sharing this. I will review the updated requirements and adjust my programming accordingly."}
        ]
      },

      {
        id: "er004",
        type: "response",
        label: "Respond to student email excuses",
        pairs: [
          {prompt: "A student emails: I could not submit my assignment because my internet was down.", ans: "Thank you for letting me know. Please submit your assignment first thing tomorrow morning. If you continue to have technical issues, please speak to me in person."},
          {prompt: "A student emails: I was sick and missed the test. Can I do it later?", ans: "I hope you are feeling better. Please bring a medical certificate and we will arrange a catch-up test during a study period."},
          {prompt: "A student emails: I forgot to save my work and lost everything.", ans: "That is very frustrating. In future, please save your work regularly and use the auto-save feature. I can give you a one-day extension to redo the task."},
          {prompt: "A student emails: My printer is not working so I could not print my assignment.", ans: "You can submit a digital copy through Google Classroom instead. Please upload it by the end of today."},
          {prompt: "A student emails: I did not know the assessment was due today.", ans: "The due date was announced in class and is posted on Google Classroom. Please submit it by tomorrow. In future, please check the assessment calendar regularly."},
          {prompt: "A student emails: My dog chewed my workbook.", ans: "I understand accidents happen. Please see me at the start of next lesson and I will provide replacement pages for the work you have lost."},
          {prompt: "A student emails: I was at a sports carnival and missed the lesson.", ans: "Thank you for letting me know. The lesson materials are on Google Classroom. Please complete the work before our next lesson."},
          {prompt: "A student emails: Can I have an extension? I had a family emergency.", ans: "I am sorry to hear that. Please take the time you need. I will grant a one-week extension. If you need more time, please let me know."},
          {prompt: "A student emails: I did the wrong task by mistake.", ans: "Thank you for letting me know. Please complete the correct task and submit it by tomorrow. The instructions are on Google Classroom."},
          {prompt: "A student emails: I could not do the homework because I did not understand it.", ans: "Thank you for being honest. Please come and see me at the start of next lesson and I will help you with it before school."},
          {prompt: "A student emails: My partner did not do their part of the group project.", ans: "Thank you for letting me know. I will speak to your partner separately. In the meantime, please continue with your own contribution."},
          {prompt: "A student emails: I left my USB at home with all my work on it.", ans: "In future, please save your work to Google Drive so you can access it from any device. For now, please submit it tomorrow and I will note the reason."}
        ]
      },

      /* ---------- EXPANSION DRILLS (ee) ---------- */

      {
        id: "ee001",
        type: "expansion",
        steps: [
          {base: "I am writing.", add: "to inform you", ans: "I am writing to inform you."},
          {base: null, add: "that your child", ans: "I am writing to inform you that your child."},
          {base: null, add: "has been performing well", ans: "I am writing to inform you that your child has been performing well."},
          {base: null, add: "in their recent assessment tasks", ans: "I am writing to inform you that your child has been performing well in their recent assessment tasks."},
          {base: null, add: "and I am very pleased with their progress", ans: "I am writing to inform you that your child has been performing well in their recent assessment tasks and I am very pleased with their progress."},
          {base: null, add: "this term", ans: "I am writing to inform you that your child has been performing well in their recent assessment tasks and I am very pleased with their progress this term."}
        ]
      },

      {
        id: "ee002",
        type: "expansion",
        steps: [
          {base: "Could you please.", add: "send me", ans: "Could you please send me."},
          {base: null, add: "the updated", ans: "Could you please send me the updated."},
          {base: null, add: "assessment schedule", ans: "Could you please send me the updated assessment schedule."},
          {base: null, add: "for Term 2", ans: "Could you please send me the updated assessment schedule for Term 2."},
          {base: null, add: "at your earliest convenience", ans: "Could you please send me the updated assessment schedule for Term 2 at your earliest convenience."},
          {base: null, add: "so I can adjust my programming accordingly", ans: "Could you please send me the updated assessment schedule for Term 2 at your earliest convenience so I can adjust my programming accordingly."}
        ]
      },

      {
        id: "ee003",
        type: "expansion",
        steps: [
          {base: "Thank you.", add: "for taking the time", ans: "Thank you for taking the time."},
          {base: null, add: "to meet with me", ans: "Thank you for taking the time to meet with me."},
          {base: null, add: "last Friday", ans: "Thank you for taking the time to meet with me last Friday."},
          {base: null, add: "to discuss", ans: "Thank you for taking the time to meet with me last Friday to discuss."},
          {base: null, add: "the learning support plan", ans: "Thank you for taking the time to meet with me last Friday to discuss the learning support plan."},
          {base: null, add: "for your child", ans: "Thank you for taking the time to meet with me last Friday to discuss the learning support plan for your child."}
        ]
      }

    ]
  },

  /* ================================================================
     MODULE 3 — STAFFROOM SMALL TALK
     ================================================================ */
  {
    id: "staffroom",
    title: "Staffroom Small Talk",
    drills: [

      /* ---------- SUBSTITUTION DRILLS (ss) ---------- */

      {
        id: "ss001",
        type: "substitution",
        base: "Good morning! How are you going today?",
        cues: [
          {cue: "afternoon", ans: "Good afternoon! How are you going today?"},
          {cue: "this week", ans: "Good morning! How are you going this week?"},
          {cue: "Hey", ans: "Hey! How are you going today?"},
          {cue: "so far", ans: "Good morning! How are you going so far?"},
          {cue: "Hi there", ans: "Hi there! How are you going today?"},
          {cue: "this term", ans: "Good morning! How are you going this term?"},
          {cue: "How is everything", ans: "Good morning! How is everything today?"},
          {cue: "lately", ans: "Good morning! How are you going lately?"},
          {cue: "How have you been", ans: "Good morning! How have you been?"},
          {cue: "since the holidays", ans: "Good morning! How are you going since the holidays?"},
          {cue: "Morning", ans: "Morning! How are you going today?"},
          {cue: "with everything", ans: "Good morning! How are you going with everything?"},
          {cue: "How is your day", ans: "Good morning! How is your day going?"},
          {cue: "after the long weekend", ans: "Good morning! How are you going after the long weekend?"},
          {cue: "How was your morning", ans: "Good morning! How was your morning?"}
        ]
      },

      {
        id: "ss002",
        type: "substitution",
        base: "Did you do anything fun on the weekend?",
        cues: [
          {cue: "exciting", ans: "Did you do anything exciting on the weekend?"},
          {cue: "over the holidays", ans: "Did you do anything fun over the holidays?"},
          {cue: "interesting", ans: "Did you do anything interesting on the weekend?"},
          {cue: "last night", ans: "Did you do anything fun last night?"},
          {cue: "nice", ans: "Did you do anything nice on the weekend?"},
          {cue: "on the long weekend", ans: "Did you do anything fun on the long weekend?"},
          {cue: "special", ans: "Did you do anything special on the weekend?"},
          {cue: "over the break", ans: "Did you do anything fun over the break?"},
          {cue: "relaxing", ans: "Did you do anything relaxing on the weekend?"},
          {cue: "during the pupil-free day", ans: "Did you do anything fun during the pupil-free day?"},
          {cue: "different", ans: "Did you do anything different on the weekend?"},
          {cue: "yesterday afternoon", ans: "Did you do anything fun yesterday afternoon?"},
          {cue: "get up to anything", ans: "Did you get up to anything on the weekend?"},
          {cue: "over the Easter break", ans: "Did you do anything fun over the Easter break?"},
          {cue: "outdoors", ans: "Did you do anything fun outdoors on the weekend?"}
        ]
      },

      {
        id: "ss003",
        type: "substitution",
        base: "Have you tried the new coffee machine in the staffroom?",
        cues: [
          {cue: "tea", ans: "Have you tried the new tea in the staffroom?"},
          {cue: "the cafe down the road", ans: "Have you tried the new cafe down the road?"},
          {cue: "biscuits", ans: "Have you tried the new biscuits in the staffroom?"},
          {cue: "the Vietnamese place near the station", ans: "Have you tried the new Vietnamese place near the station?"},
          {cue: "microwave", ans: "Have you tried the new microwave in the staffroom?"},
          {cue: "the bakery on Church Street", ans: "Have you tried the new bakery on Church Street?"},
          {cue: "chocolate", ans: "Have you tried the new chocolate in the staffroom?"},
          {cue: "the sushi place", ans: "Have you tried the new sushi place?"},
          {cue: "snacks", ans: "Have you tried the new snacks in the staffroom?"},
          {cue: "the Italian restaurant in Parramatta", ans: "Have you tried the new Italian restaurant in Parramatta?"},
          {cue: "milk", ans: "Have you tried the new milk in the staffroom?"},
          {cue: "the Thai takeaway", ans: "Have you tried the new Thai takeaway?"},
          {cue: "water filter", ans: "Have you tried the new water filter in the staffroom?"},
          {cue: "the bubble tea shop", ans: "Have you tried the new bubble tea shop?"},
          {cue: "instant noodles", ans: "Have you tried the new instant noodles in the staffroom?"}
        ]
      },

      {
        id: "ss004",
        type: "substitution",
        base: "It is absolutely freezing today, is it not?",
        cues: [
          {cue: "boiling", ans: "It is absolutely boiling today, is it not?"},
          {cue: "this morning", ans: "It is absolutely freezing this morning, is it not?"},
          {cue: "humid", ans: "It is absolutely humid today, is it not?"},
          {cue: "outside", ans: "It is absolutely freezing outside, is it not?"},
          {cue: "windy", ans: "It is absolutely windy today, is it not?"},
          {cue: "this week", ans: "It is absolutely freezing this week, is it not?"},
          {cue: "pouring", ans: "It is absolutely pouring today, is it not?"},
          {cue: "in here", ans: "It is absolutely freezing in here, is it not?"},
          {cue: "miserable", ans: "It is absolutely miserable today, is it not?"},
          {cue: "compared to last week", ans: "It is absolutely freezing compared to last week, is it not?"},
          {cue: "gorgeous", ans: "It is absolutely gorgeous today, is it not?"},
          {cue: "for autumn", ans: "It is absolutely freezing for autumn, is it not?"},
          {cue: "stifling", ans: "It is absolutely stifling today, is it not?"},
          {cue: "out on playground duty", ans: "It is absolutely freezing out on playground duty, is it not?"},
          {cue: "unbearable", ans: "It is absolutely unbearable today, is it not?"}
        ]
      },

      {
        id: "ss005",
        type: "substitution",
        base: "I am thinking of going to the coast this weekend.",
        cues: [
          {cue: "the Blue Mountains", ans: "I am thinking of going to the Blue Mountains this weekend."},
          {cue: "next weekend", ans: "I am thinking of going to the coast next weekend."},
          {cue: "a market", ans: "I am thinking of going to a market this weekend."},
          {cue: "over the long weekend", ans: "I am thinking of going to the coast over the long weekend."},
          {cue: "camping", ans: "I am thinking of going camping this weekend."},
          {cue: "during the holidays", ans: "I am thinking of going to the coast during the holidays."},
          {cue: "hiking", ans: "I am thinking of going hiking this weekend."},
          {cue: "on Saturday", ans: "I am thinking of going to the coast on Saturday."},
          {cue: "to a concert", ans: "I am thinking of going to a concert this weekend."},
          {cue: "if the weather is nice", ans: "I am thinking of going to the coast if the weather is nice."},
          {cue: "to the movies", ans: "I am thinking of going to the movies this weekend."},
          {cue: "with some friends", ans: "I am thinking of going to the coast with some friends."},
          {cue: "fishing", ans: "I am thinking of going fishing this weekend."},
          {cue: "on Sunday", ans: "I am thinking of going to the coast on Sunday."},
          {cue: "to Cronulla Beach", ans: "I am thinking of going to Cronulla Beach this weekend."}
        ]
      },

      {
        id: "ss006",
        type: "substitution",
        base: "I reckon the Year 10s are harder to manage this year.",
        cues: [
          {cue: "Year 7s", ans: "I reckon the Year 7s are harder to manage this year."},
          {cue: "more motivated", ans: "I reckon the Year 10s are more motivated this year."},
          {cue: "Year 8s", ans: "I reckon the Year 8s are harder to manage this year."},
          {cue: "better behaved", ans: "I reckon the Year 10s are better behaved this year."},
          {cue: "Year 9s", ans: "I reckon the Year 9s are harder to manage this year."},
          {cue: "more engaged", ans: "I reckon the Year 10s are more engaged this year."},
          {cue: "Stage 4 classes", ans: "I reckon the Stage 4 classes are harder to manage this year."},
          {cue: "quieter", ans: "I reckon the Year 10s are quieter this year."},
          {cue: "the new cohort", ans: "I reckon the new cohort is harder to manage this year."},
          {cue: "more chatty", ans: "I reckon the Year 10s are more chatty this year."},
          {cue: "Period 5 classes", ans: "I reckon the Period 5 classes are harder to manage this year."},
          {cue: "more independent", ans: "I reckon the Year 10s are more independent this year."},
          {cue: "the composite class", ans: "I reckon the composite class is harder to manage this year."},
          {cue: "less focused", ans: "I reckon the Year 10s are less focused this year."},
          {cue: "Friday afternoon groups", ans: "I reckon the Friday afternoon groups are harder to manage this year."}
        ]
      },

      /* ---------- TRANSFORMATION DRILLS (st) ---------- */

      {
        id: "st001",
        type: "transformation",
        label: "Change from past tense to present tense",
        pairs: [
          {prompt: "I went for a run this morning.", ans: "I go for a run every morning."},
          {prompt: "She cooked a big dinner last night.", ans: "She cooks a big dinner every night."},
          {prompt: "We watched a movie on Saturday.", ans: "We watch a movie every Saturday."},
          {prompt: "They played soccer after school.", ans: "They play soccer after school."},
          {prompt: "He drove to work yesterday.", ans: "He drives to work every day."},
          {prompt: "I had a coffee before first period.", ans: "I have a coffee before first period."},
          {prompt: "She brought lunch from home.", ans: "She brings lunch from home."},
          {prompt: "We met in the staffroom at recess.", ans: "We meet in the staffroom at recess."},
          {prompt: "They finished the marking at midnight.", ans: "They finish the marking at midnight."},
          {prompt: "He caught the train to Parramatta.", ans: "He catches the train to Parramatta."},
          {prompt: "I read a book before bed.", ans: "I read a book before bed."},
          {prompt: "She left early on Friday.", ans: "She leaves early on Friday."}
        ]
      },

      {
        id: "st002",
        type: "transformation",
        label: "Change a statement into a question for small talk",
        pairs: [
          {prompt: "You watched the game last night.", ans: "Did you watch the game last night?"},
          {prompt: "She is going to the staff dinner.", ans: "Is she going to the staff dinner?"},
          {prompt: "You have been to that new restaurant.", ans: "Have you been to that new restaurant?"},
          {prompt: "He plays tennis on weekends.", ans: "Does he play tennis on weekends?"},
          {prompt: "You are enjoying the new timetable.", ans: "Are you enjoying the new timetable?"},
          {prompt: "They went to the beach over the break.", ans: "Did they go to the beach over the break?"},
          {prompt: "You have finished your reports.", ans: "Have you finished your reports?"},
          {prompt: "She knows about the staff meeting change.", ans: "Does she know about the staff meeting change?"},
          {prompt: "You are coming to the farewell drinks.", ans: "Are you coming to the farewell drinks?"},
          {prompt: "He saw the new Marvel film.", ans: "Did he see the new Marvel film?"},
          {prompt: "You would like to join us for lunch.", ans: "Would you like to join us for lunch?"},
          {prompt: "She is feeling better after being sick.", ans: "Is she feeling better after being sick?"}
        ]
      },

      {
        id: "st003",
        type: "transformation",
        label: "Change from agreeing to politely disagreeing",
        pairs: [
          {prompt: "I agree, the new policy is helpful.", ans: "I see your point, but I am not sure the new policy is as helpful as it could be."},
          {prompt: "Yes, that was a great assembly.", ans: "It was good, but I think there is room for improvement next time."},
          {prompt: "I think so too, the marking load is fine.", ans: "I understand your perspective, but I find the marking load quite heavy."},
          {prompt: "You are right, the students loved that activity.", ans: "Some students enjoyed it, but I noticed a few who struggled with the format."},
          {prompt: "Absolutely, Friday meetings are a good idea.", ans: "I can see the benefit, but I wonder if another time might work better for everyone."},
          {prompt: "I agree, the canteen food is good.", ans: "It is decent, but I think there could be more variety."},
          {prompt: "Yes, technology makes teaching easier.", ans: "In many ways it does, but it also creates new challenges, I think."},
          {prompt: "I think so too, that PD session was useful.", ans: "Parts of it were useful, but I felt it could have been more practical."},
          {prompt: "You are right, the school grounds look great.", ans: "They are looking better, but there are still some areas that could use attention."},
          {prompt: "Absolutely, the new head teacher is doing well.", ans: "They have made a good start, but I think it is still early days to make a full judgement."},
          {prompt: "I agree, online learning worked well.", ans: "It had its advantages, but I personally found face-to-face teaching more effective."},
          {prompt: "Yes, the timetable is much better now.", ans: "It has improved for some, but I have noticed it has created issues for others."}
        ]
      },

      {
        id: "st004",
        type: "transformation",
        label: "Change from formal to casual register for staffroom chat",
        pairs: [
          {prompt: "I would like to express my gratitude for your assistance.", ans: "Thanks so much for your help."},
          {prompt: "I am currently experiencing significant fatigue.", ans: "I am absolutely knackered."},
          {prompt: "Would it be convenient to discuss this matter at a later time?", ans: "Can we chat about this later?"},
          {prompt: "I found the professional development session to be quite beneficial.", ans: "That PD was actually pretty good."},
          {prompt: "The students exhibited challenging behaviour during the lesson.", ans: "The kids were really playing up today."},
          {prompt: "I have not yet completed the required documentation.", ans: "I still have not done my paperwork."},
          {prompt: "I am contemplating purchasing a new vehicle.", ans: "I am thinking about getting a new car."},
          {prompt: "I must prepare instructional materials for tomorrow.", ans: "I need to get my lessons ready for tomorrow."},
          {prompt: "I intend to consume my midday meal at the establishment nearby.", ans: "I am going to grab lunch at the place next door."},
          {prompt: "I was unable to locate the necessary resources.", ans: "I could not find what I needed."},
          {prompt: "The weather conditions appear to be deteriorating.", ans: "Looks like the weather is getting worse."},
          {prompt: "I require a brief respite from my duties.", ans: "I need a quick break."}
        ]
      },

      /* ---------- RESPONSE DRILLS (sr) ---------- */

      {
        id: "sr001",
        type: "response",
        label: "Respond to staffroom greetings naturally",
        pairs: [
          {prompt: "How are you going?", ans: "Good, thanks. Busy as always. How about you?"},
          {prompt: "How was your weekend?", ans: "It was lovely, thanks. We went down to the coast. How was yours?"},
          {prompt: "Happy Monday!", ans: "Ha, thanks. I am not sure Monday is ever happy, but I will take it."},
          {prompt: "You look tired today.", ans: "Yeah, I was up late marking. I will survive after a coffee though."},
          {prompt: "How is the term going so far?", ans: "It has been full on, but I am settling into the routine. How about you?"},
          {prompt: "Long time no see!", ans: "I know! I have been stuck in my classroom. How have you been?"},
          {prompt: "Is it Friday yet?", ans: "I wish! Only two more days to go though."},
          {prompt: "Having a good day?", ans: "Not bad so far. My Year 9 class was actually really well behaved today."},
          {prompt: "Morning! Coffee?", ans: "Oh, yes please. That would be amazing. Thank you."},
          {prompt: "How are things going with the new class?", ans: "It is a work in progress. They are a lively bunch, but we are getting there."},
          {prompt: "Survived Monday?", ans: "Just barely! I had four lessons back to back. How was yours?"},
          {prompt: "You seem cheerful today!", ans: "Thanks! I had a great lesson with my Year 7s this morning. It makes such a difference."}
        ]
      },

      {
        id: "sr002",
        type: "response",
        label: "Respond to weekend questions with details",
        pairs: [
          {prompt: "What did you get up to on the weekend?", ans: "Not much, actually. I caught up on some rest and did a bit of meal prep. Sometimes a quiet weekend is exactly what you need."},
          {prompt: "Did you go anywhere nice?", ans: "We went to Parramatta Park for a picnic on Saturday. The weather was perfect for it."},
          {prompt: "Watch anything good recently?", ans: "I started a new series on Netflix. It is called... actually, I cannot remember the name, but it is really good."},
          {prompt: "How was the long weekend?", ans: "It was great, thanks. We drove up to the Hunter Valley for a couple of days. It was nice to get out of Sydney."},
          {prompt: "Do anything exciting over the break?", ans: "I did some hiking in the Blue Mountains. The views were incredible. Have you been up there recently?"},
          {prompt: "Did you see the game on Saturday?", ans: "I did not actually, but I heard about it. Sounds like it was a good match. Who did you go for?"},
          {prompt: "How was your Easter?", ans: "It was really nice, thank you. We had a family lunch and ate far too much chocolate. How about yours?"},
          {prompt: "Did you manage to relax over the holidays?", ans: "A bit, but I also spent a lot of time on lesson planning for next term. You know how it is."},
          {prompt: "Been cooking anything good lately?", ans: "Actually, yes. I made a really nice stir-fry on Sunday. I am trying to cook more at home this year."},
          {prompt: "Have you been to any good restaurants lately?", ans: "There is a great dumpling place in Parramatta. Have you been there? I went last weekend and it was fantastic."},
          {prompt: "Did you get out in the sunshine?", ans: "I did! I went for a walk along the river. It was a gorgeous day."},
          {prompt: "Any plans for the upcoming weekend?", ans: "Nothing major yet. I might go to a market or just have a lazy one at home. What about you?"}
        ]
      },

      {
        id: "sr003",
        type: "response",
        label: "Join an existing conversation smoothly",
        pairs: [
          {prompt: "Two colleagues are discussing a TV show you also watch.", ans: "Sorry to jump in, but are you talking about that show on SBS? I am loving it too."},
          {prompt: "Colleagues are talking about a restaurant you have been to.", ans: "Oh, I went there a few weeks ago! The food was great. Did you try the dumplings?"},
          {prompt: "Someone mentions a problem with the photocopier.", ans: "I had the same issue yesterday. I found that clearing the paper tray and reloading it fixed the problem."},
          {prompt: "Colleagues are discussing a new school policy.", ans: "I was reading about that this morning. I am not sure how it will work in practice. What do you both think?"},
          {prompt: "Someone mentions they are looking for a good book.", ans: "I just finished a really good one. I can bring it in tomorrow if you would like to borrow it."},
          {prompt: "Colleagues are complaining about report writing.", ans: "Tell me about it. I have been staring at report comments all weekend. Any tips for speeding it up?"},
          {prompt: "Someone is talking about their holiday plans.", ans: "That sounds wonderful. Where are you going? I have been thinking about planning something similar."},
          {prompt: "Colleagues are discussing parking issues at school.", ans: "I have noticed that too. I have been arriving earlier just to get a spot. Has anyone raised it with admin?"},
          {prompt: "Someone mentions a student who did something impressive.", ans: "That is brilliant. It is moments like that that make it all worthwhile, is it not?"},
          {prompt: "Colleagues are talking about exercise routines.", ans: "I have been trying to get into running before school, but the early alarm is a struggle. How do you stay motivated?"},
          {prompt: "Someone mentions a professional development opportunity.", ans: "Oh, that sounds interesting. Do you know if they still have spots available? I might sign up."},
          {prompt: "Colleagues are debating whether to order lunch or bring food.", ans: "I am happy either way. If we are ordering, I could go for some Thai. What does everyone else feel like?"}
        ]
      },

      {
        id: "sr004",
        type: "response",
        label: "Express opinions naturally in staffroom conversation",
        pairs: [
          {prompt: "What do you think of the new assessment policy?", ans: "I think it has some good ideas, but I wonder how practical it will be for larger classes. What is your take on it?"},
          {prompt: "Do you think we should have a staff social?", ans: "Definitely. I think it would be good for morale. We have all been so busy that we barely see each other outside of meetings."},
          {prompt: "Do you prefer teaching Year 7 or Year 10?", ans: "They are so different. I love Year 7 because of their enthusiasm, but Year 10 gives you more depth. Hard to choose, honestly."},
          {prompt: "What do you think about the new principal?", ans: "It is early days, but I think they are making a real effort to listen to staff. That is a good sign."},
          {prompt: "Is it worth doing that online PD course?", ans: "I found it useful, actually. It gave me a few practical strategies I have already used in class."},
          {prompt: "Do you think homework is still necessary?", ans: "I think it depends on the subject and the task. Meaningful practice at home can help, but busy work just frustrates everyone."},
          {prompt: "Which learning management system do you prefer?", ans: "I am used to Google Classroom now, so I would probably stick with that. But I know some people prefer Canvas."},
          {prompt: "Do you think the school handles behaviour well?", ans: "There are some good systems in place, but consistency across staff is always the tricky part, I think."},
          {prompt: "Is group work effective in your classes?", ans: "It can be, if it is structured well. I find that clear roles and accountability make a big difference."},
          {prompt: "What do you think of NAPLAN?", ans: "I have mixed feelings. The data can be useful, but I worry about the pressure it puts on students and teachers."},
          {prompt: "Should we use more technology in class?", ans: "Technology is a great tool, but only when it adds value. Sometimes a pen and paper activity works better."},
          {prompt: "Do you enjoy playground duty?", ans: "It is not my favourite part of the job, to be honest, but it is a good chance to connect with students outside the classroom."}
        ]
      },

      /* ---------- EXPANSION DRILLS (se) ---------- */

      {
        id: "se001",
        type: "expansion",
        steps: [
          {base: "I am thinking.", add: "of trying", ans: "I am thinking of trying."},
          {base: null, add: "that new cafe", ans: "I am thinking of trying that new cafe."},
          {base: null, add: "on Church Street", ans: "I am thinking of trying that new cafe on Church Street."},
          {base: null, add: "for lunch today", ans: "I am thinking of trying that new cafe on Church Street for lunch today."},
          {base: null, add: "if anyone wants to come", ans: "I am thinking of trying that new cafe on Church Street for lunch today if anyone wants to come."},
          {base: null, add: "they apparently have great coffee", ans: "I am thinking of trying that new cafe on Church Street for lunch today if anyone wants to come; they apparently have great coffee."}
        ]
      },

      {
        id: "se002",
        type: "expansion",
        steps: [
          {base: "I had.", add: "a really good", ans: "I had a really good."},
          {base: null, add: "lesson", ans: "I had a really good lesson."},
          {base: null, add: "with my Year 9s", ans: "I had a really good lesson with my Year 9s."},
          {base: null, add: "this morning", ans: "I had a really good lesson with my Year 9s this morning."},
          {base: null, add: "where they were all engaged", ans: "I had a really good lesson with my Year 9s this morning where they were all engaged."},
          {base: null, add: "for the entire period", ans: "I had a really good lesson with my Year 9s this morning where they were all engaged for the entire period."}
        ]
      },

      {
        id: "se003",
        type: "expansion",
        steps: [
          {base: "We should.", add: "organise", ans: "We should organise."},
          {base: null, add: "a staff morning tea", ans: "We should organise a staff morning tea."},
          {base: null, add: "sometime this term", ans: "We should organise a staff morning tea sometime this term."},
          {base: null, add: "to celebrate", ans: "We should organise a staff morning tea sometime this term to celebrate."},
          {base: null, add: "the end of reports", ans: "We should organise a staff morning tea sometime this term to celebrate the end of reports."},
          {base: null, add: "because everyone deserves a break", ans: "We should organise a staff morning tea sometime this term to celebrate the end of reports because everyone deserves a break."}
        ]
      }

    ]
  },

  /* ================================================================
     MODULE 4 — CHINESE-SPEAKER ERROR FIXES
     ================================================================ */
  {
    id: "chinese",
    title: "Chinese-Speaker Error Fixes",
    drills: [

      /* ---------- SUBSTITUTION DRILLS (xs) ---------- */

      {
        id: "xs001",
        type: "substitution",
        base: "The student forgot a pen.",
        cues: [
          {cue: "an eraser", ans: "The student forgot an eraser."},
          {cue: "a ruler", ans: "The student forgot a ruler."},
          {cue: "an umbrella", ans: "The student forgot an umbrella."},
          {cue: "a calculator", ans: "The student forgot a calculator."},
          {cue: "an exercise book", ans: "The student forgot an exercise book."},
          {cue: "a pencil case", ans: "The student forgot a pencil case."},
          {cue: "an apron", ans: "The student forgot an apron."},
          {cue: "a laptop charger", ans: "The student forgot a laptop charger."},
          {cue: "an assignment", ans: "The student forgot an assignment."},
          {cue: "a water bottle", ans: "The student forgot a water bottle."},
          {cue: "an excuse note", ans: "The student forgot an excuse note."},
          {cue: "a hat for sport", ans: "The student forgot a hat for sport."},
          {cue: "an instrument", ans: "The student forgot an instrument."},
          {cue: "a permission slip", ans: "The student forgot a permission slip."},
          {cue: "an ID card", ans: "The student forgot an ID card."}
        ]
      },

      {
        id: "xs002",
        type: "substitution",
        base: "The meeting is at three o'clock in the afternoon.",
        cues: [
          {cue: "on Monday", ans: "The meeting is on Monday in the afternoon."},
          {cue: "in the morning", ans: "The meeting is at three o'clock in the morning."},
          {cue: "on the fifth of March", ans: "The meeting is on the fifth of March in the afternoon."},
          {cue: "at noon", ans: "The meeting is at noon."},
          {cue: "on Tuesday", ans: "The meeting is on Tuesday in the afternoon."},
          {cue: "at nine o'clock", ans: "The meeting is at nine o'clock in the afternoon."},
          {cue: "in the staffroom", ans: "The meeting is at three o'clock in the staffroom."},
          {cue: "on Friday", ans: "The meeting is on Friday in the afternoon."},
          {cue: "at half past two", ans: "The meeting is at half past two in the afternoon."},
          {cue: "in Room 204", ans: "The meeting is at three o'clock in Room 204."},
          {cue: "on the weekend", ans: "The meeting is on the weekend in the afternoon."},
          {cue: "at a quarter to four", ans: "The meeting is at a quarter to four in the afternoon."},
          {cue: "in the library", ans: "The meeting is at three o'clock in the library."},
          {cue: "on Wednesday morning", ans: "The meeting is on Wednesday morning."},
          {cue: "at the end of the day", ans: "The meeting is at the end of the day."}
        ]
      },

      {
        id: "xs003",
        type: "substitution",
        base: "She teaches every Monday and Wednesday.",
        cues: [
          {cue: "taught", ans: "She taught every Monday and Wednesday."},
          {cue: "is teaching", ans: "She is teaching every Monday and Wednesday."},
          {cue: "has been teaching", ans: "She has been teaching every Monday and Wednesday."},
          {cue: "will teach", ans: "She will teach every Monday and Wednesday."},
          {cue: "used to teach", ans: "She used to teach every Monday and Wednesday."},
          {cue: "has taught", ans: "She has taught every Monday and Wednesday."},
          {cue: "was teaching", ans: "She was teaching every Monday and Wednesday."},
          {cue: "would teach", ans: "She would teach every Monday and Wednesday."},
          {cue: "had taught", ans: "She had taught every Monday and Wednesday."},
          {cue: "is going to teach", ans: "She is going to teach every Monday and Wednesday."},
          {cue: "had been teaching", ans: "She had been teaching every Monday and Wednesday."},
          {cue: "will be teaching", ans: "She will be teaching every Monday and Wednesday."},
          {cue: "could teach", ans: "She could teach every Monday and Wednesday."},
          {cue: "should teach", ans: "She should teach every Monday and Wednesday."},
          {cue: "might teach", ans: "She might teach every Monday and Wednesday."}
        ]
      },

      {
        id: "xs004",
        type: "substitution",
        base: "There are many students in the class.",
        cues: [
          {cue: "chairs", ans: "There are many chairs in the class."},
          {cue: "much noise", ans: "There is much noise in the class."},
          {cue: "desks", ans: "There are many desks in the class."},
          {cue: "much work", ans: "There is much work in the class."},
          {cue: "books", ans: "There are many books in the class."},
          {cue: "much equipment", ans: "There is much equipment in the class."},
          {cue: "computers", ans: "There are many computers in the class."},
          {cue: "much homework", ans: "There is much homework in the class."},
          {cue: "worksheets", ans: "There are many worksheets in the class."},
          {cue: "much information", ans: "There is much information in the class."},
          {cue: "pencils", ans: "There are many pencils in the class."},
          {cue: "much furniture", ans: "There is much furniture in the class."},
          {cue: "activities", ans: "There are many activities in the class."},
          {cue: "much progress", ans: "There is much progress in the class."},
          {cue: "resources", ans: "There are many resources in the class."}
        ]
      },

      {
        id: "xs005",
        type: "substitution",
        base: "He gave the book to her.",
        cues: [
          {cue: "me", ans: "He gave the book to me."},
          {cue: "them", ans: "He gave the book to them."},
          {cue: "us", ans: "He gave the book to us."},
          {cue: "him", ans: "He gave the book to him."},
          {cue: "the teacher", ans: "He gave the book to the teacher."},
          {cue: "his partner", ans: "He gave the book to his partner."},
          {cue: "the librarian", ans: "He gave the book to the librarian."},
          {cue: "her friend", ans: "He gave the book to her friend."},
          {cue: "everyone", ans: "He gave the book to everyone."},
          {cue: "the student next to him", ans: "He gave the book to the student next to him."},
          {cue: "nobody", ans: "He gave the book to nobody."},
          {cue: "each group", ans: "He gave the book to each group."},
          {cue: "the Year 7 coordinator", ans: "He gave the book to the Year 7 coordinator."},
          {cue: "his classmate", ans: "He gave the book to his classmate."},
          {cue: "the front office", ans: "He gave the book to the front office."}
        ]
      },

      {
        id: "xs006",
        type: "substitution",
        base: "The homework that I set yesterday is important.",
        cues: [
          {cue: "the lesson", ans: "The lesson that I set yesterday is important."},
          {cue: "was", ans: "The homework that I set yesterday was important."},
          {cue: "the assessment", ans: "The assessment that I set yesterday is important."},
          {cue: "she prepared", ans: "The homework that she prepared yesterday is important."},
          {cue: "the activity", ans: "The activity that I set yesterday is important."},
          {cue: "they discussed", ans: "The homework that they discussed yesterday is important."},
          {cue: "the worksheet", ans: "The worksheet that I set yesterday is important."},
          {cue: "he marked", ans: "The homework that he marked yesterday is important."},
          {cue: "the revision task", ans: "The revision task that I set yesterday is important."},
          {cue: "we reviewed", ans: "The homework that we reviewed yesterday is important."},
          {cue: "the reading", ans: "The reading that I set yesterday is important."},
          {cue: "the student completed", ans: "The homework that the student completed yesterday is important."},
          {cue: "the project", ans: "The project that I set yesterday is important."},
          {cue: "last week", ans: "The homework that I set last week is important."},
          {cue: "the quiz", ans: "The quiz that I set yesterday is important."}
        ]
      },

      {
        id: "xs007",
        type: "substitution",
        base: "I look forward to seeing you at the meeting.",
        cues: [
          {cue: "hearing from you", ans: "I look forward to hearing from you."},
          {cue: "working with you", ans: "I look forward to working with you."},
          {cue: "meeting you", ans: "I look forward to meeting you."},
          {cue: "discussing the plan", ans: "I look forward to discussing the plan."},
          {cue: "reading your report", ans: "I look forward to reading your report."},
          {cue: "receiving your feedback", ans: "I look forward to receiving your feedback."},
          {cue: "attending the conference", ans: "I look forward to attending the conference."},
          {cue: "collaborating with you", ans: "I look forward to collaborating with you."},
          {cue: "starting the project", ans: "I look forward to starting the project."},
          {cue: "joining the team", ans: "I look forward to joining the team."},
          {cue: "reviewing the proposal", ans: "I look forward to reviewing the proposal."},
          {cue: "teaching the new unit", ans: "I look forward to teaching the new unit."},
          {cue: "visiting the school", ans: "I look forward to visiting the school."},
          {cue: "implementing the changes", ans: "I look forward to implementing the changes."},
          {cue: "catching up with you", ans: "I look forward to catching up with you."}
        ]
      },

      {
        id: "xs008",
        type: "substitution",
        base: "She suggested that he should try a different approach.",
        cues: [
          {cue: "recommended", ans: "She recommended that he should try a different approach."},
          {cue: "start again", ans: "She suggested that he should start again."},
          {cue: "insisted", ans: "She insisted that he should try a different approach."},
          {cue: "ask for help", ans: "She suggested that he should ask for help."},
          {cue: "proposed", ans: "She proposed that he should try a different approach."},
          {cue: "revise his work", ans: "She suggested that he should revise his work."},
          {cue: "advised", ans: "She advised that he should try a different approach."},
          {cue: "read the instructions again", ans: "She suggested that he should read the instructions again."},
          {cue: "requested", ans: "She requested that he should try a different approach."},
          {cue: "work with a partner", ans: "She suggested that he should work with a partner."},
          {cue: "demanded", ans: "She demanded that he should try a different approach."},
          {cue: "see the head teacher", ans: "She suggested that he should see the head teacher."},
          {cue: "urged", ans: "She urged that he should try a different approach."},
          {cue: "attend the support class", ans: "She suggested that he should attend the support class."},
          {cue: "encouraged", ans: "She encouraged that he should try a different approach."}
        ]
      },

      /* ---------- TRANSFORMATION DRILLS (xt) ---------- */

      {
        id: "xt001",
        type: "transformation",
        label: "Add the missing article (a, an, or the)",
        pairs: [
          {prompt: "Student forgot pen.", ans: "The student forgot a pen."},
          {prompt: "Teacher is in staffroom.", ans: "The teacher is in the staffroom."},
          {prompt: "I have meeting at three.", ans: "I have a meeting at three."},
          {prompt: "She is excellent teacher.", ans: "She is an excellent teacher."},
          {prompt: "Please open door.", ans: "Please open the door."},
          {prompt: "He is using computer in library.", ans: "He is using a computer in the library."},
          {prompt: "I need to write email to parent.", ans: "I need to write an email to a parent."},
          {prompt: "Student in back row is talking.", ans: "The student in the back row is talking."},
          {prompt: "She got award at assembly.", ans: "She got an award at the assembly."},
          {prompt: "I bought new laptop for school.", ans: "I bought a new laptop for school."},
          {prompt: "Principal wants to see me after school.", ans: "The principal wants to see me after school."},
          {prompt: "There is interesting article about education.", ans: "There is an interesting article about education."}
        ]
      },

      {
        id: "xt002",
        type: "transformation",
        label: "Fix the preposition (at/in/on/to/for/with/by)",
        pairs: [
          {prompt: "I arrive to school at eight.", ans: "I arrive at school at eight."},
          {prompt: "She is good at make presentations.", ans: "She is good at making presentations."},
          {prompt: "The test is in Monday.", ans: "The test is on Monday."},
          {prompt: "He is interested at technology.", ans: "He is interested in technology."},
          {prompt: "I will go to home after work.", ans: "I will go home after work."},
          {prompt: "She depends with her partner for help.", ans: "She depends on her partner for help."},
          {prompt: "The book is in the desk.", ans: "The book is on the desk."},
          {prompt: "He is waiting in the bus stop.", ans: "He is waiting at the bus stop."},
          {prompt: "She is responsible of the Year 7 programme.", ans: "She is responsible for the Year 7 programme."},
          {prompt: "I discussed about the issue with him.", ans: "I discussed the issue with him."},
          {prompt: "The students listen the teacher.", ans: "The students listen to the teacher."},
          {prompt: "She arrived to the meeting late.", ans: "She arrived at the meeting late."}
        ]
      },

      {
        id: "xt003",
        type: "transformation",
        label: "Correct the verb tense",
        pairs: [
          {prompt: "Yesterday I go to a meeting.", ans: "Yesterday I went to a meeting."},
          {prompt: "She already finish the marking.", ans: "She has already finished the marking."},
          {prompt: "He teach here for five years.", ans: "He has taught here for five years."},
          {prompt: "Tomorrow we will had a test.", ans: "Tomorrow we will have a test."},
          {prompt: "Last week she give a presentation.", ans: "Last week she gave a presentation."},
          {prompt: "I am work at this school since 2025.", ans: "I have been working at this school since 2025."},
          {prompt: "When I arrive, the meeting already start.", ans: "When I arrived, the meeting had already started."},
          {prompt: "She say she will come tomorrow.", ans: "She said she would come tomorrow."},
          {prompt: "He is teach Year 10 next term.", ans: "He is teaching Year 10 next term."},
          {prompt: "I just receive your email.", ans: "I have just received your email."},
          {prompt: "Before I come to Australia, I live in China.", ans: "Before I came to Australia, I lived in China."},
          {prompt: "They learn English since primary school.", ans: "They have been learning English since primary school."}
        ]
      },

      {
        id: "xt004",
        type: "transformation",
        label: "Fix Chinglish word order to natural English",
        pairs: [
          {prompt: "I yesterday went to school.", ans: "I went to school yesterday."},
          {prompt: "She very much likes this class.", ans: "She likes this class very much."},
          {prompt: "He every day comes late.", ans: "He comes late every day."},
          {prompt: "I to the office need to go.", ans: "I need to go to the office."},
          {prompt: "This problem how to solve?", ans: "How do I solve this problem?"},
          {prompt: "She slowly slowly is improving.", ans: "She is slowly improving."},
          {prompt: "Tomorrow morning I eight o'clock will arrive.", ans: "I will arrive at eight o'clock tomorrow morning."},
          {prompt: "He in the classroom is sitting.", ans: "He is sitting in the classroom."},
          {prompt: "The teacher to us explained the homework.", ans: "The teacher explained the homework to us."},
          {prompt: "I already the report have finished.", ans: "I have already finished the report."},
          {prompt: "She because was sick did not come.", ans: "She did not come because she was sick."},
          {prompt: "This kind of situation how to handle?", ans: "How do you handle this kind of situation?"}
        ]
      },

      {
        id: "xt005",
        type: "transformation",
        label: "Fix singular to plural with correct verb agreement",
        pairs: [
          {prompt: "The student need more time.", ans: "The students need more time."},
          {prompt: "The class are too noisy.", ans: "The class is too noisy."},
          {prompt: "The equipment are on the shelf.", ans: "The equipment is on the shelf."},
          {prompt: "The information are in the email.", ans: "The information is in the email."},
          {prompt: "The homework are due Friday.", ans: "The homework is due Friday."},
          {prompt: "The children is playing outside.", ans: "The children are playing outside."},
          {prompt: "The staff is meeting after school.", ans: "The staff are meeting after school."},
          {prompt: "The data shows a clear trend.", ans: "The data show a clear trend."},
          {prompt: "The furniture need to be moved.", ans: "The furniture needs to be moved."},
          {prompt: "The news are good.", ans: "The news is good."},
          {prompt: "The people in the office is very friendly.", ans: "The people in the office are very friendly."},
          {prompt: "The advice were very helpful.", ans: "The advice was very helpful."}
        ]
      },

      {
        id: "xt006",
        type: "transformation",
        label: "Add the correct auxiliary verb",
        pairs: [
          {prompt: "You finished yet?", ans: "Have you finished yet?"},
          {prompt: "She not coming today.", ans: "She is not coming today."},
          {prompt: "They already left?", ans: "Have they already left?"},
          {prompt: "He not understand the question.", ans: "He does not understand the question."},
          {prompt: "You going to the meeting?", ans: "Are you going to the meeting?"},
          {prompt: "She not submitted her work.", ans: "She has not submitted her work."},
          {prompt: "He working on the project now.", ans: "He is working on the project now."},
          {prompt: "They not like the new timetable.", ans: "They do not like the new timetable."},
          {prompt: "You want to join us?", ans: "Do you want to join us?"},
          {prompt: "She been teaching all morning.", ans: "She has been teaching all morning."},
          {prompt: "He not told us about the changes.", ans: "He has not told us about the changes."},
          {prompt: "You seen the new resources?", ans: "Have you seen the new resources?"}
        ]
      },

      /* ---------- RESPONSE DRILLS (xr) ---------- */

      {
        id: "xr001",
        type: "response",
        label: "Say common classroom phrases without Chinese interference",
        pairs: [
          {prompt: "Ask students to open their books. (not: Open book)", ans: "Please open your books to page twelve."},
          {prompt: "Tell a student their work is good. (not: Very good, very good)", ans: "This is excellent work. Well done."},
          {prompt: "Ask if everyone understands. (not: Understand not understand?)", ans: "Does everyone understand? Are there any questions?"},
          {prompt: "Tell students to be quiet. (not: Don't talk, don't talk)", ans: "I need everyone to stop talking and listen, please."},
          {prompt: "Give students a time limit. (not: You have time five minute)", ans: "You have five minutes to complete this task."},
          {prompt: "Ask a student to repeat. (not: Say again)", ans: "Could you say that again, please? I did not quite catch it."},
          {prompt: "Tell students to hand in work. (not: Give me your homework)", ans: "Please submit your homework by placing it in the tray on my desk."},
          {prompt: "Say the lesson is starting. (not: Now we begin class)", ans: "All right, everyone. Let us get started with today's lesson."},
          {prompt: "Praise effort. (not: You work very hard)", ans: "I can see that you have put a lot of effort into this. Keep it up."},
          {prompt: "Dismiss the class. (not: Class finish, you can go)", ans: "That is the end of today's lesson. Thank you for your hard work. You are dismissed."},
          {prompt: "Ask students to work in pairs. (not: Two two together)", ans: "I would like you to work in pairs for this activity."},
          {prompt: "Explain there will be a test. (not: Next week have test)", ans: "There will be a test next week on the content we have covered so far."}
        ]
      },

      {
        id: "xr002",
        type: "response",
        label: "Respond to situations using correct articles and prepositions",
        pairs: [
          {prompt: "Describe where a student is sitting. (not: He sit in back)", ans: "He is sitting at the back of the classroom."},
          {prompt: "Tell someone when the meeting is. (not: Meeting is in three o'clock)", ans: "The meeting is at three o'clock in the staffroom."},
          {prompt: "Say you are going to a room. (not: I go to room 12)", ans: "I am going to Room 12 for my next class."},
          {prompt: "Describe what is on the desk. (not: Desk on have book)", ans: "There is a book on the desk."},
          {prompt: "Say you need a resource. (not: I need borrow a thing)", ans: "I need to borrow a laptop charger, please."},
          {prompt: "Talk about a student's ability. (not: She is very good to maths)", ans: "She is very good at maths."},
          {prompt: "Describe when you started teaching. (not: I start teach in 2025)", ans: "I started teaching in 2025."},
          {prompt: "Say where the school is. (not: School is in Parramatta area)", ans: "The school is in Parramatta, in western Sydney."},
          {prompt: "Describe a student's absence. (not: He yesterday not come)", ans: "He was absent yesterday."},
          {prompt: "Talk about the weather. (not: Today weather very hot)", ans: "The weather is very hot today."},
          {prompt: "Say when something happened. (not: This thing happen in last Monday)", ans: "This happened last Monday."},
          {prompt: "Describe a plan. (not: I plan to tomorrow do this)", ans: "I am planning to do this tomorrow."}
        ]
      },

      {
        id: "xr003",
        type: "response",
        label: "Express agreement and disagreement without Chinglish patterns",
        pairs: [
          {prompt: "Agree with a suggestion. (not: I feel this idea very good)", ans: "I think that is a really good idea."},
          {prompt: "Disagree politely. (not: I feel this not so good)", ans: "I see your point, but I have a slightly different perspective."},
          {prompt: "Express uncertainty. (not: I not sure this can or cannot)", ans: "I am not sure whether that will work."},
          {prompt: "Give your opinion. (not: I feel like this thing is like this)", ans: "In my view, the best approach would be to start with the basics."},
          {prompt: "Agree strongly. (not: Very agree, very agree)", ans: "I completely agree with you on that point."},
          {prompt: "Express surprise. (not: Really? This thing is very surprising)", ans: "Oh, really? I was not expecting that at all."},
          {prompt: "Suggest an alternative. (not: Maybe we can change become another way)", ans: "Perhaps we could try a different approach instead."},
          {prompt: "Express frustration. (not: This thing make me very headache)", ans: "This situation is really frustrating."},
          {prompt: "Give a compliment. (not: You do this thing very beautiful)", ans: "You have done an excellent job with this."},
          {prompt: "Apologise. (not: Sorry sorry, I not good)", ans: "I am sorry about that. I will make sure it does not happen again."},
          {prompt: "Make a comparison. (not: This one compare that one more good)", ans: "This option is better than that one."},
          {prompt: "Express gratitude. (not: Thank thank, you help very big)", ans: "Thank you so much for your help. I really appreciate it."}
        ]
      },

      {
        id: "xr004",
        type: "response",
        label: "Handle professional conversations without Chinese interference patterns",
        pairs: [
          {prompt: "Introduce yourself at a staff meeting. (not: I am come from China, I teach technology)", ans: "Hello, my name is Yunshu Gao. I am a Technology teacher here at the school."},
          {prompt: "Ask for clarification. (not: This meaning is what?)", ans: "Sorry, could you clarify what you mean by that?"},
          {prompt: "Explain a delay. (not: Because something so late)", ans: "I apologise for the delay. I was held up with a parent phone call."},
          {prompt: "Request assistance. (not: Can you help me do this thing?)", ans: "Would you mind helping me with this task when you have a moment?"},
          {prompt: "Offer to help. (not: You need help not need?)", ans: "Is there anything I can help you with?"},
          {prompt: "Decline an invitation. (not: Sorry, I that time not free)", ans: "Thank you for the invitation, but unfortunately I am not available at that time."},
          {prompt: "Report a problem. (not: This machine have problem, cannot use)", ans: "The machine in Room 12 is out of order. It needs to be repaired."},
          {prompt: "Ask about a deadline. (not: This thing what time need finish?)", ans: "When is the deadline for this task?"},
          {prompt: "Explain your teaching approach. (not: I like use this kind of way to teach student)", ans: "My approach involves using hands-on activities to engage students in the learning process."},
          {prompt: "Share progress. (not: This thing I already do half)", ans: "I have completed about half of the work so far and should finish by Thursday."},
          {prompt: "Give feedback to a colleague. (not: Your lesson I feel is quite good, but some place can more good)", ans: "I thought your lesson was very effective. One suggestion I have is to allow a bit more time for the group activity."},
          {prompt: "End a conversation. (not: OK, that's all, I go first)", ans: "Thank you for the chat. I had better get going. I will see you later."}
        ]
      }

    ]
  }

] };
