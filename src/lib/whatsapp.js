export const companyInfo = {
    phone: '+919876543210', // Replace with actual number
    displayPhone: '+91 9876543210',
    email: 'info@parisarlayout.com',
    address: 'Gadag, Karnataka, India',
    whatsapp: '+919876543210', // Format without spaces/symbols for API
    googleMaps: 'https://share.google/42ogu2mzGKD4hXgiC'
};

export const getWhatsAppLink = (message = '') => {
    const text = encodeURIComponent(message);
    return `https://wa.me/${companyInfo.whatsapp}?text=${text}`;
};

export const defaultMessages = {
    general: "Hi, I'm interested in Parisar Layout plots. Can you provide more details?",
    siteVisit: "Hello, I would like to book a site visit for Parisar Layout.",
    pricing: "Hi, please share the pricing details for available plots.",
    callBack: "Hi, please call me back regarding plot availability."
};
