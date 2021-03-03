import express from "express";
import BaseController from "../utils/BaseController";
import { planetsService } from "../services/PlanetsService";
import { moonsService } from "../services/MoonsService.js";

export class PlanetsController extends BaseController {
   constructor() {
      super("api/planets");
      this.router
         .get("", this.getAll)
         .get("/:id", this.getOne)
         .get("/:id/moons", this.getAllMoonsByPlanetId)
         .post("", this.create)
         .delete("/:id", this.delete);
   }
   async getAll(req, res, next) {
      try {
         res.send(await planetsService.find(req.query));
      } catch (error) {
         next(error);
      }
   }

   async getOne(req, res, next) {
      try {
         res.send(await planetsService.findById(req.params.id))
      } catch (error) {
         next(error)
      }
   }

   async getAllMoonsByPlanetId(req, res, next) {
      try {
         res.send(await moonsService.find({ planet: req.params.id }))
      } catch (error) {
         next(error)
      }
   }

   async create(req, res, next) {
      try {
         res.send(201, await planetsService.create(req.body));
      } catch (error) {
         next(error);
      }
   }

   async delete(req, res, next) {
      try {
         res.send(await planetsService.delete(req.params.id))
      } catch (error) {
         next(error)
      }
   }
}
