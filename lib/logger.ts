import winston from "winston";
const logger = winston.createLogger({
  levels: {
    error: 0,
    critical: 1,
    warn: 2,
    info: 3,
    verbose: 4,
    debug: 5,
    silly: 6,
  },
  level: "info",
  format: winston.format.json(),
  defaultMeta: { service: "chat-chit-app" },
  transports: [new winston.transports.Console()],
});
export default logger;
