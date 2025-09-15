import ConstrainedBox from "@/components/core/constrained-box";
import ResponsiveBox from "@/components/core/ResponsiveBox";
import SectionTitle from "@/components/common/SectionTitle";
import EducationItem from "./ui/EducationItem";
import education from "@/data/education";

const HomeSectionEducation = ({ id }: { id: string }) => {
  return (
    <ResponsiveBox classNames="dark:bg-[var(--bgColor)] bg-[var(--bgColor)] dark:bg-grid-white/[0.1] bg-grid-white/[0.1] min-h-screen items-center justify-center" id={id}>
      <ConstrainedBox classNames="p-4 py-16">
        <SectionTitle>Education</SectionTitle>

        <div className="space-y-8">
          {education.map((ed: typeof education[0], i: number) => (
            <div key={i} className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {/* 왼쪽: 학교 이름 + 기간 */}
              <div className="font-semibold text-lg flex flex-col">
                {ed.school}
                <span className="text-sm text-muted-foreground">{`${ed.startDate} - ${ed.endDate}`}</span>
              </div>

              {/* 오른쪽: 학위/설명 */}
              <div className="md:col-span-2">
                <EducationItem {...ed} />
              </div>
            </div>
          ))}
        </div>
      </ConstrainedBox>
    </ResponsiveBox>
  );
};

export default HomeSectionEducation;
