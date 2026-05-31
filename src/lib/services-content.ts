import type { PortfolioCategory } from "./constants";

export interface ServiceSection {
  heading: string;
  body: string[];
}

export interface ServiceContent {
  slug: string;
  name: string;
  /** One-line blurb for cards. */
  blurb: string;
  /** Short hero subhead. */
  tagline: string;
  metaTitle: string;
  metaDescription: string;
  /** Lead paragraph(s) under the H1. */
  intro: string[];
  sections: ServiceSection[];
  faqs: { q: string; a: string }[];
  photoCategory: PortfolioCategory | null;
  related: string[];
}

export const SERVICES_CONTENT: Record<string, ServiceContent> = {
  "stamped-concrete": {
    slug: "stamped-concrete",
    name: "Stamped & Decorative Concrete",
    blurb:
      "Patterned, colored concrete that mimics stone, slate, brick, or wood for a high-end look at a concrete price.",
    tagline: "The look of stone, brick, or slate without the upkeep.",
    metaTitle: "Stamped Concrete, Post Falls ID",
    metaDescription:
      "Stamped and decorative concrete in Post Falls and North Idaho. Patios, walkways, and entries that mimic stone, slate, and brick. Free estimates: 208-640-1883.",
    intro: [
      "Stamped concrete gives you the look of natural stone, slate, brick, or wood plank without the price tag or the weeds that creep up between pavers. We press patterns and color into freshly poured concrete so the finish is part of the slab itself, not a topping that peels away. The result is a one-piece surface that holds up to North Idaho winters and looks like it cost a lot more than it did.",
    ],
    sections: [
      {
        heading: "What stamped concrete is",
        body: [
          "After we pour and level the slab, we work in color with an integral mix or a broadcast color hardener, then press textured stamps into the surface while the concrete is still workable. A release agent keeps the stamps clean and adds a second, subtle accent color. Once it cures, we seal it. You end up with a durable, continuous surface that reads like flagstone or tumbled brick but has none of the joints that pavers do.",
          "Common uses around Post Falls are back patios, front entries and porches, walkways, and pool decks. It pairs well with broomed or smooth concrete in the same project, so you can keep the driveway simple and make the patio the showpiece.",
        ],
      },
      {
        heading: "Why it holds up in North Idaho",
        body: [
          "Our freeze and thaw swings are hard on decorative surfaces. Water finds every gap, freezes overnight, and pries materials apart. Because stamped concrete is a single monolithic slab on a properly compacted base, there are no individual units to heave or shift the way pavers do. We air-entrain the mix so it can handle the cold, slope the surface so meltwater drains away from the house, and finish with a breathable, UV-stable sealer that resists de-icing salts and keeps the color from fading.",
          "Sealer is not a one-and-done step. We will tell you up front how often a stamped surface should be resealed in this climate so it keeps looking sharp, and we can come back and do it for you.",
        ],
      },
      {
        heading: "The Burdett process",
        body: [
          "It starts with a free on-site estimate where Dave looks at the space, talks through patterns and colors, and gives you a straight bid. From there we form the area, build and compact the base, set reinforcement, and pour. The stamping is the part that takes a practiced crew, getting the texture and color consistent before the concrete sets, and that is where our experience shows. We finish by sealing and we leave the site clean.",
        ],
      },
    ],
    faqs: [
      {
        q: "Does stamped concrete get slippery?",
        a: "It can if it is sealed without any additive, especially on a pool deck or a shaded entry. We can mix a fine anti-slip grit into the sealer to add traction where you need it. Just let us know how the area will be used.",
      },
      {
        q: "How long does stamped concrete last?",
        a: "The slab itself can last for decades when it is poured on a good base and sealed. The color and sealer need refreshing periodically in our climate, usually every couple of years depending on sun and traffic, and we are happy to handle that resealing.",
      },
      {
        q: "Can you match a color or pattern I have seen?",
        a: "Usually, yes. Bring us a photo at the estimate. We carry a range of stamp patterns and color options and can get close to most stone, slate, brick, and wood looks.",
      },
    ],
    photoCategory: "stamped",
    related: ["concrete-patios", "concrete-staining-sealing", "sidewalks-walkways-steps"],
  },

  "concrete-driveways": {
    slug: "concrete-driveways",
    name: "Concrete Driveways",
    blurb:
      "Durable, properly drained concrete driveways built on a compacted base to handle North Idaho winters.",
    tagline: "A driveway built to last, poured right the first time.",
    metaTitle: "Concrete Driveways, Post Falls ID",
    metaDescription:
      "New concrete driveways and parking pads in Post Falls and North Idaho. Properly based, reinforced, and drained for freeze-thaw. Free estimates: 208-640-1883.",
    intro: [
      "Your driveway takes more abuse than any other slab on your property. It carries vehicle weight every day, it sits exposed to sun and snow, and it gets hit with plow blades and de-icer all winter. A driveway that was poured on a thin or poorly compacted base will crack, settle, and spall within a few seasons. We build driveways the right way so yours stays flat and solid for the long haul.",
    ],
    sections: [
      {
        heading: "Built on a base that does not move",
        body: [
          "Most driveway failures start underneath the concrete, not in it. We excavate to the proper depth, install and compact a structural gravel base, and grade it for drainage before a single yard of concrete is poured. That base is what keeps the slab from heaving when the ground freezes and settling when it thaws.",
          "We pour at an appropriate thickness for vehicle loads, add reinforcement, and place control joints at the right spacing so the concrete cracks where we want it to, in the joints, instead of randomly across the surface.",
        ],
      },
      {
        heading: "Drainage and freeze-thaw in North Idaho",
        body: [
          "Standing water is the enemy of any driveway here. When water pools on the surface or soaks into the base and freezes, it expands and damages the concrete. We slope every driveway so water runs off and away from your garage and foundation, and we use an air-entrained mix designed to handle repeated freezing. We will also talk with you about de-icer. Some products are much harder on concrete than others, and how you treat a new driveway in its first winter matters.",
        ],
      },
      {
        heading: "The Burdett process",
        body: [
          "Dave comes out, measures, and gives you a free estimate, often the same day. We handle the demo and haul-off if you are replacing an old driveway, build the base, form and reinforce, pour, finish, and cut the joints. Most residential driveways are a quick turnaround once we start, and we keep you in the loop the whole way. You will know when we are coming and when you can drive on it.",
        ],
      },
    ],
    faqs: [
      {
        q: "How long before I can drive on a new concrete driveway?",
        a: "Plan on staying off it with vehicles for about a week so the concrete can gain strength, though you can usually walk on it within a day or two. We will give you exact timing for your pour and weather.",
      },
      {
        q: "Concrete or asphalt for a driveway?",
        a: "Concrete costs more up front but lasts longer, needs less maintenance, and does not soften in summer heat. In our climate a well-built concrete driveway is the better long-term value for most homeowners.",
      },
      {
        q: "Will my new driveway crack?",
        a: "All concrete moves, which is why we place control joints to direct where any cracking happens. A properly based, jointed, and reinforced driveway should not develop the kind of structural cracks you see on slabs that were rushed.",
      },
    ],
    photoCategory: "driveways",
    related: ["broomed-flatwork", "concrete-removal-replacement", "concrete-patios"],
  },

  "concrete-patios": {
    slug: "concrete-patios",
    name: "Concrete Patios",
    blurb:
      "Custom backyard patios sized and finished to fit how you actually use your outdoor space.",
    tagline: "Outdoor living space built to fit your yard and your plans.",
    metaTitle: "Concrete Patios, Post Falls ID",
    metaDescription:
      "Custom concrete patios in Post Falls and North Idaho. Broomed, smooth, or stamped finishes, built to scale and drained right. Free estimates: 208-640-1883.",
    intro: [
      "A good patio is the difference between a yard you look at and a yard you live in. Whether you want a simple spot for the grill and a couple of chairs or a large entertaining space with room for a table, a fire pit, and a hot tub, we build patios to scale and finish them the way you want, from a clean broom finish to full stamped and colored concrete.",
    ],
    sections: [
      {
        heading: "Designed around how you will use it",
        body: [
          "We start by talking through what the space is for. How many people, what furniture, do you want it to flow off an existing slab or door, do you want a path connecting it to the driveway or a side gate. One of the reasons customers keep mentioning us by name is that we will build to a to-scale design instead of guessing. You get a patio that actually fits the furniture and the people you had in mind.",
          "Finish options include broomed concrete for a clean, slip-resistant surface, smooth troweled concrete, or stamped and colored concrete when you want the patio to be the centerpiece. We can also combine finishes, for example a stamped border around a broomed field.",
        ],
      },
      {
        heading: "Drainage that protects your home",
        body: [
          "A patio sits right against the house in most yards, so getting the slope right is not optional. We pitch the slab so water drains away from your foundation, never toward it. We compact the base so the patio does not settle and pull away from the house, and we use an air-entrained mix and proper joints so it stands up to our freeze-thaw winters. Done right, your patio stays flat and tight to the house for years.",
        ],
      },
      {
        heading: "The Burdett process",
        body: [
          "It begins with a free on-site estimate. Several of our patio customers note that Dave came out the next day and gave a same-day bid while other contractors took weeks just to call back. From there we form the space, build and compact the base, set reinforcement, pour, and finish. We keep the work area clean and we finish quickly, which is exactly what people tell us they appreciate.",
        ],
      },
    ],
    faqs: [
      {
        q: "What finish is best for a patio?",
        a: "A broom finish is the most popular because it is slip resistant and easy to live with. If you want more of a wow factor, stamped and colored concrete looks like stone or slate. We will walk you through the trade-offs at the estimate.",
      },
      {
        q: "Can you extend or expand my existing patio?",
        a: "Yes. We do patio expansions and additions regularly, and we will match the new work to the existing slab as closely as the conditions allow, including tying in a side walkway if you want one.",
      },
      {
        q: "How big should my patio be?",
        a: "It depends on your furniture and how you entertain. A rough rule is to allow room for the table or seating plus space to walk around it. We will help you size it during the estimate so it does not end up feeling cramped.",
      },
    ],
    photoCategory: "patios",
    related: ["stamped-concrete", "broomed-flatwork", "sidewalks-walkways-steps"],
  },

  "broomed-flatwork": {
    slug: "broomed-flatwork",
    name: "Broomed Flatwork",
    blurb:
      "Clean, slip-resistant broom-finished concrete for slabs, pads, and everyday surfaces.",
    tagline: "The dependable, slip-resistant workhorse finish.",
    metaTitle: "Broomed Flatwork, Post Falls ID",
    metaDescription:
      "Broomed concrete flatwork in Post Falls and North Idaho. Slabs, pads, garage floors, and walkways with a slip-resistant finish. Free estimates: 208-640-1883.",
    intro: [
      "Broomed flatwork is the bread and butter of good concrete work, and it is what a lot of your property is built on: garage and shop slabs, RV and equipment pads, walkways, utility areas, and the flat surfaces around the home. The broom finish gives a fine texture that sheds water and provides traction underfoot, which matters when these surfaces ice over in winter.",
    ],
    sections: [
      {
        heading: "What broomed flatwork is good for",
        body: [
          "Once the concrete is poured and floated smooth, we drag a broom across the surface to create a consistent, fine texture. It is the standard finish for good reason: it looks clean, it is durable, and it is far less slippery than a smooth trowel finish when wet or icy. We use it for sidewalks, garage and shop floors, equipment and RV pads, AC and generator pads, shed and outbuilding slabs, and general flatwork around the property.",
          "The texture direction and consistency are part of doing it well. A sloppy broom finish looks busy and uneven. We keep the lines straight and uniform so the finished surface looks intentional.",
        ],
      },
      {
        heading: "Base and freeze-thaw matter here too",
        body: [
          "It is easy to think of flatwork as simple, but the same rules apply. We compact the base, pour at the right thickness for the use, reinforce where it is warranted, and cut control joints so the slab cracks in the joints instead of across the field. We slope surfaces for drainage and use an air-entrained mix so the concrete can take North Idaho's freeze-thaw cycles without spalling. The difference between flatwork that lasts and flatwork that fails is almost always what happened before and during the pour, not after.",
        ],
      },
      {
        heading: "The Burdett process",
        body: [
          "Dave gives you a free, straight estimate. We handle removal of any old slab, prep and compact the base, form, reinforce, pour, finish, and joint. We show up when we say we will, keep the work area clean, and finish quickly. It is not flashy work, but it is the kind of dependable concrete that makes a property function, and we take it seriously.",
        ],
      },
    ],
    faqs: [
      {
        q: "Is a broom finish slippery in winter?",
        a: "Far less than a smooth finish. The broom texture gives traction, which is exactly why it is the standard for walkways and exterior slabs in a climate like ours. No finish is fully ice-proof, but broomed concrete is the safe choice outdoors.",
      },
      {
        q: "Can you pour a garage or shop floor?",
        a: "Yes. Garage, shop, and outbuilding slabs are some of our most common flatwork jobs. We build them to handle vehicle and equipment loads and finish them so they are easy to keep clean.",
      },
      {
        q: "Do you do RV and equipment pads?",
        a: "We do. We will size and thicken the pad for the load you are parking on it, whether that is an RV, a trailer, or heavy equipment.",
      },
    ],
    photoCategory: "broomed",
    related: ["concrete-driveways", "sidewalks-walkways-steps", "commercial-concrete"],
  },

  "sidewalks-walkways-steps": {
    slug: "sidewalks-walkways-steps",
    name: "Sidewalks, Walkways & Steps",
    blurb:
      "Safe, even walkways and steps that connect your property and stand up to winter.",
    tagline: "Get from A to B safely, in every season.",
    metaTitle: "Walkways & Steps, Post Falls ID",
    metaDescription:
      "Concrete sidewalks, walkways, and steps in Post Falls and North Idaho. Even, slip-resistant, and built for freeze-thaw. Free estimates from Dave: 208-640-1883.",
    intro: [
      "Walkways and steps are where safety and curb appeal meet. They are also the surfaces most likely to cause a trip or a fall when they are uneven, poorly drained, or icy. We build sidewalks, garden paths, entry walks, and steps that are level, properly pitched, and finished for traction so they are safe to use year-round and add to the look of your home.",
    ],
    sections: [
      {
        heading: "Walkways done right",
        body: [
          "A good walkway has consistent width, a smooth and even surface with no lips to catch a toe, and a slight cross-slope so water runs off instead of pooling and freezing. We typically give walkways a broom finish for grip, and we can add a stamped or colored border to dress up a front entry. Whether you need a straight run from the driveway to the door or a path that wraps around the house to a side gate or patio, we form it to follow your yard cleanly.",
        ],
      },
      {
        heading: "Steps that are safe and consistent",
        body: [
          "Steps are unforgiving when they are built wrong. Risers that are uneven in height or treads that are too shallow are a real hazard, especially when they ice up. We build steps with consistent riser heights and proper tread depth, pitch the treads so water sheds, and finish them for traction. For entries we can stamp and color the steps to match a porch or walkway so the whole approach to the house looks like one project.",
          "Because steps and entries take direct weather and foot traffic, sealing and drainage are important. We will set them up to drain and advise you on keeping them in good shape through winter.",
        ],
      },
      {
        heading: "The Burdett process",
        body: [
          "As with all our work, it starts with a free estimate from Dave. We form, base, reinforce, pour, and finish, paying close attention to slope and to matching grades where the walk meets driveways, patios, and doorways so there are no awkward lips or low spots. We are punctual, we communicate, and we leave the site clean.",
        ],
      },
    ],
    faqs: [
      {
        q: "Can you fix an uneven or trip-hazard walkway?",
        a: "Often the cleanest fix is to remove and replace the affected sections so the new walk is level and drains properly. We will look at it during the estimate and give you a straight recommendation.",
      },
      {
        q: "Do you build concrete steps for entries?",
        a: "Yes, including stamped and colored steps that match a porch or walkway. We build them with consistent risers and treads and finish them for traction.",
      },
      {
        q: "How do you keep walkways from getting icy?",
        a: "We pitch them so water drains off rather than pooling, and we use a broom finish for grip. Good drainage is the biggest factor in keeping a walkway safe through a North Idaho winter.",
      },
    ],
    photoCategory: "walkways",
    related: ["broomed-flatwork", "stamped-concrete", "concrete-patios"],
  },

  "concrete-staining-sealing": {
    slug: "concrete-staining-sealing",
    name: "Concrete Staining & Sealing",
    blurb:
      "Color and protection for new or existing concrete that keeps it looking good and lasting longer.",
    tagline: "Protect what you have and make it look better doing it.",
    metaTitle: "Staining & Sealing, Post Falls ID",
    metaDescription:
      "Concrete staining and sealing in Post Falls and North Idaho. Add color and protect patios, driveways, and floors from freeze-thaw. Call Dave: 208-640-1883.",
    intro: [
      "Sealing is the maintenance step that quietly doubles the life of your concrete, and staining is the easy way to add warmth and color to a surface you already have. We stain and seal new pours and existing concrete alike, on patios, walkways, steps, driveways, and floors. In our climate, a sealed surface resists the water intrusion, freeze-thaw damage, and de-icer that chew up unprotected concrete.",
    ],
    sections: [
      {
        heading: "Why sealing matters in North Idaho",
        body: [
          "Unsealed concrete is porous. Water soaks in, freezes, expands, and over many cycles causes the surface to flake and spall. De-icing salts accelerate the damage. A quality sealer keeps water and salt out of the surface, which is the single most cost-effective thing you can do to extend the life of a slab here. It also makes the surface easier to clean and helps it resist oil and stains.",
          "Sealer wears, especially in high-traffic and high-sun areas, so it needs to be refreshed on a schedule. We will tell you honestly how often your surface should be resealed and we can come back and do it, so you are not left guessing.",
        ],
      },
      {
        heading: "Staining for color",
        body: [
          "Staining lets you add rich, lasting color to concrete, from warm earth tones to deeper accent colors. It is a great way to transform a plain gray slab, a set of entry steps, or an older patio without tearing anything out. We prep the surface properly, apply the stain evenly, and seal over it so the color is protected. Done well, a stained and sealed surface looks like a deliberate design choice, not a coat of paint.",
        ],
      },
      {
        heading: "The Burdett process",
        body: [
          "We start with a free estimate and an honest look at the surface, because staining and sealing only work over concrete that is sound and properly prepped. We clean and prepare the surface, apply stain if you want color, and seal it. If you also want anti-slip traction added to the sealer for steps or a pool deck, we can do that. We keep the work clean and tell you when the surface is ready to use.",
        ],
      },
    ],
    faqs: [
      {
        q: "How often should concrete be resealed here?",
        a: "It depends on sun and traffic, but exterior concrete in our climate generally benefits from resealing every couple of years. We will give you a realistic interval for your specific surface and can handle the resealing for you.",
      },
      {
        q: "Can you stain my existing patio or driveway?",
        a: "In most cases, yes, as long as the concrete is sound. Staining is a great way to add color to an existing surface without replacing it. We will confirm it is a good candidate at the estimate.",
      },
      {
        q: "Will sealing make my concrete slippery?",
        a: "A sealed surface can be slicker when wet. For steps, entries, and pool decks we add a fine anti-slip grit into the sealer to keep traction where you need it.",
      },
    ],
    photoCategory: "staining-sealing",
    related: ["stamped-concrete", "concrete-patios", "concrete-driveways"],
  },

  "concrete-removal-replacement": {
    slug: "concrete-removal-replacement",
    name: "Concrete Removal & Replacement",
    blurb:
      "Tear out failed, cracked, or settled concrete and replace it with a slab built to last.",
    tagline: "Out with the old, in with concrete done right.",
    metaTitle: "Concrete Removal, Post Falls ID",
    metaDescription:
      "Concrete removal and replacement in Post Falls and North Idaho. We tear out failing concrete and pour new slabs on a proper base. Free estimates: 208-640-1883.",
    intro: [
      "Sometimes a slab is too far gone to repair. Concrete that is badly cracked, heaved, sunken, spalled, or poured on a failing base will keep getting worse, and patching it is throwing good money after bad. We remove old concrete cleanly, fix what went wrong underneath, and replace it with a new slab built the right way so you are not dealing with the same problem again in a few years.",
    ],
    sections: [
      {
        heading: "When replacement beats repair",
        body: [
          "A hairline crack or a small chip can often be left alone or sealed. But when a driveway has heaved into trip hazards, a patio has settled and is pitching water toward the house, or a slab is crumbling and spalling across the surface, the underlying cause is usually a bad base or water that was never managed. Patching the top does not fix the base. Removal and replacement lets us correct the real problem, the grading, drainage, and compaction underneath, and start clean.",
        ],
      },
      {
        heading: "Clean tear-out, proper rebuild",
        body: [
          "We break out and haul away the old concrete, then turn our attention to why it failed. We re-establish a properly compacted base, correct the grading so water drains away from your home, add reinforcement, and pour a new slab with the right thickness, joints, and an air-entrained mix for our freeze-thaw climate. The new surface is finished to match what you need, broomed, smooth, or stamped. The goal is simple: the replacement should outlast the original by a wide margin because it is built on a foundation that was done right.",
        ],
      },
      {
        heading: "The Burdett process",
        body: [
          "Dave comes out, looks at the failing concrete, and gives you a free, honest assessment of whether it needs full replacement or something less. If replacement is the right call, we handle the demolition and haul-off, the base work, and the new pour from start to finish. We keep the site clean through what is otherwise a messy job, and we keep you informed at every step.",
        ],
      },
    ],
    faqs: [
      {
        q: "Do I need to replace my whole driveway or just part of it?",
        a: "It depends on the condition. Sometimes we can remove and replace just the failed sections and tie them in cleanly; other times a full replacement is the better value. We will give you a straight recommendation at the estimate.",
      },
      {
        q: "What causes concrete to fail in the first place?",
        a: "Most often it is a poor or poorly compacted base, water that was never drained away from the slab, or a mix and joint layout that did not account for freeze-thaw. We fix those root causes during replacement so the new slab does not repeat the failure.",
      },
      {
        q: "Do you haul away the old concrete?",
        a: "Yes. Demolition and haul-off are part of the job. You do not need to arrange disposal separately.",
      },
    ],
    photoCategory: "driveways",
    related: ["concrete-driveways", "broomed-flatwork", "concrete-patios"],
  },

  "commercial-concrete": {
    slug: "commercial-concrete",
    name: "Commercial Concrete",
    blurb:
      "Parking lots, slabs, sidewalks, and commercial flatwork built to spec and on schedule.",
    tagline: "Concrete that keeps your business open and looking sharp.",
    metaTitle: "Commercial Concrete in Post Falls",
    metaDescription:
      "Commercial concrete in Post Falls and North Idaho: parking lots, slabs, sidewalks, and flatwork. Licensed, bonded, and insured. Free estimates: 208-640-1883.",
    intro: [
      "Commercial concrete has to do two jobs at once: handle heavier loads and traffic than residential work, and look professional while it does it. We pour parking lots, building slabs, sidewalks, approaches, loading and dumpster pads, and general commercial flatwork for businesses around North Idaho. We are licensed, bonded, and insured, and we work to keep your project on schedule and your site usable.",
    ],
    sections: [
      {
        heading: "Built for traffic and loads",
        body: [
          "Commercial surfaces see constant foot and vehicle traffic, and often heavy vehicles like delivery trucks. That changes everything about how the concrete is built: thicker slabs, heavier reinforcement, engineered base and drainage, and joint layouts designed for the loads and the span. We build commercial flatwork to hold up under that use so you are not repaving a lot or patching a slab every couple of seasons.",
          "We handle parking lots and parking pads, building and warehouse slabs, sidewalks and walkways, building approaches and entries, and equipment, loading, and dumpster pads.",
        ],
      },
      {
        heading: "Drainage, safety, and looking professional",
        body: [
          "On a commercial site, drainage is both a maintenance issue and a liability issue. Standing water freezes and becomes a slip hazard and a freeze-thaw problem at the same time. We grade and slope commercial surfaces so water moves to where it should, keep walking surfaces even and slip-resistant, and finish the work cleanly so it reflects well on your business. Customer-facing concrete is part of your first impression, and we treat it that way.",
        ],
      },
      {
        heading: "The Burdett process",
        body: [
          "We start with a free estimate and a clear scope. Because we are locally owned and you deal directly with Dave, communication stays simple, which several of our customers single out as the thing that set us apart when multiple contractors were on site. We coordinate the work to minimize disruption to your operations, keep the site safe and clean, and finish on the schedule we agreed to. Licensed, bonded, and insured means you are covered.",
        ],
      },
    ],
    faqs: [
      {
        q: "Are you licensed, bonded, and insured for commercial work?",
        a: "Yes. We carry a surety bond and general liability insurance, and we are happy to provide proof of coverage for your project.",
      },
      {
        q: "Can you work around our business hours?",
        a: "We will coordinate the work to keep as much of your site usable as possible and to minimize disruption. Talk to us about your operating hours at the estimate and we will plan the phasing around them.",
      },
      {
        q: "Do you do commercial sidewalks and approaches?",
        a: "Yes, including building approaches, entries, and sidewalks. We build them even, slip-resistant, and drained so they are safe for your customers and hold up to traffic.",
      },
    ],
    photoCategory: "walkways",
    related: ["broomed-flatwork", "concrete-driveways", "concrete-removal-replacement"],
  },
};

export function getServiceContent(slug: string): ServiceContent | undefined {
  return SERVICES_CONTENT[slug];
}
