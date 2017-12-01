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

    }),
    searchBooks: (req, res, next) => {
        const db = req.app.get('db');
        const { params } = req;

        db.filter_books([params.search])
            .then(response => res.status(200).send(response))
            .catch(() => res.status(500).send());
    },
    getBook: (req, res, next) => {
        const db = req.app.get('db');
        const { params } = req;
        
            db.get_book([params.id])
            .then(response => res.status(200).send(response))
            .catch(() => res.status(500).send());
    },
    deleteBook: (req, res) => {
        const db = req.app.get('db');
        const { params } = req;
    
        db.delete_user([params.bookId])
          .then(() => res.status(200).send('BOOK DELETED'))
          .catch(() => res.status(500).send());
      }

}