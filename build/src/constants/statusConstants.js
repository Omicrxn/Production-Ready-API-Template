"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.StatusConstants = void 0;
class StatusConstants {
}
exports.StatusConstants = StatusConstants;
//100 Continue
StatusConstants.code100 = 100;
StatusConstants.code100Message = "Continue";
//101 Switching Protocol
StatusConstants.code101 = 101;
StatusConstants.code101Message = "Switching Protocol";
//102 Processing
StatusConstants.code102 = 102;
StatusConstants.code102Message = "Processing";
//200 Success
StatusConstants.code200 = 200;
StatusConstants.code200Message = "OK";
//201 Created
StatusConstants.code201 = 201;
StatusConstants.code201Message = "The resource has been created";
//202 Accepted
StatusConstants.code202 = 202;
StatusConstants.code202Message = "Accepted";
//400 Bad Request
StatusConstants.code400 = 400;
StatusConstants.code400Message = "Bad Request";
//401 Unauthorized
StatusConstants.code401 = 401;
StatusConstants.code401Message = "You don't have access. Please authenticate.";
//403 Forbidden (Unlike 401 the client's identity is know to the server)
StatusConstants.code403 = 403;
StatusConstants.code403Message = "Forbidden, you don't have access to this section.";
//404 Not Found
StatusConstants.code404 = 404;
StatusConstants.code404Message = "Not Found";
//408 Request Timeout
StatusConstants.code408 = 408;
StatusConstants.code408Message = "Request Timeout";
//429 Too Many Requests
StatusConstants.code429 = 429;
StatusConstants.code429Message = "Too many requests have been sent. Please wait for a few minutes before trying again.";
//500 Internal Server Error
StatusConstants.code500 = 500;
StatusConstants.code500Message = "Internal Server Error";
//501 Not Implemented
StatusConstants.code501 = 501;
StatusConstants.code501Message = "The server does not support this HTTP method.";
//502 Bad Gateway
StatusConstants.code502 = 502;
StatusConstants.code502Message = "Bad Gateway";
//503 Service Unavilable
StatusConstants.code503 = 503;
StatusConstants.code503Message = "Service Unavilable";
//# sourceMappingURL=statusConstants.js.map