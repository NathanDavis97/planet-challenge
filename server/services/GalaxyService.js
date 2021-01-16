import { dbContext } from "../db/DbContext";
import { BadRequest } from "../utils/Errors";


class GlaxiesService {
  async find(query = {}) {
    return await dbContext.Galaxies.find(query)
  }
  async findById(id) {
    let galaxy = await dbContext.Galaxies.findById(id)
    if (!galaxy) {
      throw new BadRequest("invalid id")
    }
    return galaxy
  }
  async create(galaxy) {
    return await dbContext.Galaxies.create(galaxy)
  }
  async edit(update) {
    let updated = await dbContext.Galaxies.findOneAndUpdate({ id: update._id }, update, {
      new: true
    })
    if (!updated) {
      throw new BadRequest("invalid id")
    } return updated

  }
  async delete(id) {
    let deleted = await dbContext.Galaxies.findByIdAndDelete({ _id: id })
    if (!deleted) {
      throw new BadRequest("invalid id")
    }
    return "deleted success"
  }
}



export const galaxiesService = new GlaxiesService();