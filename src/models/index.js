import { errorTypes } from '@/helpers/errors'

import accounts from './entities/accounts.model'
import budgets from './entities/budgets.model'
import categories from './entities/categories.model'
import expenses from './entities/expenses.model'
import incomes from './entities/incomes.model'
import users from './entities/users.model'

const models = {
  accounts,
  budgets,
  categories,
  expenses,
  incomes,
  users
}

/**
 *
 * @param {string} model = Model to check
 * @param {object} data = Data to save in model
 *
 * returns possible type errors in data
 */
export const checkModel = (model, data) => {
  const errors = []

  // Check model exist
  if (!models[model]) {
    return {
      ok: false,
      errors: [
        { type: errorTypes.UNDEFINED_MODEL, model }
      ]
    }
  }

  // Check data keys
  const modelKeys = Object.keys(models[model])
  const dataKeys = Object.keys(data)

  if (dataKeys.length < modelKeys.length) {
    modelKeys.forEach(modelKey => {
      if (!dataKeys.includes(modelKey)) {
        errors.push({
          type: errorTypes.MISSING_PROP,
          expectedProp: modelKey
        })
      }
    })
  }

  // Check data values types
  Object.entries(data).forEach(entry => {
    const [key, value] = entry
    const valueType = typeof value
    const expectedType = models[model][key]

    if (expectedType === undefined) {
      errors.push({
        type: errorTypes.UNDEFINED_PROP,
        key,
        value
      })
      return
    }

    if (valueType !== expectedType) {
      errors.push({
        type: errorTypes.UNEXPECTED_TYPE,
        model,
        key,
        value,
        expectedType,
        valueType
      })
    }
  })

  return {
    ok: !errors.length,
    errors
  }
}
