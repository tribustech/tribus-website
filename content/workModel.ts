import type { WorkStep } from "./types";

/** The 3-step work model from the deck: Design → Build & Test → Go to market. */
export const workModel: WorkStep[] = [
  {
    index: 1,
    title: "Design",
    description:
      "We understand what your business needs are, create a visual representation of them and prepare a high-level strategy to begin with.",
    accent: "teal",
  },
  {
    index: 2,
    title: "Build & Test",
    description:
      "We start development on the agreed requirements and constantly gather feedback from you and your end-users, iterating as we go.",
    accent: "indigo",
  },
  {
    index: 3,
    title: "Go to Market",
    description:
      "We know how important customer feedback is, so we deliver a production-ready solution to your customers as soon as possible. You can be the one making the difference.",
    accent: "amber",
  },
];
