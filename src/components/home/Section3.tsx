import ConstrainedBox from "@/components/core/constrained-box";
import ResponsiveBox from "@/components/core/ResponsiveBox";
import SectionTitle from "@/components/common/SectionTitle";
import { Timeline } from "@/components/common/timeline";
import ExperienceItem from "./ui/ExperienceItem";
import experiences from "@/data/experiences";

const HomeSection3 = ({ id }: { id: string }) => {
  return (
    <ResponsiveBox classNames="dark:bg-[var(--bgColor)] bg-[var(--bgColor)] dark:bg-grid-white/[0.1] bg-grid-white/[0.1] min-h-screen items-center justify-center" id={id}>
      <ConstrainedBox classNames="p-4 py-16">
        <SectionTitle>Experiences</SectionTitle>

        <Timeline
          data={experiences.map((exp) => ({
            // ⬇️ 왼쪽 컬럼에 올 내용(회사명)
            title: exp.company,
            // ⬇️ 오른쪽 컬럼(포지션+기간+설명)은 컴포넌트에서 처리
            content: <ExperienceItem data={exp} />,
          }))}
        />
      </ConstrainedBox>
    </ResponsiveBox>
  );
};

export default HomeSection3;
