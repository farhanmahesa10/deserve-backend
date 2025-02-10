import { Op } from "sequelize";
import { menuControl, orderControl, outletControl, tableControl, transactionControl } from "../models/index.js";

export const getPaginatedTransaction = async (req, res) => {
  const page = parseInt(req.query.page) || 1;
  const limit = parseInt(req.query.limit) || 10;
  const offset = (page - 1) * limit;
  const search = req.query.search || "";
  const search_name = req.query.by_name || "";

  try {
    const { count, rows } = await transactionControl.findAndCountAll({
      where: {
        by_name: {
          [Op.like]: `%${search_name}%`,
        },
      },
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
        {
          model: orderControl,
          include: [
            {
              model: menuControl,
            },
          ],
        },
        {
          model: tableControl,
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
      transaction: rows || [],
    });
  } catch (error) {
    console.error("Error fetching transaction:", error);
    res.status(500).send({ error: "An error occurred while fetching transaction." });
  }
};

export const getTransaction = async (req, res) => {
  try {
    const data = await transactionControl.findAll();
    res.send(data);
  } catch (error) {
    res.status(400).send(error.message);
  }
};

export const getTransactionById = async (req, res) => {
  const id = req.params.id;
  try {
    const data = await outletControl.findOne({
      include: [
        {
          model: transactionControl,
          where: {
            id: req.params.id,
          },
          include: [
            {
              model: orderControl,
              include: [
                {
                  model: menuControl,
                },
              ],
            },
          ],
        },
      ],
    });
    res.send(data);
  } catch (error) {
    res.status(500).send(error.message);
  }
};
export const createTransaction = async (req, res) => {
  const { id_table, id_outlet, status, pays_method, total_pay, note, by_name } = req.body;

  try {
    const newTransaction = await transactionControl.create({
      id_table,
      id_outlet,
      status,
      pays_method,
      total_pay,
      note,
      by_name,
    });
    res.status(201).json({
      message: "Success to create Transaction",
      data: newTransaction,
    });
  } catch (err) {
    res.status(400).send({
      message: "Failed to create Transaction",
      error: err.message,
    });
  }
};

export const updateTransaction = async (req, res) => {
  const id = req.params.id;
  const { id_table, id_outlet, status, pays_method, total_pay, note, by_name } = req.body;

  if (!id_table || !id_outlet || !status || !pays_method || !total_pay || !note || !by_name) {
    return res.status(400).json({
      message: "All field must be filled",
    });
  }

  try {
    const Transaction = await transactionControl.findByPk(id);
    if (!Transaction) {
      return res.status(404).json({
        message: "Transaction not found",
      });
    }

    await transactionControl.update(
      {
        id_table,
        id_outlet,
        status,
        pays_method,
        total_pay,
        note,
        by_name,
      },
      { where: { id } }
    );

    res.status(200).json({
      message: "Success to change Transaction",
    });
  } catch (err) {
    res.status(400).send({
      message: "Failed to change Transaction",
      error: err.message,
    });
  }
};

export const deleteTransaction = async (req, res) => {
  const id = req.params.id;

  try {
    const Transaction = await transactionControl.findOne({ where: { id } });
    if (!Transaction) {
      return res.status(404).json({
        message: "Transaction not found",
      });
    }

    await transactionControl.destroy({
      where: { id },
    });

    res.status(200).json({
      message: "Transaction success delete",
    });
  } catch (err) {
    res.status(500).json({
      message: "Fail to delete Transaction",
      error: err.message,
    });
  }
};
