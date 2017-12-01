module.exports = {

    getAllBooks: ((req, res, next) => {
        const db = req.app.get('db');
        
        db.get_all_books()
        .then(data => {
            res.status(200).send(data)
        }).catch((err) => res.status(500).send(err, 'got and error getting books'))

    }),
    addBook: ((req, res, next) => {
        const db = req.app.get('db');
        const {title, author, in_stock, image, genre, description} = req.body;

        db.add_book([title, author, in_stock, image, genre, description])
        .then(data => {
            res.status(200).send(req.body)
        }).catch((err) => res.status(500).send(err, 'got and error getting books'))

    })
}