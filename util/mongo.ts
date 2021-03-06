import { MongoClient } from 'mongodb'

const MONGODB_URI = process.env.MONGODB_URI || ''

export let connectToDatabase = async () => {
    return MongoClient.connect(MONGODB_URI).then((client) => {
        return {
            client,
            db: client.db(),
        }
    })
}

if (process.env.NODE_ENV !== 'production') {
    connectToDatabase = async () => {
        const globalAny: any = global
        let cached = globalAny.mongo

        if (!cached) {
            cached = globalAny.mongo = { conn: null, promise: null }
        }

        if (cached.conn) {
            return cached.conn
        }

        if (!cached.promise) {
            cached.promise = MongoClient.connect(MONGODB_URI).then((client) => {
                return {
                    client,
                    db: client.db(),
                }
            })
        }

        cached.conn = await cached.promise
        return cached.conn
    }
}