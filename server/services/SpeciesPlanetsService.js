import { dbContext } from "../db/DbContext";
import { BadRequest } from "../utils/Errors";

class SpeciesPlanetsService {
   async find(query = {}) {
      let speciesPlanet = await dbContext.SpeciesPlanet.find(query).populate("species planet");
      return speciesPlanet;
   }
   async findById(id) {
      // let speciesPlanet = await dbContext.SpeciesPlanet.findById(id);
      // if (!speciesPlanet) {
      //    throw new BadRequest("Invalid Id");
      // }
      // return speciesPlanet;
   }

   async create(body) {
      return await dbContext.SpeciesPlanet.create(body)
   }

   async delete(id) {
      return await dbContext.SpeciesPlanet.findByIdAndDelete(id)
   }
}

export const speciesPlanetService = new SpeciesPlanetsService();