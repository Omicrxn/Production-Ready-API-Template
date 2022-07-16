//HTTP Status constants to use along the project
export class StatusConstants {
  //100 Continue
  public static code100 = 100;
  public static code100Message = "Continue";
  //101 Switching Protocol
  public static code101 = 101;
  public static code101Message = "Switching Protocol";
  //102 Processing
  public static code102 = 102;
  public static code102Message = "Processing";

  //200 Success
  public static code200 = 200;
  public static code200Message = "OK";
  //201 Created
  public static code201 = 201;
  public static code201Message = "The resource has been created";
  //202 Accepted
  public static code202 = 202;
  public static code202Message = "Accepted";

  //400 Bad Request
  public static code400 = 400;
  public static code400Message = "Bad Request";
  //401 Unauthorized
  public static code401 = 401;
  public static code401Message = "You don't have access. Please authenticate.";
  //403 Forbidden (Unlike 401 the client's identity is know to the server)
  public static code403 = 403;
  public static code403Message =
    "Forbidden, you don't have access to this section.";
  //404 Not Found
  public static code404 = 404;
  public static code404Message = "Not Found";
  //408 Request Timeout
  public static code408 = 408;
  public static code408Message = "Request Timeout";
  //429 Too Many Requests
  public static code429 = 429;
  public static code429Message =
    "Too many requests have been sent. Please wait for a few minutes before trying again.";
  //500 Internal Server Error
  public static code500 = 500;
  public static code500Message = "Internal Server Error";
  //501 Not Implemented
  public static code501 = 501;
  public static code501Message = "The server does not support this HTTP method.";
  //502 Bad Gateway
  public static code502 = 502;
  public static code502Message = "Bad Gateway";
  //503 Service Unavilable
  public static code503 = 503;
  public static code503Message = "Service Unavilable"
}
