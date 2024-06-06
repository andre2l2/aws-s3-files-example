import dotenv from "dotenv";

dotenv.config();

class EnvClient {
  static readonly AWS_REGION: string = process.env.AWS_REGION || "";
  static readonly AWS_ACCESS_KEY: string = process.env.AWS_ACCESS_KEY || "";
  static readonly AWS_SECRET_KEY: string = process.env.AWS_SECRET_KEY || "";
  static readonly PORT: string = process.env.PORT || "3333";
}

export default EnvClient;
