import { getProp } from './getProp'

describe('getProp', () => {
  it('getProp test', () => {
    const data = {
      key1: 'value1',
      key2: {
        key3: 'value3',
      },
    }
    expect(getProp('key1')(data)).toEqual('value1')
    expect(getProp('key2.key3')(data)).toEqual('value3')
  })
})
