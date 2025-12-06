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
    // --- Intercollegiate Events (20) ---
    { 
      id: '1', title: 'Prism Panel (Debate)', date: 'Sat, Nov 23', time: '10:00 AM', loc: 'Seminar Hall', category: 'Intercollegiate', imageColor: 'from-orange-400 to-red-500', quote: "Raise your words, not your voice.", description: "A battle of wits and eloquence where students debate current topics.", 
      rules: ["Teams of 2 members.", "Time limit: 3+1 minutes.", "No use of electronic gadgets."], image: IMAGES.speaker,
      isTeamEvent: true, minMembers: 2, maxMembers: 2 
    },
    { 
      id: '2', title: 'Pulse Parade (Group Dance)', date: 'Sat, Nov 23', time: '12:00 PM', loc: 'Quadrangle Stage', category: 'Intercollegiate', imageColor: 'from-pink-500 to-purple-500', quote: "Dance is the hidden language of the soul.", description: "Showcase your team's synchronization and energy in this group dance face-off.", 
      rules: ["Group size: 6-10 members.", "Time limit: 5-7 minutes.", "Props must be cleared by the team."], image: IMAGES.dance,
      isTeamEvent: true, minMembers: 6, maxMembers: 10
    },
    { 
      id: '3', title: 'Unmasking Emotions (Mono Act)', date: 'Sat, Nov 23', time: '2:00 PM', loc: 'Amphitheatre', category: 'Intercollegiate', imageColor: 'from-blue-400 to-cyan-500', quote: "Acting is behaving truthfully under imaginary circumstances.", description: "A solo performance testing your acting chops and emotional range.", rules: ["Time limit: 4 minutes.", "Language: English or Hindi.", "No offensive content allowed."], image: IMAGES.theatre 
    },
    { 
      id: '4', title: 'Roots in Reverb (Folk Dance)', date: 'Sat, Nov 23', time: '4:00 PM', loc: 'Quadrangle Stage', category: 'Intercollegiate', imageColor: 'from-green-400 to-emerald-600', quote: "Culture is the arts elevated to a set of beliefs.", description: "Celebrate tradition with vibrant folk dance performances.", 
      rules: ["Authentic attire is mandatory.", "Team size: 6-10 members.", "Live music or pre-recorded track allowed."], image: IMAGES.dance,
      isTeamEvent: true, minMembers: 6, maxMembers: 10
    },
    { id: '5', title: 'Pigments of Psyche (Painting)', date: 'Sat, Nov 23', time: 'ALL DAY', loc: 'Art Studio', category: 'Intercollegiate', imageColor: 'from-yellow-400 to-orange-500', quote: "Every artist was first an amateur.", description: "Express your inner thoughts through colors on canvas.", rules: ["Theme will be given on the spot.", "Bring your own materials (except paper).", "Duration: 2 hours."], image: IMAGES.art },
    { 
      id: '6', title: 'Spell of Stock (Stock Exchange)', date: 'Sun, Nov 24', time: '10:00 AM', loc: 'Computer Lab', category: 'Intercollegiate', imageColor: 'from-slate-700 to-slate-900', quote: "Price is what you pay. Value is what you get.", description: "Simulate real-world trading and master the market.", 
      rules: ["Teams of 2.", "Virtual currency provided.", "Highest portfolio value wins."], image: IMAGES.tech,
      isTeamEvent: true, minMembers: 2, maxMembers: 2
    },
    { 
      id: '7', title: 'Chords of Confluence (Singing)', date: 'Sun, Nov 24', time: '11:00 AM', loc: 'Music Room', category: 'Intercollegiate', imageColor: 'from-indigo-400 to-purple-600', quote: "Where words fail, music speaks.", description: "A vocal competition for the melodically gifted.", 
      rules: ["Group size: 4-6 members.", "Time limit: 3 minutes.", "Karaoke tracks must be submitted 1hr prior."], image: IMAGES.music,
      isTeamEvent: true, minMembers: 4, maxMembers: 6
    },
    { 
      id: '8', title: 'Dreamcraft Deck (Pitch Deck)', date: 'Sun, Nov 24', time: '2:00 PM', loc: 'Seminar Hall 2', category: 'Intercollegiate', imageColor: 'from-blue-600 to-indigo-800', quote: "The best way to predict the future is to create it.", description: "Pitch your startup idea to a panel of judges.", 
      rules: ["Team of 2.", "Presentation time: 5 minutes.", "Q&A session: 3 minutes.", "Prototype adds bonus points."], image: IMAGES.tech,
      isTeamEvent: true, minMembers: 2, maxMembers: 2
    },
    { id: '9', title: 'Motion Mirage (Mime)', date: 'Sun, Nov 24', time: '3:00 PM', loc: 'Amphitheatre', category: 'Intercollegiate', imageColor: 'from-gray-500 to-gray-700', quote: "Silence is a source of great strength.", description: "Tell a compelling story without uttering a single word.", rules: ["Team size: 4-8 members.", "Time limit: 5 minutes.", "Background music allowed."], image: IMAGES.theatre },
    { 
      id: '10', title: 'Scenezone (Skit)', date: 'Sun, Nov 24', time: '4:00 PM', loc: 'Auditorium', category: 'Intercollegiate', imageColor: 'from-red-500 to-pink-600', quote: "All the world's a stage.", description: "A short theatrical performance filled with drama or comedy.", 
      rules: ["Team size: 4-6 members.", "Time limit: 8-10 minutes.", "Theme: Social Awareness or Comedy."], image: IMAGES.theatre,
      isTeamEvent: true, minMembers: 4, maxMembers: 6
    },
    { id: '11', title: 'Clash of Cadence (Dance Battle)', date: 'Sun, Nov 24', time: '5:00 PM', loc: 'Main Stage', category: 'Intercollegiate', imageColor: 'from-fuchsia-600 to-purple-700', quote: "Dance to express, not to impress.", description: "An electrifying 1v1 dance battle.", rules: ["Styles: Hip-hop, Popping, Locking.", "Random music selection.", "Judges decision is final."], image: IMAGES.dance },
    { id: '12', title: 'Shadows & Light (Classical Dance)', date: 'Sat, Nov 23', time: '10:30 AM', loc: 'Auditorium', category: 'Intercollegiate', imageColor: 'from-amber-500 to-orange-600', quote: "Rhythm is the heartbeat of life.", description: "Graceful classical dance performances celebrating heritage.", rules: ["Solo performance.", "Time limit: 6 minutes.", "Classical attire mandatory."], image: IMAGES.dance },
    { 
      id: '13', title: 'Aurora Couture (Fashion Show)', date: 'Sun, Nov 24', time: '6:00 PM', loc: 'Main Stage', category: 'Intercollegiate', imageColor: 'from-pink-600 to-rose-600', quote: "Style is a way to say who you are without speaking.", description: "Walk the ramp with style and confidence.", 
      rules: ["Theme: Sustainable Fashion.", "Team size: 8-12.", "Time limit: 10 minutes."], image: IMAGES.fashion,
      isTeamEvent: true, minMembers: 8, maxMembers: 12
    },
    { id: '14', title: 'Aurora Eloquence (Elocution)', date: 'Sat, Nov 23', time: '11:30 AM', loc: 'Room 304', category: 'Intercollegiate', imageColor: 'from-sky-500 to-blue-600', quote: "Speech is power: speech is to persuade.", description: "Articulate your thoughts on pressing social issues.", rules: ["Topic given 24h prior.", "Time limit: 3 minutes.", "English language only."], image: IMAGES.speaker },
    { id: '15', title: 'Note to Self (Solo Singing)', date: 'Sat, Nov 23', time: '1:00 PM', loc: 'Music Room', category: 'Intercollegiate', imageColor: 'from-violet-500 to-purple-600', quote: "Music is the wine that fills the cup of silence.", description: "Solo vocal performance to mesmerize the audience.", rules: ["Time limit: 4 minutes.", "One instrument allowed.", "Judges focus on pitch and tone."], image: IMAGES.music },
    { id: '16', title: 'Inkside Out (Creative Writing)', date: 'Sat, Nov 23', time: '3:30 PM', loc: 'Library Hall', category: 'Intercollegiate', imageColor: 'from-teal-500 to-cyan-600', quote: "There is no greater agony than bearing an untold story inside you.", description: "Weave magic with words in this writing contest.", rules: ["Topic on the spot.", "Duration: 1 hour.", "Word limit: 1000 words."], image: IMAGES.writing },
    { 
      id: '17', title: 'Cluescape (Treasure Hunt)', date: 'Sun, Nov 24', time: '11:00 AM', loc: 'Campus Grounds', category: 'Intercollegiate', imageColor: 'from-lime-500 to-green-600', quote: "Not all those who wander are lost.", description: "Solve riddles and find clues across the campus.", 
      rules: ["Team size: 2.", "Time limit: 2 hours.", "Do not disturb ongoing events."], image: IMAGES.fun,
      isTeamEvent: true, minMembers: 2, maxMembers: 2
    },
    { id: '18', title: 'Neuro Muse (Digital Art)', date: 'Sun, Nov 24', time: 'ALL DAY', loc: 'Computer Lab 2', category: 'Intercollegiate', imageColor: 'from-fuchsia-500 to-pink-500', quote: "Creativity is intelligence having fun.", description: "Create stunning digital artwork based on a theme.", rules: ["Software: Photoshop/Illustrator/Procreate.", "Theme provided on spot.", "Duration: 2 hours."], image: IMAGES.art },
    { id: '19', title: 'Framestorm (Comic Flow)', date: 'Sat, Nov 23', time: '2:30 PM', loc: 'Art Room', category: 'Intercollegiate', imageColor: 'from-yellow-500 to-amber-500', quote: "Comics are a gateway to dreams.", description: "Design a comic strip that tells a humorous or impactful story.", rules: ["4-6 panels.", "Black & white or colored.", "All materials provided."], image: IMAGES.art },
    { id: '20', title: 'Stellar Spoof (Mimicry)', date: 'Sun, Nov 24', time: '1:30 PM', loc: 'Amphitheatre', category: 'Intercollegiate', imageColor: 'from-indigo-500 to-blue-600', quote: "Imitation is the sincerest form of flattery.", description: "Mimic famous personalities and entertain the crowd.", rules: ["Time limit: 3 minutes.", "No offensive or political content.", "Props allowed."], image: IMAGES.theatre },

    // --- Engagement Activities (17) ---
    { id: '21', title: 'Gratitude Wall', date: 'Daily', time: 'ALL DAY', loc: 'Main Hall', category: 'Engagement', imageColor: 'from-teal-400 to-teal-600', quote: "Gratitude turns what we have into enough.", description: "Write a note of thanks and stick it on our community wall.", rules: ["Keep it positive.", "Respect others' space.", "Have fun!"], image: IMAGES.wellness },
    { id: '22', title: 'Mental Health Quiz', date: 'Daily', time: 'ALL DAY', loc: 'Booth A', category: 'Engagement', imageColor: 'from-violet-500 to-purple-600', quote: "Knowledge is power.", description: "Test your awareness about mental well-being.", rules: ["Complete the quiz in 5 mins.", "Score above 80% for a badge."], image: IMAGES.tech },
    { id: '23', title: 'Memory Word Recall', date: 'Daily', time: '10 AM - 4 PM', loc: 'Booth B', category: 'Engagement', imageColor: 'from-blue-400 to-blue-600', quote: "Memories warm you up from the inside.", description: "How many positive words can you remember in 30 seconds?", rules: ["30 seconds to memorize.", "30 seconds to recall.", "Win points for every 5 words."], image: IMAGES.tech },
    { id: '24', title: 'Thinking Outside the Box', date: 'Daily', time: '11 AM - 3 PM', loc: 'Activity Zone', category: 'Engagement', imageColor: 'from-orange-400 to-red-500', quote: "Logic will get you from A to B. Imagination will take you everywhere.", description: "Solve lateral thinking puzzles.", rules: ["Individual participation.", "3 puzzles to solve.", "Time limit: 5 minutes."], image: IMAGES.tech },
    { id: '25', title: 'Movie Screening', date: 'Sat & Sun', time: '6:00 PM', loc: 'Mini Theatre', category: 'Engagement', imageColor: 'from-slate-800 to-black', quote: "Cinema is a mirror of reality.", description: "Relax and watch uplifting short films.", rules: ["Silence in the theatre.", "First come first serve.", "Popcorn provided!"], image: IMAGES.theatre },
    { id: '26', title: 'Wall Painting', date: 'Sat, Nov 23', time: 'ALL DAY', loc: 'Creative Corner', category: 'Engagement', imageColor: 'from-pink-400 to-rose-500', quote: "The world is your canvas.", description: "Contribute to a massive community mural.", rules: ["Wear aprons provided.", "Respect the theme.", "Have fun!"], image: IMAGES.art },
    { id: '27', title: 'Mental Health Score Check', date: 'Daily', time: 'ALL DAY', loc: 'Wellness Booth', category: 'Engagement', imageColor: 'from-green-400 to-emerald-600', quote: "Self-care is not selfish.", description: "A quick, private assessment of your mental well-being.", rules: ["Confidential.", "Professional guidance available.", "Takes 5 minutes."], image: IMAGES.wellness },
    { id: '28', title: 'Spin the Wheel', date: 'Daily', time: 'ALL DAY', loc: 'Central Lawn', category: 'Engagement', imageColor: 'from-fuchsia-500 to-pink-600', quote: "Fortune favors the bold.", description: "Try your luck and win instant points!", rules: ["One spin per person per day.", "Prizes subject to availability."], image: IMAGES.fun },
    { id: '29', title: 'Stroop Effect', date: 'Daily', time: '12 PM - 2 PM', loc: 'Psych Lab Booth', category: 'Engagement', imageColor: 'from-purple-500 to-indigo-600', quote: "Challenge your brain.", description: "A psychological test of reaction time.", rules: ["Identify the color, not the word.", "Fastest time wins.", "Beat the high score."], image: IMAGES.tech },
    { id: '30', title: "Trash the Can'ts", date: 'Daily', time: 'ALL DAY', loc: 'Empowerment Zone', category: 'Engagement', imageColor: 'from-gray-600 to-slate-700', quote: "Believe you can and you're halfway there.", description: "Write down your fears and physically trash them.", rules: ["Write a fear.", "Crumple it.", "Throw it in the bin!"], image: IMAGES.wellness },
    { id: '31', title: 'Six Thinking Hats', date: 'Sun, Nov 24', time: '11:00 AM', loc: 'Workshop Room', category: 'Engagement', imageColor: 'from-yellow-400 to-orange-400', quote: "Perspective is everything.", description: "Learn to look at problems from 6 different perspectives.", rules: ["Group activity.", "45 minute session.", "Open mind required."], image: IMAGES.tech },
    { id: '32', title: 'Know Your Community (KYC)', date: 'Daily', time: 'ALL DAY', loc: 'Social Hub', category: 'Engagement', imageColor: 'from-cyan-500 to-blue-500', quote: "Unity is strength.", description: "Interact with 5 strangers and learn something new.", rules: ["Collect signatures.", "Be polite.", "Submit card for points."], image: IMAGES.fun },
    { id: '33', title: 'Joy of Journaling', date: 'Sat, Nov 23', time: '10:00 AM', loc: 'Quiet Zone', category: 'Engagement', imageColor: 'from-rose-400 to-pink-400', quote: "Write to taste life twice.", description: "Decorate your own mental health journal.", rules: ["Materials provided.", "Keep your journal.", "30 minute session."], image: IMAGES.writing },
    { id: '34', title: 'Art Therapy / Mind Mania', date: 'Daily', time: 'ALL DAY', loc: 'Art Tent', category: 'Engagement', imageColor: 'from-indigo-400 to-purple-500', quote: "Art washes away from the soul the dust of everyday life.", description: "Therapeutic coloring and mandala making.", rules: ["Relaxing music playing.", "No skill required.", "Take your art home."], image: IMAGES.art },
    { id: '35', title: 'Dance Therapy', date: 'Sun, Nov 24', time: '5:00 PM', loc: 'Open Air Stage', category: 'Engagement', imageColor: 'from-orange-500 to-red-500', quote: "Movement is medicine.", description: "Free movement session to release stress.", rules: ["Comfortable clothing.", "Follow the instructor.", "No judgement zone."], image: IMAGES.dance },
    { id: '36', title: 'Well-Being Kit', date: 'Daily', time: 'ALL DAY', loc: 'Redemption Counter', category: 'Engagement', imageColor: 'from-teal-500 to-emerald-500', quote: "Take care of your body.", description: "Assemble your own self-care kit.", rules: ["Redeem points to enter.", "Pick 3 items.", "Daily limit applies."], image: IMAGES.wellness },
    { id: '37', title: 'Seeking Help', date: 'Daily', time: 'ALL DAY', loc: 'Info Desk', category: 'Engagement', imageColor: 'from-blue-600 to-indigo-700', quote: "It's okay not to be okay.", description: "Information on resources and counseling available on campus.", rules: ["Private consultation.", "Brochures available.", "Open to all."], image: IMAGES.wellness },
  ];
