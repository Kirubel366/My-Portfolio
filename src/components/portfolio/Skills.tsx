import {
  SiReact, SiNodedotjs, SiExpress, SiMongodb, SiSupabase,
  SiTailwindcss, SiShadcnui, SiGit, SiGithub, SiFigma,
} from "react-icons/si";
import { TbBrandReact } from "react-icons/tb";
import type { CSSProperties, ComponentType, SVGProps } from "react";

type IconType = ComponentType<SVGProps<SVGSVGElement>>;
type Skill = { name: string; Icon: IconType; color: string };

const rowOne: Skill[] = [
  { name: "React", Icon: SiReact, color: "#61DAFB" },
  { name: "Node.js", Icon: SiNodedotjs, color: "#3FA037" },
  { name: "Express.js", Icon: SiExpress, color: "#EAEAEA" },
  { name: "MongoDB", Icon: SiMongodb, color: "#47A248" },
  { name: "TanStack", Icon: TbBrandReact, color: "#FF4154" },
];

const rowTwo: Skill[] = [
  { name: "Supabase", Icon: SiSupabase, color: "#3ECF8E" },
  { name: "Tailwind CSS", Icon: SiTailwindcss, color: "#38BDF8" },
  { name: "Shadcn/UI", Icon: SiShadcnui, color: "#FFFFFF" },
  { name: "Figma", Icon: SiFigma, color: "#F24E1E" },
  { name: "Git", Icon: SiGit, color: "#F05033" },
  { name: "GitHub", Icon: SiGithub, color: "#FFFFFF" },
];

const allSkills: Skill[] = [...rowOne, ...rowTwo];

function Card({ name, Icon, color }: Skill) {
  return (
    <div
      className="group relative shrink-0 w-44 md:w-52 mx-3 glass rounded-2xl p-5 flex items-center gap-4 hover:scale-105 transition-transform duration-300 hover:[box-shadow:0_0_40px_-5px_var(--tw-glow)]"
      style={{ ["--tw-glow" as string]: color + "66" } as CSSProperties}
    >
      <div className="relative">
        <div
          className="absolute inset-0 rounded-xl blur-xl opacity-50 group-hover:opacity-90 transition-opacity"
          style={{ background: color }}
        />
        <Icon className="relative w-10 h-10" style={{ color }} />
      </div>
      <div>
        <p className="text-xs text-muted-foreground font-mono">tech</p>
        <p className="font-semibold text-foreground">{name}</p>
      </div>
    </div>
  );
}

export function Skills() {
  const r1 = [...rowOne, ...rowOne];
  const r2 = [...rowTwo, ...rowTwo];
  return (
    <section id="skills" className="relative py-28">
      <div className="absolute inset-0 grid-bg opacity-30" />
      <div className="relative mx-auto max-w-7xl px-6 lg:px-10">
        <div className="max-w-2xl mb-14">
          <p className="font-mono text-sm text-primary mb-3">// 02 — toolkit</p>
          <h2 className="text-4xl md:text-5xl font-bold">
            Skills <span className="text-gradient">& Tools</span>
          </h2>
          <p className="mt-4 text-muted-foreground text-lg">
            The modern stack I use to ship reliable, performant products.
          </p>
        </div>

        {/* Mobile / Tablet: clean responsive grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 lg:hidden">
          {allSkills.map((s) => (
            <div
              key={s.name}
              className="glass rounded-2xl p-4 flex items-center gap-3"
              style={{ ["--tw-glow" as string]: s.color + "66" } as CSSProperties}
            >
              <s.Icon className="w-7 h-7 shrink-0" style={{ color: s.color }} />
              <div className="min-w-0">
                <p className="text-[10px] text-muted-foreground font-mono">tech</p>
                <p className="font-semibold text-sm truncate">{s.name}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Desktop: two opposite-direction marquees */}
        <div className="hidden lg:block space-y-6">
          <div className="relative overflow-hidden marquee-mask">
            <div className="flex animate-marquee pause-on-hover w-max">
              {r1.map((s, i) => (
                <Card key={`a-${i}`} {...s} />
              ))}
            </div>
          </div>
          <div className="relative overflow-hidden marquee-mask">
            <div className="flex animate-marquee-reverse pause-on-hover w-max">
              {r2.map((s, i) => (
                <Card key={`b-${i}`} {...s} />
              ))}
            </div>
          </div>
        </div>
      </div>
      <style>{`
        .marquee-mask {
          mask-image: linear-gradient(to right, transparent, black 8%, black 92%, transparent);
          -webkit-mask-image: linear-gradient(to right, transparent, black 8%, black 92%, transparent);
        }
      `}</style>
    </section>
  );
}