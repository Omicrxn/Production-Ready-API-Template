import { Logger } from "@utils/logger/logger";
import mongoose from "mongoose";
import mongoConfig from "../../config/mongoConfig";

export default async function initializeMongo() {
  const db = await mongoose.connect(mongoConfig.MONGO_URL);
  Logger.getLogger().info(
    "Database Is Connected To: " + db.connection.db.databaseName
  );
  db.connection.on("error", (error) => {
    Logger.getLogger().error(error);
  });

  db.connection.once("connected", () => {
    Logger.getLogger().info(
      "Database Is Connected To: " + db.connection.db.databaseName
    );
  });
}
