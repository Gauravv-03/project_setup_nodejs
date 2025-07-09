// const asyncHandler= function(requestHandler)
// {
//     return (req,res,next)=>{
//         Promise.resolve((req, res, next)).catch((err)=>{
//             next(err);
//         })
//     }
// }


// export {asyncHandler};


const asyncHandler = (fn) => (req, res, next) => {
  Promise.resolve(fn(req, res, next)).catch(next);
};

export { asyncHandler };
