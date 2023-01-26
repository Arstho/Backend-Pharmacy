const {
    Router
} = require("express");
const router = Router();
const {
    medicinesController
} = require("../controllers/medicines.controller");

router.get("/admin/medicines", medicinesController.getAllMedicines);
router.get("/admin/medicines/:id", medicinesController.getMedicineById);
router.post("/admin/medicines", medicinesController.addMedicine);
router.delete("/admin/medicines/:id", medicinesController.deleteMedicineById);
router.patch("/admin/medicines/:id", medicinesController.updateMedicineById);

router.get("/medicines", medicinesController.getAllMedicinesU);
router.get("/medicines/:id", medicinesController.getMedicineByIdU);


module.exports = router;