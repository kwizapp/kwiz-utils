import { validateId, validateSize } from '../src/validate'
import { mockThrow } from './testUtils'

const invalidFormatErrorMsg = `The passed id is not valid or has the wrong format. A correct id looks like this: tt3896198, two t followed by 7 digits`
const noIdErrorMsg = `No id parameter passed in the url.`

describe('validate', () => {
  it('validates correct format [id]', () => {
    const input = 'tt3896198'

    expect(() => validateId(mockThrow, input)).not.toThrow()
  })

  it('validates undefined input [id]', () => {
    const input = undefined

    expect(() => validateId(mockThrow, input)).toThrow(noIdErrorMsg)
  })

  it('validates wrong input format (id starting with xx) [id]', () => {
    const input = 'xx3896198'

    expect(() => validateId(mockThrow, input)).toThrow(invalidFormatErrorMsg)
  })

  it('validates wrong input format (id ending with letters) [id]', () => {
    const input = 'tt38hello'

    expect(() => validateId(mockThrow, input)).toThrow(invalidFormatErrorMsg)
  })

  it('validates correct size [size]', () => {
    const input = 450

    const size = validateSize(mockThrow, input)
    expect(size).toEqual(input)
  })

  it('validates undefined input [size]', () => {
    const input = undefined

    const size = validateSize(mockThrow, input)
    expect(size).toEqual(300)
  })

  it('validate NaN input [size]', () => {
    const input = 'hello world'

    const expected = 'URL parameter size must be a number'
    expect(() => validateSize(mockThrow, input)).toThrow(expected)
  })

  it('validate input with incorrect size [size]', () => {
    const input = 299
    const input2 = 1001

    const expected = 'URL parameter size must be in the range of [300, 1000]'

    expect(() => validateSize(mockThrow, input)).toThrow(expected)
    expect(() => validateSize(mockThrow, input2)).toThrow(expected)
  })
})
