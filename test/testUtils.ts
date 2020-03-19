export function mockThrow(statusCode: number, error: any): any {
  // TODO: possibly include the statuscode when throwing (so we can assert it)
  throw error
}
