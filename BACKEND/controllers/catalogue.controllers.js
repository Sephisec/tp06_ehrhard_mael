exports.get = (req, res) => {
  const catalogue = [
        {
          ref: "REF001",
          titre: "Laptop",
          prix: 999.99
        },
        {
          ref: "REF002",
          titre: "Smartphone",
          prix: 599.99
        },
        {
          ref: "REF003",
          titre: "Tablet",
          prix: 299.99
        },
        {
          ref: "REF004",
          titre: "Headphones",
          prix: 49.99
        },
        {
          ref: "REF005",
          titre: "Television",
          prix: 799.99
        },
        {
          ref: "REF006",
          titre: "Coffee Maker",
          prix: 79.99
        },
        {
          ref: "REF007",
          titre: "Gaming Console",
          prix: 399.99
        },
        {
          ref: "REF008",
          titre: "Camera",
          prix: 199.99
        },
        {
          ref: "REF009",
          titre: "Bluetooth Speaker",
          prix: 29.99
        },
        {
          ref: "REF010",
          titre: "Watch",
          prix: 199.99
        }
      ]

  res.setHeader("Content-Type", "application/json");

  res.send(catalogue);
};
