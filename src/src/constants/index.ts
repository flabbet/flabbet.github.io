import { Icons } from "@/components/icons";
import { siteConfig } from "@/config/site";
import { Bot, Rss } from "lucide-react";

export const NAV_LIST = [
  { label: "Blog", path: "/blog", icon: Rss },
  { label: "About", path: "/about", icon: Bot },
];

export const SOCIALS = [
  { label: "Github", path: siteConfig.social.github, icon: Icons.github },
  { label: "Twitter", path: siteConfig.social.twitter, icon: Icons.x },
];
