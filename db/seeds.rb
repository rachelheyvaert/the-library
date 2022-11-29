# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:

b1 = Book.create(title: 'Pride and Prejudice', author: 'Jane Austen', page_count: 279, img_url: 'https://m.media-amazon.com/images/I/416K+gR7RLL._SY344_BO1,204,203,200_.jpg', description: 'A couple must overcome the titular sins of pride and prejudice in order to fall in love and marry.')
b2 = Book.create(title: "To Kill a Mockingbird", author: "Harper Lee", page_count: 336, img_url: 'https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1553383690l/2657.jpg', description: "It is both a  coming-of-age story and a darker drama about the roots and consequences of racism and prejudice, probing how good and evil can coexist within a single community or individual.")
b3 = Book.create(title:'The Call of the Wild', author: 'Jack London' , page_count: 106, img_url: 'https://m.media-amazon.com/images/I/51Doq61ovIL.jpg', description: 'In the 1890s, a young dog named Buck hears the call of the wild. But can he answer it, especially when nature and mans cruelty are stacked against him?')
b4 = Book.create(title: 'The Great Gatsby ' , author: "F. Scott Fitzgerald", page_count: 180, img_url: 'https://upload.wikimedia.org/wikipedia/commons/7/7a/The_Great_Gatsby_Cover_1925_Retouched.jpg', description: ' Set in Jazz Age New York, the novel tells the tragic story of Jay Gatsby, a self-made millionaire, and his pursuit of Daisy Buchanan, a wealthy young woman whom he loved in his youth.')
b5 = Book.create(title:'Night', author: "Elie Wiesel" , page_count: 120, img_url: 'https://img.secondsale.com/PRO0710445.jpg?d=255x386', description: 'Night is a 1960 memoir by Elie Wiesel based on his Holocaust experiences with his father in the Nazi German concentration camps at Auschwitz and Buchenwald in 1945, toward the end of the Second World War in Europe.')

u1 = User.create(username:'rachel', email: 'rachel@gmail.com', password:'test')
u2 = User.create(username: 'ben', email: 'ben@gmail.com', password:'test')

Review.create(user:u1, book: b2, review_body: 'If you have not read this as an adult, do so now.')
Review.create(user:u2,book: b2, review_body: 'Rereading this book as an adult made me realize how truly beautiful and wonderful it is. It will forever be one of my favorites')
Review.create(user:u1, book: b3, review_body: 'I found The Call of the Wild immensely powerful and involving. By the end of it I actually felt bloodied and battered, as though I had come through a formative experience. The Call of the Wild deserves its status as one of the best novels ever written.' )

