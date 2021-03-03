import express from "express";
import BaseController from "../utils/BaseController";
import { speciesService } from "../services/SpeciesService";
import { speciesPlanetService } from "../services/SpeciesPlanetsService.js";

export class SpeciesController extends BaseController {
   constructor() {
      super("api/species");
      this.router
         .get("", this.getAll)
         .get("/:id", this.getOne)
         .get("/:id/planets", this.getAllPlanetsBySpeciesId)
         .post("", this.create)
         .delete("/:id", this.delete);
   }
   async getAll(req, res, next) {
      try {
         res.send(await speciesService.find(req.query));
      } catch (error) {
         next(error);
      }
   }

   async getAllPlanetsBySpeciesId(req, res, next) {
      try {
         res.send(await speciesPlanetService.find({ species: req.params.id }))
      } catch (error) {
         next(error)
      }
   }

   async getOne(req, res, next) {
      try {
         res.send(await speciesService.findById(req.params.id))
      } catch (error) {
         next(error)
      }
   }

   async create(req, res, next) {
      try {
         res.send(201, await speciesService.create(req.body));
      } catch (error) {
         next(error);
      }
   }

   async delete(req, res, next) {
      try {
         res.send(await speciesService.delete(req.params.id))
      } catch (error) {
         next(error)
      }
   }
}
