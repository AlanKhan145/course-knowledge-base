// Visual identity per domain: icon + hue. Matched by keywords so new domains still get a style.
import {
  Brain, Briefcase, Code2, Gamepad2, HeartPulse, Languages, LineChart, Network, Palette, PenLine, Shirt, BookOpen, type LucideIcon,
} from "lucide-react";
import { foldVi } from "./content/text";

export interface DomainStyle {
  icon: LucideIcon;
  hue: number;
}

const RULES: [RegExp, DomainStyle][] = [
  [/\b(ai|du lieu|data|machine)\b/, { icon: Brain, hue: 168 }],
  [/(lap trinh|phat trien phan mem|software|programming)/, { icon: Code2, hue: 222 }],
  [/(ha tang|mang|an ninh|security|network)/, { icon: Network, hue: 196 }],
  [/(thiet ke|sang tao|design)/, { icon: Palette, hue: 330 }],
  [/(game)/, { icon: Gamepad2, hue: 268 }],
  [/(ngon ngu|language)/, { icon: Languages, hue: 28 }],
  [/(kinh doanh|quan ly|business)/, { icon: Briefcase, hue: 205 }],
  [/(suc khoe|doi song|health|fitness)/, { icon: HeartPulse, hue: 350 }],
  [/(viet|sang tac|writing)/, { icon: PenLine, hue: 42 }],
  [/(tai chinh|dau tu|finance)/, { icon: LineChart, hue: 140 }],
  [/(ngoai hinh|phong cach|style)/, { icon: Shirt, hue: 300 }],
];

export function domainStyle(title: string): DomainStyle {
  const t = foldVi(title);
  return RULES.find(([re]) => re.test(t))?.[1] ?? { icon: BookOpen, hue: 160 };
}
