import firebase from 'firebase/app'
import 'firebase/firestore'
import { errorTypes } from '@/helpers/errors'
import { checkModel } from '@/models'

const firebaseApp = firebase
  .initializeApp({
    apiKey: 'AIzaSyBm4Rzk4XJgMUTcOH7UytjDdpwRuhj9uXI',
    authDomain: 'finanzas-f54a5.firebaseapp.com',
    databaseURL: 'https://finanzas-f54a5.firebaseio.com',
    projectId: 'finanzas-f54a5',
    storageBucket: 'finanzas-f54a5.appspot.com',
    messagingSenderId: '725324844899',
    appId: '1:725324844899:web:da2fbf6dc754b5d2b4cd56',
    measurementId: 'G-SJDJPTX852'
  })

export const db = firebaseApp.firestore()

// [TODO] Faltan los try, catch -> Hay que agregarlos cuando se termine el manejo de errores

export const getAllDocuments = async (collection) => {
  const collectionData = await db.collection(collection).get()
  return collectionData.docs.map(doc => {
    return {
      ok: true,
      id: doc.id,
      ...doc.data()
    }
  })
}

export const getDocument = async (collection, id) => {
  const docData = await db.collection(collection).doc(id).get()

  if (!docData.exists) {
    // launch error exist
    const error = { ok: false, errors: [{ type: errorTypes.DOCUMENT_NOT_FOUND, document: id }] }
    console.error(error)
    return
  }

  return {
    id,
    ...docData.data()
  }
}

export const createDocument = async (collection, data) => {
  // Check data before send it to firestore
  const checkData = checkModel(collection, data)

  if (!checkData.ok) {
    // launch error
    console.error(checkData.errors)
    return
  }

  const addedDocument = await db.collection(collection).add(data)

  return {
    id: addedDocument.id,
    ...data
  }
}

export const updateDocument = async (collection, id, data) => {
  const checkData = checkModel(collection, data)

  if (!checkData.ok) {
    // launch error
    console.error(checkData.errors)
    return
  }

  await db.collection(collection).doc(id).update(data)
  return {
    id,
    ...data
  }
}

export const deleteDocument = async (collection, id) => {
  return await db.collection(collection).doc(id).delete()
}
