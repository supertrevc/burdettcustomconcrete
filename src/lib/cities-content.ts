export interface CitySection {
  heading: string;
  body: string[];
}

export interface CityContent {
  slug: string;
  name: string;
  metaTitle: string;
  metaDescription: string;
  /** Short subhead under the H1. */
  tagline: string;
  intro: string[];
  sections: CitySection[];
  /** Photo category to feature for this city's gallery. */
  featuredCategory:
    | "broomed"
    | "patios"
    | "driveways"
    | "stamped"
    | "walkways"
    | "staining-sealing";
}

export const CITIES_CONTENT: Record<string, CityContent> = {
  "post-falls": {
    slug: "post-falls",
    name: "Post Falls",
    metaTitle: "Post Falls Concrete Contractor",
    metaDescription:
      "Locally owned concrete contractor in Post Falls, Idaho. Driveways, patios, stamped concrete, and flatwork. Free same-day estimates from Dave. Call 208-640-1883.",
    tagline: "Your hometown concrete crew, based right here in Post Falls.",
    intro: [
      "Post Falls is home. Burdett Custom Concrete is based right here on Chicory Lane, which means when you call us about a project in Post Falls, you are calling a neighbor, not an out-of-town outfit that treats this side of the state line as an afterthought. Dave answers the phone, comes out to look at the job himself, and often has a free bid to you the same day.",
      "Post Falls has grown fast, and a lot of that growth is newer homes that need driveways, patios, walkways, and flatwork finished right. We know the soils, the grading challenges, and how our freeze-thaw winters treat concrete out here, because we live and work in them.",
    ],
    sections: [
      {
        heading: "Concrete built for Post Falls homes",
        body: [
          "From the neighborhoods near Q'emiln Park and the Spokane River to the developments spreading north and east of town, we pour residential concrete that is built to last: driveways on a properly compacted base, backyard patios sized for how you actually entertain, walkways and steps that stay even and safe, and decorative stamped concrete when you want a front entry or patio to stand out.",
          "Because we are local, scheduling is simple and follow-up is easy. If something needs attention down the road, we are a short drive away, not three hours and a state line removed.",
        ],
      },
      {
        heading: "Why Post Falls homeowners choose us",
        body: [
          "Our Post Falls customers tell the same story over and over in their reviews: other contractors took weeks to call back or never showed up, and Dave came out the next day and got the job done. We are licensed, bonded, and insured, we keep the work site clean, and we finish quickly. That reliability is the whole reason people in town keep referring us by name.",
        ],
      },
    ],
    featuredCategory: "stamped",
  },

  "coeur-dalene": {
    slug: "coeur-dalene",
    name: "Coeur d'Alene",
    metaTitle: "Coeur d'Alene Concrete Contractor",
    metaDescription:
      "Concrete contractor serving Coeur d'Alene, Idaho. Driveways, patios, stamped concrete, and flatwork. Free estimates: 208-640-1883.",
    tagline: "Quality concrete for Coeur d'Alene homes, just down the road.",
    intro: [
      "Coeur d'Alene sits a short drive east of our Post Falls shop, so we are out there regularly and can usually get to a job quickly. From the established neighborhoods near downtown and the lake to the newer homes climbing the hills around the city, Coeur d'Alene homeowners expect concrete that looks good and holds up, and that is exactly what we build.",
      "A lakeside city like Coeur d'Alene has its share of higher-end homes where the concrete is part of the curb appeal. We do plenty of straightforward driveways and flatwork, but we are also a good fit when you want stamped, colored, or stained concrete that elevates a patio, pool deck, or entry.",
    ],
    sections: [
      {
        heading: "Decorative and everyday concrete in Coeur d'Alene",
        body: [
          "Stamped and decorative concrete is popular with Coeur d'Alene homeowners who want the look of natural stone or slate on a patio or front walk without the maintenance of pavers. We also pour and finish the bread-and-butter work every home needs: driveways, sidewalks, garage and shop slabs, and backyard patios sized to fit the space.",
          "Whatever the finish, the fundamentals are the same. We build on a compacted base, slope for drainage, reinforce, and use a mix made for freeze-thaw, so your concrete stays flat and tight through Coeur d'Alene winters.",
        ],
      },
      {
        heading: "Local, licensed, and easy to reach",
        body: [
          "We are licensed, bonded, and insured, and being based in nearby Post Falls means you deal directly with Dave and a local crew. You will get a free estimate, clear communication, and a clean job site, the same experience our Coeur d'Alene neighbors describe in their five-star reviews.",
        ],
      },
    ],
    featuredCategory: "patios",
  },

  hayden: {
    slug: "hayden",
    name: "Hayden",
    metaTitle: "Hayden Concrete Contractor",
    metaDescription:
      "Concrete contractor serving Hayden, Idaho. Driveways, patios, walkways, stamped concrete, and flatwork. Free estimates from Dave. Call 208-640-1883.",
    tagline: "Dependable concrete for Hayden's neighborhoods.",
    intro: [
      "Hayden is one of North Idaho's most family-friendly communities, full of established neighborhoods and newer subdivisions alike, and we are proud to serve it. Whether you are near Hayden Lake or in one of the developments off Government Way, we bring the same crew and the same standards we bring to every job in the area.",
      "Hayden homeowners tend to take pride in their properties, and good concrete is a big part of that, from a clean driveway and a welcoming front walk to a backyard patio where the family actually spends time. We build all of it.",
    ],
    sections: [
      {
        heading: "Concrete services for Hayden homeowners",
        body: [
          "We pour residential driveways on a properly compacted base, build patios and walkways finished for traction and drainage, and pour the slabs and pads that keep a property functional: garage floors, shop slabs, and RV and equipment pads. When you want something with more character, our stamped and decorative concrete gives a patio or entry the look of stone or slate.",
          "Drainage matters a lot in Hayden's mix of flat lots and sloped properties. We grade every project so water runs away from your home and does not pool and freeze, which is the most common cause of concrete failure in our climate.",
        ],
      },
      {
        heading: "A local crew you can count on",
        body: [
          "Based just down the highway in Post Falls, we are close enough to respond quickly and to stand behind our work. We are licensed, bonded, and insured, we show up when we say we will, and we keep the site clean. Hayden neighbors get the same prompt, courteous service that has earned us a perfect rating across our Google reviews.",
        ],
      },
    ],
    featuredCategory: "driveways",
  },

  rathdrum: {
    slug: "rathdrum",
    name: "Rathdrum",
    metaTitle: "Rathdrum Concrete Contractor",
    metaDescription:
      "Concrete contractor serving Rathdrum, Idaho. Driveways, patios, flatwork, and stamped concrete for homes and acreage. Free estimates: 208-640-1883.",
    tagline: "Concrete for Rathdrum homes, shops, and acreage.",
    intro: [
      "Rathdrum and the surrounding prairie are a great mix of established homes, growing subdivisions, and acreage properties, and that variety is exactly the kind of work we enjoy. From a new driveway in town to a shop slab or RV pad out on a few acres, we bring the right crew and the right approach to each one.",
      "Properties around Rathdrum often have more room to work with, which means bigger driveways, longer walkways, larger patios, and outbuilding slabs. We are set up to handle that scale and to build it on a base that will not heave or settle.",
    ],
    sections: [
      {
        heading: "Built for Rathdrum properties",
        body: [
          "We pour residential and acreage driveways, including long runs and parking pads, and we build the flatwork that rural and semi-rural properties depend on: shop and garage floors, equipment and RV pads, and outbuilding slabs. Closer to the house, we build patios, walkways, and steps, and we offer stamped and decorative concrete when you want a standout finish.",
          "The Rathdrum Prairie sits over the aquifer, and good drainage and compaction are non-negotiable here. We grade for runoff, compact the base properly, and use a freeze-thaw-rated mix so your concrete performs for the long haul.",
        ],
      },
      {
        heading: "Local service, straightforward bids",
        body: [
          "We are a short drive from Rathdrum in Post Falls, so you get a local contractor who answers the phone and follows through. Free estimates, often same-day, and clear communication from start to finish. Licensed, bonded, and insured, with a clean job site every time.",
        ],
      },
    ],
    featuredCategory: "broomed",
  },

  "spirit-lake": {
    slug: "spirit-lake",
    name: "Spirit Lake",
    metaTitle: "Spirit Lake Concrete Contractor",
    metaDescription:
      "Concrete contractor serving Spirit Lake, Idaho. Driveways, patios, walkways, and flatwork for homes and cabins. Free estimates from Dave. Call 208-640-1883.",
    tagline: "Concrete for Spirit Lake homes and lake properties.",
    intro: [
      "Spirit Lake has a small-town, up-north feel that the people who live there love, and we are glad to make the trip to serve it. Whether it is a year-round home in town or a lake property you want to enjoy more, we build concrete that fits the setting and stands up to North Idaho weather.",
      "Lake-area properties come with their own considerations: slopes down toward the water, drainage that has to be handled carefully, and a desire for outdoor spaces that make the most of the setting. We take all of that into account when we build a patio, walkway, or driveway out here.",
    ],
    sections: [
      {
        heading: "Concrete that fits the Spirit Lake setting",
        body: [
          "We build patios and walkways that turn a lake or wooded property into usable outdoor living space, driveways and parking pads that handle the grade, and the everyday flatwork a property needs, from garage slabs to shed and outbuilding pads. Stamped and stained concrete is a great fit when you want a patio or entry that complements a cabin or lake home.",
          "Up here, drainage and freeze-thaw are front and center. We slope and compact carefully so meltwater moves away from structures, and we use an air-entrained mix and proper joints so the concrete handles hard winters without spalling or heaving.",
        ],
      },
      {
        heading: "Worth the drive, and we mean it",
        body: [
          "Plenty of contractors will not make the trip to Spirit Lake, or they take forever to call back. We will come out, give you a free estimate, and do the job right. We are licensed, bonded, and insured, and we bring the same prompt, clean, reliable service our customers rave about closer to Post Falls.",
        ],
      },
    ],
    featuredCategory: "patios",
  },

  athol: {
    slug: "athol",
    name: "Athol",
    metaTitle: "Athol Concrete Contractor",
    metaDescription:
      "Concrete contractor serving Athol, Idaho. Driveways, shop slabs, patios, and acreage flatwork. Free estimates from Dave. Call 208-640-1883.",
    tagline: "Concrete for Athol homes, shops, and acreage.",
    intro: [
      "Athol sits at the north end of our service area, near Farragut State Park and Silverwood, and it is classic North Idaho: bigger lots, more acreage, and properties built for room to breathe. That makes for great concrete projects, from long driveways to generous shop slabs, and we are happy to make the trip.",
      "On an Athol property you are often dealing with more distance from the house to the road, outbuildings and shops that need solid floors, and space for the kind of patio or pad you could not fit on a city lot. We build all of it on a base that holds up.",
    ],
    sections: [
      {
        heading: "Acreage-friendly concrete in Athol",
        body: [
          "We pour driveways and parking areas, including long approaches, and we build the shop and outbuilding slabs that acreage properties around Athol depend on, sized and thickened for the equipment and vehicles you keep on them. Closer to the house we build patios, walkways, and steps, and we offer stamped and decorative finishes when you want them.",
          "Rural properties make drainage and base preparation even more important, since there is rarely city infrastructure to bail out a poorly graded slab. We compact properly, grade for runoff, and use a freeze-thaw-rated mix so your concrete performs season after season.",
        ],
      },
      {
        heading: "A local contractor who shows up",
        body: [
          "Athol is a haul for a lot of contractors, which is exactly why so many projects out here sit waiting for a callback. We answer the phone, come out for a free estimate, and get the work done. Licensed, bonded, and insured, with the clean, reliable, on-time service that has earned us a perfect review rating.",
        ],
      },
    ],
    featuredCategory: "broomed",
  },
};

export function getCityContent(slug: string): CityContent | undefined {
  return CITIES_CONTENT[slug];
}
