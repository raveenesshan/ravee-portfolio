import {
  Cloud,
  Server,
  HardDrive,
  ShieldCheck,
  Database,
  Code2,
  Coffee,
  Braces,
  FileCode,
  Palette,
  FlaskConical,
  Triangle,
  Wind,
  GitBranch,
  Terminal,
  Send,
  PenTool,
  Share2,
  Globe,
  Boxes,
  History,
  LayoutGrid,
  GraduationCap,
  Trophy,
  Briefcase,
  Users,
  Award,
  Rocket,
  Sparkles,
  Mail,
  Phone,
  ExternalLink,
  Download,
  Menu,
  X,
  Sun,
  Moon,
  ChevronDown,
  ArrowUp,
  ArrowRight,
  Copy,
  Check,
  CalendarDays,
  BarChart3,
  Layers,
  Lock,
  NotebookPen,
} from "lucide-react";
import { GithubGlyph, LinkedinGlyph } from "./BrandIcons";

// Single lookup table so every section renders icons by name (from lib/data.js)
// instead of importing lucide icons individually everywhere. Keeping the
// registry in one place makes it trivial to swap an icon if a package ever
// renames or drops one again.
const registry = {
  Cloud,
  Server,
  HardDrive,
  ShieldCheck,
  Database,
  Code2,
  Coffee,
  Braces,
  FileCode,
  Palette,
  FlaskConical,
  Triangle,
  Wind,
  GitBranch,
  Terminal,
  Send,
  PenTool,
  Share2,
  Globe,
  Boxes,
  History,
  LayoutGrid,
  GraduationCap,
  Trophy,
  Briefcase,
  Users,
  Award,
  Rocket,
  Sparkles,
  Mail,
  Phone,
  ExternalLink,
  Download,
  Menu,
  X,
  Sun,
  Moon,
  ChevronDown,
  ArrowUp,
  ArrowRight,
  Copy,
  Check,
  CalendarDays,
  BarChart3,
  Layers,
  Lock,
  NotebookPen,
  Github: GithubGlyph,
  Linkedin: LinkedinGlyph,
};

export default function Icon({ name, className, strokeWidth, ...props }) {
  const Component = registry[name];
  if (!Component) return null;
  return (
    <Component
      className={className}
      strokeWidth={strokeWidth}
      aria-hidden="true"
      {...props}
    />
  );
}
