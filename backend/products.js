const products = [
    {
      "id": 1,
      "name": "Monsieur Croque",
      "description": "Jambon blanc, béchamel maison, fromage Abondance A.O.P",
      "picture": "https://i.ibb.co/vdwhGFF/Monsieur-Croque.jpg",
      "price": 7,
      "category": {
        "id": 1,
        "name": "Croque-Monsieur"
      }
    },
    {
      "id": 2,
      "name": "Le Transformiste",
      "description": "Jambon blanc, béchamel maison, fromage Abondance A.O.P,\r\noeuf fermier",
      "picture": "https://i.ibb.co/Dzn2TJL/Transformiste.jpg",
      "price": 8,
      "category": {
        "id": 1,
        "name": "Croque-Monsieur"
      }
    },
    {
      "id": 3,
      "name": "Monsieur Seguin",
      "description": "Fromage frais, fromage de chèvre A.O.P, compotée d’oignons\r\nmaison, poire fraîche, noix, miel",
      "picture": "https://i.ibb.co/m6m1Y9N/Seguin.jpg",
      "price": 8,
      "category": {
        "id": 1,
        "name": "Croque-Monsieur"
      }
    },
    {
      "id": 4,
      "name": "Coq Monsieur",
      "description": "Poulet label rouge, béchamel maison, coulis de tomate maison,\r\nfromage Abondance A.O.P, compotée d’oignons maison",
      "picture": "https://i.ibb.co/xDQ8NNP/Coq.jpg",
      "price": 8,
      "category": {
        "id": 1,
        "name": "Croque-Monsieur"
      }
    },
    {
      "id": 5,
      "name": "Monsieur Confit",
      "description": "Confit de canard du sud-ouest, compotée d’oignons maison,\r\npoire fraîche, fromage Ossau-Iraty A.O.P",
      "picture": "https://i.ibb.co/6ng6xNF/Confit.jpg",
      "price": 8,
      "category": {
        "id": 1,
        "name": "Croque-Monsieur"
      }
    },
    {
      "id": 6,
      "name": "Croque Mystère",
      "description": "Croque du moment, voir avec le chef",
      "picture": "https://scontent-cdt1-1.xx.fbcdn.net/v/t31.0-0/p526x296/29873021_1926089284369297_2738419179062774597_o.jpg?_nc_cat=101&_nc_sid=9267fe&_nc_ohc=m8o2_94Wr9cAX_gTupn&_nc_ht=scontent-cdt1-1.xx&_nc_tp=6&oh=d62f86922fcaf5781967efa13e283000&oe=5F5B280C",
      "price": 9,
      "category": {
        "id": 1,
        "name": "Croque-Monsieur"
      }
    },
    {
      "id": 7,
      "name": "Frites",
      "description": null,
      "picture": "https://images.pexels.com/photos/1583884/pexels-photo-1583884.jpeg?cs=srgb&dl=pexels-dzenina-lukac-1583884.jpg&fm=jpg",
      "price": 3,
      "category": {
        "id": 2,
        "name": "Accompagnements"
      }
    },
    {
      "id": 8,
      "name": "Salade",
      "description": null,
      "picture": "https://images.pexels.com/photos/9350/salad-restaurant-tomatoes-kitchen.jpg?cs=srgb&dl=pexels-skitterphoto-9350.jpg&fm=jpg",
      "price": 3,
      "category": {
        "id": 2,
        "name": "Accompagnements"
      }
    },
    {
      "id": 9,
      "name": "Légumes",
      "description": null,
      "picture": "https://images.pexels.com/photos/3985872/pexels-photo-3985872.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260",
      "price": 3,
      "category": {
        "id": 2,
        "name": "Accompagnements"
      }
    },
    {
      "id": 10,
      "name": "Coleslaw",
      "description": null,
      "picture": "https://st.depositphotos.com/2938133/4171/i/950/depositphotos_41712745-stock-photo-coleslaw-in-a-bowl-on.jpg",
      "price": 3,
      "category": {
        "id": 2,
        "name": "Accompagnements"
      }
    },
    {
      "id": 11,
      "name": "Madame Tarte",
      "description": "Tarte du jour",
      "picture": "https://scontent-cdt1-1.xx.fbcdn.net/v/t1.0-9/23559869_1858601737784719_2189068685493830084_n.jpg?_nc_cat=103&_nc_sid=9267fe&_nc_ohc=E3NKdUcebJMAX-dvWIW&_nc_ht=scontent-cdt1-1.xx&oh=792f808950b8970d10351ff48f493075&oe=5F5B3628",
      "price": 4,
      "category": {
        "id": 3,
        "name": "Coté Sucré"
      }
    },
    {
      "id": 12,
      "name": "Fromage Blanc",
      "description": "Coulis: fraise, poire, miel,\r\ncrème de marrons",
      "picture": "https://images.pexels.com/photos/4006362/pexels-photo-4006362.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260",
      "price": 4,
      "category": {
        "id": 3,
        "name": "Coté Sucré"
      }
    },
    {
      "id": 13,
      "name": "Coca Cola",
      "description": "33 cl.",
      "picture": "https://images.unsplash.com/photo-1527960471264-932f39eb5846?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80",
      "price": 2,
      "category": {
        "id": 4,
        "name": "Boissons Fraiches"
      }
    },
    {
      "id": 14,
      "name": "Coca Cola light",
      "description": "33 cl.",
      "picture": "https://images.unsplash.com/photo-1527960471264-932f39eb5846?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80",
      "price": 2,
      "category": {
        "id": 4,
        "name": "Boissons Fraiches"
      }
    },
    {
      "id": 15,
      "name": "Fuzetea",
      "description": "33 cl.",
      "picture": "https://images.unsplash.com/photo-1527960471264-932f39eb5846?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80",
      "price": 2,
      "category": {
        "id": 4,
        "name": "Boissons Fraiches"
      }
    },
    {
      "id": 16,
      "name": "Sprite",
      "description": "33 cl.",
      "picture": "https://images.unsplash.com/photo-1527960471264-932f39eb5846?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80",
      "price": 2,
      "category": {
        "id": 4,
        "name": "Boissons Fraiches"
      }
    },
    {
      "id": 17,
      "name": "Minute maid Orange",
      "description": "33 cl.",
      "picture": "https://images.unsplash.com/photo-1527960471264-932f39eb5846?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80",
      "price": 2,
      "category": {
        "id": 4,
        "name": "Boissons Fraiches"
      }
    },
    {
      "id": 18,
      "name": "Minute maid Pomme",
      "description": "33 cl.",
      "picture": "https://images.unsplash.com/photo-1527960471264-932f39eb5846?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80",
      "price": 2,
      "category": {
        "id": 4,
        "name": "Boissons Fraiches"
      }
    },
    {
      "id": 19,
      "name": "Minute maid Fruits Rouges",
      "description": "33 cl.",
      "picture": "https://images.unsplash.com/photo-1527960471264-932f39eb5846?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80",
      "price": 2,
      "category": {
        "id": 4,
        "name": "Boissons Fraiches"
      }
    },
    {
      "id": 20,
      "name": "Abatilles",
      "description": "50 cl.",
      "picture": "https://pauillac-traiteur.fr/wp-content/uploads/2017/04/pauillac-traiteur-abatilles-bordeaux-local-abatilles-plate-50cl.jpg",
      "price": 1.9,
      "category": {
        "id": 4,
        "name": "Boissons Fraiches"
      }
    },
    {
      "id": 21,
      "name": "Abatilles pétillante",
      "description": "50 cl.",
      "picture": "https://pauillac-traiteur.fr/wp-content/uploads/2017/04/pauillac-traiteur-abatilles-bordeaux-local-abatilles-petillante-50cl-1.jpg",
      "price": 1.9,
      "category": {
        "id": 4,
        "name": "Boissons Fraiches"
      }
    },
    {
      "id": 22,
      "name": "Limonade Mira",
      "description": "25 cl. \r\nBoisson Artisanale",
      "picture": "https://brasseriemira.fr/wp-content/uploads/2018/05/limo.jpg",
      "price": 3.5,
      "category": {
        "id": 4,
        "name": "Boissons Fraiches"
      }
    },
    {
      "id": 23,
      "name": "Ginger Beer",
      "description": "25 cl. \r\nBoisson Artisanale",
      "picture": "https://www.delidrinks.com/18560-large_default/gingeur-ginger-beer-bouteille-verre-12-x-330ml-bio.jpg",
      "price": 3.5,
      "category": {
        "id": 4,
        "name": "Boissons Fraiches"
      }
    },
    {
      "id": 24,
      "name": "Mira",
      "description": "Bière Bouteille 33 cl.",
      "picture": "https://cave-bars.neodif.eu/1719-large_default/mira-blonde-33cl-nc.jpg",
      "price": 3.7,
      "category": {
        "id": 4,
        "name": "Boissons Fraiches"
      }
    },
    {
      "id": 25,
      "name": "Pip",
      "description": "Bière Bouteille 33 cl.",
      "picture": "https://produits.bienmanger.com/36387-0w470h470_Pate_Curry_Rouge_Bio.jpg",
      "price": 3.7,
      "category": {
        "id": 4,
        "name": "Boissons Fraiches"
      }
    },
    {
      "id": 26,
      "name": "Vin",
      "description": "Bouteille 75 cl.",
      "picture": "https://vandb-vandb-fr-storage.omn.proximis.com/Imagestorage/imagesSynchro/335/335/1fbf3ce9178e3a8da664d30da8734f8dc36eb615_7529VBO033556_1.png",
      "price": 18,
      "category": {
        "id": 4,
        "name": "Boissons Fraiches"
      }
    },
    {
      "id": 27,
      "name": "Expresso",
      "description": null,
      "picture": "https://images.unsplash.com/photo-1555118367-93f01e18660f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80",
      "price": 1.7,
      "category": {
        "id": 5,
        "name": "Boissons Chaudes"
      }
    },
    {
      "id": 28,
      "name": "Café Long",
      "description": null,
      "picture": "https://images.unsplash.com/photo-1506372023823-741c83b836fe?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80",
      "price": 2.2,
      "category": {
        "id": 5,
        "name": "Boissons Chaudes"
      }
    },
    {
      "id": 29,
      "name": "Cappuccino",
      "description": null,
      "picture": "https://images.unsplash.com/photo-1506372023823-741c83b836fe?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80",
      "price": 3.2,
      "category": {
        "id": 5,
        "name": "Boissons Chaudes"
      }
    },
    {
      "id": 30,
      "name": "Latte Macchiato",
      "description": null,
      "picture": "https://images.unsplash.com/photo-1550247611-e651810312fe?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80",
      "price": 3.2,
      "category": {
        "id": 5,
        "name": "Boissons Chaudes"
      }
    },
    {
      "id": 31,
      "name": "Thé",
      "description": null,
      "picture": "https://images.unsplash.com/photo-1558160074-4d7d8bdf4256?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80",
      "price": 3.2,
      "category": {
        "id": 5,
        "name": "Boissons Chaudes"
      }
    }
  ];
  module.exports = products