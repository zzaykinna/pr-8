const { Product, Basket, BasketProduct } = require("../models/models");
const uuid = require("uuid");
const path = require("path");
const ApiError = require("../error/ApiError");
const { Op } = require("sequelize");
const jwt = require("jsonwebtoken");

class BasketController {
  async addToCart(req, res, next) {
    try {
      const token = req.headers.authorization.split(" ")[1];
      const decoded = jwt.verify(token, process.env.SECRET_KEY);
      req.user = decoded;

      const { product_id } = req.body;
      const basket = await Basket.findOne({
        where: { userId: decoded.id },
      });

      if (!basket) {
        const newBasket = await Basket.create({
          userId: decoded.id,
          total: await Product.sum("price"),
          status: "created",
        });
        await BasketProduct.create({ productId: product_id, basketId: newBasket.id });
        return res.json({ message: "Товар успешно добавлен в корзину" });
      } else {
        const productBasket = await BasketProduct.findOne({
          where: { productId: product_id, basketId: basket.id },
        });
        if (productBasket) {
          return next(ApiError.badRequest("Товар уже добавлен в корзину"));
        } else {
          await BasketProduct.create({ productId: product_id, basketId: basket.id });
          return res.json({ message: "Товар успешно добавлен в корзину" });
        }
      }
    } catch (error) {
      next(
        ApiError.internal("Произошла ошибка при добавлении товара в корзину")
      );
    }
  }

  async getProductsFromBasket(req, res, next) {
    const { id } = req.params;

    const basketUser = await Basket.findOne({ where: { userId: id } });

    const productsInBasket = await BasketProduct.findAll({
      attributes: ["productId"],
      where: { basketId: basketUser.id },
    });

    let productIds = productsInBasket.map((product) => product.productId);

    let products;

    try {
      if (id) {
        products = await Product.findAll({
          where: { id: { [Op.in]: productIds } },
        });
      }
    } catch (error) {
      return next(ApiError.badRequest("Заказ пользователя не найден"));
    }

    return res.json(products);
  }

  async getAllBaskets(req, res) {
    let baskets;
    baskets = await Basket.findAll();

    return res.json(baskets);
  }

  async getOneBasket(req, res, next) {
    const { status } = req.body;
    try {
      let baskets;
      if (!status) {
        next(ApiError.badRequest("Укажите статус заказа"));
      } else {
        baskets = await Basket.findAll({ where: { status: status } });
      }
      if (baskets.length === 0) {
        return res
          .status(404)
          .json({ message: "Заказы с указанным статусом не найдены" });
      }

      return res.json(baskets);
    } catch (e) {
      next(ApiError.internal("Ошибка при поиске заказов"));
    }
  }

  async updateStatus(req, res, next) {
    try {
      const { status, userId } = req.body;



      const newStatus = await Basket.update(
        { status: status },
        { where: { userId: userId } }
      );
      return res.json(newStatus);
    } catch (e) {
      next(ApiError.badRequest(e.message));
    }
    
  }
}

module.exports = new BasketController();