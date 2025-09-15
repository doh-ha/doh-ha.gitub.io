import Column from "@/components/core/Column";
import BulletedText from "@/components/common/bulleted-text";

type EducationItemProps = {
  school: string;
  degree: string;
  startDate: string;
  endDate: string;
  location?: string;
  description?: string[];
};

const EducationItem = ({ degree, startDate, endDate, location, description }: EducationItemProps) => {
  const period = `${startDate} - ${endDate}`;

  return (
    <Column classNames="space-y-2">
      <h3 className="text-xl font-semibold">{degree}</h3>
      <p className="text-sm text-muted-foreground">{period}</p>
      {location && <p className="text-sm">{location}</p>}
      {description && (
        <div className="space-y-1">
          {description.map((desc: string, i: number) => (
            <BulletedText key={i}>{desc}</BulletedText>
          ))}
        </div>
      )}
    </Column>
  );
};

export default EducationItem;
