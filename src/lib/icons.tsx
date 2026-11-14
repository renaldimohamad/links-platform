import {
  ArrowUpRight, BookOpen, Facebook, Github, Instagram, Linkedin, Mail, Music2,
  Send, Globe2, Youtube, AtSign, MessageCircle, type LucideIcon,
} from "lucide-react";
import type { SocialPlatform } from "@/types/profile";

export const platformIcons: Record<SocialPlatform, LucideIcon> = {
  instagram: Instagram,
  tiktok: Music2,
  threads: AtSign,
  github: Github,
  linkedin: Linkedin,
  whatsapp: MessageCircle,
  email: Mail,
  website: Globe2,
  portfolio: Globe2,
  blog: BookOpen,
  telegram: Send,
  youtube: Youtube,
  facebook: Facebook,
  x: AtSign,
};

export { ArrowUpRight };
