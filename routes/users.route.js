const {
    Router
} = require("express");
const router = Router();
const {
    usersController
} = require("../controllers/users.controller");

router.get("/users", usersController.getAllUsers);
router.get("/users/:id", usersController.getUserById);
router.delete("/users/:id", usersController.deleteUserById);
router.post("/users", usersController.addUser);

router.patch('/user/fillUpWallet/:id', usersController.fillUpWallet);
router.patch('/user/:id/basket/:id', usersController.addToBasket);
router.patch('/users/basket/:userId', usersController.deleteFromBasket);
router.patch('/users/:id/basket', usersController.clearBasket);
router.patch('/users/:id/buy', usersController.buyMedicine);



module.exports = router;