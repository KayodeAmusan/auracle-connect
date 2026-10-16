export interface Post {
  slug: string;
  title: string;
  tag: string;
  date: string;
  excerpt: string;
  body: string[];
}

export const posts: Post[] = [
  {
    slug: "school-management-systems-2026",
    title: "Why every school needs a management system in 2026",
    tag: "EdTech",
    date: "October 2026",
    excerpt:
      "From results and fees to parent communication — how a school management platform saves administrators hours every week.",
    body: [
      "Running a school on paper registers and spreadsheets worked when classes were small. Today, with hundreds of pupils, multiple campuses and parents expecting instant updates, manual processes quietly eat hours of staff time every single week.",
      "A good school management system brings admissions, attendance, results, fees and parent communication into one place. Teachers enter scores once and report cards generate themselves. Bursars see who has paid and who hasn't at a glance. Parents log in to check results instead of calling the office.",
      "The schools we work with — including Mienebi International School, Best Solution International School and Diamond Standard Group of Schools — moved from end-of-term chaos to calm, predictable processes. Results that used to take weeks to compile now take days.",
      "If your school still compiles results by hand or tracks fees in a notebook, the question is no longer whether to digitise, but how soon. The cost of a system is almost always lower than the cost of the time you're losing.",
      "Talk to us about deploying a school management platform tailored to how your school actually works.",
    ],
  },
  {
    slug: "solar-backup-power-lagos",
    title: "Solar backup power: what Lagos businesses should know",
    tag: "Solar",
    date: "October 2026",
    excerpt:
      "Sizing inverters and batteries correctly is the difference between reliable backup and constant frustration.",
    body: [
      "Every business in Lagos knows the cost of unreliable power: lost sales, idle staff, spoiled stock and the endless expense of diesel. Solar backup systems promise relief — but only when they're designed properly.",
      "The most common mistake we see is undersizing. A system chosen by price rather than by load will run your lights but trip the moment a fridge or air conditioner kicks in. Proper design starts with an audit: what do you actually need to power, and for how long?",
      "Battery choice matters just as much. Lithium batteries cost more upfront than tubular batteries but last two to three times longer and handle deep discharge far better. Over five years, lithium is usually the cheaper option.",
      "Finally, think about expansion. A well-designed system lets you add panels and batteries later as your needs grow, instead of replacing everything.",
      "We design, supply and install solar and inverter systems sized to your real load — not to a guess. Get in touch for an assessment.",
    ],
  },
  {
    slug: "cctv-that-protects-your-business",
    title: "CCTV that actually protects your business",
    tag: "Security",
    date: "October 2026",
    excerpt:
      "Camera placement, remote viewing and storage — the details that separate a real security system from decoration.",
    body: [
      "Many businesses install cameras and feel safer — until an incident happens and they discover the footage is blurry, the recorder stopped working months ago, or the one angle that matters was never covered.",
      "Effective surveillance starts with placement. Entrances, cash points, storage areas and perimeters each need the right camera type and height. A camera mounted too high captures the tops of heads; one facing a bright doorway captures silhouettes.",
      "Storage is the second pillar. Footage is only useful if it's still there when you need it. We recommend at least 30 days of retention, with the recorder secured in a locked location — a thief who can steal the recorder takes your evidence with them.",
      "Remote viewing rounds it out. Modern systems let you check your premises from your phone anywhere in the world, with motion alerts when something moves after hours.",
      "We design and install CCTV systems built around your actual risks, with remote viewing set up before we leave. Talk to us about securing your premises.",
    ],
  },
  {
    slug: "erp-vs-spreadsheets",
    title: "ERP vs spreadsheets: when to make the switch",
    tag: "Business Systems",
    date: "October 2026",
    excerpt:
      "The warning signs that your growing business has outgrown spreadsheets — and what an ERP changes.",
    body: [
      "Spreadsheets are brilliant tools — until they aren't. Every growing business hits a point where the spreadsheet that once organised everything becomes the thing slowing everything down.",
      "The warning signs are familiar: two people editing different copies of the same file; stock figures that never quite match the warehouse; month-end reports that take days to assemble; and a creeping fear that one accidental deletion could lose everything.",
      "An ERP system replaces that patchwork with a single source of truth. Finance, inventory, HR and operations all read from and write to the same data, in real time. Reports that took days generate in seconds.",
      "The right time to switch is earlier than most businesses think — usually when you pass ten staff, a second location, or your first serious audit. Waiting longer means migrating more mess.",
      "We implement ERP systems matched to your size and budget, with training for your team included. Let's talk about what switching would look like for you.",
    ],
  },
];
