<template>
  <div>
    <h2>Categorias</h2>
    <ul>
      <li v-for="c in categories" :key="c.id">{{ c.title }}</li>
    </ul>
    <button @click="addCategory">Add Category</button>
    <button @click="updateCategory">Update Category</button>
    <button @click="deleteCategory">Delete Category</button>
  </div>
</template>

<script>
import useCategoryStore from '@/stores/categories.store'

export default {
  name: 'App',

  setup () {
    const categoryStore = useCategoryStore()

    categoryStore.fetchCategories()

    async function addCategory () {
      await categoryStore.createCategory({
        title: 'firstCategory',
        color: 'fff',
        iconUrl: 'http://loquesea.com'
      })
    }

    async function updateCategory () {
      await categoryStore.updateCategory(
        categoryStore.categories.value[0].id,
        {
          title: 'otherCategoryExample',
          color: 'aaa',
          iconUrl: 'http://algomas.com'
        }
      )
    }

    async function deleteCategory () {
      await categoryStore.deleteCategory(categoryStore.categories.value[0].id)
    }

    return {
      addCategory,
      updateCategory,
      deleteCategory,
      categories: categoryStore.categories
    }
  }
}
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
