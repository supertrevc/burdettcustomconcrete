import {
  Stamp,
  Car,
  Sofa,
  Brush,
  Footprints,
  PaintBucket,
  Hammer,
  Building2,
  type LucideIcon,
} from "lucide-react";

/** Maps each service slug to a lucide icon. */
export const SERVICE_ICONS: Record<string, LucideIcon> = {
  "stamped-concrete": Stamp,
  "concrete-driveways": Car,
  "concrete-patios": Sofa,
  "broomed-flatwork": Brush,
  "sidewalks-walkways-steps": Footprints,
  "concrete-staining-sealing": PaintBucket,
  "concrete-removal-replacement": Hammer,
  "commercial-concrete": Building2,
};
