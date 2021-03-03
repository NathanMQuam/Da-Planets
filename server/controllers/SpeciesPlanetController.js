import express from "express";
import BaseController from "../utils/BaseController";
import { speciesPlanetService } from "../services/SpeciesPlanetsService";

export class SpeciesPlanetController extends BaseController {
   constructor() {
      super("api/speciesPlanets");
      this.router
         .get("", this.getAll)
         .post("", this.create)
         .delete("/:id", this.delete);
   }
   async getAll(req, res, next) {
      try {
         res.send(await speciesPlanetService.find(req.query));
      } catch (error) {
         next(error);
      }
   }

   async getOne(req, res, next) {
      try {
         res.send(await speciesPlanetService.findById(req.params.id))
      } catch (error) {
         next(error)
      }
   }

   async create(req, res, next) {
      try {
         res.send(201, await speciesPlanetService.create(req.body));
      } catch (error) {
         next(error);
      }
   }

   async delete(req, res, next) {
      try {
         res.send(await speciesPlanetService.delete(req.params.id))
      } catch (error) {
         next(error)
      }
   }
}
