import mongoose from "mongoose";
import GalaxySchema from "../models/Galaxy"

class DbContext {
  Galaxies = mongoose.model("Galaxy", GalaxySchema)
}

export const dbContext = new DbContext();
