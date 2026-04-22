import gsis from "@/assets/logos/agencies/gsis.png";
import erc from "@/assets/logos/agencies/erc.png";
import ppa from "@/assets/logos/agencies/ppa.png";
import lto from "@/assets/logos/agencies/lto.png";
import hsbc from "@/assets/logos/clients/hsbc.png";
import landbank from "@/assets/logos/clients/landbank.png";

export const AGENCY_LOGOS = [
  { src: gsis, alt: "Government Service Insurance System (GSIS)" },
  { src: erc, alt: "Energy Regulatory Commission (ERC)" },
  { src: ppa, alt: "Philippine Ports Authority (PPA)" },
  { src: lto, alt: "Land Transportation Office (LTO)" },
];

export const CLIENT_LOGOS = [
  { src: hsbc, alt: "HSBC" },
  { src: landbank, alt: "Landbank of the Philippines" },
];

export const ALL_CLIENT_LOGOS = [...AGENCY_LOGOS, ...CLIENT_LOGOS];
