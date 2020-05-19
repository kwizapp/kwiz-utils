export function addSizeToUrl(createError: Function, url: string, size: number | string) {
  const exists = url.indexOf('SX300')

  // doesn't exist
  if (exists === -1) {
    throw createError(400, `Unable to fetch movie poster because the provided url is invalid.`)
  } else {
    return url.replace('SX300', `SX${size}`)
  }
}
