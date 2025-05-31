import sber from "../assets/partners/sber.svg?react";
import t2 from "../assets/partners/t2.svg?react";
import mvideo from "../assets/partners/mvideo.svg?react";
import akrihin from "../assets/partners/akrihin.svg?react";
import gazprom from "../assets/partners/gazprom.svg?react";
import nrb from "../assets/partners/nrb.svg?react";
import rosbank from "../assets/partners/rosbank.svg?react";
import rostelekom from "../assets/partners/rostelekom.svg?react";

import type { FunctionComponent, SVGProps } from "react";

export interface IPartner {
  id: number;
  icon: FunctionComponent<SVGProps<SVGSVGElement>>;
  href?: string;
}

export const partners: Array<IPartner> = [
  {
    id: 1,
    icon: sber,
    href: "",
  },
  {
    id: 2,
    icon: t2,
    href: "",
  },
  {
    id: 3,
    icon: mvideo,
    href: "",
  },
  {
    id: 4,
    icon: akrihin,
    href: "",
  },
  {
    id: 5,
    icon: gazprom,
    href: "",
  },
  {
    id: 6,
    icon: nrb,
    href: "",
  },
  {
    id: 7,
    icon: rosbank,
    href: "",
  },
  {
    id: 8,
    icon: rostelekom,
    href: "",
  },
];
