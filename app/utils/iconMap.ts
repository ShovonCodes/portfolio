import {
  SiJavascript,
  SiTypescript,
  SiPython,
  SiNodedotjs,
  SiExpress,
  SiFastify,
  SiGraphql,
  SiDjango,
  SiReact,
  SiNextdotjs,
  SiHtml5,
  SiCss3,
  SiMui,
  SiTailwindcss,
  SiAmazondynamodb,
  SiPostgresql,
  SiDbeaver,
  SiAmazon,
  SiAwslambda,
  SiAmazonapigateway,
  SiAmazons3,
  SiAmazonsqs,
  SiTerraform,
  SiServerless,
  SiGithubactions,
  SiCircleci,
  SiDocker,
  SiSentry,
  SiGithub,
  SiOpenai,
  SiJest,
} from "react-icons/si";
import { PiVectorThreeBold } from "react-icons/pi";

import { 
  Workflow, 
  GitPullRequest, 
  Users, 
  Bell,
  CloudCog,
  Activity,
  Layers,
  GitBranch
} from "lucide-react";
import { IconType } from "react-icons";

// Type for icons that can be either from react-icons or lucide-react
type IconComponent = IconType | React.ComponentType<{ className?: string; size?: number }>;

export const iconMap: Record<string, IconComponent> = {
  // Languages
  javascript: SiJavascript,
  typescript: SiTypescript,
  python: SiPython,

  // Backend
  nodejs: SiNodedotjs,
  express: SiExpress,
  fastify: SiFastify,
  graphql: SiGraphql,
  djangorest: SiDjango,

  // Frontend
  react: SiReact,
  nextjs: SiNextdotjs,
  html5: SiHtml5,
  css3: SiCss3,
  materialui: SiMui,
  tailwindcss: SiTailwindcss,

  // Databases
  dynamodb: SiAmazondynamodb,
  postgresql: SiPostgresql,
  vectordb: PiVectorThreeBold,

  // Cloud & Infrastructure (AWS)
  ec2: SiAmazon,
  lambda: SiAwslambda,
  apigateway: SiAmazonapigateway,
  s3: SiAmazons3,
  sqs: SiAmazonsqs,
  sns: Bell, // Using lucide-react for SNS
  stepfunctions: Workflow, // Using lucide-react for Step Functions
  cloudwatch: Activity, // Using lucide-react for CloudWatch
  terraform: SiTerraform,
  serverless: SiServerless,

  // DevOps & Observability
  githubactions: SiGithubactions,
  circleci: SiCircleci,
  docker: SiDocker,
  sentry: SiSentry,

  // AI-Assisted Development
  github: SiGithub,
  openal: SiOpenai, // OpenAI for codex

  // System Design
  microservices: Layers, // Using lucide-react for microservices
  eventdriven: CloudCog, // Using lucide-react for event-driven
  architecture: GitBranch, // Using lucide-react for architecture

  // Engineering Practices
  jest: SiJest,
  azuredevops: Workflow, // Using lucide-react for CI/CD
  codereviews: GitPullRequest, // Using lucide-react for code reviews
  mentorship: Users, // Using lucide-react for mentorship
};
