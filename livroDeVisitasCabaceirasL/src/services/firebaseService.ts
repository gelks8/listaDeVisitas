import {addDoc, collection, getFirestore} from 'firebase/firestore/lite'
import app from '../../firebase.config'

const firestore = getFirestore(app)

const firebaseService = {
    save: async (data: any, collectionName: string) => {
        return addDoc(collection(firestore, collectionName), data)
    }
}

export default firebaseService