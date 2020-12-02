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

  Object.entries(data).forEach(entry => {
    const [key, value] = entry
    const valueType = typeof value
    const expectedType = models[model][key]

    if (valueType !== expectedType) {
      errors.push({
        model,
        key,
        value,
        expectedType,
        valueType
      })
    }
  })

  return {
    ok: errors.length > 0,
    errors
  }
}
