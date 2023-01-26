const User = require("../models/User.model")
const Medicine = require("../models/Medicine.model")

module.exports.usersController = {
	getAllUsers: async (req, res) => {
		try {
			const getAllUsers = await User.find({});
			return res.json(getAllUsers);
		} catch (error) {
			console.log(error.message);
		}
	},

	getUserById: async (req, res) => {
		try {
			const getAllUsers = await User.findById(req.params.id);
			return res.json(getAllUsers);
		} catch (error) {
			console.log(error.message);
		}
	},

	deleteUserById: async (req, res) => {
		try {
			const deleteUser = await User.findByIdAndDelete(req.params.id);
			return res.json(deleteUser);
		} catch (error) {
			console.log(error.message);
		}
	},

	addUser: async (req, res) => {
		try {
			const addUser = await User.create({
				name: req.body.name,
				wallet: req.body.wallet,
				recipe: req.body.recipe,
			});
			return res.json(addUser);
		} catch (error) {
			console.log(error.message);
		}
	},

	
	fillUpWallet: async (req, res) => {
		try {
			await User.updateOne({
				wallet: req.body.wallet
			});
			res.json("Wallet пополнен");
		} catch (error) {
			console.log(error.message);
		}
	},

	addToBasket: async (req, res) => {
		try {
			const user = await User.findById(req.params.id);
			const medicine = await Medicine.findById(req.body.medicine);

			if (medicine.medRecipe) {
				if (!user.recipe) {
					return res.json("Данное лекарство без рецепта не продаем!");
				}
			}
			let sum = user.total + medicine.price;
			await user.updateOne({
				$set: {
					total: sum
				},
				$addToSet: {
					basket: req.body.medicine
				}
			});
			res.json("Добавлено");
		} catch (error) {
			console.log(error.message);
		}
	},

	deleteFromBasket: async (req, res) => {
		const user = await User.findById(req.params.id);
		const medicine = await Medicine.findById(req.body.medicine);
		try {
			let sum = user.total - medicine.price;
			await user.updateOne({
				$set: {
					total: sum
				},
				$pull: {
					basket: req.body.basket
				}
			});
			res.json("Позиция удалена");
		} catch (error) {
			console.log(error.message);
		}

	},

	clearBasket: async (req, res) => {
		const user = await User.findById(req.params.id);
		const medicine = await Medicine.findById(req.body.medicine);
		try {
			let sum = user.total - medicine.price;
			await user.updateOne({
				$set: {
					basket: [],
					total: sum
				},
			});
			res.json("Корзина очищена");
		} catch (error) {
			console.log(error.message);
		}
	},

	buyMedicine: async (req, res) => {
		const user = await User.findById(req.params.id);
		if (user.wallet < user.total) {
			return res.json("Денег недостаточно!");
		}
		let sum = user.wallet - user.total;
		try {
			await user.updateOne({
				$set: {
					total: 0,
					basket: [],
					wallet: sum,
				},
			});
			return res.json("Оплата прошла успешно");
		} catch (error) {
			console.log(error.message);
		}
	},
};