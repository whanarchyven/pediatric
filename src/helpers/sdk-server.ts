import { ElysiaApp } from "@/types";
import { edenTreaty } from "@elysiajs/eden";

export const edenServer = edenTreaty<ElysiaApp>('/api2')