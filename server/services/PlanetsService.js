import { dbContext } from "../db/DbContext";
import { BadRequest } from "../utils/Errors";

class PlanetsService {
   async find(query = {}) {
      let planets = await dbContext.Planets.find(query);
      return planets;
   }
   async findById(id) {
      let planet = await dbContext.Planets.findById(id);
      if (!planet) {
         throw new BadRequest("Invalid Id");
      }
      return planet;
   }

   async create(body) {
      return await dbContext.Planets.create(body)
   }

   async delete(id) {
      return await dbContext.Planets.findByIdAndDelete(id)
   }
}

export const planetsService = new PlanetsService();