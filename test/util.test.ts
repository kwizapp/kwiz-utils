import { addSizeToUrl } from '../src'
import { mockThrow } from './testUtils'

describe('util', () => {
  it('can add size to URL', () => {
    const size = 999
    const input =
      'https://m.media-amazon.com/images/M/MV5BOTk5ODg0OTU5M15BMl5BanBnXkFtZTgwMDQ3MDY3NjM@._V1_SX300.jpg'

    const expected =
      'https://m.media-amazon.com/images/M/MV5BOTk5ODg0OTU5M15BMl5BanBnXkFtZTgwMDQ3MDY3NjM@._V1_SX999.jpg'

    expect(addSizeToUrl(mockThrow, input, size)).toEqual(expected)
  })

  it('can add size to URL (wrong input URL)', () => {
    const size = 999
    const input =
      'https://m.media-amazon.com/images/M/MV5BOTk5ODg0OTU5M15BMl5BanBnXkFtZTgwMDQ3MDY3NjM@._V1.jpg'

    const error = 'Unable to fetch movie poster because the provided url is invalid.'
    expect(() => addSizeToUrl(mockThrow, input, size)).toThrow(error)
  })
})
