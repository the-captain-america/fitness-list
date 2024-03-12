import { lensPath, view } from 'ramda'

const getProp = (path) => (data) => {
  const fieldPath = lensPath(path.split('.'))
  return view(fieldPath, data)
}

export { getProp }
