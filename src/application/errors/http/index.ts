export class HttpError extends Error {
  public statusCode = 500;

  constructor(error?: Error) {
    super(error?.message ?? 'Unknown error');
    this.name = 'HttpError';
    this.stack = error?.stack;
  }
}

export class ConflictError extends Error {
  public statusCode = 409;

  constructor(message?: string) {
    super(`Conflict, the resource provided already exists: '${message || ''}'`);
  }
}
