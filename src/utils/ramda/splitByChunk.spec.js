import { splitByChunk } from './splitByChunk'

describe('splitByChunk', () => {
  it('splitByChunk test grou by 2', () => {
    const result = [
      ['key1', 'key2'],
      ['key3', 'key4'],
    ]
    expect(splitByChunk(2)(['key1', 'key2', 'key3', 'key4'])).toEqual(result)
  })
  it('splitByChunk test group by 7', () => {
    const data = [
      {
        label: 1,
        active: true,
      },
      {
        label: 2,
        active: true,
      },
      {
        label: 3,
        active: true,
      },
      {
        label: 4,
        active: true,
      },
      {
        label: 5,
        active: true,
      },
      {
        label: 6,
        active: true,
      },
      {
        label: 7,
        active: true,
      },
      {
        label: 8,
        active: true,
      },
      {
        label: 9,
        active: true,
      },
      {
        label: 10,
        active: true,
      },
    ]
    expect(splitByChunk(7)(data)).toEqual([
      [
        {
          label: 1,
          active: true,
        },
        {
          label: 2,
          active: true,
        },
        {
          label: 3,
          active: true,
        },
        {
          label: 4,
          active: true,
        },
        {
          label: 5,
          active: true,
        },
        {
          label: 6,
          active: true,
        },
        {
          label: 7,
          active: true,
        },
      ],
      [
        {
          label: 8,
          active: true,
        },
        {
          label: 9,
          active: true,
        },
        {
          label: 10,
          active: true,
        },
      ],
    ])
  })
})
