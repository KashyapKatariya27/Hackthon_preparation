// Sample rental listings — replace with your real data or fetch from a backend later
const houses = [
  { city: "Ahmedabad", title: "2BHK Near Riverfront", price: "₹12,000/mo" },
  { city: "Ahmedabad", title: "1BHK Compact Flat", price: "₹7,500/mo" },
  { city: "Gandhinagar", title: "3BHK Family Home", price: "₹18,000/mo" },
  { city: "Kalol", title: "2BHK with Garden", price: "₹9,000/mo" },
  { city: "Surat", title: "1BHK Studio", price: "₹8,200/mo" },
  { city: "Vadodara", title: "3BHK Spacious House", price: "₹15,500/mo" },
];

const grid = document.getElementById("listingGrid");
const noResults = document.getElementById("noResults");
const searchBox = document.getElementById("searchBox");

function renderHouses(list) {
  grid.innerHTML = "";
  if (list.length === 0) {
    noResults.style.display = "block";
    return;
  }
  noResults.style.display = "none";
  list.forEach(h => {
    const card = document.createElement("div");
    card.className = "card";
    card.innerHTML = `
      <h3>${h.title}</h3>
      <p>${h.city}</p>
      <p class="price">${h.price}</p>
    `;
    grid.appendChild(card);
  });
}

// Initial render
renderHouses(houses);

// Live search — filters as you type, no reload needed
searchBox.addEventListener("input", () => {
  const query = searchBox.value.toLowerCase().trim();
  const filtered = houses.filter(h =>
    h.city.toLowerCase().includes(query) || h.title.toLowerCase().includes(query)
  );
  renderHouses(filtered);
});

// Mobile hamburger menu toggle
const hamburger = document.getElementById("hamburger");
const navLinks = document.getElementById("navLinks");
hamburger.addEventListener("click", () => {
  navLinks.classList.toggle("active");
});