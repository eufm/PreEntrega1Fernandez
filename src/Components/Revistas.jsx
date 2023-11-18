const revistasData = [
    { id: 1, categoryId: "aventura", title: "Breath of the Wild", description: "Link en mundo abierto", price: 15, pictureUrl: "/assets/breath-thumb.jpg" },
    { id: 2, categoryId: "terror", title: "The Callisto Protocol", description: "Terror con zombies en Júpiter", price: 10, pictureUrl: "/assets/callisto-thumb.jpg" },
    { id: 3, categoryId: "terror", title: "Dead Space", description: "Resident Evil en el espacio", price: 10, pictureUrl: "/assets/deadspace-thumb.jpg" },
    { id: 4, categoryId: "aventura", title: "Forspoken", description: "Bruja sale mal", price: 16, pictureUrl: "/assets/forspoken-thumb.jpg" },
    { id: 5, categoryId: "aventura", title: "Hi-Fi Rush", description: "Combate rítmico", price: 12, pictureUrl: "/assets/hifi-thumb.jpg" },
    { id: 6, categoryId: "terror", title: "Scorn", description: "Terror rollo Alien", price: 8, pictureUrl: "/assets/scorn-thumb.jpg" },
];

const getRevistas = (categoryId) => {
    return new Promise(resolve => {
        setTimeout(() => {
            let filteredRevistas = revistasData;
            if (categoryId) {
                filteredRevistas = revistasData.filter(revista => revista.categoryId === categoryId);
            }
            resolve(filteredRevistas);
        }, 2000); 
    });
};

export { getRevistas };