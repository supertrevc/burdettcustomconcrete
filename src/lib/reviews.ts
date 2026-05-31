/**
 * Real customer reviews. These are faithful paraphrases of the actual
 * Google/Facebook reviews provided by the business — do not invent more,
 * and do not inflate the aggregate (5.0 from 19 Google reviews).
 * Send visitors to the Google Business Profile to read them in full.
 */
export interface Review {
  name: string;
  project: string;
  source: "Google" | "Facebook";
  quote: string;
}

export const REVIEWS: Review[] = [
  {
    name: "Melissa Rettig",
    project: "Residential Custom Concrete Patio",
    source: "Google",
    quote:
      "Dave came out the next day after we first spoke, and he actually answers his phone. He built our patio from a to-scale design, the price was good, and he finished quickly. Another company we tried took weeks just to come talk to us.",
  },
  {
    name: "Kellie Breaux",
    project: "Backyard Concrete Patio",
    source: "Google",
    quote:
      "We got a same-day bid and Dave fit us into a busy schedule. He finished quickly, communicated the whole way, was prompt and courteous, and kept the work area clean. Great quality.",
  },
  {
    name: "Hannah Haaker",
    project: "Patio Expansion & Side Walkway",
    source: "Google",
    quote:
      "Professional and quick to respond. They were punctual and we are very happy with the work. I highly recommend them.",
  },
  {
    name: "J Retty",
    project: "Driveway, Parking Pad & Back Patio",
    source: "Google",
    quote:
      "They finished our driveway, parking pad, and back patio in four days. Professional, communicated well, and very timely. We are very happy with the results.",
  },
  {
    name: "Shawn Warner",
    project: "New Back Patio",
    source: "Google",
    quote:
      "We had several contractors working at once and David was the most communicative of all of them. He showed up when he said he would, stayed in constant contact, and did an amazing job on our new back patio.",
  },
  {
    name: "Joyce Lesterberg",
    project: "Concrete Driveway",
    source: "Google",
    quote:
      "I got a quote last year and waited until this year, and the owner kept my name and called me back. Two other companies I called never showed up. My driveway turned out better than I imagined.",
  },
];
