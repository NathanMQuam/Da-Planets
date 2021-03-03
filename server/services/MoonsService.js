import { dbContext } from "../db/DbContext";
import { BadRequest } from "../utils/Errors";

class MoonsService {
   async find(query = {}) {
      let moons = await dbContext.Moons.find(query);
      return moons;
   }
   async findById(id) {
      let moon = await dbContext.Moons.findById(id);
      if (!moon) {
         throw new BadRequest("Invalid Id");
      }
      return moon;
   }

   async create(body) {
      return await dbContext.Moons.create(body)
   }

   async delete(id) {
      return await dbContext.Moons.findByIdAndDelete(id)
   }
}

export const moonsService = new MoonsService();