const asyncHandler = (requestHandler) => {
  return (req, res, next) => {
    Promise.resolve(requestHandler(req, res, next)).catch((err) => next(err));
  };
};

export { asyncHandler };

//another asyncHandler method to define it...

// const asyncHandler = (fn) =>{ async (req, res, next) => {
//     try{
//         await fn( req , res ,next)

//     }catch(error){
//         res.status(err.code || 500).json({
//             success : false,
//             message : err.message
//         })
//     }
// } }

//HIGHER ORDER FUNCTION => that function which can accept functions as parameter and can return it ...
