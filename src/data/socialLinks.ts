import { faGithub, faLinkedin, faTelegram, faInstagram, faXTwitter } from "@fortawesome/free-brands-svg-icons";
import { faBlog, faEnvelope, faPen } from "@fortawesome/free-solid-svg-icons";
import { VelogIcon, TistoryIcon } from "@/components/icons";
import Strings from "@/constants/strings";
import type { ISocialLinkItem } from "@/types";

const socialLinks: ISocialLinkItem[] = [
  {
    name: Strings.email,
    url: Strings.primaryEmailLink,
    icon: faEnvelope,
    text: "Email",
  },
  {
    name: Strings.github,
    url: Strings.githubLink,
    icon: faGithub,
    text: "GitHub",
  },
  {
    name: Strings.linkedIn,
    url: Strings.linkedInLink,
    icon: faLinkedin,
    text: "LinkedIn",
  },
  {
    name: Strings.tistory,
    url: Strings.tistoryLink,
    icon: TistoryIcon,
    text: "Blog (2023~)",
  },
  {
    name: Strings.velog,
    url: Strings.velogLink,
    icon: VelogIcon,
    text: "Blog (2021~2023)",
  },
];

export default socialLinks;
