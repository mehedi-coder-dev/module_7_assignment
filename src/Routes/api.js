const express = require('express');
const router = express.Router();
const blogController = require('../Controllers/blogController')
const commentController = require('../Controllers/commentController')
const messageController = require('../Controllers/messageController')
const portfolioController = require('../Controllers/portfolioController')
const productController = require('../Controllers/productController')

//This is a blog router
router.get('/blog/create',blogController.create)
router.get('/blog/read',blogController.read)
router.get('/blog/delete',blogController.update)
router.get('/blog/update',blogController.delete)

//This is a commentController router
router.get('/comment/create',commentController.create)
router.get('/comment/read',commentController.read)
router.get('/comment/delete',commentController.update)
router.get('/comment/update',commentController.delete)

//This is a messageController router
router.get('/message/create',messageController.create)
router.get('/message/read',messageController.read)
router.get('/message/delete',messageController.update)
router.get('/message/update',messageController.delete)

//This is a protfolioController router
router.get('/portfolio/create',portfolioController.create)
router.get('/portfolio/read',portfolioController.read)
router.get('/portfolio/delete',portfolioController.update)
router.get('/portfolio/update',portfolioController.delete)

//This is a blog router
router.get('/product/create',productController.create)
router.get('/product/read',productController.read)
router.get('/product/delete',productController.update)
router.get('/product/update',productController.delete)

module.exports = router