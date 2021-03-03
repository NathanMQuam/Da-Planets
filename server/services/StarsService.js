import { dbContext } from "../db/DbContext";
import { BadRequest } from "../utils/Errors";

class StarsService {
   async find(query = {}) {
      let stars = await dbContext.Stars.find(query);
      return stars;
   }
   async findById(id) {
      let galaxy = await dbContext.Stars.findById(id);
      if (!galaxy) {
         throw new BadRequest("Invalid Id");
      }
      return galaxy;
   }

   async create(body) {
      return await dbContext.Stars.create(body)
   }
}

export const starsService = new StarsService();