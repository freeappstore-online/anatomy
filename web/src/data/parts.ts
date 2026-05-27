import type { BodyPart } from "../types";

export const bodyParts: BodyPart[] = [
  // ── Skeletal ──────────────────────────────────────────────
  {
    id: "skull",
    name: "Skull",
    system: "skeletal",
    function:
      "The skull is a bony structure that protects the brain and forms the shape of the face. It consists of 22 bones fused together, providing attachment points for facial muscles.",
    funFact:
      "A newborn's skull has soft spots called fontanelles that allow the brain to grow. They fully fuse by about age 2.",
    related: ["spine", "brain"],
  },
  {
    id: "spine",
    name: "Spine",
    system: "skeletal",
    function:
      "The spine (vertebral column) supports the body's weight, protects the spinal cord, and allows flexible movement. It consists of 33 vertebrae stacked in an S-curve.",
    funFact:
      "Astronauts can grow up to 2 inches taller in space because the lack of gravity lets the spinal discs expand.",
    related: ["skull", "ribs", "pelvis", "spinal-cord"],
  },
  {
    id: "ribs",
    name: "Ribs",
    system: "skeletal",
    function:
      "The 12 pairs of ribs form a protective cage around the heart and lungs. They expand and contract during breathing to help draw air into the lungs.",
    funFact:
      "Most people have 12 pairs of ribs, but about 1 in 200 people are born with an extra cervical rib.",
    related: ["spine", "lungs", "heart"],
  },
  {
    id: "pelvis",
    name: "Pelvis",
    system: "skeletal",
    function:
      "The pelvis supports the weight of the upper body and transfers it to the legs. It also protects the bladder, intestines, and reproductive organs.",
    funFact:
      "The pelvis is one of the most reliable bones for determining biological sex from a skeleton, due to differences related to childbirth.",
    related: ["spine", "femur"],
  },
  {
    id: "femur",
    name: "Femur",
    system: "skeletal",
    function:
      "The femur (thigh bone) is the longest and strongest bone in the body. It supports the full weight of the body and enables walking, running, and jumping.",
    funFact:
      "The femur is stronger than concrete — it can support up to 30 times the weight of an adult.",
    related: ["pelvis", "tibia", "quadriceps", "hamstrings"],
  },
  {
    id: "tibia",
    name: "Tibia",
    system: "skeletal",
    function:
      "The tibia (shinbone) is the larger of the two lower leg bones. It bears most of the body's weight between the knee and ankle.",
    funFact:
      "The tibia is the most commonly fractured long bone, often from sports injuries or direct impact.",
    related: ["femur", "calves"],
  },
  {
    id: "humerus",
    name: "Humerus",
    system: "skeletal",
    function:
      "The humerus is the long bone of the upper arm, connecting the shoulder to the elbow. It provides attachment for muscles that move the arm and forearm.",
    funFact:
      "Hitting your 'funny bone' actually compresses the ulnar nerve against the humerus — the name is a pun on 'humorous.'",
    related: ["scapula", "radius", "ulna", "biceps", "triceps"],
  },
  {
    id: "radius",
    name: "Radius",
    system: "skeletal",
    function:
      "The radius is the shorter forearm bone on the thumb side. It allows the forearm to rotate, enabling you to turn your palm up and down.",
    funFact:
      "The radius is the most commonly broken bone in the arm, often from falling on an outstretched hand.",
    related: ["humerus", "ulna", "hands"],
  },
  {
    id: "ulna",
    name: "Ulna",
    system: "skeletal",
    function:
      "The ulna is the longer forearm bone on the pinky side. It forms the point of the elbow and stabilizes the forearm during rotation.",
    funFact:
      "The olecranon process at the tip of the ulna is what you feel when you lean on your elbow.",
    related: ["humerus", "radius", "hands"],
  },
  {
    id: "scapula",
    name: "Scapula",
    system: "skeletal",
    function:
      "The scapula (shoulder blade) is a flat triangular bone that connects the upper arm to the collarbone. It provides attachment for 17 different muscles.",
    funFact:
      "The scapula is one of the most mobile bones in the body — it can slide, rotate, and tilt across the back of the ribcage.",
    related: ["clavicle", "humerus", "trapezius"],
  },
  {
    id: "clavicle",
    name: "Clavicle",
    system: "skeletal",
    function:
      "The clavicle (collarbone) connects the arm to the body and transmits forces from the upper limb to the skeleton. It also protects underlying nerves and blood vessels.",
    funFact:
      "The clavicle is the most frequently broken bone in the human body and the first bone to begin ossifying in a fetus.",
    related: ["scapula", "ribs"],
  },
  {
    id: "hands",
    name: "Hand Bones",
    system: "skeletal",
    function:
      "Each hand contains 27 bones — 8 carpals, 5 metacarpals, and 14 phalanges. This complex arrangement allows the incredible dexterity humans are known for.",
    funFact:
      "There are no muscles in your fingers. Finger movement is controlled entirely by muscles in the palm and forearm via tendons.",
    related: ["radius", "ulna"],
  },
  {
    id: "feet",
    name: "Foot Bones",
    system: "skeletal",
    function:
      "Each foot has 26 bones forming arches that absorb shock and distribute weight. The foot acts as a lever for propulsion during walking and running.",
    funFact:
      "The feet contain a quarter of all the bones in the human body — 52 bones total across both feet.",
    related: ["tibia"],
  },

  // ── Muscular ──────────────────────────────────────────────
  {
    id: "biceps",
    name: "Biceps",
    system: "muscular",
    function:
      "The biceps brachii is a two-headed muscle on the front of the upper arm. It flexes the elbow and rotates the forearm to turn the palm upward (supination).",
    funFact:
      "Despite its fame, the biceps contributes only about 30% of elbow flexion force — the brachialis underneath does most of the work.",
    related: ["triceps", "humerus", "deltoids"],
  },
  {
    id: "triceps",
    name: "Triceps",
    system: "muscular",
    function:
      "The triceps brachii is a three-headed muscle on the back of the upper arm. It extends the elbow and is essential for pushing movements.",
    funFact:
      "The triceps makes up about two-thirds of your upper arm mass — larger than the biceps most people focus on.",
    related: ["biceps", "humerus", "deltoids"],
  },
  {
    id: "deltoids",
    name: "Deltoids",
    system: "muscular",
    function:
      "The deltoid is a large triangular muscle covering the shoulder joint. It raises the arm and gives the shoulder its rounded shape.",
    funFact:
      "The deltoid has three distinct sections (anterior, lateral, posterior) that can contract independently for different arm movements.",
    related: ["biceps", "triceps", "pectorals", "trapezius"],
  },
  {
    id: "pectorals",
    name: "Pectorals",
    system: "muscular",
    function:
      "The pectoralis major is the large fan-shaped muscle of the chest. It pulls the arm across the body, rotates it inward, and assists in deep breathing.",
    funFact:
      "The pectoralis minor, hidden beneath the major, is a key muscle in shrugging and is often involved in 'rounded shoulder' posture.",
    related: ["deltoids", "abdominals", "ribs"],
  },
  {
    id: "abdominals",
    name: "Abdominals",
    system: "muscular",
    function:
      "The abdominal muscles (rectus abdominis, obliques, transversus) support the spine, protect internal organs, and enable trunk flexion and rotation.",
    funFact:
      "Everyone has a 'six-pack' — the rectus abdominis always has tendinous intersections creating segments. They're just hidden under body fat in most people.",
    related: ["pectorals", "quadriceps", "glutes"],
  },
  {
    id: "quadriceps",
    name: "Quadriceps",
    system: "muscular",
    function:
      "The quadriceps is a group of four muscles on the front of the thigh. They extend the knee and are essential for walking, running, squatting, and jumping.",
    funFact:
      "The quadriceps can generate forces of over 300 kg during explosive movements like jumping — making them the strongest muscle group.",
    related: ["hamstrings", "femur", "glutes"],
  },
  {
    id: "hamstrings",
    name: "Hamstrings",
    system: "muscular",
    function:
      "The hamstrings are three muscles on the back of the thigh. They flex the knee, extend the hip, and are critical for deceleration in running.",
    funFact:
      "The name 'hamstring' comes from old butchering practices — pigs were hung by the tendons behind the knee, the 'ham strings.'",
    related: ["quadriceps", "femur", "glutes", "calves"],
  },
  {
    id: "glutes",
    name: "Glutes",
    system: "muscular",
    function:
      "The gluteal muscles (maximus, medius, minimus) extend and rotate the hip, stabilize the pelvis, and are essential for upright posture and locomotion.",
    funFact:
      "The gluteus maximus is the largest muscle in the human body and generates most of the power in climbing stairs and sprinting.",
    related: ["hamstrings", "quadriceps", "pelvis"],
  },
  {
    id: "calves",
    name: "Calves",
    system: "muscular",
    function:
      "The calf muscles (gastrocnemius and soleus) plantar-flex the ankle, enabling you to push off the ground when walking, running, or standing on tiptoe.",
    funFact:
      "The calf muscles act as a 'second heart' — their contractions pump blood back up through leg veins against gravity.",
    related: ["hamstrings", "tibia", "feet"],
  },
  {
    id: "trapezius",
    name: "Trapezius",
    system: "muscular",
    function:
      "The trapezius is a large diamond-shaped muscle spanning the upper back and neck. It moves, rotates, and stabilizes the scapula and supports the arm.",
    funFact:
      "The trapezius is one of the widest muscles in the body, extending from the skull base to the mid-back and out to each shoulder.",
    related: ["deltoids", "latissimus-dorsi", "scapula"],
  },
  {
    id: "latissimus-dorsi",
    name: "Latissimus Dorsi",
    system: "muscular",
    function:
      "The latissimus dorsi (lats) is the broadest muscle of the back. It pulls the arms down and back, and is the primary muscle in pull-ups and swimming strokes.",
    funFact:
      "The lats are the only muscle that connects the upper limbs to the spine — and surgeons sometimes transplant a lat flap to reconstruct the chest wall.",
    related: ["trapezius", "glutes", "spine"],
  },

  // ── Circulatory ───────────────────────────────────────────
  {
    id: "heart",
    name: "Heart",
    system: "circulatory",
    function:
      "The heart is a muscular pump that circulates blood throughout the body. It beats about 100,000 times a day, delivering oxygen and nutrients to every cell.",
    funFact:
      "The heart generates enough pressure to squirt blood 30 feet, and it will beat about 2.5 billion times in an average lifetime.",
    related: ["arteries", "veins", "lungs"],
  },
  {
    id: "arteries",
    name: "Arteries",
    system: "circulatory",
    function:
      "Arteries carry oxygen-rich blood away from the heart to the body's tissues. Their thick, elastic walls withstand the high pressure of each heartbeat.",
    funFact:
      "If you laid all your arteries, veins, and capillaries end to end, they would stretch about 60,000 miles — enough to circle Earth twice.",
    related: ["heart", "veins"],
  },
  {
    id: "veins",
    name: "Veins",
    system: "circulatory",
    function:
      "Veins return oxygen-depleted blood from the body back to the heart. They contain one-way valves that prevent blood from flowing backward.",
    funFact:
      "Veins appear blue through the skin not because the blood is blue, but because of how light penetrates and is absorbed by skin tissue.",
    related: ["heart", "arteries"],
  },

  // ── Respiratory ───────────────────────────────────────────
  {
    id: "lungs",
    name: "Lungs",
    system: "respiratory",
    function:
      "The lungs are spongy organs that exchange oxygen and carbon dioxide with the blood. They contain about 300 million alveoli providing a huge surface area for gas exchange.",
    funFact:
      "If you spread out all the alveoli in your lungs flat, they would cover an area roughly the size of a tennis court.",
    related: ["trachea", "bronchi", "diaphragm", "heart", "ribs"],
  },
  {
    id: "trachea",
    name: "Trachea",
    system: "respiratory",
    function:
      "The trachea (windpipe) is a tube reinforced by C-shaped cartilage rings that channels air between the larynx and the bronchi. It filters, warms, and moistens incoming air.",
    funFact:
      "The trachea's cartilage rings are C-shaped (open at the back) so the esophagus behind it can expand when you swallow food.",
    related: ["bronchi", "lungs", "esophagus"],
  },
  {
    id: "bronchi",
    name: "Bronchi",
    system: "respiratory",
    function:
      "The bronchi are two main airways that branch from the trachea into each lung. They continue subdividing into smaller bronchioles, forming a tree-like network.",
    funFact:
      "The right bronchus is shorter, wider, and more vertical than the left — which is why accidentally inhaled objects more often end up in the right lung.",
    related: ["trachea", "lungs"],
  },
  {
    id: "diaphragm",
    name: "Diaphragm",
    system: "respiratory",
    function:
      "The diaphragm is a dome-shaped muscle below the lungs that contracts to create suction for inhalation. It's the primary muscle of breathing.",
    funFact:
      "Hiccups are caused by involuntary spasms of the diaphragm, followed by a sudden closure of the vocal cords that produces the 'hic' sound.",
    related: ["lungs", "abdominals", "ribs"],
  },

  // ── Digestive ─────────────────────────────────────────────
  {
    id: "esophagus",
    name: "Esophagus",
    system: "digestive",
    function:
      "The esophagus is a muscular tube that transports food from the mouth to the stomach via rhythmic contractions called peristalsis.",
    funFact:
      "Peristalsis is so effective that you can eat and drink upside down — gravity isn't needed to move food to your stomach.",
    related: ["stomach", "trachea"],
  },
  {
    id: "stomach",
    name: "Stomach",
    system: "digestive",
    function:
      "The stomach is a muscular sac that churns food with hydrochloric acid and enzymes, breaking it into a semi-liquid called chyme before passing it to the small intestine.",
    funFact:
      "Your stomach gets a completely new lining every 3-4 days — if it didn't, the strong acid would digest the stomach itself.",
    related: ["esophagus", "small-intestine", "liver", "pancreas"],
  },
  {
    id: "liver",
    name: "Liver",
    system: "digestive",
    function:
      "The liver is the body's largest internal organ. It processes nutrients, detoxifies harmful substances, produces bile for fat digestion, and stores glycogen for energy.",
    funFact:
      "The liver is the only organ that can regenerate itself. You can lose up to 75% of your liver, and it will grow back to full size.",
    related: ["stomach", "gallbladder", "small-intestine", "pancreas"],
  },
  {
    id: "small-intestine",
    name: "Small Intestine",
    system: "digestive",
    function:
      "The small intestine is where most nutrient absorption occurs. Its inner surface is covered with finger-like villi that massively increase the absorptive area.",
    funFact:
      "The small intestine is about 20 feet long, but its folded, villi-covered surface provides an absorption area the size of a studio apartment.",
    related: ["stomach", "large-intestine", "liver", "pancreas"],
  },
  {
    id: "large-intestine",
    name: "Large Intestine",
    system: "digestive",
    function:
      "The large intestine (colon) absorbs water and salts from undigested material, forming solid waste. It also hosts trillions of beneficial bacteria.",
    funFact:
      "Your large intestine contains about 100 trillion bacteria — there are more bacteria in your colon than human cells in your entire body.",
    related: ["small-intestine"],
  },
  {
    id: "pancreas",
    name: "Pancreas",
    system: "digestive",
    function:
      "The pancreas produces digestive enzymes and hormones (insulin and glucagon) that regulate blood sugar levels. It serves both the digestive and endocrine systems.",
    funFact:
      "The pancreas produces about 1.5 liters of digestive juice per day, containing enzymes powerful enough to digest the organ itself if released incorrectly.",
    related: ["stomach", "liver", "small-intestine"],
  },
  {
    id: "gallbladder",
    name: "Gallbladder",
    system: "digestive",
    function:
      "The gallbladder stores and concentrates bile produced by the liver. When you eat fatty food, it contracts and releases bile to help digest fats.",
    funFact:
      "You can live perfectly well without a gallbladder — the liver just drips bile directly into the intestine instead of storing it.",
    related: ["liver", "small-intestine"],
  },

  // ── Nervous ───────────────────────────────────────────────
  {
    id: "brain",
    name: "Brain",
    system: "nervous",
    function:
      "The brain is the control center of the nervous system. It processes sensory information, regulates body functions, and is responsible for thought, memory, emotion, and consciousness.",
    funFact:
      "The brain uses about 20% of the body's total energy despite being only 2% of body weight. It contains roughly 86 billion neurons.",
    related: ["spinal-cord", "skull"],
  },
  {
    id: "spinal-cord",
    name: "Spinal Cord",
    system: "nervous",
    function:
      "The spinal cord is a long bundle of nerves running through the spine. It relays signals between the brain and body, and controls reflexes independently.",
    funFact:
      "The spinal cord stops growing at about age 4, even though the spine continues to lengthen — which is why the cord only reaches the upper lumbar region in adults.",
    related: ["brain", "spine", "sciatic-nerve", "brachial-plexus"],
  },
  {
    id: "sciatic-nerve",
    name: "Sciatic Nerve",
    system: "nervous",
    function:
      "The sciatic nerve is the longest and thickest nerve in the body. It runs from the lower back through the hips and down each leg, controlling movement and sensation.",
    funFact:
      "The sciatic nerve is about as thick as your thumb. Sciatica — compression of this nerve — affects up to 40% of people at some point.",
    related: ["spinal-cord", "brain", "hamstrings", "glutes"],
  },
  {
    id: "brachial-plexus",
    name: "Brachial Plexus",
    system: "nervous",
    function:
      "The brachial plexus is a network of nerves originating from the spinal cord in the neck. It sends signals to the shoulder, arm, and hand, controlling all their movement and sensation.",
    funFact:
      "A 'stinger' or 'burner' in contact sports is a temporary brachial plexus stretch injury, causing a burning sensation that shoots down the arm.",
    related: ["spinal-cord", "brain", "biceps", "triceps", "hands"],
  },
];

export const bodyPartMap = new Map(bodyParts.map((p) => [p.id, p]));

/** Parts considered "easy" for quiz mode — the most recognizable organs. */
export const easyPartIds = new Set([
  "skull",
  "spine",
  "ribs",
  "femur",
  "heart",
  "lungs",
  "brain",
  "stomach",
  "liver",
  "biceps",
  "quadriceps",
]);
