import util from 'util';
import {getPersonById} from '../services/Person';
/*

 For a controller you should export the functions referenced in your Swagger document by name.

 Either:
  - The HTTP Verb of the corresponding operation (get, put, post, delete, etc)
  - Or the operationId associated with the operation in your Swagger document

 */
/*module.exports = {
  getPerson: getPerson
};*/

/*
  Functions in controllers used for operations should take two parameters:

  Param 1: a handle to the request object
  Param 2: a handle to the response object
 */
 const getPerson=(req, res)=>{
  // variables defined in the Swagger document can be referenced using req.swagger.params.{parameter_name}
  var personId = req.swagger.params.personId.value;
  res.json(getPersonById(personId));
}

export {getPerson};


