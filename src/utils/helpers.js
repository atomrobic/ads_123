import React from 'react';      


const helpers = {
  formatDate: (date) => new Date(date).toLocaleDateString(),
  truncate: (str, length) => str.length > length ? str.substring(0, length) + '...' : str,
  scrollToSection: (id) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: 'smooth' });
  },
  getAnimationDelay: (index) => index * 0.1
};
export default helpers;