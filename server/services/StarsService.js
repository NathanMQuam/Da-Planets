import { dbContext } from "../db/DbContext";
import { BadRequest } from "../utils/Errors";

class StarsService {
   async find(query = {}) {
      let stars = await dbContext.Stars.find(query);
      return stars;
   }
   async findById(id) {
      let star = await dbContext.Stars.findById(id);
      if (!star) {
         throw new BadRequest("Invalid Id");
      }
      return star;
   }

   async create(body) {
      return await dbContext.Stars.create(body)
   }

   async delete(id) {
      return await dbContext.Stars.findByIdAndDelete(id)
   }
}

export const starsService = new StarsService();