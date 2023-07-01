const express=require('express')
const userRouter=express.Router()
const usercontrollers=require('./../controllers/userControllers')

userRouter.param('id',usercontrollers.checkID)


userRouter
  .route('/')
  .get(usercontrollers.getAllUsers)
  .post(usercontrollers.checkBody, usercontrollers.createUser)

userRouter
  .route('/:id')
  .get(usercontrollers.getUser)
  .patch(usercontrollers.updetaUser)
  .delete(usercontrollers.deleteUser)

module.exports=userRouter;
