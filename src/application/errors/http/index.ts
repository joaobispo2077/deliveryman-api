export class HttpError extends Error {
  public statusCode = 500;

  constructor(message?: string) {
    super(message || 'Unknown error');
    this.name = 'HttpError';
  }
}

export class ConflictError extends HttpError {
  public statusCode = 409;

  constructor(message?: string) {
    super(`Conflict, the resource provided already exists: '${message || ''}'`);
  }
}

export class NotFoundError extends HttpError {
  public statusCode = 404;

  constructor(message?: string) {
    super(`Not found, the resource provided was not found: '${message || ''}'`);
  }
}

export class UnauthorizedError extends HttpError {
  public statusCode = 401;

  constructor(message?: string) {
    super(
      `Unauthorized, the resource provided was unauthorized: '${
        message || ''
      }'`,
    );
  }
}

export class UnprocessableEntityError extends HttpError {
  public statusCode = 422;

  constructor(message?: string) {
    super(
      `Unprocessable entity, the resource provided was invalid: '${
        message || ''
      }'`,
    );
  }
}
