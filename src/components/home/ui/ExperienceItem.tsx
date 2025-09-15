import type { IExperienceItem } from "@/types";
import Column from "@/components/core/Column";
import BulletedText from "@/components/common/bulleted-text";

type IExperienceRole = {
  designation: string;
  startDate: string;
  endDate?: string;
  description: string[];
};

type IExperienceCompany = {
  company: string;
  roles: IExperienceRole[];
};

const fmt = (s: string) => s; // 필요 시 포맷터 적용

const ExperienceItem = ({ data }: { data: IExperienceCompany }) => {
  return (
    <Column classNames="space-y-6">
      {data.roles.map((role, i) => {
        const period = `${fmt(role.startDate)} - ${role.endDate || "Present"}`;
        return (
          <div key={i} className="space-y-2">
            <h3 className="text-2xl font-semibold">{role.designation}</h3>
            <p className="text-sm text-muted-foreground">{period}</p>
            <div className="space-y-2">
              {role.description.map((desc, j) => (
                <BulletedText key={j}>{desc}</BulletedText>
              ))}
            </div>
          </div>
        );
      })}
    </Column>
  );
};

export default ExperienceItem;
