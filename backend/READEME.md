## learn-node

# doc pour install sur debian 10 (c'est ma wsl) https://computingforgeeks.com/how-to-install-mongodb-on-debian/

# après pour start le bouzin la doc ne marche pas ; j'ai du lancer à la main mongo db :

# sudo mongod --dbpath /var/lib/mongodb

# use : pour créer une nouvelle DB, une collection

# db.maCollection.insertOne ({object: "monObjet", name: "le nom de l'objet"})

# db.inventory.find( { object: "monObjet" } )

# db.collection.insertMany([
    {},
    {},
    {}
])