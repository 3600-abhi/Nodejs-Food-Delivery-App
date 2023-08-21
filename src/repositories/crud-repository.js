import { StatusCodes } from "http-status-codes";
import AppError from "../utils/errors/app-errors.js";


class CrudRepository {
    constructor(model) {
        this.model = model;
    }

    async create(data) {
        const response = await this.model.create(data);
        return response;
    }

    async get(id) {
        const response = await this.model.get({ _id: id });
        return response;
    }

    async getAll() {
        const response = await this.model.find({});
        return response;
    }

    async update(id, data) {
        const response = await this.model.updateOne({ _id: id }, { $set: data });
        return response;
    }

    async destroy(id) {
        const response = await this.model.deleteOne({ _id: id });
        return response;
    }
}

export default CrudRepository;