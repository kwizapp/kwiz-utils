export function validateId(createError: Function, input?: any) {
  if (input === undefined) {
    throw createError(400, `No id parameter passed in the url.`)
  }

  const regex = /^tt[0-9]{7}$/

  if (!input.match(regex)) {
    throw createError(
      400,
      `The passed id is not valid or has the wrong format. A correct id looks like this: tt3896198, two t followed by 7 digits`
    )
  }
}

export function validateSize(createError: Function, size?: any) {
  if (size === undefined) {
    return 300
  }

  if (isNaN(size)) {
    throw createError(400, `URL parameter size must be a number`)
  }

  if (size < 300 || size > 1000) {
    throw createError(400, `URL parameter size must be in the range of [300, 1000]`)
  }

  return size
}
