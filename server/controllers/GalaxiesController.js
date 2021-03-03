import express from "express";
import BaseController from "../utils/BaseController";
import { galaxiesService } from "../services/GalaxiesService";
import { starsService } from "../services/StarsService.js";

export class GalaxiesController extends BaseController {
  constructor() {
    super("api/galaxies");
    this.router
      .get("", this.getAll)
      .get("/:id", this.getOne)
      .get("/:id/stars", this.getAllStarsByGalaxyId)
      .post("", this.create);
  }
  async getAll(req, res, next) {
    try {
      res.send(await galaxiesService.find(req.query));
    } catch (error) {
      next(error);
    }
  }

  async getOne(req, res, next) {
    try {
      res.send(await galaxiesService.findById(req.params.id))
    } catch (error) {
      next(error)
    }
  }

  async getAllStarsByGalaxyId(req, res, next) {
    try {
      res.send(await starsService.find({galaxy: req.params.id}))
    } catch (error) {
      next(error)
    }
  }

  async create(req, res, next) {
    try {
      res.send(201, await galaxiesService.create(req.body));
    } catch (error) {
      next(error);
    }
  }
}
