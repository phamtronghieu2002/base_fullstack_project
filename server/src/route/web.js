import express from "express";

const router = express.Router();

const InitApiRoute = (app) => {
  app.use(function (req, res, next) {
    res.header(
      "Access-Control-Allow-Headers",
      "x-access-token, Origin, Content-Type, Accept"
    );
    next();
  });

router.get("/user",(req,res)=>{
  console.log("loy vo");
  return res.status(200).json("ok!")
})

  app.use("/api/v1", router);
};

export { InitApiRoute };
