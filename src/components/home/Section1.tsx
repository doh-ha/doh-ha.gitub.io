import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { IconDefinition } from "@fortawesome/free-solid-svg-icons";
import Column from "@/components/core/Column";
import ConstrainedBox from "@/components/core/constrained-box";
import ResponsiveBox from "@/components/core/ResponsiveBox";
import Row from "@/components/core/Row";
import { FlipWords } from "@/components/common/FlipWords";
import socialLinks from "@/data/socialLinks";
import TalkButton from "./ui/TalkButton";
import React from "react";

const HomeSection1 = ({ id }: Readonly<{ id: string }>) => {
  // 타입 가드 함수들
  const isIconDefinition = (icon: any): icon is IconDefinition => {
    return icon && typeof icon === "object" && "iconName" in icon;
  };

  const isReactElement = (icon: any): icon is JSX.Element => {
    return React.isValidElement(icon);
  };

  // 아이콘 렌더링 함수
  const renderIcon = (icon: IconDefinition | string | JSX.Element | React.ComponentType<any>) => {
    if (typeof icon === "string") {
      return <span className="text-base/6">{icon}</span>;
    } else if (isReactElement(icon)) {
      return icon; // 커스텀 SVG 아이콘
    } else if (typeof icon === "function") {
      const Icon = icon;
      return <Icon />; // 커스텀 컴포넌트 아이콘
    } else if (isIconDefinition(icon)) {
      return <FontAwesomeIcon icon={icon} />; // FontAwesome 아이콘
    }
    return null;
  };

  return (
    <ResponsiveBox
      classNames="dark:bg-[var(--bgColor)] bg-[var(--bgColor)] dark:bg-grid-white/[0.1] bg-grid-white/[0.1] min-h-screen items-center justify-center relative overflow-hidden rounded-md"
      id={id}
    >
      <ConstrainedBox classNames="px-4 py-8 pt-16 z-20 items-center justify-center">
        <Column classNames="w-full items-center justify-center">
          <div className="inline-flex items-center">
            <p className="text-2xl/normal sm:text-3xl/normal md:text-5xl/normal lg:text-6xl/normal xl:text-7xl/normal dark:text-[var(--textColor)] text-[var(--textColor)] font-bold text-center">
              Hi👋 I am <span className="text-[var(--primaryColor)]">available</span>
            </p>
          </div>

          <div className="gap-4 mt-12 lg:mt-16 flex flex-col md:flex-row"></div>
        </Column>
        <p>My passion lies in bridging technology and people by making technology more accessible for marginalized communities. 🔗🫂</p>{" "}
        <p>
          My research interests include <span className="text-[var(--primaryColor)]">Human-Computer Interaction (HCI), Educational Technology, Large Language Models</span>.
        </p>
        <div className="mt-12 lg:mt-16 w-full flex flex-col items-center">
          {/* <p className="text-base/6 font-medium">Contact</p> */}

          <Row classNames="mt-2 gap-2">
            {socialLinks.slice(0, 5).map((link, index) => {
              return (
                <Link
                  key={`social-link-${index}`}
                  href={link.url}
                  target="_blank"
                  className="app__outlined_btn !rounded-full !p-2 lg:!p-3 !aspect-square !border-[var(--textColor)]"
                  aria-label={`${link.name || link.text}`}
                >
                  <span className="text-base/6 text-[var(--whiteColor)]">{renderIcon(link.icon)}</span>
                </Link>
              );
            })}
          </Row>
        </div>
      </ConstrainedBox>
    </ResponsiveBox>
  );
};

export default HomeSection1;
