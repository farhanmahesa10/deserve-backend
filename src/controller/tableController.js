import { Op } from "sequelize";
import { orderControl, outletControl, tableControl } from "../models/index.js";

export const createOrders = async (ord, req, res) => {
  try {
    await orderControl.bulkCreate(ord);
  } catch (err) {
    res.status(400).json({ message: "failed to create Order" });
    console.log(err);
  }
};
export const getPaginatedTable = async (req, res) => {
  const page = parseInt(req.query.page) || 1;
  const limit = parseInt(req.query.limit) || 10;
  const offset = (page - 1) * limit;
  const search = req.query.search || "";

  try {
    const { count, rows } = await tableControl.findAndCountAll({
      include: [
        {
          model: outletControl,
          attributes: ["outlet_name"],
          where: {
            outlet_name: {
              [Op.like]: `%${search}%`,
            },
          },
        },
      ],
      limit,
      offset,
      order: [["createdAt", "DESC"]],
    });

    const totalPages = Math.ceil(count / limit);

    res.json({
      totalItems: count,
      totalPages,
      currentPage: page,
      category: rows || [],
    });
  } catch (error) {
    console.error("Error fetching category:", error);
    res.status(500).send({ error: "An error occurred while fetching category." });
  }
};
export const getTableByCafe = async (req, res) => {
  const outlet_name = req.params.outlet_name;
  try {
    const data = await tableControl.findAll({
      // required: false,
      include: [
        {
          model: outletControl,
          where: { outlet_name },
        },
      ],
    });
    console.log(data, "cek");
    req.send(data);
  } catch (error) {
    res.status(400).json({ message: error });
  }
};

export const getTable = async (req, res) => {
  try {
    const data = await tableControl.findAll();
    res.send(data);
  } catch (error) {
    res.status(400).send(error.message);
  }
};

export const getTableByNameCafe = async (req, res) => {
  const id = req.params.id;
  try {
    const data = await tableControl.findByPk(id);
    res.send(data);
  } catch (error) {
    res.status(500).send(error.message);
  }
};
export const getTableById = async (req, res) => {
  const id = req.params.id;
  try {
    const data = await tableControl.findByPk(id);
    res.send(data);
  } catch (error) {
    res.status(500).send(error.message);
  }
};

export const createTable = async (req, res) => {
  const { id_outlet, number_table } = req.body;

  if (!id_outlet || !number_table) {
    return res.status(400).json({
      message: "All field must be filled",
    });
  }
  try {
    const newTable = await tableControl.create({
      id_outlet,
      number_table,
    });
    res.status(201).json({
      message: "Success to create Table",
      data: newTable,
    });
  } catch (err) {
    res.status(400).send({
      message: "Failed to create Table",
      error: err.message,
    });
  }
};

export const updateTable = async (req, res) => {
  const id = req.params.id;
  const { id_outlet, number_table } = req.body;

  if (!id_outlet || !number_table) {
    return res.status(400).json({
      message: "All field must be filled",
    });
  }

  try {
    const Table = await tableControl.findByPk(id);
    if (!Table) {
      return res.status(404).json({
        message: "Table not found",
      });
    }

    await tableControl.update(
      {
        id_outlet,
        number_table,
      },
      { where: { id } }
    );

    res.status(200).json({
      message: "Success to change Table",
    });
  } catch (err) {
    res.status(400).send({
      message: "Failed to change Table",
      error: err.message,
    });
  }
};

export const deleteTable = async (req, res) => {
  const id = req.params.id;

  try {
    const Table = await tableControl.findOne({ where: { id } });
    if (!Table) {
      return res.status(404).json({
        message: "Table not found",
      });
    }

    await tableControl.destroy({
      where: { id },
    });

    res.status(200).json({
      message: "Table success delete",
    });
  } catch (err) {
    res.status(500).json({
      message: "Fail to delete Table",
      error: err.message,
    });
  }
};
