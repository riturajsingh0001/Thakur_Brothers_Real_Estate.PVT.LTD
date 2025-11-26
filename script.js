// Data Store with More Properties
const data = {
    land: {
        title: 'Land & Plots',
        categories: ['Residential', 'Agricultural', 'Commercial', 'Industrial'],
        listings: [
            { img: 'https://images.unsplash.com/photo-1500382017468-9049fed747ef', title: '5 Acre Farm Land', loc: 'Sitapur Road, Lucknow', price: '₹2.5 Cr', cat: 'Agricultural', size: '5 Acres', beds: null, baths: null },
            { img: 'https://images.unsplash.com/photo-1629081523318-7d4323b6b72d', title: 'Corner Plot', loc: 'Gomti Nagar Ext.', price: '₹85 Lakh', cat: 'Residential', size: '2400 Sq.Ft', beds: null, baths: null },
            { img: 'https://images.unsplash.com/photo-1516156008625-3a9d60da9205', title: 'Industrial Belt', loc: 'Kanpur Road', price: '₹5 Cr', cat: 'Industrial', size: '10,000 Sq.Ft', beds: null, baths: null },
            { img: 'https://images.unsplash.com/photo-1627916560061-83c921359c58', title: 'Highway Commercial', loc: 'Faizabad Road', price: '₹3.2 Cr', cat: 'Commercial', size: '3500 Sq.Ft', beds: null, baths: null },
            { img: 'https://images.unsplash.com/photo-1605218427368-35b81a3dd716', title: 'Gated Society Plot', loc: 'Sushant Golf City', price: '₹1.1 Cr', cat: 'Residential', size: '3200 Sq.Ft', beds: null, baths: null },
            { img: 'https://images.unsplash.com/photo-1599809275671-b5942cabc7a2', title: 'Orchard Land', loc: 'Malihabad', price: '₹4 Cr', cat: 'Agricultural', size: '10 Acres', beds: null, baths: null },
        ]
    },
    apartments: {
        title: 'Luxury Apartments',
        categories: ['2 BHK', '3 BHK', 'Penthouse', 'Studio'],
        listings: [
            { img: 'https://images.unsplash.com/photo-1512918760532-3ed4659018b7', title: 'Skyline Penthouse', loc: 'Hazratganj', price: '₹4.5 Cr', cat: 'Penthouse', size: '4500 Sq.Ft', beds: 4, baths: 5 },
            { img: 'https://images.unsplash.com/photo-1522708323590-d24dbb6b0267', title: 'Modern 3BHK', loc: 'Indira Nagar', price: '₹95 Lakh', cat: '3 BHK', size: '1850 Sq.Ft', beds: 3, baths: 3 },
            { img: 'https://images.unsplash.com/photo-1502672260266-1c1ef2d93688', title: 'Cozy Studio', loc: 'Aliganj', price: '₹45 Lakh', cat: 'Studio', size: '650 Sq.Ft', beds: 1, baths: 1 },
            { img: 'https://images.unsplash.com/photo-1484154218962-a1c002085d2f', title: 'Garden Facing 2BHK', loc: 'Jankipuram', price: '₹65 Lakh', cat: '2 BHK', size: '1250 Sq.Ft', beds: 2, baths: 2 },
            { img: 'https://images.unsplash.com/photo-1493809842364-78817add7ffb', title: 'Luxury Duplex', loc: 'Gomti Nagar', price: '₹2.8 Cr', cat: '3 BHK', size: '3200 Sq.Ft', beds: 3, baths: 4 },
            { img: 'https://images.unsplash.com/photo-1501183638710-841dd1904471', title: 'High-Rise 3BHK', loc: 'Shaheed Path', price: '₹1.2 Cr', cat: '3 BHK', size: '2100 Sq.Ft', beds: 3, baths: 3 },
        ]
    },
    commercial: {
        title: 'Commercial Spaces',
        categories: ['Office', 'Retail', 'Warehouse', 'Co-working'],
        listings: [
            { img: 'https://images.unsplash.com/photo-1497366216548-37526070297c', title: 'Corporate Office', loc: 'Vibhuti Khand', price: '₹8.5 Cr', cat: 'Office', size: '5000 Sq.Ft', beds: null, baths: null },
            { img: 'https://images.unsplash.com/photo-1564594981759-4d924d67385a', title: 'High Street Retail', loc: 'Patrakarpuram', price: '₹3 Cr', cat: 'Retail', size: '1200 Sq.Ft', beds: null, baths: null },
            { img: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d', title: 'Logistics Warehouse', loc: 'Transport Nagar', price: '₹6 Cr', cat: 'Warehouse', size: '15000 Sq.Ft', beds: null, baths: null },
            { img: 'https://images.unsplash.com/photo-1524758631624-e2822e304c36', title: 'Start-up Hub', loc: 'Cyber Heights', price: '₹1.5 Cr', cat: 'Co-working', size: '2000 Sq.Ft', beds: null, baths: null },
            { img: 'https://images.unsplash.com/photo-1556761175-5973dc0f32e7', title: 'Mall Space', loc: 'Amar Shaheed Path', price: '₹4.2 Cr', cat: 'Retail', size: '2500 Sq.Ft', beds: null, baths: null },
            { img: 'https://images.unsplash.com/photo-1497215728101-856f4ea42174', title: 'Premium Office', loc: 'Summit Building', price: '₹2.2 Cr', cat: 'Office', size: '1800 Sq.Ft', beds: null, baths: null },
        ]
    }
};

// DOM Elements
const homeSection = document.getElementById('home-section');
const listingsTemplate = document.getElementById('listings-template');
const calcSection = document.getElementById('calculator-section');
const sellSection = document.getElementById('sell-property-section');
const contactSection = document.getElementById('contact-section');
const brokerSection = document.getElementById('broker-section');
const investorSection = document.getElementById('investor-section');

const sections = [homeSection, listingsTemplate, calcSection, sellSection, contactSection, brokerSection, investorSection];
const navLinks = document.querySelectorAll('.nav-link');

// Notification Function
function showNotification(msg) {
    const notif = document.getElementById('notification');
    const msgEl = document.getElementById('notification-msg');
    msgEl.textContent = msg;
    notif.classList.remove('translate-x-60', 'opacity-0');
    setTimeout(() => {
        notif.classList.add('translate-x-60', 'opacity-0');
    }, 3000);
}

// Form Handlers
window.handleFormSubmit = function(e, type) {
    e.preventDefault();
    const btn = e.target.querySelector('button');
    const originalText = btn.textContent;
    
    btn.textContent = 'Processing...';
    btn.disabled = true;
    btn.classList.add('opacity-75');

    setTimeout(() => {
        btn.textContent = originalText;
        btn.disabled = false;
        btn.classList.remove('opacity-75');
        e.target.reset();
        let successMsg = 'Message sent successfully!';
        if (type === 'broker') successMsg = 'Application submitted! We will review your profile.';
        if (type === 'investor') successMsg = 'We will send the portfolio to your email shortly.';
        showNotification(successMsg);
    }, 1500);
}

// Search Handler
document.getElementById('hero-search-form').addEventListener('submit', (e) => {
    e.preventDefault();
    const type = document.getElementById('search-type').value;
    if (type === 'all') {
        showSection('land'); // Default to land if all
        showNotification('Showing all available properties');
    } else {
        showSection(type);
        showNotification(`Filtered by ${type}`);
    }
});

function hideAllSections() {
    sections.forEach(sec => sec.classList.add('hidden'));
}

function renderListings(type, categoryFilter = 'All') {
    const config = data[type];
    const sectionTitle = document.getElementById('section-title');
    const filterContainer = document.getElementById('filter-buttons');
    const mobileFilter = document.getElementById('mobile-filter-select');
    const grid = document.getElementById('listings-grid');
    const breadcrumbCurrent = document.getElementById('breadcrumb-current');

    // Set Title & Breadcrumb
    sectionTitle.textContent = config.title;
    breadcrumbCurrent.textContent = config.title;

    // Render Filters (Desktop)
    let filterHTML = `<button onclick="renderListings('${type}', 'All')" class="px-5 py-2 rounded-lg text-sm font-semibold border border-transparent ${categoryFilter === 'All' ? 'bg-primary-600 text-white shadow-md' : 'text-gray-400 hover:text-white hover:bg-dark-800'} transition duration-300">All</button>`;
    config.categories.forEach(cat => {
        filterHTML += `<button onclick="renderListings('${type}', '${cat}')" class="px-5 py-2 rounded-lg text-sm font-semibold border border-transparent ${categoryFilter === cat ? 'bg-primary-600 text-white shadow-md' : 'text-gray-400 hover:text-white hover:bg-dark-800'} transition duration-300">${cat}</button>`;
    });
    filterContainer.innerHTML = filterHTML;

    // Render Filters (Mobile)
    let mobileFilterHTML = `<option value="All">All Categories</option>`;
    config.categories.forEach(cat => {
        mobileFilterHTML += `<option value="${cat}" ${categoryFilter === cat ? 'selected' : ''}>${cat}</option>`;
    });
    mobileFilter.innerHTML = mobileFilterHTML;
    mobileFilter.onchange = (e) => renderListings(type, e.target.value);

    // Filter Data
    const filteredListings = categoryFilter === 'All' 
        ? config.listings 
        : config.listings.filter(item => item.cat === categoryFilter);

    // Render Grid
    if (filteredListings.length === 0) {
        grid.innerHTML = `<div class="col-span-full text-center py-20 text-gray-400">No properties found in this category.</div>`;
        return;
    }

    let gridHTML = '';
    filteredListings.forEach(item => {
        const bedBathHtml = item.beds ? `
            <div class="flex items-center gap-4 text-xs text-gray-400 mt-4 pt-4 border-t border-dark-700">
                <span class="flex items-center gap-1"><svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"></path></svg> ${item.beds} Bed</span>
                <span class="flex items-center gap-1"><svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"></path></svg> ${item.baths} Bath</span>
            </div>
        ` : `<div class="mt-4 pt-4 border-t border-dark-700"></div>`;

        gridHTML += `
            <div class="bg-dark-900 rounded-2xl overflow-hidden shadow-lg group hover:shadow-primary-500/10 transition duration-300 border border-dark-800 flex flex-col h-full">
                <div class="relative h-64 overflow-hidden">
                    <img src="${item.img}?q=80&w=800&auto=format&fit=crop" class="w-full h-full object-cover transition duration-700 group-hover:scale-110" alt="${item.title}">
                    <div class="absolute top-4 left-4 bg-dark-900/90 text-primary-400 text-xs font-bold px-3 py-1.5 rounded-full backdrop-blur-sm uppercase tracking-wide border border-primary-500/20">${item.cat}</div>
                    <div class="absolute bottom-4 right-4 bg-primary-600 text-white font-bold text-sm px-3 py-1 rounded shadow-lg">${item.price}</div>
                </div>
                <div class="p-6 flex-1 flex flex-col">
                    <h3 class="text-xl font-bold text-white mb-2 group-hover:text-primary-400 transition line-clamp-1">${item.title}</h3>
                    <div class="flex items-center text-gray-400 text-sm mb-2">
                        <svg class="w-4 h-4 mr-1 text-primary-500 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
                        <span class="line-clamp-1">${item.loc}</span>
                    </div>
                    <span class="text-gray-300 text-sm font-medium bg-dark-800 px-2 py-1 rounded self-start border border-dark-700">${item.size}</span>
                    
                    <div class="mt-auto">
                        ${bedBathHtml}
                        <button onclick="showSection('contact')" class="w-full mt-4 bg-dark-800 hover:bg-primary-600 text-white text-sm font-bold py-3 rounded-lg transition duration-300 border border-dark-700 hover:border-primary-500">View Details</button>
                    </div>
                </div>
            </div>
        `;
    });
    grid.innerHTML = gridHTML;
}

// Main Navigation Function
window.showSection = function(sectionId) {
    hideAllSections();
    window.scrollTo({ top: 0, behavior: 'smooth' });
    
    // Handle Navigation Active State
    navLinks.forEach(link => {
        link.classList.remove('nav-active', 'text-white');
        link.classList.add('text-gray-300');
    });
    const activeLinks = document.querySelectorAll(`a[href="#${sectionId}"]`);
    activeLinks.forEach(link => {
        link.classList.add('nav-active', 'text-white');
        link.classList.remove('text-gray-300');
    });

    // Routing Logic
    if (sectionId === 'home') {
        homeSection.classList.remove('hidden');
    } else if (['land', 'apartments', 'commercial'].includes(sectionId)) {
        listingsTemplate.classList.remove('hidden');
        renderListings(sectionId);
    } else if (sectionId === 'calculator') {
        calcSection.classList.remove('hidden');
        calculateMortgage(); // Initial Calc
    } else if (sectionId === 'sell-property') {
        sellSection.classList.remove('hidden');
    } else if (sectionId === 'contact') {
        contactSection.classList.remove('hidden');
    } else if (sectionId === 'broker') {
        brokerSection.classList.remove('hidden');
    } else if (sectionId === 'investor') {
        investorSection.classList.remove('hidden');
    }
};

// Calculator Logic
window.calculateMortgage = function() {
    const amount = parseFloat(document.getElementById('calc-amount').value) || 0;
    const rate = parseFloat(document.getElementById('calc-rate').value) || 0;
    const years = parseFloat(document.getElementById('calc-years').value) || 0;

    document.getElementById('amount-display').textContent = "₹" + amount.toLocaleString('en-IN');
    document.getElementById('rate-display').textContent = rate + "%";
    document.getElementById('years-display').textContent = years + " Years";

    const principal = amount;
    const interest = rate / 100 / 12;
    const payments = years * 12;

    const x = Math.pow(1 + interest, payments);
    const monthly = (principal * x * interest) / (x - 1);

    if (isFinite(monthly)) {
        const totalPayable = (monthly * payments).toFixed(0);
        const totalInterest = (monthly * payments - principal).toFixed(0);
        
        document.getElementById('emi-result').textContent = "₹" + Math.floor(monthly).toLocaleString('en-IN');
        document.getElementById('principal-display').textContent = "₹" + principal.toLocaleString('en-IN');
        document.getElementById('total-payable').textContent = "₹" + parseInt(totalPayable).toLocaleString('en-IN');
        document.getElementById('total-interest').textContent = "₹" + parseInt(totalInterest).toLocaleString('en-IN');
    }
};

// Event Listeners
document.getElementById('mobile-menu-button').addEventListener('click', () => {
    const nav = document.getElementById('main-nav');
    nav.classList.toggle('hidden');
    nav.classList.toggle('flex');
});

['calc-amount', 'calc-rate', 'calc-years'].forEach(id => {
    document.getElementById(id).addEventListener('input', calculateMortgage);
});

// Counter Animation
const statsSection = document.getElementById('stats-section');
const counterNums = document.querySelectorAll('.counter-num');
let countersAnimated = false;

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting && !countersAnimated) {
            counterNums.forEach(num => {
                const target = parseInt(num.dataset.target);
                let count = 0;
                const updateCount = () => {
                    const increment = target / 40;
                    if(count < target) {
                        count += increment;
                        num.innerText = Math.ceil(count) + "+";
                        setTimeout(updateCount, 40);
                    } else {
                        num.innerText = target + "+";
                    }
                };
                updateCount();
            });
            countersAnimated = true;
        }
    });
}, { threshold: 0.5 });

if(statsSection) observer.observe(statsSection);

// Initial Load
showSection('home');