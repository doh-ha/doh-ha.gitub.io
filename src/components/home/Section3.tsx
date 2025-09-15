import ConstrainedBox from "@/components/core/constrained-box";
import ResponsiveBox from "@/components/core/ResponsiveBox";
import SectionTitle from "@/components/common/SectionTitle";
import { Timeline } from "@/components/common/timeline";
import ExperienceItem from "./ui/ExperienceItem";
import experiences from "@/data/experiences";

// 기존 평면 타입: IExperienceItem = { company, designation, startDate, endDate?, description: string[] }

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

const groupByCompany = (items: any[]): IExperienceCompany[] => {
  const map: Record<string, IExperienceCompany> = {};

  for (const exp of items) {
    if (!map[exp.company]) {
      map[exp.company] = { company: exp.company, roles: [] };
    }
    map[exp.company].roles.push({
      designation: exp.designation,
      startDate: exp.startDate,
      endDate: exp.endDate,
      description: exp.description,
    });
  }

  // 정렬 없이 입력된 순서 유지
  return Object.values(map);
};

const HomeSection3 = ({ id }: { id: string }) => {
  const grouped = groupByCompany(experiences);

  return (
    <ResponsiveBox id={id} classNames="mt-24">
      <ConstrainedBox>
        <SectionTitle>Experiences</SectionTitle>
        <Timeline
          data={grouped.map((company) => ({
            // ⬅️ 왼쪽 컬럼: 회사명
            title: company.company,
            // ➡️ 오른쪽 컬럼: 회사 내 여러 포지션
            content: <ExperienceItem data={company} />,
          }))}
        />
      </ConstrainedBox>
    </ResponsiveBox>
  );
};

export default HomeSection3;
