import React, { useState } from 'react'
import { StateView } from '@common/StateView'

import {
  pipe,
  prop,
  pluck,
  mapObjIndexed,
  keys,
  length,
  filter,
  includes,
  type,
  toPairs,
  equals,
  propEq,
  nth,
  find,
  head,
  toLower,
  values,
  map,
} from 'ramda'

// Fake Response
const response = {
  requestBodyStr: {
    password: 'xlskdjfsdf',
    userName: 'philip',
    rememberMe: false,
    requestTime: '2020-12-11 12:35:05',
    response: {
      code: 'AUTHENTICATION_OK',
      result: {
        AccessToken: 'sldfsldkfjlljsdsd',
        RefreshToken: 'sdlfkjsldfjsldkfjlsdf',
        TokenType: 'Bearer',
        IdToken: 'xlkjsdlfsdlfjslkj',
        userId: 'temp-xxx-yyy',
        userName: 'philip-0621@gmail.com',
        ExpiresIn: 3600,
      },
    },
  },
}

const list = {
  primary: {
    label: 'First Level',
    children: {
      label: 'Second Level',
      children: {
        label: 'Third Level',
        children: {
          label: 'Fourth Level',
          children: {},
        },
      },
    },
  },
  secondary: {
    children: {
      label: 'Second Level',
      children: {
        label: 'Third Level',
        children: {
          label: 'Fourth Level',
          children: {},
        },
      },
    },
  },
}

const typeIs = (expected) => (original) => equals(type(original), expected)
const isObjectLiteral = typeIs('Object')

const replaceNeedlesInHaystack =
  (needleKeys, dataToReplaceNeedleKey) => (haystack) => {
    // Make lowercase on needles array
    const lowerCaseNeedleKeys = map(toLower, needleKeys)

    const walkBackwards = mapObjIndexed((value, key) => {
      // Check if Object Literal
      const isNestedHaystack = isObjectLiteral(value)
      // Make key lowercase
      const isMatchingNeedle = lowerCaseNeedleKeys.includes(toLower(key))

      if (isNestedHaystack) return walkBackwards(value)
      if (isMatchingNeedle) return dataToReplaceNeedleKey
      return value
    })
    return walkBackwards(haystack)
  }

export { replaceNeedlesInHaystack }

const CONFIG = {
  flights: {
    id: 'flights',
    label: 'Flights',
    action: 'N/A',
    icon: 'FLIGHT',
    type: 'menu',
    category: 'existingBookings,',
  },
  existingBookings: {
    id: 'existingBookings',
    label: 'Existing Booking',
    action: 'N/A',
    icon: 'FLIGHT',
    type: 'menu',
    category: '',
  },
}

const setup = {
  flights: {
    category: 'existingBookings,',
  },
  existingBookings: {
    category: 'changeBooking,',
  },
}

const lookup = {
  existingBookings: {
    category: {
      existingBookings: {
        label: 'Hotels',
        action: 'N/A',
        icon: 'HOTELS',
        type: 'menu',
      },
    },
  },
}

const Walk = () => {
  const [state, setState] = useState(setup)
  const onReset = () => setState(setup)

  const onTraverse = () => {
    const result = replaceNeedlesInHaystack(
      keys(CONFIG),
      lookup['existingBookings'],
    )(setup)
    setState(result)
  }

  return (
    <div>
      <div>
        <button onClick={onTraverse}>Traverse</button>
        <button onClick={onReset}>Reset</button>
      </div>
      <StateView state={state} />
    </div>
  )
}

export { Walk }
