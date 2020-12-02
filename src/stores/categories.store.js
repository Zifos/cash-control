import { reactive, toRefs, readonly } from 'vue'
import { getAllDocuments, createDocument, updateDocument, deleteDocument } from '@/plugins/firebase.js'

const collection = 'categories'

const state = reactive({
  categories: [],
  isLoading: false,
  currentAction: null
})

export default function () {
  const fetchCategories = async () => {
    try {
      state.categories = await getAllDocuments(collection)
    } catch (err) {
      console.log(err)
    } finally {
      state.isLoading = false
    }
  }

  const createCategory = async (category) => {
    try {
      state.isLoading = true
      const addedCategory = await createDocument(collection, category)
      state.categories.push(addedCategory)
    } catch (err) {
      console.log(err)
    } finally {
      state.isLoading = false
    }
  }

  const deleteCategory = async (categoryId) => {
    try {
      const toDelete = state.categories.find(category => category.id === categoryId)
      const indexTodelete = state.categories.indexOf(toDelete)
      await deleteDocument(collection, categoryId)
      state.categories.splice(indexTodelete, 1)
    } catch (err) {
      console.log(err)
    } finally {
      state.isLoading = false
    }
  }

  const updateCategory = async (categoryId, category) => {
    try {
      const toUpdate = state.categories.find(category => category.id === categoryId)
      const indexToUpdate = state.categories.indexOf(toUpdate)
      state.categories[indexToUpdate] = await updateDocument(collection, categoryId, category)
    } catch (err) {
      console.log(err)
    } finally {
      state.isLoading = false
    }
  }

  return {
    fetchCategories,
    createCategory,
    deleteCategory,
    updateCategory,
    ...toRefs(readonly(state))
  }
}
