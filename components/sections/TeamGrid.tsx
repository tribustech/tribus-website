import Image from "next/image";
import { Reveal } from "@/components/motion/Reveal";
import { team, type TeamMember } from "@/content/team";
import { accentSoft } from "@/lib/accents";

function initials(name: string) {
  return name
    .split(" ")
    .map((part) => part[0])
    .slice(0, 2)
    .join("")
    .toUpperCase();
}

function MemberCard({ member }: { member: TeamMember }) {
  return (
    <div className="group flex h-full flex-col overflow-hidden rounded-[var(--radius-xl2)] border border-ink/10 bg-white shadow-[var(--shadow-card)] transition-shadow duration-300 hover:shadow-[var(--shadow-card-hover)]">
      <div className="relative aspect-[4/5] overflow-hidden bg-ink/5">
        {member.img ? (
          <Image
            src={member.img}
            alt={`${member.name}, ${member.role} at Tribus`}
            fill
            sizes="(min-width: 1024px) 240px, (min-width: 640px) 33vw, 50vw"
            className="object-cover object-top transition-transform duration-500 ease-out group-hover:scale-[1.05]"
          />
        ) : (
          <div
            className={`flex h-full items-center justify-center font-display text-4xl font-bold ${accentSoft[member.accent]}`}
          >
            {initials(member.name)}
          </div>
        )}
        {member.founder && (
          <span className="absolute left-3 top-3 rounded-full bg-white/90 px-2.5 py-1 text-xs font-semibold text-ink shadow-sm backdrop-blur-sm">
            Co-Founder
          </span>
        )}
      </div>
      <div className="flex flex-1 flex-col p-4">
        <h3 className="font-display text-base font-bold tracking-tight text-ink">
          {member.name}
        </h3>
        <p className="mt-1 text-sm text-ink-soft">{member.role}</p>
      </div>
    </div>
  );
}

export function TeamGrid() {
  return (
    <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 sm:gap-5 lg:grid-cols-5">
      {team.map((member, i) => (
        <Reveal key={member.name} delay={(i % 5) * 0.05} direction="up">
          <MemberCard member={member} />
        </Reveal>
      ))}
    </div>
  );
}
