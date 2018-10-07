const main = async () => {
    const Database = require('arangojs').Database;
    const db = new Database();
    db.useBasicAuth("root", "tommaso.celano01")
    db.useDatabase("icef");
    const dbresult = await db.exists();
    if (!dbresult) {
        db.createDatabase("icef", async () => {
            const collection = db.collection("icef_users")
            const result = await collection.exists();
            if (!result) {
                collection.create(() => { });
                collection.save({ user: 'dummy.' })
            } else {
                collection.save({ user: 'dummy.' })
            }
        })
    } else {
        const collection = db.collection("icef_users")
        const result = await collection.exists();
        if (!result) {
            collection.create(() => { });
            collection.save({ user: 'dummy.' })
        } else {
            collection.save({ user: 'dummy.' })
        }
    }
};
main();


