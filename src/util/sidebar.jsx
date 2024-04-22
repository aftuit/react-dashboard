import DashboardIcon from "../assets/icons/dashboard.svg?react";
import QuotesIcon from "../assets/icons/quotes.svg?react";
import SecurityIcon from "../assets/icons/security.svg?react";
import ThreatscapeIcon from "../assets/icons/threatscape.svg?react";
import RequestIcon from "../assets/icons/request.svg?react";
import PolicyIcon from "../assets/icons/list.svg?react";
import ManageIcon from "../assets/icons/manage.svg?react";
import ReportIcon from "../assets/icons/report.svg?react";
import SettingsIcon from "../assets/icons/settings.svg?react";

export const sidebarLinks = [
  {
    id: 1,
    title: "Dashboard",
    icon: DashboardIcon,
    path: "/dashboard",
    children: [],
  },
  {
    id: 2,
    title: "Quotes",
    icon: QuotesIcon,
    path: "/quotes",
    children: [],
  },
  {
    id: 3,
    title: "Security Center",
    icon: SecurityIcon,
    path: "/security",
    children: [
      {
        id: 31,
        title: "Attack Surface",
        path: "/security/1",
      },
      {
        id: 32,
        title: "Environment Overview",
        path: "/security/2",
      },
      {
        id: 33,
        title: "Security Questionnaires",
        path: "/security/3",
      },
      {
        id: 34,
        title: "Action Center",
        path: "/security/4",
      },
      {
        id: 35,
        title: "Vendor Marketplace",
        path: "/security/5",
      },
    ],
  },
  {
    id: 4,
    title: "Threatscape",
    icon: ThreatscapeIcon,
    path: "/threatscape",
    children: [],
  },
  {
    id: 5,
    title: "Request",
    icon: RequestIcon,
    path: "/request",
    children: [],
  },
  {
    id: 6,
    title: "Policy",
    icon: PolicyIcon,
    path: "/policy",
    children: [],
  },
  {
    id: 7,
    title: "Manage Claims",
    icon: ManageIcon,
    path: "/manage",
    children: [
      {
        id: 71,
        title: "Claims Calculator",
        path: "/manage/1",
      },
    ],
  },
  {
    id: 8,
    title: "Report",
    icon: ReportIcon,
    path: "/report",
    children: [],
  },
  {
    id: 9,
    title: "Settings",
    icon: SettingsIcon,
    path: "/settings",
    children: [],
  },
];
