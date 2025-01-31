"use client";

import { NavBar } from "@/components/ui/tubelight-navbar";
import { Home, User, Briefcase, GraduationCap, Mail } from "lucide-react";

const navItems = [
  { name: "Hakkımda", url: "#about", icon: Home },
  { name: "Projeler", url: "#projects", icon: Briefcase },
  { name: "Deneyim", url: "#experience", icon: User },
  { name: "Eğitim", url: "#education", icon: GraduationCap },
  { name: "İletişim", url: "#contact", icon: Mail },
];

export default function NavbarWrapper() {
  return <NavBar items={navItems} />;
}
