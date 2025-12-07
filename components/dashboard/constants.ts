
import { EventData } from '../../types';

export const IMAGES = {
    dance: "https://images.unsplash.com/photo-1545959588-8cdb924d7db6?auto=format&fit=crop&w=1000&q=80",
    music: "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?auto=format&fit=crop&w=1000&q=80",
    theatre: "https://images.unsplash.com/photo-1503095392269-27528ca388ec?auto=format&fit=crop&w=1000&q=80",
    art: "https://images.unsplash.com/photo-1460661419201-fd4cecdf8a8b?auto=format&fit=crop&w=1000&q=80",
    tech: "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=1000&q=80",
    speaker: "https://images.unsplash.com/photo-1475721027767-p05a6db14ba0?auto=format&fit=crop&w=1000&q=80",
    writing: "https://images.unsplash.com/photo-1455390582262-044cdead277a?auto=format&fit=crop&w=1000&q=80",
    wellness: "https://images.unsplash.com/photo-1544367563-12123d8965cd?auto=format&fit=crop&w=1000&q=80",
    fun: "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?auto=format&fit=crop&w=1000&q=80",
    fashion: "https://images.unsplash.com/photo-1509631179647-0177331693ae?auto=format&fit=crop&w=1000&q=80"
  };

export const events: EventData[] = [
    { id: '34', title: 'Art Therapy / Mind Mania', date: 'Daily', time: 'ALL DAY', loc: 'Art Tent', category: 'Engagement', imageColor: 'from-indigo-400 to-purple-500', quote: "Art washes away from the soul the dust of everyday life.", description: "Therapeutic coloring and mandala making.", rules: ["Relaxing music playing.", "No skill required.", "Take your art home."], image: IMAGES.art },
    { 
      id: '13', title: 'Aurora Couture (Fashion Show)', date: 'Sun, Nov 24', time: '6:00 PM', loc: 'Main Stage', category: 'Intercollegiate', imageColor: 'from-pink-600 to-rose-600', quote: "Style is a way to say who you are without speaking.", description: "Walk the ramp with style and confidence.", 
      rules: [
        "One team per contingent.",
        "3 minutes of preparation time will be provided.",
        "No offensive content or costumes are allowed.",
        "Footwear must be worn, and girls must wear stockings if they are wearing a one-piece outfit.",
        "Props are allowed but must be cleaned up after the performance.",
        "Any use of vulgarity or obscenity during the event will lead to disqualification and negative marking.",
        "Judges' decisions are final and binding.",
        "A USB drive or file containing only 1 track must be submitted at the registration desk.",
        "The committee will not be responsible for any technical glitches that occur during the event in the absence of the USB drive."
      ], 
      image: IMAGES.fashion,
      isTeamEvent: true, minMembers: 8, maxMembers: 12
    },
    { 
      id: '14', title: 'Aurora Eloquence (Elocution)', date: 'Sat, Nov 23', time: '11:30 AM', loc: 'Room 304', category: 'Intercollegiate', imageColor: 'from-sky-500 to-blue-600', quote: "Speech is power: speech is to persuade.", description: "Articulate your thoughts on pressing social issues.", 
      rules: [
        "One participant per contingent.",
        "Topic will be disclosed 1 week prior",
        "The presentation shall be in the form of prose and not a poetry or song.",
        "Paper reading shall not be allowed.",
        "Any type of vulgarity and obscenity during the event leads to disqualification and negative marking.",
        "Judge's decisions will be the final and binding."
      ], 
      image: IMAGES.speaker 
    },
    { 
      id: '7', title: 'Chords of Confluence (Singing)', date: 'Sun, Nov 24', time: '11:00 AM', loc: 'Music Room', category: 'Intercollegiate', imageColor: 'from-indigo-400 to-purple-600', quote: "Where words fail, music speaks.", description: "A vocal competition for the melodically gifted.", 
      rules: [
        "One team per contingent.",
        "Live instruments are allowed.",
        "Vulgar gestures, hate speech, or damage to equipment will result in disqualification.",
        "The judges' decisions are final and binding.",
        "Each performance must include a song in a language other than Hindi.",
        "Any genre is allowed, but explicit or offensive content is prohibited.",
        "Groups must register with their list of members, instruments, and song genres."
      ], 
      image: IMAGES.music,
      isTeamEvent: true, minMembers: 4, maxMembers: 6
    },
    { 
      id: '11', title: 'Clash of Cadence (Dance Battle)', date: 'Sun, Nov 24', time: '5:00 PM', loc: 'Main Stage', category: 'Intercollegiate', imageColor: 'from-fuchsia-600 to-purple-700', quote: "Dance to express, not to impress.", description: "An electrifying 1v1 dance battle.", 
      rules: [
        "Round 1 - Cypher: Each participant gets 45 seconds to showcase their dance.",
        "Final 16 Participants will be selected for Round 2.",
        "Round 2 - Battle One-on-one battles according to the allotment provided by judges.",
        "Vulgar gestures, hate speech, or damage to equipment will lead to disqualification.",
        "Judges decisions are final and binding.",
        "Age Limit - 16 to 30 Years",
        "N.C.P allowed"
      ], 
      image: IMAGES.dance 
    },
    { 
      id: '17', title: 'Cluescape (Treasure Hunt)', date: 'Sun, Nov 24', time: '11:00 AM', loc: 'Campus Grounds', category: 'Intercollegiate', imageColor: 'from-lime-500 to-green-600', quote: "Not all those who wander are lost.", description: "Solve riddles and find clues across the campus.", 
      rules: [
        "One team per contingent.",
        "Team members must include at least 1 boy and 1 girl (compulsory).",
        "The event area is the campus.",
        "Non-compliance will lead to disqualification of the team.",
        "Any attempts at cheating will lead to disqualification.",
        "The decision of the organizing committee is final and binding.",
        "Event-specific rules will be explained prior to the event."
      ], 
      image: IMAGES.fun,
      isTeamEvent: true, minMembers: 2, maxMembers: 2
    },
    { id: '35', title: 'Dance Mania (Dance Therapy)', date: 'Sun, Nov 24', time: '5:00 PM', loc: 'Open Air Stage', category: 'Engagement', imageColor: 'from-orange-500 to-red-500', quote: "Movement is medicine.", description: "A rhythm-based group dance session that elevates mood, energizes the body, and strengthens social connections.", rules: ["Comfortable clothing.", "Follow the instructor.", "No judgement zone."], image: IMAGES.dance },
    { id: '24', title: 'Dot-to-Thought', date: 'Daily', time: '11 AM - 3 PM', loc: 'Activity Zone', category: 'Engagement', imageColor: 'from-orange-400 to-red-500', quote: "Logic will get you from A to B. Imagination will take you everywhere.", description: "A creative puzzle challenge that encourages participants to think beyond patterns. This activity serves as a playful introduction to problem-solving and flexible thinking.", rules: ["Individual participation.", "3 puzzles to solve.", "Time limit: 5 minutes."], image: IMAGES.tech },
    { 
      id: '8', title: 'Dreamcraft Deck (Pitch Deck)', date: 'Sun, Nov 24', time: '2:00 PM', loc: 'Seminar Hall 2', category: 'Intercollegiate', imageColor: 'from-blue-600 to-indigo-800', quote: "The best way to predict the future is to create it.", description: "Pitch your startup idea to a panel of judges.", 
      rules: [
        "One team per contingent.",
        "Each team's presentation and Q&A session will be conducted for 4 to 10 minutes.",
        "Presentations must be submitted via USB drives prior to the event, with proper labeling.",
        "Any use of vulgarity or obscenity during the event will lead to disqualification and negative marking.",
        "Judges' decisions are final and binding."
      ], 
      image: IMAGES.tech,
      isTeamEvent: true, minMembers: 2, maxMembers: 2
    },
    { 
      id: '19', title: 'Framestorm (Comic Flow)', date: 'Sat, Nov 23', time: '2:30 PM', loc: 'Art Room', category: 'Intercollegiate', imageColor: 'from-yellow-500 to-amber-500', quote: "Comics are a gateway to dreams.", description: "Design a comic strip that tells a humorous or impactful story.", 
      rules: [
        "One participant per contingent.",
        "Participants must bring their own stationery; sheets will be provided.",
        "Any use of vulgarity or obscenity during the event will lead to disqualification and negative marking.",
        "Reference material is not permitted.",
        "Judges' decisions are final and binding."
      ], 
      image: IMAGES.art 
    },
    { 
      id: '16', title: 'Inkside Out (Creative Writing)', date: 'Sat, Nov 23', time: '3:30 PM', loc: 'Library Hall', category: 'Intercollegiate', imageColor: 'from-teal-500 to-cyan-600', quote: "There is no greater agony than bearing an untold story inside you.", description: "Weave magic with words in this writing contest.", 
      rules: [
        "Participants will receive a reference picture on the day of the event.",
        "Participants must write a story based on the picture within 2 hours.",
        "Any use of vulgarity or obscenity during the event will result in disqualification and negative marking.",
        "Judges' decisions are final and binding."
      ], 
      image: IMAGES.writing 
    },
    { id: '33', title: 'Joy of Journaling', date: 'Sat, Nov 23', time: '10:00 AM', loc: 'Quiet Zone', category: 'Engagement', imageColor: 'from-rose-400 to-pink-400', quote: "Write to taste life twice.", description: "A reflective journaling corner where students can write positive thoughts, encouraging mindfulness and emotional grounding.", rules: ["Materials provided.", "Keep your journal.", "30 minute session."], image: IMAGES.writing },
    { id: '32', title: 'KYC – Know Your Conflict', date: 'Daily', time: 'ALL DAY', loc: 'Social Hub', category: 'Engagement', imageColor: 'from-cyan-500 to-blue-500', quote: "Conflict is an opportunity for connection.", description: "A role-play-based exercise that teaches healthier conflict resolution and promotes empathy during tough conversations.", rules: ["Collect signatures.", "Be polite.", "Submit card for points."], image: IMAGES.fun },
    { id: '22', title: 'Know Your EQ', date: 'Daily', time: 'ALL DAY', loc: 'Booth A', category: 'Engagement', imageColor: 'from-violet-500 to-purple-600', quote: "Knowledge is power.", description: "A brief emotional intelligence test that helps students understand their strengths, such as empathy, adaptability, and self-awareness.", rules: ["Complete the quiz in 5 mins.", "Score above 80% for a badge."], image: IMAGES.tech },
    { id: '36', title: 'Mindful Tools: Well-being Kit', date: 'Daily', time: 'ALL DAY', loc: 'Redemption Counter', category: 'Engagement', imageColor: 'from-teal-500 to-emerald-500', quote: "Take care of your body.", description: "A resource station offering QR-based tools, helplines, and practical guides to support ongoing mental wellness (with fun games available too!).", rules: ["Redeem points to enter.", "Pick 3 items.", "Daily limit applies."], image: IMAGES.wellness },
    { 
      id: '9', title: 'Motion Mirage (Mime)', date: 'Sun, Nov 24', time: '3:00 PM', loc: 'Amphitheatre', category: 'Intercollegiate', imageColor: 'from-gray-500 to-gray-700', quote: "Silence is a source of great strength.", description: "Tell a compelling story without uttering a single word.", 
      rules: [
        "One team per contingent.",
        "Background music and live Music are allowed.",
        "The student participants shall wear white/black skin tight dresses and shall have paint faces with raised eyebrows and broadened lips.",
        "Props are allowed but participants have to submit the prop list one day before the event.",
        "Any type of vulgarity and obscenity during the event leads to Disqualification and Negative Marking.",
        "Judge's decisions will be the final and binding."
      ], 
      image: IMAGES.theatre 
    },
    { id: '25', title: 'Movie Screening of Zindaginama', date: 'Sat & Sun', time: '6:00 PM', loc: 'Mini Theatre', category: 'Engagement', imageColor: 'from-slate-800 to-black', quote: "Cinema is a mirror of reality.", description: "A screening of the movie Zindaginama, followed by a guided discussion to explore mental health themes. It combines reflection with entertainment.", rules: ["Silence in the theatre.", "First come first serve.", "Popcorn provided!"], image: IMAGES.theatre },
    { 
      id: '18', title: 'Neuro Muse (Digital Art)', date: 'Sun, Nov 24', time: 'ALL DAY', loc: 'Computer Lab 2', category: 'Intercollegiate', imageColor: 'from-fuchsia-500 to-pink-500', quote: "Creativity is intelligence having fun.", description: "Create stunning digital artwork based on a theme.", 
      rules: [
        "Laptops, tablets, styluses, drawing pads, and digital art software are allowed.",
        "The use of AI is prohibited.",
        "Premade templates, clip art, and brushes that affect originality are not allowed.",
        "Plagiarism is strictly prohibited.",
        "Artwork must be exported as PNG/JPEG and named as EventName_CC.",
        "Judges' decisions are final and binding."
      ], 
      image: IMAGES.art 
    },
    { 
      id: '15', title: 'Note to Self (Solo Singing)', date: 'Sat, Nov 23', time: '1:00 PM', loc: 'Music Room', category: 'Intercollegiate', imageColor: 'from-violet-500 to-purple-600', quote: "Music is the wine that fills the cup of silence.", description: "Solo vocal performance to mesmerize the audience.", 
      rules: [
        "One participant per contingent.",
        "Both karaoke tracks, tanpura, and live instruments are allowed.",
        "Only one accompanist per participant is permitted.",
        "Participants must submit their audio track at least two days prior to the event via the drive link provided by your Point of Contact (P.O.C.).",
        "Basic audio equipment, including microphones and speakers, will be provided.",
        "Participants must bring their own karaoke tracks or instruments.",
        "Vulgar gestures, hate speech, or any damage to equipment will lead to disqualification and penalties for the respective contingent.",
        "The judges' decisions are final and binding."
      ], 
      image: IMAGES.music 
    },
    { 
      id: '5', title: 'Pigments of the Psyche (Canvas Painting)', date: 'Sat, Nov 23', time: 'ALL DAY', loc: 'Art Studio', category: 'Intercollegiate', imageColor: 'from-yellow-400 to-orange-500', quote: "Every artist was first an amateur.", description: "Express your inner thoughts through colors on canvas.", 
      rules: [
        "One participant per contingent.",
        "Participants must bring their own art materials; the canvas will be provided.",
        "Any use of vulgarity or obscenity during the event will lead to disqualification and negative marking.",
        "Judges' decisions are final and binding."
      ], 
      image: IMAGES.art 
    },
    { 
      id: '1', title: 'Prism Panel (Debate)', date: 'Sat, Nov 23', time: '10:00 AM', loc: 'Seminar Hall', category: 'Intercollegiate', imageColor: 'from-orange-400 to-red-500', quote: "Raise your words, not your voice.", description: "A battle of wits and eloquence where students debate current topics.", 
      rules: [
        "One team per contingent.",
        "Participants will be given characters 1 week prior to the event and must convince the judge why they deserve the last seat on the ship by debating their case.",
        "Any type of vulgarity and obscenity during the event leads to disqualification and negative marking.",
        "Judge's decisions will be the final and binding.",
        "The event will have 2 rounds:",
        "Round 1: Individual team presentations.",
        "Round 2: Debates between teams"
      ], 
      image: IMAGES.speaker,
      isTeamEvent: true, minMembers: 2, maxMembers: 2 
    },
    { 
      id: '6', title: 'Psyk Exchange (Mock Trading)', date: 'Sun, Nov 24', time: '10:00 AM', loc: 'Computer Lab', category: 'Intercollegiate', imageColor: 'from-slate-700 to-slate-900', quote: "Price is what you pay. Value is what you get.", description: "Simulate real-world trading and master the market.", 
      rules: [
        "One team per contingent.",
        "There will be a total of 4 rounds.",
        "The use of software or electronic devices is prohibited during any round.",
        "All trades and auction bids must be completed within the given time.",
        "Participants must adhere to the instructions and scenarios provided in each round.",
        "Decisions made during trading or auctions are final and cannot be reversed.",
        "Any use of vulgarity or obscenity during the event will lead to disqualification and negative marking.",
        "Judges' decisions are final and binding."
      ], 
      image: IMAGES.tech,
      isTeamEvent: true, minMembers: 2, maxMembers: 2
    },
    { 
      id: '2', title: 'Pulse Parade (Group Dance)', date: 'Sat, Nov 23', time: '12:00 PM', loc: 'Quadrangle Stage', category: 'Intercollegiate', imageColor: 'from-pink-500 to-purple-500', quote: "Dance is the hidden language of the soul.", description: "Showcase your team's synchronization and energy in this group dance face-off.", 
      rules: [
        "One Entry per Contingent.",
        "Tracks should be submitted to the POC prior to the Event.",
        "A pen drive or a file consisting of only 1 track should be submitted at the re-registration desk for the respective event in .mp3 format and should be name as the event name and college code.",
        "Any sort of vulgarity/ profanity/ obscenity will lead to disqualification and the contingent will be awarded negative PR points.",
        "Judge’s decision will be final and binding.",
        "In case of a tie, a group dance battle will be conducted as a tie-breaker to determine the winner.",
        "Direct Finale and All dance forms except classical and folk."
      ], 
      image: IMAGES.dance,
      isTeamEvent: true, minMembers: 6, maxMembers: 10
    },
    { 
      id: '4', title: 'Roots in Reverb (Folk Dance)', date: 'Sat, Nov 23', time: '4:00 PM', loc: 'Quadrangle Stage', category: 'Intercollegiate', imageColor: 'from-green-400 to-emerald-600', quote: "Culture is the arts elevated to a set of beliefs.", description: "Celebrate tradition with vibrant folk dance performances.", 
      rules: [
        "One team per contingent.",
        "The dance shall be either primitive Indian tribal or folk dance but it shall not be a classical dance.",
        "A pen drive or a file consisting of only 1 track should be submitted at the re-registration desk for the respective event in .mp3 format and should be name as the event name and college code.",
        "Contingents must submit a synopsis of the dance form prior to the event.",
        "The participating team shall remove the sets, property, instruments, etc. used for the Folk Dance within 2 minutes after their performance.",
        "Any sort of vulgarity/ profanity/ obscenity will lead to disqualification and the contingent will be awarded negative PR points.",
        "Judge’s decision will be final and binding."
      ], 
      image: IMAGES.dance,
      isTeamEvent: true, minMembers: 6, maxMembers: 10
    },
    { 
      id: '10', title: 'Scenezone (Skit)', date: 'Sun, Nov 24', time: '4:00 PM', loc: 'Auditorium', category: 'Intercollegiate', imageColor: 'from-red-500 to-pink-600', quote: "All the world's a stage.", description: "A short theatrical performance filled with drama or comedy.", 
      rules: [
        "Skit must be in Marathi, English or Hindi.",
        "Timing starts as soon as the announcement begins.",
        "Must maintain decency; any violation leads to disqualification.",
        "No personal attacks, remarks or character assassination.",
        "Avoid vulgarity or bitter insinuations.",
        "Innocent humour or satire allowed.",
        "Makeup, drapery and background music allowed."
      ], 
      image: IMAGES.theatre,
      isTeamEvent: true, minMembers: 4, maxMembers: 6
    },
    { id: '37', title: 'Seeking Help', date: 'Daily', time: 'ALL DAY', loc: 'Info Desk', category: 'Engagement', imageColor: 'from-blue-600 to-indigo-700', quote: "It's okay not to be okay.", description: "Information on resources and counseling available on campus.", rules: ["Private consultation.", "Brochures available.", "Open to all."], image: IMAGES.wellness },
    { 
      id: '12', title: 'Shadows & Light (Classical Dance)', date: 'Sat, Nov 23', time: '10:30 AM', loc: 'Auditorium', category: 'Intercollegiate', imageColor: 'from-amber-500 to-orange-600', quote: "Rhythm is the heartbeat of life.", description: "Graceful classical dance performances celebrating heritage.", 
      rules: [
        "One participant per contingent.",
        "The participant may perform any form of Indian classical dance.",
        "Evaluation will be based on qualities such as taal, abhinaya, expressions, costumes, footwork, and overall impression.",
        "A pen drive or file containing only one track must be submitted at the re-registration desk in .mp3 format, named with the event name and college code.",
        "Any form of vulgarity, profanity, or obscenity will lead to disqualification, and the contingent will receive negative PR points.",
        "The judges' decisions are final and binding."
      ], 
      image: IMAGES.dance 
    },
    { id: '31', title: 'Six Thinking Hats', date: 'Sun, Nov 24', time: '11:00 AM', loc: 'Workshop Room', category: 'Engagement', imageColor: 'from-yellow-400 to-orange-400', quote: "Perspective is everything.", description: "A group activity that uses different “thinking perspectives” to solve problems creatively and collaboratively.", rules: ["Group activity.", "45 minute session.", "Open mind required."], image: IMAGES.tech },
    { id: '28', title: 'Spin the Wheel', date: 'Daily', time: 'ALL DAY', loc: 'Central Lawn', category: 'Engagement', imageColor: 'from-fuchsia-500 to-pink-600', quote: "Fortune favors the bold.", description: "A playful spin-and-respond game featuring myths, facts, and challenges—making mental health awareness fun and interactive.", rules: ["One spin per person per day.", "Prizes subject to availability."], image: IMAGES.fun },
    { id: '20', title: 'Stellar Spoof (Mimicry)', date: 'Sun, Nov 24', time: '1:30 PM', loc: 'Amphitheatre', category: 'Intercollegiate', imageColor: 'from-indigo-500 to-blue-600', quote: "Imitation is the sincerest form of flattery.", description: "Mimic famous personalities and entertain the crowd.", rules: ["Time limit: 3 minutes.", "No offensive or political content.", "Props allowed."], image: IMAGES.theatre },
    { id: '29', title: 'Stroop Effect', date: 'Daily', time: '12 PM - 2 PM', loc: 'Psych Lab Booth', category: 'Engagement', imageColor: 'from-purple-500 to-indigo-600', quote: "Challenge your brain.", description: "A brain-twisting color-word activity that reveals how attention works and why focus can be challenging.", rules: ["Identify the color, not the word.", "Fastest time wins.", "Beat the high score."], image: IMAGES.tech },
    { id: '30', title: "Trash the Can'ts", date: 'Daily', time: 'ALL DAY', loc: 'Empowerment Zone', category: 'Engagement', imageColor: 'from-gray-600 to-slate-700', quote: "Believe you can and you're halfway there.", description: "Write down your fears and physically trash them.", rules: ["Write a fear.", "Crumple it.", "Throw it in the bin!"], image: IMAGES.wellness },
    { 
      id: '3', title: 'Unmasking Emotions (Mono Act)', date: 'Sat, Nov 23', time: '2:00 PM', loc: 'Amphitheatre', category: 'Intercollegiate', imageColor: 'from-blue-400 to-cyan-500', quote: "Acting is behaving truthfully under imaginary circumstances.", description: "A solo performance testing your acting chops and emotional range.", 
      rules: [
        "One participant per contingent.",
        "Background music and live Music are allowed.",
        "Script should be submitted one day before the event.",
        "Props are allowed but participants have to submit the prop list one day before the event.",
        "Any type of vulgarity and obscenity during the event leads to Disqualification and Negative Marking.",
        "Judge's decisions will be the final and binding."
      ], 
      image: IMAGES.theatre 
    },
    { id: '26', title: 'Wall Painting', date: 'Sat, Nov 23', time: 'ALL DAY', loc: 'Creative Corner', category: 'Engagement', imageColor: 'from-pink-400 to-rose-500', quote: "The world is your canvas.", description: "A collaborative mural project where creativity and teamwork merge into one expressive artwork—offering a therapeutic and community-building experience.", rules: ["Wear aprons provided.", "Respect the theme.", "Have fun!"], image: IMAGES.art },
    { id: '21', title: 'Wall of Grati-Notes', date: 'Daily', time: 'ALL DAY', loc: 'Main Hall', category: 'Engagement', imageColor: 'from-teal-400 to-teal-600', quote: "Gratitude turns what we have into enough.", description: "A gratitude-writing wall that allows students to reflect, appreciate others, and experience a burst of positivity. A simple act with a big emotional impact.", rules: ["Keep it positive.", "Respect others' space.", "Have fun!"], image: "https://images.unsplash.com/photo-1544367563-12123d8965cd?auto=format&fit=crop&w=1000&q=80" },
    { id: '27', title: 'Wellness Checkpoint (MH Score)', date: 'Daily', time: 'ALL DAY', loc: 'Wellness Booth', category: 'Engagement', imageColor: 'from-green-400 to-emerald-600', quote: "Self-care is not selfish.", description: "A quick digital self-assessment of stress, mood, sleep, and more, giving students a snapshot of their mental well-being.", rules: ["Confidential.", "Professional guidance available.", "Takes 5 minutes."], image: IMAGES.wellness },
    { id: '23', title: 'Word Recall Challenge', date: 'Daily', time: '10 AM - 4 PM', loc: 'Booth B', category: 'Engagement', imageColor: 'from-blue-400 to-blue-600', quote: "Memories warm you up from the inside.", description: "A quick memory test that demonstrates how the brain can distort information. It’s fun, surprising, and great for sparking conversations about perception.", rules: ["30 seconds to memorize.", "30 seconds to recall.", "Win points for every 5 words."], image: "https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?auto=format&fit=crop&w=1000&q=80" },
  ].sort((a, b) => a.title.localeCompare(b.title));
